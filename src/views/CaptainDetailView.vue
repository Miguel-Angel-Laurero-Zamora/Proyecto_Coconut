<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { captains } from '../data/captains'

const route = useRoute()
const captain = computed(() => captains.find(({ slug }) => slug === route.params.slug))
</script>

<template>
  <div class="mx-auto max-w-[1000px]">
    <template v-if="captain">
      <header class="border-b border-coconut-border py-12">
        <RouterLink to="/capitanes" class="text-sm text-coconut-green no-underline hover:text-coconut-gold">← Volver a capitanes</RouterLink>
        <p class="mt-8 text-[10px] font-bold tracking-[.2em] text-coconut-green">FICHA DE CAPIT&Aacute;N</p>
        <h1 class="my-3 font-display text-[clamp(36px,6vw,60px)] font-bold">{{ captain.name }}</h1>
      </header>
      <section class="grid grid-cols-[minmax(220px,.8fr)_minmax(0,1.2fr)] gap-8 py-10 max-[700px]:grid-cols-1">
        <img class="max-h-[620px] w-full rounded-lg object-contain object-top" :src="captain.image" :alt="`Ilustración de ${captain.name}`">
        <div class="space-y-7">
          <section>
            <h2 class="font-display text-2xl font-semibold text-coconut-gold">Tintas</h2>
            <p class="text-sm leading-7 text-coconut-muted">Completa las tres tintas, incluyendo las del Capit&aacute;n.</p>
          </section>
          <section>
            <h2 class="font-display text-2xl font-semibold text-coconut-gold">Habilidad</h2>
            <p class="text-sm leading-7 text-coconut-muted">A&ntilde;ade aqu&iacute; la habilidad de Capit&aacute;n.</p>
          </section>
          <section>
            <h2 class="font-display text-2xl font-semibold text-coconut-gold">Sinergias y notas</h2>
            <p class="text-sm leading-7 text-coconut-muted">Ideas de mazo y pruebas para este Capit&aacute;n.</p>
          </section>
          <p class="border-t border-coconut-line pt-5 text-xs leading-6 text-coconut-muted-strong">Estado: En pruebas - Descartado - Competitivo</p>
        </div>
      </section>
    </template>
    <section v-else class="py-16">
      <h1 class="font-display text-4xl font-bold">Capit&aacute;n no encontrado</h1>
      <RouterLink to="/capitanes" class="text-coconut-green hover:text-coconut-gold">Volver a capitanes</RouterLink>
    </section>
  </div>
</template>
