<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
const tips = [
  { title: 'Combina las tintas con intenci\u00f3n', text: 'Busca cartas que compensen las debilidades de cada color.' },
  { title: 'Reduce la varianza del singleton', text: 'Prioriza motores de robo, tutores y cartas con efectos vers\u00e1tiles.' },
  { title: 'Protege a tu Capit\u00e1n', text: 'Incluye respuestas para sostener la estrategia central de tu mazo.' },
]
</script>

<template>
  <div class="mx-auto max-w-[1000px]"><PageHeader eyebrow="03 &middot; TEAMBUILDING" title="Construcci&oacute;n de mazo" description="Tres tintas y una copia por carta hacen que cada elecci&oacute;n cuente." />
    <ol class="list-none py-[30px]">
      <li v-for="(tip, index) in tips" :key="tip.title" class="grid grid-cols-[55px_1fr] gap-[18px] border-b border-coconut-border py-[22px]">
        <span class="font-display text-xl font-semibold text-coconut-gold">0{{ index + 1 }}</span>
        <div><h2 class="mb-2 font-sans text-[19px] font-semibold">{{ tip.title }}</h2><p class="m-0 text-[13px] leading-[1.75] text-coconut-muted-strong">{{ tip.text }}</p></div>
      </li>
    </ol>
  </div>
</template>

