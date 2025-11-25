"use client";
import React, { useState } from "react";
import Card from "./UI/Card";
import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from "@/constants";
import { Upload, File, X, CheckCircle, AlertCircle } from "lucide-react";

function RagUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const validateFile = (file: File) => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setError("Unsupported file type. Please upload a PDF or Word document.");
      return false;
    }
    if (file.size > MAX_FILE_SIZE) {
      setError("File size exceeds the maximum limit of 10MB.");
      return false;
    }
    return true;
  };
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && validateFile(selectedFile)) {
      setFile(selectedFile);
      setError(null);
    }
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile && validateFile(droppedFile)) {
      setFile(droppedFile);
      setError(null);
    }
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const removeFile = () => {
    setFile(null);
    setError(null);
    setUploading(false);
    setSuccess(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const uploadFile = async () => {
    if (!file) return;
    try {
      if (error) setError(null);
      const formData = new FormData();
      formData.append("rag-file", file);
      const response = await fetch("http://localhost:3100/upload", {
        method: "POST",
        body: formData,
        headers: {
          // Do not set Content-Type for FormData; let browser set it
          // Add any custom headers if needed
        },
        // Add credentials if your backend requires authentication
        // credentials: "include",
      });
      if (response.ok) {
        setSuccess(true);
        return;
      }
    } catch (error) {
      setError("Failed to upload file. Please try again." + error);
      return;
    } finally {
      setUploading(false);
    }
  };

  const formateFileSize = (size: number) => {
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    if (size === 0) return "0 Byte";
    const i = Math.floor(Math.log(size) / Math.log(k));
    return Math.round((size / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  return (
    <Card className=" max-w-3xl mx-auto p-4 ">
      <h1 className=" text-2xl font-bold mb-4">RAG Upload Documents</h1>
      <div
        className="border-2 border-dashed rounded-lg w-full p-12 "
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => !file && fileInputRef.current?.click()}
      >
        <input
          type="file"
          accept=".pdf, .doc, .docx"
          ref={fileInputRef}
          onChange={handleFileSelect}
          className=" hidden"
        />
        {!file ? (
          <div>
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-lg font-medium text-gray-700 mb-2">
              Drop your file here or click to browse
            </p>
            <p className="text-sm text-gray-500">
              Supports PDF, DOC, DOCX (Max 10MB)
            </p>
          </div>
        ) : (
          <div className="flex justify-between items-center bg-gray-700 rounded-lg p-4">
            <div className=" flex items-center">
              <File className=" h-6 w-6 text-gray-400 mr-2" />
              <div className=" flex flex-col text-start">
                <p>{file.name}</p>
                <p>{formateFileSize(file.size)}</p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeFile();
              }}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
      {error && (
        <div className=" flex items-center space-x-2 text-red-500 mt-4  border border-red-500 rounded-lg w-full p-2 opacity-70">
          <AlertCircle className=" h-5 w-5 mr-2" />
          <p>{error}</p>
        </div>
      )}
      {success && (
        <div className=" flex items-center space-x-2 text-green-500 mt-4  border border-green-500 opacity-70 rounded-lg w-full p-2">
          <CheckCircle className=" h-5 w-5 mr-2" />
          <p>File uploaded successfully!</p>
        </div>
      )}
      {file && (
        <button
          className=" mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {
            setUploading(true);
            uploadFile();
          }}
          disabled={uploading || success}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      )}
    </Card>
  );
}

export default RagUploader;
