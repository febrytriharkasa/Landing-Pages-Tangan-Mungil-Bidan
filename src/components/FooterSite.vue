<template>
  <footer class="border-t border-[#482630] bg-[#30121b] py-14 text-[#ffecef] max-sm:py-10">
    <div
      class="mx-auto grid w-[min(1180px,calc(100%-48px))] max-w-[1180px] grid-cols-[1.4fr_1fr_auto] gap-10 max-lg:grid-cols-2 max-sm:w-[min(100%-32px,1180px)] max-sm:grid-cols-1 max-sm:gap-8"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }"
    >
      <!-- Brand -->
      <div>
        <a class="inline-flex items-center gap-2.5" href="#beranda" @click.prevent="scrollToSection('#beranda')">
          <img src="/icon.svg" alt="" width="48" height="46" class="h-10 w-auto" loading="lazy" />
          <strong class="text-sm text-white">Tangan Mungil Bidan</strong>
        </a>
        <p class="mt-4 max-w-[300px] text-xs leading-[1.7] text-[#ffecef]/70">Perawatan privat ibu dan bayi di rumah, dengan percakapan yang jelas sebelum setiap sesi.</p>
      </div>

      <!-- Info gabungan: area + jam -->
      <div>
        <h3 class="text-xs font-bold text-white">Area &amp; jam kunjungan</h3>
        <p class="mt-3 text-xs leading-[1.7] text-[#ffecef]/70">Sidoarjo, Surabaya, Mojokerto, Gresik, dan sekitarnya.</p>
        <p class="mt-1.5 text-xs leading-[1.7] text-[#ffecef]/70">Hubungi admin untuk ketersediaan waktu kunjungan.</p>
      </div>

      <!-- Media sosial -->
      <div>
        <h3 class="text-xs font-bold text-white">Ikuti kami</h3>
        <div class="mt-3 flex items-center gap-3">
          <a class="grid size-11 place-items-center rounded-full bg-[#ffecef]/10 text-[#ffecef]/80 transition-colors hover:bg-[#ffecef]/20 hover:text-white" :href="encodedWhatsApp('Halo Bidan, saya ingin bertanya tentang layanan homecare.')" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 17.03c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.03 8.03 0 01-1.23-4.26c0-4.48 3.65-8.13 8.13-8.13 2.17 0 4.21.85 5.75 2.39 1.54 1.54 2.38 3.58 2.38 5.75 0 4.48-3.65 8.11-8.14 8.11z"/></svg>
          </a>
          <a class="grid size-11 place-items-center rounded-full bg-[#ffecef]/10 text-[#ffecef]/80 transition-colors hover:bg-[#ffecef]/20 hover:text-white" href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a class="grid size-11 place-items-center rounded-full bg-[#ffecef]/10 text-[#ffecef]/80 transition-colors hover:bg-[#ffecef]/20 hover:text-white" href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.16 8.16 0 005.58 2.17V11.7a4.85 4.85 0 01-2.83-.93 4.86 4.86 0 01-1.17-1.65V2h3.45v.44a4.84 4.84 0 004.14 4.78V6.69z"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="mx-auto mt-10 flex w-[min(1180px,calc(100%-48px))] max-w-[1180px] items-center justify-between gap-4 border-t border-[#ffecef]/15 pt-5 text-[11px] text-[#ffecef]/60 max-sm:w-[min(100%-32px,1180px)] max-sm:flex-col max-sm:items-start">
      <span>© 2026 Tangan Mungil Bidan</span>
      <a class="transition-colors hover:text-white" href="#booking" @click.prevent="scrollToSection('#booking')">Cek jadwal kunjungan</a>
    </div>
  </footer>
</template>

<script setup>
import { encodedWhatsApp } from '../utils'

function scrollToSection(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
