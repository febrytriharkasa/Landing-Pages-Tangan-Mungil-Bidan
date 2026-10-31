<template>
  <section id="layanan" class="scroll-mt-24 bg-blush-deep py-[108px] max-sm:py-[76px]" aria-labelledby="services-title">
    <div class="mx-auto w-[min(1180px,calc(100%-48px))] max-w-[1180px] max-sm:w-[min(100%-32px,1180px)]">
      <div class="mb-6 text-center">
        <div>
          <h2 id="services-title" class="mx-auto max-w-[650px] text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.13] tracking-[-0.045em] text-ink">
            Pilih perawatan sesuai kebutuhan hari ini
          </h2>
        </div>
      </div>

      <!-- Compact 3-column Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <article
          v-for="service in services"
          :key="service.title"
          class="flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all"
          :class="service.featured ? 'border-berry-bright' : ''"
        >
          <!-- Gambar dengan tinggi terbatas agar muat satu layar -->
          <div class="relative h-44 w-full overflow-hidden p-2 pb-0">
            <img v-if="service.image" class="h-full w-full rounded-xl object-cover" :src="service.image" :alt="service.alt" loading="lazy" />
            <!-- ponytail: URL foto aida-public kedaluwarsa; kosongkan image agar tampil placeholder sampai ada foto asli -->
            <div v-else class="grid h-full w-full place-items-center rounded-xl bg-blush-deep">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-line" aria-hidden="true">
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <!-- label datar: featured dan biasa sama-sama teks kecil, tanpa kapsul khusus (R-09) -->
            <span class="absolute top-4 left-4 text-[9px] font-bold tracking-wider uppercase text-berry"
              >{{ service.label }}</span
            >
          </div>

          <div class="flex flex-1 flex-col p-4">
            <h3 class="text-base font-bold text-ink">{{ service.title }}</h3>
            <p class="mt-1 text-xs text-muted leading-relaxed line-clamp-2">{{ service.description }}</p>

            <!-- List poin ringkas -->
            <ul class="my-3 space-y-1.5 text-xs text-muted">
              <li v-for="point in service.points" :key="point" class="flex items-center gap-2">
                <span class="text-berry font-bold text-[10px]">✓</span>
                <span class="truncate">{{ point }}</span>
              </li>
            </ul>

            <!-- Area Harga & Tombol -->
            <div class="mt-auto pt-3 border-t border-[#f2d9de]">
              <div class="flex items-baseline justify-between mb-3">
                <span class="text-[10px] uppercase font-semibold text-muted">Estimasi</span>
                <strong class="text-base font-bold text-berry">{{ service.price }}</strong>
              </div>
              <button
                class="w-full inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full border border-line bg-blush-deep px-3 py-2 text-xs font-bold text-berry hover:bg-[#ffe1e7] hover:border-berry-bright transition-colors"
                type="button"
                @click="openWhatsApp(service.message)"
              >
                <WaIcon :size="14" />
                <span>{{ service.featured ? 'Pesan via WhatsApp' : 'Tanya detail paket' }}</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { encodedWhatsApp } from '../utils'
import WaIcon from './WaIcon.vue'

const services = [
  {
    title: 'Pijat Hamil & Postpartum',
    label: 'Untuk ibu',
    description: 'Sesi relaksasi yang disesuaikan dengan kondisi ibu hamil dan masa pemulihan setelah melahirkan.',
    image: '',
    alt: 'Bidan memberikan perawatan lembut untuk ibu',
    points: ['Anamnesis singkat sebelum sesi', 'Teknik pijat sesuai kebutuhan ibu', 'Sesi privat di rumah'],
    price: 'Rp250.000',
    message: 'Saya ingin bertanya tentang Pijat Hamil dan Postpartum.',
  },
  {
    title: 'Baby Spa & Massage',
    label: 'Untuk bayi',
    description: 'Perawatan lembut untuk membantu bayi merasa nyaman bersama orang yang merawatnya di rumah.',
    image: '',
    alt: 'Bidan melakukan perawatan bayi dengan lembut',
    points: ['Observasi kenyamanan bayi', 'Sentuhan lembut sesuai respons bayi', 'Edukasi sederhana untuk orang tua'],
    price: 'Rp180.000',
    message: 'Saya ingin bertanya tentang Baby Spa dan Massage.',
  },
  {
    title: 'Paket Combo Bunda & Bayi',
    label: 'Sesi keluarga',
    description: 'Satu kunjungan untuk ibu dan bayi, dengan alur perawatan yang dibicarakan sebelum sesi dimulai.',
    image: '',
    alt: 'Ibu dan bayi menikmati sesi perawatan di rumah',
    points: ['Urutan sesi disepakati bersama', 'Peralatan dibawa ke rumah', 'Cocok untuk waktu keluarga'],
    price: 'Rp395.000',
    message: 'Saya ingin bertanya tentang Paket Combo Bunda dan Bayi.',
    featured: true,
  },
]

function openWhatsApp(message) {
  window.open(encodedWhatsApp(message), '_blank', 'noopener,noreferrer')
}
</script>
