"use client"

import { useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Download, Share2, Copy, Check } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Badge } from "../ui/badge"

interface QRCodeGeneratorProps {
  ticketId?: string
  attendeeName?: string
  eventName?: string
  eventDate?: string
}

export function QRCodeGenerator({
  ticketId = "FIN2024-VIP-001",
  attendeeName = "John Doe",
  eventName = "Reimagine Banking with Finastra",
  eventDate = "March 15-16, 2024",
}: QRCodeGeneratorProps) {
  const [copied, setCopied] = useState(false)

  // Generate QR code data
  const qrData = JSON.stringify({
    ticketId,
    attendeeName,
    eventName,
    eventDate,
    timestamp: new Date().toISOString(),
    type: "conference-ticket",
  })

  const downloadQR = () => {
    const svg = document.getElementById("qr-code")
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg)
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      const img = new Image()

      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx?.drawImage(img, 0, 0)

        const pngFile = canvas.toDataURL("image/png")
        const downloadLink = document.createElement("a")
        downloadLink.download = `${ticketId}-qr-code.png`
        downloadLink.href = pngFile
        downloadLink.click()
      }

      img.src = "data:image/svg+xml;base64," + btoa(svgData)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(qrData)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const shareQR = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Conference Ticket QR Code",
          text: `QR Code for ${eventName}`,
          url: window.location.href,
        })
      } catch (err) {
        console.error("Error sharing:", err)
      }
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Conference Ticket QR Code
            <Badge variant="secondary">VIP</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* QR Code Display */}
            <div className="flex-1 flex flex-col items-center space-y-4">
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <QRCodeSVG
                  id="qr-code"
                  value={qrData}
                  size={200}
                  level="H"
                  includeMargin={true}
                  fgColor="#1f2937"
                  bgColor="#ffffff"
                />
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={downloadQR}>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                  {copied ? "Copied!" : "Copy Data"}
                </Button>
                <Button variant="outline" size="sm" onClick={shareQR}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Ticket Information */}
            <div className="flex-1 space-y-4">
              <div>
                <Label htmlFor="ticket-id">Ticket ID</Label>
                <Input id="ticket-id" value={ticketId} readOnly />
              </div>

              <div>
                <Label htmlFor="attendee-name">Attendee Name</Label>
                <Input id="attendee-name" value={attendeeName} readOnly />
              </div>

              <div>
                <Label htmlFor="event-name">Event Name</Label>
                <Input id="event-name" value={eventName} readOnly />
              </div>

              <div>
                <Label htmlFor="event-date">Event Date</Label>
                <Input id="event-date" value={eventDate} readOnly />
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Instructions</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Present this QR code at the venue entrance</li>
                  <li>• Keep a screenshot on your mobile device</li>
                  <li>• Print a backup copy for convenience</li>
                  <li>• Contact support if you have scanning issues</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Networking QR Code */}
      <Card>
        <CardHeader>
          <CardTitle>Networking QR Code</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col items-center space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm border">
                <QRCodeSVG
                  value={JSON.stringify({
                    type: "networking",
                    name: attendeeName,
                    title: "Senior Banking Executive",
                    company: "Global Financial Services",
                    email: "john.doe@globalbank.com",
                    linkedin: "linkedin.com/in/johndoe",
                  })}
                  size={150}
                  level="H"
                  includeMargin={true}
                  fgColor="#6366f1"
                  bgColor="#ffffff"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Share this QR code to exchange contact information with other attendees
              </p>
            </div>

            <div className="flex-1">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Networking Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Instant contact exchange</li>
                  <li>• LinkedIn connection requests</li>
                  <li>• Schedule follow-up meetings</li>
                  <li>• Add to conference connections</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
