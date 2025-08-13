"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, type File, X, Download, Eye } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Progress } from "@radix-ui/react-progress"
import { Badge } from "../ui/badge"

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  url: string
  uploadProgress: number
  uploaded: boolean
}

interface FileUploadProps {
  accept?: Record<string, string[]>
  maxSize?: number
  maxFiles?: number
  onFilesUploaded?: (files: UploadedFile[]) => void
}

export function FileUpload({
  accept = {
    "application/pdf": [".pdf"],
    "application/msword": [".doc"],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    "image/*": [".png", ".jpg", ".jpeg", ".gif"],
  },
  maxSize = 10 * 1024 * 1024, // 10MB
  maxFiles = 5,
  onFilesUploaded,
}: FileUploadProps) {
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [uploading, setUploading] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles: UploadedFile[] = acceptedFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file),
      uploadProgress: 0,
      uploaded: false,
    }))

    setFiles((prev) => [...prev, ...newFiles])

    // Simulate upload process
    newFiles.forEach((file) => {
      simulateUpload(file.id)
    })
  }, [])

  const simulateUpload = (fileId: string) => {
    setUploading(true)
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 30
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setFiles((prev) => prev.map((f) => (f.id === fileId ? { ...f, uploadProgress: 100, uploaded: true } : f)))
        setUploading(false)
      } else {
        setFiles((prev) => prev.map((f) => (f.id === fileId ? { ...f, uploadProgress: progress } : f)))
      }
    }, 200)
  }

  const removeFile = (fileId: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return "🖼️"
    if (type.includes("pdf")) return "📄"
    if (type.includes("word")) return "📝"
    return "📎"
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxSize,
    maxFiles: maxFiles - files.length,
  })

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-6">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive
                ? "border-accent bg-accent/5"
                : "border-muted-foreground/25 hover:border-accent hover:bg-accent/5"
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            {isDragActive ? (
              <p className="text-lg font-medium">Drop the files here...</p>
            ) : (
              <div>
                <p className="text-lg font-medium mb-2">Drag & drop files here, or click to select</p>
                <p className="text-sm text-muted-foreground">
                  Supports PDF, DOC, DOCX, and images up to {formatFileSize(maxSize)}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {files.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Uploaded Files</h3>
            <div className="space-y-3">
              {files.map((file) => (
                <div key={file.id} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                  <div className="text-2xl">{getFileIcon(file.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-sm">{file.name}</p>
                      <div className="flex items-center gap-2">
                        {file.uploaded && (
                          <>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Download className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => removeFile(file.id)}>
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                      {file.uploaded ? (
                        <Badge variant="secondary" className="text-xs">
                          Uploaded
                        </Badge>
                      ) : (
                        <div className="flex-1">
                          <Progress value={file.uploadProgress} className="h-1" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
