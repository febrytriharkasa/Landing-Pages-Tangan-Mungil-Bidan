<template>
  <section id="booking" class="relative z-[2] -mt-9 max-sm:-mt-6" aria-labelledby="booking-title">
    <div
      class="mx-auto w-[min(1180px,calc(100%-48px))] max-w-[1180px] rounded-[28px] border border-[#f8d8df] bg-white p-5 pb-3.5 max-sm:w-[min(100%-32px,1180px)] max-sm:rounded-3xl max-sm:p-4 max-sm:pb-3"
    >
      <!-- <div class="booking-intro">
        <h2 id="booking-title" class="text-xl font-bold leading-snug tracking-[-0.03em] text-ink">
          Mulai dari jadwal yang nyaman
        </h2>
      </div> -->
      <form class="mt-4 grid grid-cols-[1.1fr_1fr_1fr_auto] items-end gap-2.5 max-lg:grid-cols-3 max-sm:mt-2 max-sm:grid-cols-1 max-sm:gap-0" @submit.prevent="submitBooking">
        <div class="min-w-0 px-3 max-sm:border-b max-sm:border-[#f0dfe2] max-sm:py-2.5 max-sm:px-2">
          <label for="service" class="mb-1.5 block text-[10px] font-bold tracking-[0.06em] text-berry uppercase">
            Pilih layanan
          </label>
          <select id="service" v-model="selectedService" class="max-w-full min-h-[44px] w-full border-0 bg-transparent text-[13px] font-semibold text-ink focus:outline-none max-sm:min-h-[38px] max-sm:text-xs">
            <option>Baby Spa &amp; Gentle Massage</option>
            <option>Pijat Hamil &amp; Postpartum</option>
            <option>Paket Combo Bunda &amp; Bayi</option>
          </select>
        </div>
        <div class="min-w-0 border-l border-[#f0dfe2] px-3 max-sm:border-t-0 max-sm:border-b max-sm:border-l-0 max-sm:py-2.5 max-sm:px-2">
          <label for="location" class="mb-1.5 block text-[10px] font-bold tracking-[0.06em] text-berry uppercase">
            Wilayah
          </label>
          <select id="location" v-model="selectedLocation" class="max-w-full min-h-[44px] w-full border-0 bg-transparent text-[13px] font-semibold text-ink focus:outline-none max-sm:min-h-[38px] max-sm:text-xs">
            <option>Sidoarjo &amp; sekitarnya</option>
            <option>Surabaya</option>
            <option>Mojokerto</option>
            <option>Gresik</option>
          </select>
        </div>
        <div class="min-w-0 border-l border-[#f0dfe2] px-3 max-sm:border-t-0 max-sm:border-b max-sm:border-l-0 max-sm:py-2.5 max-sm:px-2">
          <label for="visit-date" class="mb-1.5 block text-[10px] font-bold tracking-[0.06em] text-berry uppercase">
            Tanggal kunjungan
          </label>
          <input
            id="visit-date"
            v-model="selectedDate"
            type="date"
            :max="maxDate"
            class="max-w-full min-h-[44px] w-full border-0 bg-transparent text-[13px] font-semibold text-ink focus:outline-none max-sm:min-h-[38px] max-sm:text-xs"
          />
        </div>
        <button
          class="inline-flex min-h-[46px] min-w-[150px] items-center justify-center rounded-full bg-berry-bright px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-berry-dark disabled:cursor-not-allowed disabled:opacity-65 max-lg:col-span-full max-lg:w-full max-sm:mt-3"
          type="submit"
          :disabled="bookingState === 'loading'"
        >
          {{ bookingState === 'loading' ? 'Menyiapkan...' : 'Cek slot terapis' }}
        </button>
      </form>
      <p
        class="mx-3 mt-2.5 min-h-[18px] text-[11px] leading-relaxed"
        :class="{
          'text-[#93000a]': bookingState === 'error' || bookingState === 'empty',
          'text-sage': bookingState === 'success',
          'text-muted': bookingState === 'idle' || bookingState === 'loading',
        }"
        role="status"
        aria-live="polite"
      >
        {{ bookingMessage }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { whatsappNumber } from '../utils'

const bookingState = ref('idle')
const bookingMessage = ref('Pilih layanan, wilayah, dan tanggal untuk memeriksa permintaan kunjungan.')
const selectedService = ref('Baby Spa & Gentle Massage')
const selectedLocation = ref('Sidoarjo & sekitarnya')
const selectedDate = ref('')

const maxDate = computed(() => {
  const date = new Date()
  date.setMonth(date.getMonth() + 3)
  return date.toISOString().split('T')[0]
})

function submitBooking() {
  if (!selectedDate.value) {
    bookingState.value = 'empty'
    bookingMessage.value = 'Tanggal kunjungan belum dipilih. Pilih tanggal agar admin dapat membantu mengecek jadwal.'
    return
  }
  bookingState.value = 'loading'
  bookingMessage.value = 'Menyiapkan pesan WhatsApp...'
  const message = `Halo Bidan Tangan Mungil, saya ingin mengecek jadwal kunjungan.%0A%0ALayanan: ${selectedService.value}%0AWilayah: ${selectedLocation.value}%0ATanggal: ${selectedDate.value}`
  window.setTimeout(() => {
    try {
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer')
      bookingState.value = 'success'
      bookingMessage.value = 'Pesan sudah disiapkan. Lanjutkan percakapan di WhatsApp untuk konfirmasi.'
    } catch {
      bookingState.value = 'error'
      bookingMessage.value = 'WhatsApp tidak dapat dibuka dari browser ini. Hubungi admin melalui tombol WhatsApp.'
    }
  }, 350)
}
</script>
