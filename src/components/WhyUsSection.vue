<template>
  <section id="alasan" class="scroll-mt-24 bg-white py-[108px] max-sm:py-[76px]" aria-labelledby="why-title">
    <div class="mx-auto w-[min(1180px,calc(100%-48px))] max-w-[1180px] max-sm:w-[min(100%-32px,1180px)]">
      <div class="mb-9 text-center">
        <h2 id="why-title" class="mx-auto max-w-[610px] text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.13] tracking-[-0.045em] text-ink">
          Kenapa memilih Tangan Mungil Bidan?
        </h2>
      </div>

      <div
        class="mx-auto max-w-[720px] space-y-4 text-center"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }"
      >
        <p class="text-sm leading-[1.8] text-muted">
          Tangan Mungil Bidan berfokus pada perawatan ibu dan bayi yang dilakukan langsung di rumah. Bayi tetap berada di lingkungan yang dikenal, ibu tidak perlu menyiapkan transportasi, dan seluruh sesi berlangsung privat untuk satu keluarga.
        </p>
      </div>

      <div class="mt-4 rounded-[24px] border border-line bg-blush-deep p-6 max-sm:p-4">
        <!-- ponytail: sisipkan foto asli alat sebelum strip ini; jangan pakai foto stok -->
        <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 class="text-sm font-bold text-ink">Peralatan yang dibawa bidan</h3>
          <p class="text-[11px] text-muted">Disiapkan sebelum sesi, dirapikan setelah kunjungan.</p>
        </div>
        <ul class="mt-5 grid grid-cols-5 gap-3 p-0 max-lg:grid-cols-3 max-sm:grid-cols-2">
          <li
            v-for="tool in tools"
            :key="tool.name"
            class="flex flex-col overflow-hidden rounded-2xl border border-line bg-white"
          >
            <div class="aspect-square w-full overflow-hidden bg-blush">
              <img
                v-if="tool.image"
                class="size-full object-cover"
                :src="tool.image"
                :alt="tool.name"
                loading="lazy"
              />
              <!-- placeholder: ganti tool.image dengan URL foto asli setiap alat -->
              <div v-else class="grid size-full place-items-center bg-blush-deep">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-line">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
            </div>
            <span class="block p-2.5 text-[11px] font-semibold leading-[1.45] text-ink">{{ tool.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
/* ponytail: daftar alat menunggu konfirmasi bidan; jangan tambah klaim sterilisasi sebelum SOP tertulis */
const tools = [
  { name: 'Bak baby spa portabel', image: '' },
  { name: 'Alas, handuk, dan waslap sesi', image: '' },
  { name: 'Minyak pijat bayi', image: '' },
  { name: 'Termometer suhu air', image: '' },
  { name: 'Tas peralatan dan kantong alat', image: '' },
]
</script>
