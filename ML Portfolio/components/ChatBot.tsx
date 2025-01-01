'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Send, Volume2 } from 'lucide-react'
import Image from 'next/image'
import VoiceInput from './VoiceInput'
import img from './Image1.jpeg'

export default function ChatBot() {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string; id: string }[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isSpeaking, setIsSpeaking] = useState(false)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    setIsLoading(true)
    const userMessage = { role: 'user' as const, content: input, id: Date.now().toString() }
    setMessages((prev) => [...prev, userMessage])
    setInput('')

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      if (data.error) {
        throw new Error(data.error)
      }

      const botMessage = { role: 'bot' as const, content: data.response, id: Date.now().toString() }
      setMessages((prev) => [...prev, botMessage])
      speakText(data.response)
    } catch (error) {
      console.error('Error:', error)
      setMessages((prev) => [...prev, { role: 'bot', content: `Sorry, I encountered an error: ${error.message}`, id: Date.now().toString() }])
    } finally {
      setIsLoading(false)
    }
  }

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel() // Stop any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)
      utterance.onerror = () => setIsSpeaking(false)
      window.speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full relative">
      <div className="w-full max-w-4xl px-4">
        {/* Profile Section */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="relative w-32 h-32 mb-4">
            <Image
              src="Image1.jpeg"
              alt="Tarun Chintada"
              fill
              className="rounded-full object-cover border-4 border-purple-500 shadow-lg"
            />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-purple-400"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <h2 className="text-4xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Chat with Flessy</h2>
          <p className="text-purple-300">Tarun's AI Assistant</p>
        </motion.div>

        {/* Chat Messages */}
        <div className="space-y-4 mb-6 max-h-[50vh] overflow-y-auto custom-scrollbar">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`
                    relative max-w-sm p-4 rounded-2xl
                    ${msg.role === 'user' 
                      ? 'bg-gradient-to-r from-purple-600 to-purple-800' 
                      : 'bg-gradient-to-r from-gray-800 to-gray-900'
                    }
                  `}
                >
                  {msg.role === 'bot' && (
                    <motion.div
                      className="absolute -left-2 -top-2"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Bot className="w-4 h-4 text-purple-400" />
                    </motion.div>
                  )}
                  <p className="text-white">{msg.content}</p>
                  {/* Sound button for each message */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => speakText(msg.content)}
                    className="absolute bottom-1 right-1 p-1 bg-purple-500 rounded-full opacity-50 hover:opacity-100 transition-opacity"
                  >
                    <Volume2 className="w-3 h-3 text-white" />
                  </motion.button>
                  {/* Particle Effects */}
                  {msg.role === 'bot' && (
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: [
                          'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
                          'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
                          'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <motion.form
          onSubmit={handleSubmit}
          className="relative w-full max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about Tarun..."
              className="w-full px-6 py-4 bg-gray-900/50 backdrop-blur-sm rounded-full border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 pr-24"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              <VoiceInput
                onResult={setInput}
                isListening={isListening}
                setIsListening={setIsListening}
              />
              <button
                type="submit"
                disabled={isLoading}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-purple-600 rounded-full"
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Bot className="w-5 h-5 text-white" />
                    </motion.div>
                  ) : (
                    <Send className="w-5 h-5 text-white" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </motion.form>
      </div>
      {isSpeaking && (
        <motion.div
          className="fixed bottom-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          Flessy is speaking...
        </motion.div>
      )}
    </div>
  )
}

