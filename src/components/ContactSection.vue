<template>
  <section id="contact" class="scroll-mt-24 bg-blush py-[108px] max-sm:py-[76px]" aria-labelledby="contact-title">
    <div class="mx-auto w-[min(1180px,calc(100%-48px))] max-w-[1180px] max-sm:w-[min(100%-32px,1180px)]">
      <div class="grid grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] items-start gap-[clamp(40px,6vw,100px)] max-lg:grid-cols-1 max-lg:gap-10">
        <div class="max-w-[560px]">
          <h2 id="contact-title" class="max-w-[560px] text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.13] tracking-[-0.045em] text-ink">
            Siap membantu menjawab setiap pertanyaan Anda.
          </h2>
          <p class="mt-4 mb-7 max-w-[540px] text-[15px] leading-[1.75] text-muted">
            Tim kami tersedia untuk menjawab pertanyaan tentang layanan, area kunjungan, jadwal, dan kebutuhan khusus lainnya. Hubungi kami melalui WhatsApp untuk respon tercepat.
          </p>
        </div>

        <div
          class="rounded-[28px] border border-line bg-white p-7 max-sm:p-5"
        >
          <h3 class="text-xl font-bold tracking-[-0.03em] text-ink">Mulai konsultasi sekarang</h3>
          <p class="mt-2.5 text-[13px] leading-[1.7] text-muted">
            Tanyakan ketersediaan jadwal, pilih paket layanan, atau diskusikan kebutuhan khusus bunda dan si kecil langsung dengan admin kami.
          </p>
          <a
            class="mt-6 inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-full bg-berry-bright px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-berry-dark"
            :href="encodedWhatsApp('Halo Admin Tangan Mungil Bidan, saya ingin berkonsultasi tentang layanan homecare.')"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WaIcon :size="22" />
            <span>Chat WhatsApp sekarang</span>
          </a>
        </div>
      </div>

      <div class="mt-12 grid grid-cols-3 gap-0 rounded-[24px] border border-line bg-white py-5 max-lg:grid-cols-1 max-lg:gap-4 max-lg:p-4">
        <div
          v-for="info in infos"
          :key="info.title"
          class="grid min-w-0 grid-cols-[52px_1fr] items-start gap-3.5 px-6 max-lg:px-2"
        >
          <div class="grid size-[52px] place-items-center rounded-2xl bg-[#ffe1e7] text-berry" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path :d="info.path" />
              <circle v-if="info.circle" :cx="info.circle[0]" :cy="info.circle[1]" :r="info.circle[2]" />
            </svg>
          </div>
          <div class="min-w-0">
            <h3 class="text-[13px] font-bold text-ink">{{ info.title }}</h3>
            <p class="mt-1 text-xs leading-[1.6] text-muted">{{ info.detail }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { encodedWhatsApp } from '../utils'
import WaIcon from './WaIcon.vue'

const infos = [
  {
    title: 'Area layanan',
    detail: 'Sidoarjo, Surabaya, Mojokerto, Gresik, dan sekitarnya.',
    path: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z',
    circle: [12, 10, 3],
  },
  {
    title: 'Jam konsultasi',
    detail: 'Senin - Minggu, 08.00 - 20.00 WIB.',
    path: 'M12 6v6l4 2',
    circle: [12, 12, 10],
  },
  {
    title: 'WhatsApp admin',
    detail: '+62 812-3456-7890',
    path: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z',
    circle: null,
  },
]
</script>
