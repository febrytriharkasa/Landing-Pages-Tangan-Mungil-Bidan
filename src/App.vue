<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import HeaderNav from './components/HeaderNav.vue'
import HeroSection from './components/HeroSection.vue'
import BookingBar from './components/BookingBar.vue'
import AboutSection from './components/AboutSection.vue'
import WhyUsSection from './components/WhyUsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import StoriesSection from './components/StoriesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSite from './components/FooterSite.vue'
import FloatingWhatsApp from './components/FloatingWhatsApp.vue'

function handleKeydown(event) {
  if (event.key === 'Escape') {
    const menu = document.querySelector('[aria-expanded="true"]')
    if (menu) menu.click()
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <HeaderNav />
  <main id="main-content">
    <HeroSection />
    <BookingBar />
    <AboutSection />
    <WhyUsSection />
    <ServicesSection />
    <StoriesSection />
    <ContactSection />
  </main>
  <FooterSite />
  <FloatingWhatsApp />
</template>
