"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaPrint, FaRegThumbsUp } from "react-icons/fa";
import { IoMdPrint } from "react-icons/io";
import { HoverEffect } from "@/components/ui/card-hover-effect";

function Skills() {
  const skills = [
    {
      text: "Fotocopy Terlengkap",
      cuoted:
        "Kami menyediakan alat tulis kantor / ATK, PC untuk ngetik dan print, jasa cutting, jilid skripsi kilat, dll.",
      Icon: FaPrint,
    },
    {
      text: "Peralatan Terbaik",
      cuoted:
        "Kami menggunakan mesin fotocopy terbaru dan terbaik saat ini dan peralatan peralatan pendukung kami yang terawat dan berkualitas, tidak usah ragu lagi dengan hasil dari pada kami. ",
      Icon: IoMdPrint,
    },
    {
      text: "Layanan Terbaik",
      cuoted:
        "Dengan tenaga profesional dan berketerampilan khusus di bidangnya, anda tidak perlu khawatir lagi dengan hasil kerja kami, karna kami akan memberikan pelayanan yang prima kepada seluruh pelanggan kami.",
      Icon: FaRegThumbsUp,
    },
  ];
  return (
    <div className="py-20">
      <div>
        <HoverEffect items={skills} />
      </div>
    </div>
  );
}

export default Skills;
