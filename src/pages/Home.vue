<template>
  <main class="min-h-screen bg-[#f4e7cf] text-[#4a071d]">
    <div class="mx-auto max-w-[430px] bg-[#fffaf6] shadow-xl overflow-hidden">

      <!-- Hero -->
      <section
        class="relative min-h-screen flex flex-col justify-end gap-8 px-6 pb-12 text-center bg-cover bg-center"
        style="background-image: linear-gradient(to bottom, rgba(111,15,47,0.05), rgba(255,250,246,0.96)), url('/IMG_3575.png');"
      >
        <div>

          <h1 class="font-serif text-5xl leading-tight mb-4 text-[#6f0f2f]">
            Julian & Abigail
          </h1>

          <p class="tracking-[0.25em] text-sm uppercase text-[#4a071d]">
            Invite you to their marriage ceremony
          </p>
        </div>

        <div class="bg-white/70 backdrop-blur-sm rounded-3xl py-4 px-6 shadow-lg border border-[#f3c7cf]">

        <p class="uppercase tracking-[0.4em] text-xs text-[#6f0f2f] mb-3">
            Save The Date
        </p>

        <h2 class="font-serif text-4xl text-[#6f0f2f] leading-none">
            August 08
        </h2>

        <p class="font-serif text-2xl text-[#d8a0aa] mt-2">
            2026
        </p>

        <div class="w-20 h-px bg-[#c8a45d] mx-auto my-3"></div>

        <p class="uppercase tracking-[0.25em] text-sm text-[#4a071d]">
            Saturday • 11:00 AM
        </p>

        </div>
      </section>

      <!-- Countdown -->
      <section class="px-6 py-12 text-center bg-[#fffaf6]">
        <img src="/src/assets/IMG_3576.JPG" class="w-full rounded-t-2xl object-cover h-80 mb-8 border border-[#f3c7cf]" />

        <p class="font-serif italic text-3xl text-[#d8a0aa]">the</p>
        <h2 class="font-serif text-4xl uppercase -mt-2 text-[#6f0f2f]">Countdown</h2>
        <p class="tracking-widest text-xs uppercase mb-6 text-[#4a071d]">
          To our forever begins in
        </p>

        <div class="grid grid-cols-4 gap-2 text-center">
          <div>
            <p class="font-serif text-3xl text-[#6f0f2f]">{{ time.days }}</p>
            <span class="text-[10px] uppercase text-[#4a071d]">Days</span>
          </div>
          <div>
            <p class="font-serif text-3xl text-[#6f0f2f]">{{ time.hours }}</p>
            <span class="text-[10px] uppercase text-[#4a071d]">Hours</span>
          </div>
          <div>
            <p class="font-serif text-3xl text-[#6f0f2f]">{{ time.minutes }}</p>
            <span class="text-[10px] uppercase text-[#4a071d]">Minutes</span>
          </div>
          <div>
            <p class="font-serif text-3xl text-[#6f0f2f]">{{ time.seconds }}</p>
            <span class="text-[10px] uppercase text-[#4a071d]">Seconds</span>
          </div>
        </div>
      </section>

      <!-- Details -->
      <section class="px-6 py-10 text-center bg-[#fff1f3]">
        <p class="font-serif italic text-2xl text-[#d8a0aa]">the</p>
        <h2 class="font-serif text-4xl uppercase mb-8 text-[#6f0f2f]">Details</h2>

        <div class="border border-[#c8a45d] rounded-2xl overflow-hidden bg-[#fffaf6]">
          <img src="/src/assets/IMG_3769.JPG" class="w-full h-56 object-cover" />

          <div class="bg-[#f4e7cf] py-3 border-t border-b border-[#c8a45d]">
            <h3 class="font-serif text-xl uppercase text-[#6f0f2f]">Location</h3>
          </div>

          <div class="px-5 py-6">
            <p class="font-serif text-lg text-[#6f0f2f]">Eastwood Park New Testament Church</p>
            <p class="text-xs uppercase tracking-widest mt-2 text-[#4a071d]">
              49-51 Eastwood Park Road<br>
              Kingston 10
            </p>
          </div>
        </div>

        <a
          href="https://maps.app.goo.gl/wZ7XhAh48vekRScM9?g_st=iw"
          class="mt-8 inline-block rounded-full border border-[#c8a45d] bg-gradient-to-r from-[#f4e7cf] via-[#fffaf6] to-[#f4e7cf] px-10 py-3 font-serif text-lg uppercase shadow-md text-[#4a071d]"
        >
          Google Map
        </a>
      </section>

      <!-- Timeline -->
      <section class="px-6 py-12 text-center bg-[#f3c7cf]/40">
        <p class="font-serif italic text-2xl text-[#d8a0aa]">Wedding</p>
        <h2 class="font-serif text-4xl uppercase tracking-wide text-[#6f0f2f]">Timeline</h2>
        <div class="w-20 h-px bg-[#c8a45d] mx-auto my-6"></div>

        <div class="space-y-6 text-sm">
          <div>
            <p class="font-bold text-[#6f0f2f]">11:00 AM</p>
            <p class="uppercase tracking-widest text-[#4a071d]">Seating Begins</p>
          </div>
          <div>
            <p class="font-bold text-[#6f0f2f]">11:30 AM</p>
            <p class="uppercase tracking-widest text-[#4a071d]">Ceremony</p>
          </div>
        </div>
      </section>

      <!-- Reception -->
<section class="px-6 py-12 text-center bg-[#6f0f2f] text-[#fffaf6]">

  <p class="font-serif italic text-2xl text-[#f4e7cf]">
    the
  </p>

  <h2 class="font-serif text-4xl uppercase tracking-wide text-white">
    Dress Code
  </h2>

  <div class="w-20 h-px bg-[#c8a45d] mx-auto my-6"></div>

  <div class="space-y-5 text-xs uppercase mt-4">
    <div>
      <p class="text-[#f4e7cf]">For men:</p>
      <p class="font-serif text-lg">Suit & Tie</p>
    </div>

    <div>
      <p class="text-[#f4e7cf]">For women:</p>
      <p class="font-serif text-lg">Cocktail Dress</p>
    </div>
  </div>

</section>

      <!-- Registry -->
      <section class="px-6 py-12 text-center bg-[#fff1f3]">
        <SectionTitle title="Wedding Registry" />

        <p class="text-xs leading-6 uppercase tracking-wide mb-8 text-[#4a071d]">
          Your presence at our wedding is the greatest gift. If you would like to give something more, we have created a registry.
        </p>

<RouterLink
  to="/registry"
  class="rounded-full border border-[#c8a45d] bg-[#6f0f2f] px-8 py-3 font-serif uppercase shadow-md text-[#fffaf6]"
>
  Wedding Registry
</RouterLink>
      </section>

      <!-- RSVP -->
      <section class="px-6 py-12">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeiFLvlHTZUMy5RCQacDMphJ1IQH0tDf4EX_QYPEHbA5k4_ZA/viewform?embedded=true" width="100%" height="1350" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </section>

      <!-- Thank You -->
      <section
        class="relative min-h-screen flex items-end justify-center px-6 pb-20 text-center bg-cover bg-center"
        style="background-image: linear-gradient(to bottom, rgba(255,250,246,0.05), rgba(255,250,246,0.95)), url('/IMG_3576.JPG');"
      >
        <div class="w-full">
          <h2 class="font-serif italic text-6xl text-[#b39a72] drop-shadow-sm">
            Thank you!
          </h2>

          <p class="mt-6 text-xs uppercase tracking-[0.3em] text-[#6f0f2f]">
            We can’t wait to celebrate with you
          </p>

          <div class="mt-8 flex justify-center gap-4">
            <span class="h-2 w-2 rounded-full bg-[#f3c7cf]"></span>
            <span class="h-2 w-2 rounded-full bg-[#c8a45d]"></span>
            <span class="h-2 w-2 rounded-full bg-[#6f0f2f]"></span>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const weddingDate = new Date('2026-08-08T11:00:00')

const time = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

let timer

function updateCountdown() {
  const now = new Date()
  const difference = weddingDate - now

  if (difference <= 0) {
    clearInterval(timer)

    time.value = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }

    return
  }

  time.value.days = Math.floor(difference / (1000 * 60 * 60 * 24))
  time.value.hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  time.value.minutes = Math.floor((difference / (1000 * 60)) % 60)
  time.value.seconds = Math.floor((difference / 1000) % 60)
}

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

const SectionTitle = {
  props: ['title', 'dark'],
  template: `
    <div
      :class="[
        'border rounded-full py-2 px-4 mb-6',
        dark
          ? 'border-[#f4e7cf] text-[#fffaf6]'
          : 'border-[#c8a45d] text-[#6f0f2f]'
      ]"
    >
      <h2 class="font-serif text-xl uppercase tracking-wide">{{ title }}</h2>
    </div>
  `
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid #d8a0aa;
  border-radius: 14px;
  padding: 14px 16px;
  font-size: 14px;
  background: #fffaf6;
  color: #4a071d;
  outline: none;
}

.input::placeholder {
  color: #9a6a75;
}

.input:focus {
  border-color: #6f0f2f;
  box-shadow: 0 0 0 2px rgba(111, 15, 47, 0.12);
}
</style>