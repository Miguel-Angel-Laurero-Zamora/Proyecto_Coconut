<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
const tips = [
  { title: 'Combina las tintas con intenci\u00f3n', text: 'Busca cartas que compensen las debilidades de cada color.' },
  { title: 'Reduce la varianza del singleton', text: 'Prioriza motores de robo, tutores y cartas con efectos vers\u00e1tiles.' },
  { title: 'Protege a tu Capit\u00e1n', text: 'Incluye respuestas para sostener la estrategia central de tu mazo.' },
]
</script>

<template>
  <div class="page"><PageHeader eyebrow="03 &middot; TEAMBUILDING" title="Construcci&oacute;n de mazo" description="Tres tintas y una copia por carta hacen que cada elecci&oacute;n cuente." />
    <ol class="tip-list"><li v-for="(tip, index) in tips" :key="tip.title"><span class="tip-number">0{{ index + 1 }}</span><div><h2>{{ tip.title }}</h2><p>{{ tip.text }}</p></div></li></ol>
  </div>
</template>


