'use client'

import React, { useState, useEffect } from 'react'
import { Mic } from 'lucide-react'
import { motion } from 'framer-motion'

interface VoiceInputProps {
  onResult: (result: string) => void
  isListening: boolean
  setIsListening: (isListening: boolean) => void
}

const VoiceInput: React.FC<VoiceInputProps> = ({ onResult, isListening, setIsListening }) => {
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognitionInstance = new SpeechRecognition()
      recognitionInstance.continuous = false
      recognitionInstance.interimResults = false

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        onResult(transcript)
        setIsListening(false)
      }

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error', event.error)
        setError(`Speech recognition error: ${event.error}`)
        setIsListening(false)
      }

      setRecognition(recognitionInstance)
    } else {
      setError('Speech recognition is not supported in this browser.')
    }
  }, [onResult, setIsListening])

  const toggleListening = async () => {
    if (isListening) {
      recognition?.stop()
      setIsListening(false)
    } else {
      setError(null)
      try {
        // Check if the browser supports the MediaDevices API
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          // Request microphone permission
          await navigator.mediaDevices.getUserMedia({ audio: true })
          recognition?.start()
          setIsListening(true)
        } else {
          throw new Error('MediaDevices API is not supported in this browser.')
        }
      } catch (err) {
        console.error('Error accessing microphone:', err)
        setError('Microphone access denied. Please allow microphone access and try again.')
      }
    }
  }

  return (
    <div className="relative">
      <motion.button
        onClick={toggleListening}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isListening ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.5, repeat: isListening ? Infinity : 0 }}
      >
        <div className={`p-2 rounded-full ${isListening ? 'bg-red-600' : 'bg-purple-600'}`}>
          <Mic className="w-5 h-5 text-white" />
        </div>
        {isListening && (
          <motion.div
            className="absolute -inset-1 bg-red-500 rounded-full z-[-1] opacity-25"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </motion.button>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-red-500 text-white text-xs rounded whitespace-nowrap"
        >
          {error}
        </motion.div>
      )}
    </div>
  )
}

export default VoiceInput

