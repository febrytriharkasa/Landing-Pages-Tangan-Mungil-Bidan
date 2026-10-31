<template>
  <header class="fixed inset-x-0 top-4 z-20 px-4 max-sm:top-2 max-sm:px-2">
    <nav
      class="relative mx-auto flex min-h-[68px] w-full max-w-[1180px] items-center justify-between gap-5 rounded-full border border-line/90 bg-white/94 py-2.5 pr-3.5 pl-[18px] backdrop-blur-lg max-sm:min-h-[60px] max-sm:pl-3"
      aria-label="Navigasi utama"
    >
      <a
        class="inline-flex min-w-max items-center gap-2.5 py-1"
        href="#beranda"
        @click.prevent="scrollToSection('#beranda')"
      >
        <img src="/icon.svg" alt="" width="48" height="46" class="h-10 w-auto max-sm:h-9" />
        <span class="grid gap-0.5">
          <strong class="text-sm tracking-[-0.02em] text-berry max-sm:text-xs">Tangan Mungil Bidan</strong>
        </span>
      </a>

      <div class="flex items-center gap-[clamp(14px,2.4vw,30px)] text-[13px] font-semibold text-muted max-lg:hidden">
        <a
          v-for="link in links"
          :key="link.id"
          class="transition-colors hover:text-berry-bright"
          :href="`#${link.id}`"
          @click.prevent="scrollToSection(`#${link.id}`)"
        >{{ link.label }}</a>
      </div>

      <div class="flex items-center gap-2.5">
        <a
          class="inline-flex min-h-[42px] items-center justify-center rounded-full bg-berry-bright px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-berry-dark max-lg:hidden"
          :href="encodedWhatsApp('Halo Bidan, saya ingin memesan layanan homecare.')"
          target="_blank"
          rel="noopener noreferrer"
        >Pesan homecare</a>

        <button
          class="hidden size-11 place-items-center rounded-full border-0 bg-transparent text-ink transition-colors hover:bg-blush-deep max-lg:grid"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="sr-only">Menu</span>
          <span class="relative grid size-[18px] place-items-center" aria-hidden="true">
            <i
              class="burger-line absolute h-0.5 w-[18px] rounded-[3px] bg-current"
              :class="menuOpen ? 'top-bar-open' : 'top-bar'"
            ></i>
            <i
              class="burger-line absolute h-0.5 w-[18px] rounded-[3px] bg-current"
              :class="menuOpen ? 'bot-bar-open' : 'bot-bar'"
            ></i>
          </span>
        </button>
      </div>

      <Transition name="curtain">
        <div
          v-if="menuOpen"
          id="mobile-menu"
          class="absolute inset-x-0 top-[calc(100%+10px)] grid gap-1 overflow-hidden rounded-3xl border border-line bg-white p-3.5"
        >
          <a
            v-for="link in links"
            :key="link.id"
            class="rounded-xl px-3 py-3 text-sm font-semibold text-muted transition-colors hover:text-berry-bright"
            :href="`#${link.id}`"
            @click.prevent="scrollToSection(`#${link.id}`)"
          >{{ link.label }}</a>
          <a
            class="mt-1.5 inline-flex min-h-[46px] items-center justify-center rounded-full bg-berry-bright px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-berry-dark"
            :href="encodedWhatsApp('Halo Bidan, saya ingin memesan layanan homecare.')"
            target="_blank"
            rel="noopener noreferrer"
          >Pesan homecare</a>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { encodedWhatsApp } from '../utils'

const menuOpen = ref(false)
const links = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang kami' },
  { id: 'alasan', label: 'Keunggulan' },
  { id: 'layanan', label: 'Layanan' },
  { id: 'cerita', label: 'Cerita pelanggan' },
  { id: 'contact', label: 'Kontak' },
]

function scrollToSection(id) {
  menuOpen.value = false
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
/* Animasi tirai: turun saat enter, naik saat leave */
.curtain-enter-active,
.curtain-leave-active {
  transition: clip-path 360ms cubic-bezier(0.22, 1, 0.36, 1);
}

.curtain-enter-from {
  clip-path: inset(0 0 100% 0 round 24px);
}
.curtain-enter-to {
  clip-path: inset(0 0 0% 0 round 24px);
}

.curtain-leave-from {
  clip-path: inset(0 0 0% 0 round 24px);
}
.curtain-leave-to {
  clip-path: inset(0 0 100% 0 round 24px);
}

@media (prefers-reduced-motion: reduce) {
  .curtain-enter-active,
  .curtain-leave-active {
    transition: none;
  }
}

/* Ikon burger → X */
.burger-line {
  transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
}
.top-bar { transform: translateY(-4px); }
.bot-bar { transform: translateY(4px); }
.top-bar-open { transform: translateY(0) rotate(45deg); }
.bot-bar-open { transform: translateY(0) rotate(-45deg); }
</style>
