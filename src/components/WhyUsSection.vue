<template>
  <section id="alasan" class="scroll-mt-24 bg-white py-[108px] pb-[132px] max-sm:py-[76px] max-sm:pb-[232px]" aria-labelledby="why-title">
    <div class="mx-auto w-[min(1180px,calc(100%-48px))] max-w-[1180px] max-sm:w-[min(100%-32px,1180px)]">
      <div class="mb-9 text-center">
        <h2 id="why-title" class="mx-auto max-w-[610px] text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.13] tracking-[-0.045em] text-ink">
          Kenapa memilih Tangan Mungil Bidan?
        </h2>
      </div>

      <div class="mx-auto max-w-[720px] space-y-4 text-center">
        <p class="text-sm leading-[1.8] text-muted">
          Tangan Mungil Bidan berfokus pada perawatan ibu dan bayi yang dilakukan langsung di rumah. Bayi tetap berada di lingkungan yang dikenal, ibu tidak perlu menyiapkan transportasi, dan seluruh sesi berlangsung privat untuk satu keluarga.
        </p>
      </div>

      <div class="mt-4 rounded-[24px] border border-line bg-blush-deep p-6 max-sm:p-4">
        <!-- ponytail: sisipkan foto asli alat sebelum strip ini; jangan pakai foto stok -->
        <div class="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
          <div>
            <h3 class="text-sm font-bold text-ink">Peralatan yang dibawa bidan</h3>
            <p class="mt-1 text-[11px] leading-[1.6] text-muted">Disiapkan sebelum sesi, dirapikan setelah kunjungan.</p>
          </div>
          <div class="ml-auto flex shrink-0 items-center gap-2">
            <button
              class="grid size-11 place-items-center rounded-full border border-line bg-white text-ink transition-[background-color,transform] duration-200 hover:bg-blush active:scale-[0.98] disabled:opacity-40 disabled:hover:bg-white"
              type="button"
              aria-label="Geser peralatan ke kiri"
              title="Geser ke kiri"
              :disabled="!canScrollLeft"
              @click="scrollByCard(-1)"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              class="grid size-11 place-items-center rounded-full border border-line bg-white text-ink transition-[background-color,transform] duration-200 hover:bg-blush active:scale-[0.98] disabled:opacity-40 disabled:hover:bg-white"
              type="button"
              aria-label="Geser peralatan ke kanan"
              title="Geser ke kanan"
              :disabled="!canScrollRight"
              @click="scrollByCard(1)"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <ul
          ref="track"
          class="tool-track m-0 mt-5 flex list-none gap-3 overflow-x-auto overflow-y-hidden p-0 scroll-smooth snap-x snap-proximity overscroll-x-contain"
          aria-label="Daftar peralatan yang dibawa bidan"
          tabindex="0"
          @scroll.passive="updateScrollState"
        >
          <li
            v-for="tool in tools"
            :key="tool.name"
            class="flex w-[calc((100%_-_12px)/2)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-line bg-white sm:w-[calc((100%_-_24px)/3)] lg:w-[calc((100%_-_36px)/4)]"
          >
            <div class="aspect-square w-full overflow-hidden bg-blush">
              <img
                v-if="tool.image"
                class="size-full object-cover"
                :src="tool.image"
                :alt="tool.name"
                width="400"
                height="400"
                loading="lazy"
              />
              <!-- placeholder: ganti tool.image dengan URL foto asli setiap alat -->
              <div v-else class="grid size-full place-items-center bg-blush-deep">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-line" aria-hidden="true">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
            </div>
            <span class="block min-h-[2.9em] p-2.5 text-[11px] font-semibold leading-[1.45] text-ink">{{ tool.name }}</span>
          </li>
        </ul>
      </div>

      <!-- ponytail: strip jaminan berisi klaim izin/produk; verifikasi ke bidan sebelum dipublikasikan -->
      <ul class="mt-4 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 rounded-full border border-line bg-[#fbf2f4] px-8 py-5 max-sm:flex-col max-sm:items-start max-sm:gap-y-2 max-sm:rounded-[24px] max-sm:px-5">
        <li
          v-for="badge in badges"
          :key="badge"
          class="flex items-center gap-2 text-xs font-semibold text-ink"
        >
          <span class="font-bold text-ink" aria-hidden="true">✓</span>
          <span>{{ badge }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

/* ponytail: daftar alat menunggu konfirmasi bidan; jangan tambah klaim sterilisasi sebelum SOP tertulis */
const badges = [
  'Bidan Memiliki Pengalaman Luas',
  'Bebas Biaya Transport S&K Berlaku',
  '100% Produk Halal & BPOM Certified',
]
const tools = [
  { name: 'Bak baby spa portabel', image: '' },
  { name: 'Alas, handuk, dan waslap sesi', image: '' },
  { name: 'Minyak pijat bayi', image: '' },
  { name: 'Termometer suhu air', image: '' },
  { name: 'Tas peralatan dan kantong alat', image: '' },
]

const track = ref(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

function updateScrollState() {
  const el = track.value
  if (!el) return
  canScrollLeft.value = el.scrollLeft > 1
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 1
}

function scrollByCard(direction) {
  const el = track.value
  if (!el) return
  const card = el.querySelector('li')
  const gap = Number.parseFloat(getComputedStyle(el).columnGap) || 12
  const distance = card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.8
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollBy({ left: direction * distance, behavior: reduced ? 'auto' : 'smooth' })
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('resize', updateScrollState)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScrollState)
})
</script>

<style scoped>
.tool-track {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.tool-track::-webkit-scrollbar {
  display: none;
}
</style>
