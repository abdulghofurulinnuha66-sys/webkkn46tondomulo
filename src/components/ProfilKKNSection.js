'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

function InfoItem({ icon, label, value, delay }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group flex items-start gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-xl hover:shadow-green-900/20 hover:bg-white/95 hover:-translate-y-1 transition-all duration-300 cursor-default"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-xl shadow-md shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
        <span className="drop-shadow-sm">{icon}</span>
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-bold text-green-700 uppercase tracking-widest mb-1">
          {label}
        </p>
        <p className="text-sm text-gray-900 font-bold leading-snug">{value}</p>
      </div>
    </div>
  );
}

function MisiItem({ index, text, delay, isVisible }) {
  return (
    <li
      className="flex items-start gap-3"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(16px)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white text-xs font-bold flex items-center justify-center mt-0.5 shadow-md shadow-green-500/30">
        {index + 1}
      </span>
      <span className="text-sm text-gray-700 font-medium leading-relaxed">{text}</span>
    </li>
  );
}

export default function ProfilKKNSection({ desa }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" id="profil-kkn">
      {/* ═══ BACKGROUND PHOTO & OVERLAY ═══ */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg-desa.jpg"
          alt="Pemandangan Desa"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay to make text and glassmorphism pop */}
        <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 via-transparent to-green-900/80" />
      </div>

      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path d="M0 0L48 8C96 16 192 32 288 37.3C384 43 480 37 576 32C672 27 768 21 864 24C960 27 1056 37 1152 40C1248 43 1344 37 1392 35L1440 32V0H0Z" fill="white" />
        </svg>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path d="M0 60L48 52C96 44 192 28 288 22.7C384 17 480 23 576 28C672 33 768 39 864 36C960 33 1056 23 1152 20C1248 17 1344 23 1392 25L1440 28V60H0Z" fill="white" />
        </svg>
      </div>

      {/* ═══ CONTENT ═══ */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>

        {/* ── Section Header with Logo ── */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
            transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Logo */}
          <div className="relative inline-block mb-8 mt-4">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 rounded-full bg-white/30 blur-2xl scale-150" />
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-black/50 ring-4 ring-white/20 mx-auto transform hover:scale-105 transition-transform duration-500">
              <img
                src="/images/logo-kkn.jpg"
                alt="Logo KKN Pintar 2026 UNUGIRI Desa Tondomulo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap py-1.5 px-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-[11px] font-bold uppercase tracking-widest shadow-xl border border-green-400/30">
              KKN Pintar 2026
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Profil <span className="text-green-400">KKN 46</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-1 bg-green-400/80 rounded-full shadow-lg" />
            <div className="w-16 h-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg" />
            <div className="w-8 h-1 bg-green-400/80 rounded-full shadow-lg" />
          </div>
          <p className="text-gray-100 max-w-2xl mx-auto leading-relaxed text-base md:text-lg font-medium drop-shadow-md">
            {desa.deskripsiSingkat}
          </p>
        </div>

        {/* ── Main Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* ─── Left: Info Cards ─── */}
          <div className="lg:col-span-7 space-y-4">
            <InfoItem
              icon="📍"
              label="Lokasi Penempatan"
              value={`${desa.nama}, ${desa.kecamatan}, ${desa.kabupaten}, ${desa.provinsi}`}
              delay={0}
            />
            <InfoItem
              icon="👩‍🏫"
              label="Dosen Pembimbing Lapangan (DPL)"
              value={desa.dpl}
              delay={100}
            />
            <InfoItem
              icon="🏛️"
              label="Universitas"
              value="Universitas Nahdlatul Ulama Sunan Giri Bojonegoro (UNUGIRI)"
              delay={200}
            />
            <InfoItem
              icon="📅"
              label="Periode Pelaksanaan"
              value="KKN 46 — Tahun 2026"
              delay={300}
            />
            <InfoItem
              icon="👥"
              label="Jumlah Anggota"
              value="14 Mahasiswa dari berbagai Program Studi"
              delay={400}
            />
            <InfoItem
              icon="🎯"
              label="Tagline"
              value={desa.tagline || 'Membangun Desa, Membangun Indonesia'}
              delay={500}
            />
          </div>

          {/* ─── Right: Visi & Misi Card ─── */}
          <div
            className="lg:col-span-5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s',
            }}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl overflow-hidden h-full flex flex-col transform hover:-translate-y-1 transition-transform duration-500">
              {/* Card top accent */}
              <div className="h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />

              {/* Visi */}
              <div className="p-8 border-b border-gray-200/60 bg-gradient-to-b from-white to-transparent">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-gray-900">Visi</h3>
                    <p className="text-[11px] text-green-600 font-bold uppercase tracking-widest mt-0.5">Pandangan Ke Depan</p>
                  </div>
                </div>
                <div className="pl-2 border-l-4 border-green-300 ml-4">
                  <p className="text-base text-gray-700 font-medium leading-relaxed pl-4 italic">&ldquo;{desa.visi}&rdquo;</p>
                </div>
              </div>

              {/* Misi */}
              <div className="p-8 flex-1 bg-white/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-gray-900">Misi</h3>
                    <p className="text-[11px] text-emerald-600 font-bold uppercase tracking-widest mt-0.5">Langkah Strategis</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {desa.misi.map((item, index) => (
                    <MisiItem
                      key={index}
                      index={index}
                      text={item}
                      delay={500 + index * 100}
                      isVisible={isVisible}
                    />
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="p-8 pt-4 mt-auto bg-white/50">
                <Link
                  href="/anggota"
                  className="group/btn flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-base hover:from-green-500 hover:to-emerald-500 transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 hover:-translate-y-1"
                >
                  <span className="text-xl">👥</span>
                  Lihat Anggota KKN
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
