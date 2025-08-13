"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Send, Users, Minimize2, Maximize2, X } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

interface Message {
  id: string
  user: string
  avatar?: string
  message: string
  timestamp: Date
  type: "message" | "system" | "announcement"
}

interface LiveChatProps {
  sessionId?: string
  sessionName?: string
}

export function LiveChat({
  sessionId = "ai-risk-management",
  sessionName = "AI-Powered Risk Management Solutions",
}: LiveChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      user: "System",
      message: "Welcome to the live chat for AI-Powered Risk Management Solutions!",
      timestamp: new Date(Date.now() - 10 * 60 * 1000),
      type: "system",
    },
    {
      id: "2",
      user: "Sarah Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      message: "Great presentation so far! The AI models look very promising.",
      timestamp: new Date(Date.now() - 8 * 60 * 1000),
      type: "message",
    },
    {
      id: "3",
      user: "Michael Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      message: "How does the model handle regulatory compliance requirements?",
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      type: "message",
    },
    {
      id: "4",
      user: "Dr. Emily Rodriguez",
      avatar: "/placeholder.svg?height=32&width=32",
      message: "The accuracy metrics are impressive. What's the training dataset size?",
      timestamp: new Date(Date.now() - 3 * 60 * 1000),
      type: "message",
    },
  ])

  const [newMessage, setNewMessage] = useState("")
  const [isMinimized, setIsMinimized] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [onlineUsers] = useState(47)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Simulate real-time messages
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        const users = ["Alex Thompson", "Lisa Wang", "David Kim", "Emma Wilson"]
        const sampleMessages = [
          "This is exactly what we need for our risk assessment!",
          "Can you share the implementation timeline?",
          "How does this integrate with existing systems?",
          "Excellent work on the fraud detection algorithms!",
          "What about false positive rates?",
          "This could revolutionize our compliance processes.",
        ]

        const newMsg: Message = {
          id: Date.now().toString(),
          user: users[Math.floor(Math.random() * users.length)],
          avatar: `/placeholder.svg?height=32&width=32&query=professional person ${Math.floor(Math.random() * 10)}`,
          message: sampleMessages[Math.floor(Math.random() * sampleMessages.length)],
          timestamp: new Date(),
          type: "message",
        }

        setMessages((prev) => [...prev, newMsg])
      }
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        user: "You",
        avatar: "/placeholder.svg?height=32&width=32",
        message: newMessage,
        timestamp: new Date(),
        type: "message",
      }

      setMessages((prev) => [...prev, message])
      setNewMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  if (!isVisible) return null

  return (
    <Card className={`fixed bottom-4 right-4 w-80 z-50 shadow-lg ${isMinimized ? "h-14" : "h-96"}`}>
      <CardHeader className="p-3 cursor-pointer" onClick={() => setIsMinimized(!isMinimized)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-sm">Live Chat</CardTitle>
            <Badge variant="secondary" className="text-xs">
              <Users className="w-3 h-3 mr-1" />
              {onlineUsers}
            </Badge>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
              onClick={(e) => {
                e.stopPropagation()
                setIsVisible(false)
              }}
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </div>
        {!isMinimized && <p className="text-xs text-muted-foreground truncate">{sessionName}</p>}
      </CardHeader>

      {!isMinimized && (
        <CardContent className="p-0 flex flex-col h-80">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((message) => (
              <div key={message.id} className="space-y-1">
                {message.type === "system" ? (
                  <div className="text-center">
                    <Badge variant="outline" className="text-xs">
                      {message.message}
                    </Badge>
                  </div>
                ) : (
                  <div className="flex items-start gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={message.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="text-xs">
                        {message.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium">{message.user}</span>
                        <span className="text-xs text-muted-foreground">{formatTime(message.timestamp)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{message.message}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="text-sm"
              />
              <Button size="sm" onClick={sendMessage}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
