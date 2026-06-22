"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Instagram,
  Facebook,
  Music2,
  MessageCircle,
  Mail,
  Share2,
  ChevronRight,
  Phone,
} from "lucide-react";
import { useCallback } from "react";

const socialLinks = [
  {
    name: "WhatsApp",
    url: "https://wa.me/593997158532",
    icon: MessageCircle,
    color: "from-[#25D366] to-[#128C7E]",
    hoverColor: "hover:shadow-[#25D366]/30",
    description: "Escríbeme directamente",
  },
  {
    name: "Sitio Web",
    url: "https://dimali.jimbra.net",
    icon: Globe,
    color: "from-[#4A5D23] to-[#6B8E23]",
    hoverColor: "hover:shadow-[#6B8E23]/30",
    description: "Ver colección completa",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/dimali.ec",
    icon: Instagram,
    color: "from-[#f09433] via-[#e6683c] to-[#bc1888]",
    hoverColor: "hover:shadow-pink-500/30",
    description: "@dimali.ec",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@dimalijewelry",
    icon: Music2,
    color: "from-[#00f2ea] to-[#ff0050]",
    hoverColor: "hover:shadow-[#00f2ea]/30",
    description: "@dimalijewelry",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61554358637246",
    icon: Facebook,
    color: "from-[#1877f2] to-[#0d5bbd]",
    hoverColor: "hover:shadow-blue-500/30",
    description: "Di Mali",
  },
  {
    name: "Email",
    url: "mailto:dimalijewelry@gmail.com",
    icon: Mail,
    color: "from-[#B48D3C] to-[#D4A843]",
    hoverColor: "hover:shadow-[#B48D3C]/30",
    description: "dimalijewelry@gmail.com",
  },
  {
    name: "Llamar",
    url: "tel:+593997158532",
    icon: Phone,
    color: "from-[#40918C] to-[#2D7A75]",
    hoverColor: "hover:shadow-[#40918C]/30",
    description: "099 715 8532",
  },
];

const socialIcons = [
  { icon: MessageCircle, url: "https://wa.me/593997158532", label: "WhatsApp", bg: "bg-[#25D366]" },
  { icon: Instagram, url: "https://www.instagram.com/dimali.ec", label: "Instagram", bg: "bg-[#E1306C]" },
  { icon: Music2, url: "https://www.tiktok.com/@dimalijewelry", label: "TikTok", bg: "bg-[#010101]" },
  { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61554358637246", label: "Facebook", bg: "bg-[#1877F2]" },
  { icon: Mail, url: "mailto:dimalijewelry@gmail.com", label: "Email", bg: "bg-[#B48D3C]" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Home() {
  const handleLinkClick = useCallback((url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#2d3a2e] via-[#3a4a35] to-[#2d3a2e]">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-8 sm:py-12 max-w-lg mx-auto w-full">
        <motion.div
          className="flex flex-col items-center mb-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Profile Photo */}
          <motion.div variants={textVariants} className="mb-4">
            <div className="w-[110px] h-[110px] rounded-full overflow-hidden shadow-xl shadow-black/40 ring-3 ring-[#B48D3C]/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mario-pacheco.png"
                alt="Mario Pacheco"
                width={110}
                height={110}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={textVariants}
            className="text-3xl sm:text-4xl font-bold text-[#f0ebe3] tracking-tight"
          >
            Mario Pacheco
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={textVariants}
            className="text-[#40918C] font-semibold text-sm sm:text-base mt-1 tracking-wide uppercase"
          >
            Di Mali — Manos Mágicas
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={textVariants}
            className="text-[#c4bfa8] text-center text-sm sm:text-base mt-3 max-w-xs leading-relaxed"
          >
            El verdadero lujo no se fabrica, se teje. Sombreros de paja
            toquilla 100% artesanales. Patrimonio Cultural de la Humanidad.
          </motion.p>
        </motion.div>

        {/* Link Buttons */}
        <motion.div
          className="w-full space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((link) => (
            <motion.button
              key={link.name}
              variants={itemVariants}
              onClick={() => handleLinkClick(link.url)}
              className={`group relative w-full flex items-center gap-4 px-5 py-4 rounded-2xl border border-[#B48D3C]/25 bg-[#B48D3C]/20 text-left transition-all duration-200 hover:bg-[#B48D3C]/30 hover:border-[#B48D3C]/40 hover:shadow-lg cursor-pointer active:scale-[0.98]`}
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-200`}
              />
              <div
                className={`relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${link.color} shrink-0 shadow-lg`}
              >
                <link.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#f0ebe3] font-semibold text-sm sm:text-base">
                  {link.name}
                </h3>
                <p className="text-[#c4bfa8]/80 text-xs truncate">
                  {link.description}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#c4bfa8]/60 group-hover:text-[#f0ebe3] group-hover:translate-x-1 transition-all duration-200" />
            </motion.button>
          ))}
        </motion.div>

        {/* Social Icons Row */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          {socialIcons.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-10 h-10 rounded-full ${social.bg} text-white shadow-md transition-all duration-200 hover:scale-110 hover:shadow-lg active:scale-90`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.06, duration: 0.3 }}
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </motion.div>

        {/* Share button */}
        <motion.button
          className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#B48D3C]/15 text-[#c4bfa8]/70 text-xs hover:text-[#B48D3C] hover:bg-white/10 hover:border-[#B48D3C]/30 transition-all duration-200 cursor-pointer active:scale-95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: "Mario Pacheco | Di Mali — Manos Mágicas",
                text: "El verdadero lujo no se fabrica, se teje. Sombreros de paja toquilla 100% artesanales.",
                url: "https://mpacheco.jimbra.net",
              });
            } else {
              navigator.clipboard.writeText("https://mpacheco.jimbra.net");
            }
          }}
        >
          <Share2 className="w-3.5 h-3.5" />
          Compartir perfil
        </motion.button>
      </main>

      {/* Footer */}
      <footer className="mt-auto pb-6 pt-8 text-center">
        <motion.a
          href="https://dimali.jimbra.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c4bfa8]/50 text-xs flex items-center justify-center gap-1 hover:text-[#B48D3C] transition-colors duration-200 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Di Mali —{" "}
          <span className="text-[#B48D3C] font-semibold">Manos Mágicas</span>
        </motion.a>
        <motion.p
          className="text-[#c4bfa8]/30 text-[10px] mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          © {new Date().getFullYear()} Di Mali
        </motion.p>
      </footer>
    </div>
  );
}
