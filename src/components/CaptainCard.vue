<script setup lang="ts">
defineProps<{
  number: number
  captain: {
    name: string
    image: string
  }
}>()
</script>

<template>
  <article class="captain-card">
    <img class="captain-portrait" :src="captain.image" :alt="`Ilustración de ${captain.name}`" loading="lazy">
    <div class="captain-meta"><span>CAPIT&Aacute;N {{ String(number).padStart(2, '0') }}</span><span class="status">POR DEFINIR</span></div>
    <h2>{{ captain.name }}</h2>
    <dl><dt>Tintas</dt><dd>Completa las tres tintas, incluyendo las del Capit&aacute;n.</dd><dt>Habilidad</dt><dd>A&ntilde;ade aqu&iacute; la habilidad de Capit&aacute;n.</dd><dt>Sinergias y notas</dt><dd>Ideas de mazo y pruebas para este Capit&aacute;n.</dd></dl>
    <div class="captain-status">Estado: En pruebas - Descartado - Competitivo</div>
  </article>
</template>

