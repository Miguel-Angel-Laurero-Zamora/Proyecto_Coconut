<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="mx-auto max-w-[1000px]">
    <section class="relative isolate mt-8 flex min-h-[440px] items-center justify-center overflow-hidden rounded-2xl border border-coconut-line max-[800px]:min-h-[380px] max-[480px]:min-h-[320px]" aria-labelledby="home-hero-title">
      <img class="absolute inset-0 -z-10 size-full object-cover" src="/logo.jpg" alt="" fetchpriority="high">
      <div class="m-6 max-w-xl rounded-xl border border-white/10 bg-coconut-bg/65 p-6 text-center shadow-xl backdrop-blur-sm max-[480px]:m-3 max-[480px]:p-4">
        <p class="text-[10px] font-bold tracking-[.2em] text-coconut-green">DISNEY LORCANA</p>
        <h1 id="home-hero-title" class="my-3 font-display text-[clamp(36px,6vw,60px)] leading-tight font-bold text-coconut-text">Formato Coconut</h1>
        <p class="mx-auto max-w-[600px] text-[15px] leading-[1.8] text-coconut-muted">Una modalidad multijugador en beta donde tu Capit&aacute;n define las tintas y marca el rumbo de la partida.</p>
        <RouterLink class="mt-4 inline-block rounded-[5px] bg-coconut-gold px-[17px] py-3 text-[13px] font-bold text-coconut-sidebar no-underline" to="/reglas">Explorar las reglas <span aria-hidden="true">→</span></RouterLink>
      </div>
    </section>
    <section class="py-[55px] pb-10">
      <p class="text-[10px] font-bold tracking-[.2em] text-coconut-green">EMPIEZA POR AQU&Iacute;</p>
      <h2 class="my-3 font-display text-[clamp(26px,3vw,38px)] font-semibold">Una gu&iacute;a para jugar y construir</h2>
      <p class="max-w-[700px] text-[15px] leading-[1.8] text-coconut-muted">Consulta las reglas, registra posibles Capitanes y prepara tu estrategia singleton.</p>
      <RouterLink class="mt-4 inline-block rounded-[5px] bg-coconut-gold px-[17px] py-3 text-[13px] font-bold text-coconut-sidebar no-underline" to="/reglas">Ver reglas <span aria-hidden="true">-</span></RouterLink>
    </section>
    <section class="grid grid-cols-3 gap-[14px] max-[800px]:gap-2" aria-label="Resumen del formato">
      <article class="rounded-[9px] border border-coconut-line bg-coconut-card p-[22px] max-[800px]:p-[14px]"><strong class="block font-display text-[38px] font-bold text-coconut-gold max-[480px]:text-[30px]">60</strong><span class="text-[12px] text-coconut-muted-strong max-[480px]:text-[10px]">cartas por mazo</span></article>
      <article class="rounded-[9px] border border-coconut-line bg-coconut-card p-[22px] max-[800px]:p-[14px]"><strong class="block font-display text-[38px] font-bold text-coconut-gold max-[480px]:text-[30px]">3</strong><span class="text-[12px] text-coconut-muted-strong max-[480px]:text-[10px]">tintas elegidas</span></article>
      <article class="rounded-[9px] border border-coconut-line bg-coconut-card p-[22px] max-[800px]:p-[14px]"><strong class="block font-display text-[38px] font-bold text-coconut-gold max-[480px]:text-[30px]">25</strong><span class="text-[12px] text-coconut-muted-strong max-[480px]:text-[10px]">lore para ganar</span></article>
    </section>
    <p class="my-[38px] text-xs text-coconut-grey">Formato Coconut en fase beta. Las reglas y los Capitanes pueden evolucionar con las pruebas.</p>
  </div>
</template>
