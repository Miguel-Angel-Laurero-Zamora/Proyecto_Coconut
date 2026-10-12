<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
import RuleCard from '../components/RuleCard.vue'
const rules = [
  { value: '60', title: 'Tama\u00f1o del mazo', description: 'El mazo debe tener exactamente 60 cartas.' },
  { value: '3', title: 'Tintas', description: 'Elige tres tintas e incluye las correspondientes a tu Capit\u00e1n.' },
  { value: '1\u00d7', title: 'Singleton', description: 'Una copia de cada carta; el Capit\u00e1n admite hasta cuatro copias.' },
]
</script>

<template>
  <div class="mx-auto max-w-[1000px]"><PageHeader eyebrow="01 &middot; REGLAS" title="Reglas del formato" description="La estructura b&aacute;sica para preparar una partida Coconut." />
    <section class="border-b border-coconut-border py-12">
      <h2 class="mb-6 font-display text-[clamp(26px,3vw,38px)] font-semibold">Construcci&oacute;n del mazo</h2>
      <div class="grid grid-cols-3 gap-[14px] max-[800px]:grid-cols-1"><RuleCard v-for="rule in rules" :key="rule.title" v-bind="rule" /></div>
    </section>
    <section class="grid grid-cols-[1fr_2fr] items-center gap-5 border-b border-coconut-border py-12 max-[800px]:grid-cols-1 max-[800px]:gap-[5px]">
      <p class="m-0 text-[10px] font-bold tracking-[.2em] text-coconut-green">CONDICI&Oacute;N DE VICTORIA</p>
      <div><h2 class="my-3 font-display text-[clamp(26px,3vw,38px)] font-semibold text-coconut-gold">Alcanza 25 de lore</h2><p class="max-w-[700px] text-[15px] leading-[1.8] text-coconut-muted">El primer jugador en llegar a 25 o m&aacute;s de lore gana inmediatamente.</p></div>
    </section>
    <section class="border-b border-coconut-border py-12">
      <h2 class="mb-6 font-display text-[clamp(26px,3vw,38px)] font-semibold">Din&aacute;mica multijugador</h2>
      <p class="max-w-[760px] text-[15px] leading-[1.8] text-coconut-muted">Coconut premia la diplomacia, el control de amenazas globales y la sinergia entre Capitanes. En singleton, el robo, la b&uacute;squeda y una curva de coste inteligente ayudan a mantener la consistencia.</p>
    </section>
  </div>
</template>
