<template>
  <section id="beranda" class="relative isolate flex min-h-[720px] items-center overflow-hidden max-sm:min-h-[680px] max-sm:items-end">
    <img
      class="absolute inset-0 -z-20 size-full object-cover object-[center_42%] max-sm:object-[59%_center]"
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe4qlXgzgA5E6Wt9uaox96lWzybLwV8uEskVCX-UrFLO79gy0aIYCV-n9fySNg7SfVOr3H-stPuLab5Wq3uBASLzRkE_5CQZ2NRehyVmTsXqJ9Ahp99Le1BGxJKmphZu9SHBmbxxaFT-yaTaGO67LpZ5TI7-rd_qsqsB4HYI7VGccz2-N5kiQC_xE0v0c4R3yuiK6mlEnGYXlgPzdhz8DrAmS5Cov4ra4-NgtOPt0"
      alt="Ibu dan bayi menikmati perawatan di rumah"
      width="1600"
      height="980"
      fetchpriority="high"
    />
    <div
      class="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(48,18,27,0.92)_0%,rgba(48,18,27,0.72)_40%,rgba(48,18,27,0.18)_100%)] max-sm:bg-[linear-gradient(180deg,rgba(48,18,27,0.25)_0%,rgba(48,18,27,0.78)_56%,rgba(48,18,27,0.95)_100%)]"
      aria-hidden="true"
    ></div>
    <div
      class="mx-auto w-[min(1180px,calc(100%-48px))] max-w-[1180px] pt-[100px] pb-20 text-white max-sm:w-[min(100%-32px,1180px)] max-sm:pt-[140px] max-sm:pb-[62px]"
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 650 } }"
    >
      <h1 class="max-w-[700px] text-[clamp(2.25rem,5vw,4.15rem)] font-bold leading-[1.08] tracking-[-0.045em] max-sm:text-[clamp(2.2rem,11vw,3.15rem)]">
        Pijat &amp; perawatan ibu dan bayi, langsung di rumah Anda
      </h1>
      <p class="mt-4 max-w-[580px] text-[clamp(1rem,1.4vw,1.15rem)] leading-[1.7] text-[#fff2f3]/90 max-sm:text-sm max-sm:leading-[1.65]">
        Perawatan privat oleh bidan yang datang ke rumah, dengan sesi yang tenang untuk membantu bunda dan si kecil merasa nyaman.
      </p>
      <div class="mt-8 flex flex-wrap items-center gap-3 max-sm:flex-col max-sm:items-stretch">
        <a
          class="inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-full bg-berry-bright px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-berry-dark max-sm:w-full"
          :href="encodedWhatsApp('Halo Bidan, saya ingin konsultasi layanan homecare.')"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WaIcon :size="20" />
          <span>Chat WhatsApp</span>
        </a>
        <a
          class="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-white/22 max-sm:w-full"
          href="#layanan"
          @click.prevent="scrollToSection('#layanan')"
        >
          Lihat layanan
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { encodedWhatsApp } from '../utils'
import WaIcon from './WaIcon.vue'

function scrollToSection(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
