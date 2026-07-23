"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ role: string; content: string; id: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMsg = { role: "user", content: input, id: crypto.randomUUID() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput("")
    setIsLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!res.ok || !res.body) {
        setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I'm having trouble right now. Please call your nearest store directly.", id: crypto.randomUUID() }])
        setIsLoading(false)
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let done = false

      const botMsgId = crypto.randomUUID()
      setMessages((prev) => [...prev, { role: "assistant", content: "", id: botMsgId }])

      while (!done) {
        const { value, done: doneReading } = await reader.read()
        done = doneReading
        const text = decoder.decode(value, { stream: true })
        setMessages((prev) =>
          prev.map((m) => (m.id === botMsgId ? { ...m, content: m.content + text } : m))
        )
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, something went wrong. Please call your nearest Pizza Twice location.", id: crypto.randomUUID() }])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="fixed bottom-16 right-4 z-50 lg:bottom-6">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full bg-[#E63946] px-5 py-3 text-sm font-bold text-white shadow-xl hover:bg-[#E63946]/90 transition-colors"
        >
          <MessageCircle className="size-5" />
          Il Forno
        </button>
      ) : (
        <div className="flex flex-col w-[340px] sm:w-[380px] h-[480px] bg-background border border-border shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#E63946] text-white">
            <div className="flex items-center gap-2">
              <MessageCircle className="size-4" />
              <div>
                <p className="text-sm font-bold">Il Forno</p>
                <p className="text-[0.65rem] opacity-80">Locations, menu, hours & more</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 rounded hover:bg-white/20 transition-colors">
              <X className="size-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-center text-sm text-muted-foreground mt-8 space-y-3">
                <p className="font-medium text-foreground">Hey! 👋🍕</p>
                <p>I can help you find a location, check hours, or tell you about our menu.</p>
                <p className="text-xs">Try: "Are you open in Oromocto right now?" or "What sizes do you have?"</p>
              </div>
            )}

            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                    m.role === "user"
                      ? "bg-[#E63946] text-white rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.content || <span className="opacity-50">...</span>}
                </div>
              </div>
            ))}

            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="rounded-2xl px-4 py-2 bg-muted text-muted-foreground rounded-bl-sm flex items-center gap-2">
                  <Loader2 className="size-3 animate-spin" />
                  <span className="text-xs">Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-border p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#E63946]/40"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="rounded-lg bg-[#E63946] p-2 text-white hover:bg-[#E63946]/90 disabled:opacity-50 transition-colors"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
