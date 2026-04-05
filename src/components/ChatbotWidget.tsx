"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const chatOptions = [
  "Performans Sorunu",
  "Stage 1 Remap",
  "Yakıt Tasarrufu",
  "Araba Önerisi",
  "Arabam Arıza Verdi",
  "Diğer",
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // Desktop'ta ilk yüklemede otomatik aç (hydration-safe + lint-safe)
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      }
    });
    return () => cancelAnimationFrame(raf);
  }, []);
  const [messages, setMessages] = useState<
    { from: "bot" | "user"; text: string }[]
  >([
    {
      from: "bot",
      text: "Merhaba! Ben Sergen, sizin yapay zeka destekli araba ustanızım.\n\nECU tuning, mekanik servis veya araba alma konusunda size doğru yönlendirmeyi yapabilmem için lütfen hangi konuda soru soracağınızı seçin.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleOptionClick = (option: string) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: option },
      {
        from: "bot",
        text: `"${option}" konusunda size yardımcı olabilirim. Lütfen aracınızın marka, model ve yıl bilgilerini paylaşır mısınız?`,
      },
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text: input },
      {
        from: "bot",
        text: "Teşekkürler! Bilgileriniz alındı. En kısa sürede size dönüş yapacağız. WhatsApp üzerinden de bize ulaşabilirsiniz: +90 543 328 8793",
      },
    ]);
    setInput("");
  };

  return (
    <>
      {/* FAB Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,217,0,0.4)] hover:shadow-[0_0_30px_rgba(255,217,0,0.6)] transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X size={28} className="text-black" />
        ) : (
          <MessageCircle size={28} className="text-black" />
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[460px] h-[600px] bg-[rgba(15,14,10,0.9)] backdrop-blur-xl border-2 border-dark-border rounded-[27px] shadow-[0_0_10.6px_rgba(255,217,0,0.5)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[rgba(26,25,14,0.9)] border-b border-dark-border rounded-t-[27px] p-4 flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/images/chatbot-avatar-51216b.png"
                  alt="Sergen AI"
                  width={52}
                  height={56}
                  className="rounded-full border-2 border-dark-border"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green rounded-full border-2 border-[#1a190e]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/rs-logo.svg"
                    alt="RS"
                    width={49}
                    height={14}
                    className="h-3.5 w-auto"
                  />
                  <span className="font-body font-extrabold text-white text-xs tracking-[0.08em]">
                    GARAGE
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="font-body font-bold text-[#F0F0F0] text-sm tracking-tight">
                    Sergen -
                  </span>
                  <div className="w-2 h-2 bg-green rounded-full" />
                  <span className="font-body font-medium text-green text-xs">
                    Çevrimiçi
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-auto text-gray hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm font-body font-medium leading-relaxed ${
                      msg.from === "bot"
                        ? "bg-[rgba(25,26,26,0.9)] border border-dark-border text-white rounded-tl-none"
                        : "bg-gold/20 border border-gold/30 text-white rounded-tr-none"
                    }`}
                  >
                    {msg.text.split("\n").map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < msg.text.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {chatOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className="bg-[radial-gradient(circle,rgba(39,34,8,1)_0%,rgba(80,69,15,1)_100%)] border border-[#E9C601]/60 rounded-full px-4 py-2 font-body font-semibold text-gold text-xs hover:bg-gold/20 transition-all duration-300"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-dark-border">
              <div className="flex items-center gap-2 bg-[rgba(25,26,26,0.9)] border border-[#5D5D5D]/50 rounded-2xl px-4 py-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Sorunu Yaz"
                  className="flex-1 bg-transparent text-gray text-sm font-body font-medium focus:outline-none placeholder:text-gray"
                />
                <button
                  onClick={handleSend}
                  className="text-gray hover:text-gold transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
              <p className="text-white/80 text-[10px] font-body text-center mt-2 tracking-tight">
                Powered by Preditech Hybrid Data Fusion
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
