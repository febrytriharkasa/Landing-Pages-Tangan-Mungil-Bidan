<template>
  <section id="tentang" class="scroll-mt-24 bg-blush py-[108px] max-sm:py-[76px]">
    <div class="mx-auto grid w-[min(1180px,calc(100%-48px))] max-w-[1180px] grid-cols-[minmax(0,440px)_1fr] items-center gap-[clamp(42px,7vw,96px)] max-lg:grid-cols-1 max-lg:gap-12 max-sm:w-[min(100%-32px,1180px)] max-sm:gap-9">
      <div
        class="relative max-w-[440px] pr-5 pb-7 max-lg:max-w-[620px] max-sm:pr-2 max-sm:pb-6"
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 550 } }"
      >
        <div class="size-[min(400px,100%)] overflow-hidden rounded-[32px] max-sm:rounded-3xl">
          <img
            class="size-full aspect-square object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCABo548vwuYxFCKilPaHyhjG2CpsFsJG-BktvWmrvN702Se_HO4MGo586xJwnTq2eML_GEyN1p3c0E5qwo5A1yoh0Y9VWVzsHVgSZTGfVpFi8gCY__Oxj7aDHwVXEXLKmbbpdOndzmJqrND_FhwKWAo9SbwRxrQHebm0a5eyB_ar2k9AIJ8pfu_jzH57xJNBQK9cWDtRmOtfFw3ymX6qatFzSCMzUAtkCILlpk1fM"
            alt="Bidan merawat bayi dengan sentuhan lembut"
            width="760"
            height="760"
            loading="lazy"
          />
        </div>
        <div class="absolute right-0 bottom-0 grid max-w-[250px] grid-cols-[38px_1fr] items-center gap-2.5 rounded-[20px] border border-line bg-white p-3.5 px-4 max-sm:-right-0.5 max-sm:max-w-[220px] max-sm:p-3">
          <span class="grid size-[38px] place-items-center rounded-full bg-sage-bg font-bold text-sage" aria-hidden="true">✓</span>
          <div>
            <strong class="block text-xs font-bold text-ink">Bidan terregistrasi</strong>
            <small class="block text-[9px] leading-[1.35] text-muted">Dokumen dapat ditanyakan saat konsultasi</small>
          </div>
        </div>
      </div>
      <div
        v-motion
        :initial="{ opacity: 0, x: 20 }"
        :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 550, delay: 100 } }"
      >
        <h2 class="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.13] tracking-[-0.045em] text-ink">
          Perawatan yang terasa dekat, dengan standar yang jelas
        </h2>
        <p class="mt-5 mb-6 max-w-[570px] text-[15px] leading-[1.75] text-muted">
          Kami datang ke ruang yang sudah dikenal oleh bunda dan bayi. Sebelum sesi dimulai, bidan membicarakan kebutuhan, kondisi, dan batas nyaman keluarga.
        </p>
        <ul class="mb-7 grid gap-4 p-0 list-none">
          <li class="grid grid-cols-[26px_1fr] gap-3">
            <span class="grid size-[26px] place-items-center rounded-full bg-[#ffe1e7] text-[13px] font-bold text-berry" aria-hidden="true">✓</span>
            <div>
              <strong class="mb-1 block text-sm font-bold text-ink">Peralatan dibawa dan dirapikan</strong>
              <p class="text-xs leading-[1.55] text-muted">Perlengkapan sesi disiapkan untuk penggunaan homecare dan dibereskan setelah kunjungan.</p>
            </div>
          </li>
          <li class="grid grid-cols-[26px_1fr] gap-3">
            <span class="grid size-[26px] place-items-center rounded-full bg-[#ffe1e7] text-[13px] font-bold text-berry" aria-hidden="true">✓</span>
            <div>
              <strong class="mb-1 block text-sm font-bold text-ink">Bahan perawatan dibicarakan</strong>
              <p class="text-xs leading-[1.55] text-muted">Bunda dapat menyampaikan alergi, sensitivitas kulit, atau bahan yang ingin dihindari.</p>
            </div>
          </li>
          <li class="grid grid-cols-[26px_1fr] gap-3">
            <span class="grid size-[26px] place-items-center rounded-full bg-[#ffe1e7] text-[13px] font-bold text-berry" aria-hidden="true">✓</span>
            <div>
              <strong class="mb-1 block text-sm font-bold text-ink">Jadwal mengikuti ritme keluarga</strong>
              <p class="text-xs leading-[1.55] text-muted">Waktu sesi dibahas lewat WhatsApp agar sesuai dengan kondisi ibu dan bayi.</p>
            </div>
          </li>
        </ul>
        <a
          class="inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-full bg-berry-bright px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-berry-dark"
          :href="encodedWhatsApp('Halo Bidan, saya ingin mengetahui standar layanan homecare.')"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WaIcon :size="18" />
          <span>Tanya standar layanan</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { encodedWhatsApp } from '../utils'
import WaIcon from './WaIcon.vue'
</script>
