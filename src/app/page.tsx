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
    color: "bg-[#25D366]",
    description: "Escríbeme directamente",
  },
  {
    name: "Sitio Web",
    url: "https://dimali.jimbra.net",
    icon: Globe,
    color: "bg-[#4A5D23]",
    description: "Ver colección completa",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/dimali.ec",
    icon: Instagram,
    color: "bg-[#E1306C]",
    description: "@dimali.ec",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@dimalijewelry",
    icon: Music2,
    color: "bg-[#010101]",
    description: "@dimalijewelry",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61554358637246",
    icon: Facebook,
    color: "bg-[#1877F2]",
    description: "Di Mali",
  },
  {
    name: "Email",
    url: "mailto:dimalijewelry@gmail.com",
    icon: Mail,
    color: "bg-[#B48D3C]",
    description: "dimalijewelry@gmail.com",
  },
  {
    name: "Llamar",
    url: "tel:+593997158532",
    icon: Phone,
    color: "bg-[#40918C]",
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
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Home() {
  const handleLinkClick = useCallback((url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Subtle background decoration */}
      <div className="blob-container" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-start px-5 py-10 sm:py-14 max-w-md mx-auto w-full">
        <motion.div
          className="flex flex-col items-center mb-9"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Profile Photo */}
          <motion.div variants={textVariants} className="mb-6">
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg ring-[3px] ring-[#B48D3C]/25 p-[3px] bg-gradient-to-br from-[#B48D3C]/20 via-transparent to-[#B48D3C]/20">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/mario-pacheco.png"
                  alt="Mario Pacheco"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={textVariants}
            className="text-[28px] sm:text-[34px] font-bold text-[#1a1a1a] tracking-tight leading-tight"
          >
            Mario Pacheco
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={textVariants}
            className="text-[#C2A649] font-semibold text-[13px] sm:text-sm mt-1.5 tracking-[0.25em] uppercase"
          >
            Di Mali — Manos Mágicas
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={textVariants}
            className="text-[#5a5a5a] text-center text-[13px] sm:text-sm mt-4 max-w-[280px] leading-relaxed"
          >
            El verdadero lujo no se fabrica, se teje. Sombreros de paja
            toquilla 100% artesanales. Patrimonio Cultural de la Humanidad.
          </motion.p>

          {/* Gold divider */}
          <motion.div
            variants={textVariants}
            className="w-12 h-[1.5px] bg-gradient-to-r from-transparent via-[#B48D3C] to-transparent mt-6"
          />
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
              className="group relative w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-white border border-[#e2dcd2] text-left shadow-[0_1px_4px_rgba(180,141,60,0.06)] transition-all duration-250 hover:shadow-[0_6px_20px_rgba(180,141,60,0.12)] hover:border-[#B48D3C]/50 cursor-pointer active:scale-[0.985]"
            >
              <div
                className={`relative flex items-center justify-center w-11 h-11 rounded-xl ${link.color} shrink-0 shadow-sm`}
              >
                <link.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#1a1a1a] font-semibold text-[15px]">
                  {link.name}
                </h3>
                <p className="text-[#7a7a7a] text-[12px] truncate mt-0.5">
                  {link.description}
                </p>
              </div>
              <ChevronRight className="w-[18px] h-[18px] text-[#c4bfa8] group-hover:text-[#B48D3C] group-hover:translate-x-0.5 transition-all duration-250" />
            </motion.button>
          ))}
        </motion.div>

        {/* Social Icons Row */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-9"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.35 }}
        >
          {socialIcons.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-10 h-10 rounded-full ${social.bg} text-white shadow-sm transition-all duration-250 hover:scale-110 hover:shadow-md active:scale-90`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.05, duration: 0.25 }}
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </motion.div>

        {/* Share button */}
        <motion.button
          className="mt-7 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e2dcd2] text-[#6b6b6b] text-[12px] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:text-[#B48D3C] hover:border-[#B48D3C]/40 hover:shadow-[0_2px_8px_rgba(180,141,60,0.1)] transition-all duration-250 cursor-pointer active:scale-95 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
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
      <footer className="relative z-10 mt-auto pb-6 pt-8 text-center">
        <motion.a
          href="https://dimali.jimbra.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9a9590] text-[11px] flex items-center justify-center gap-1 hover:text-[#B48D3C] transition-colors duration-250 cursor-pointer tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Di Mali —{" "}
          <span className="text-[#B48D3C] font-semibold">Manos Mágicas</span>
        </motion.a>
        <motion.p
          className="text-[#c4bfb6] text-[10px] mt-1.5 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          © {new Date().getFullYear()} Di Mali
        </motion.p>
      </footer>
    </div>
  );
}
