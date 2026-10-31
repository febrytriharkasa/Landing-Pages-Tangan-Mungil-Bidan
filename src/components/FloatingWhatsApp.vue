<template>
  <a
    class="fixed right-5 bottom-5 z-30 inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-berry-bright px-5 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-berry-dark max-sm:right-4 max-sm:bottom-4 max-sm:px-4 max-sm:text-[13px]"
    :href="encodedWhatsApp('Halo Admin Tangan Mungil Bidan, saya ingin bertanya tentang jadwal dan layanan.')"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Hubungi Tangan Mungil Bidan melalui WhatsApp"
  >
    <WaIcon :size="24" />
    <span>WhatsApp</span>
  </a>
</template>

<script setup>
import { encodedWhatsApp } from '../utils'
import WaIcon from './WaIcon.vue'
</script>
