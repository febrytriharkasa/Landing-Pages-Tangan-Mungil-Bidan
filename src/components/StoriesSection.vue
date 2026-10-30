<template>
  <section id="cerita" class="scroll-mt-24 bg-white py-[108px] max-sm:py-[76px]" aria-labelledby="stories-title">
    <div class="mx-auto w-[min(1180px,calc(100%-48px))] max-w-[1180px] max-sm:w-[min(100%-32px,1180px)]">
      <div class="mb-9 text-center">
        <h2 id="stories-title" class="mx-auto max-w-[650px] text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.13] tracking-[-0.045em] text-ink">
          Kata bunda yang sudah merasakan kunjungan kami
        </h2>
      </div>

      <div class="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
        <blockquote
          v-for="story in stories"
          :key="story.name"
          class="flex min-h-[250px] flex-col rounded-[24px] border border-line bg-blush p-6 max-sm:p-5"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }"
        >
          <div class="flex gap-1 text-berry-bright" aria-label="5 bintang">
            <svg v-for="i in 5" :key="i" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M8 .5l2 5h5l-4 3 1.5 5L8 11l-4.5 3L5 9 1 6h5z"/></svg>
          </div>
          <p class="mt-5 flex-1 text-sm leading-[1.7] text-ink">“{{ story.text }}”</p>
          <footer class="mt-5 flex items-center gap-2.5 border-t border-[#f2d9de] pt-4">
            <span class="grid size-[38px] place-items-center rounded-full bg-[#ffe1e7] text-[11px] font-bold text-berry" aria-hidden="true">{{ story.initials }}</span>
            <div>
              <cite class="block text-xs font-bold not-italic text-ink">{{ story.name }}</cite>
              <span class="mt-0.5 block text-[10px] leading-[1.4] text-muted">{{ story.context }}</span>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup>
const stories = [
  {
    name: 'Bunda Alika Putri',
    initials: 'AP',
    context: 'Baby Kenzo, 3 bulan · Jakarta Selatan',
    text: 'Bidan datang tepat waktu dengan seragam rapi dan protokol bersih. Si kecil biasanya rewel kalau disentuh orang baru, tapi sama Bu Bidan langsung anteng senyum-senyum dan tidur nyenyak 4 jam sesudahnya!',
  },
  {
    name: 'Bunda Sarah Rahma',
    initials: 'SR',
    context: 'Ibu menyusui · Depok',
    text: 'Ambil paket combo setelah 2 minggu lahiran normal. Pegal di punggung hilang total, pijatan laktasinya bikin ASI langsung ngucur deras. Terapisnya ramah dan kasih edukasi posisi menyusui yang benar.',
  },
  {
    name: 'dr. Natasha Melviana',
    initials: 'NM',
    context: 'Baby Olivia, 5 bulan · Tangerang',
    text: 'Sangat rekomendasi buat new parents yang masih takut memandikan atau memijat bayi sendiri. Minyaknya alami, wanginya lembut dan tidak menyengat. Akan jadi langganan rutin tiap 2 minggu.',
  },
]
</script>
