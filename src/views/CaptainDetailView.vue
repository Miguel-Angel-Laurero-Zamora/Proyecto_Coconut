<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { captains } from '../data/captains'
import decks from '../data/decks.json'

const route = useRoute()
const captain = computed(() => captains.find(({ slug }) => slug === route.params.slug))
const captainDeck = computed(() => Object.entries(decks).find(([slug]) => slug === captain.value?.slug)?.[1])
const deckZoomOrigin = ref('50% 50%')
const copyStatus = ref('')

async function copyDeckList() {
  const deck = captainDeck.value
  if (!deck) return

  const deckList = deck.cards.map(({ quantity, name }) => `${quantity} ${name}`).join('\n')
  copyStatus.value = ''

  try {
    await navigator.clipboard.writeText(deckList)
    copyStatus.value = 'Lista copiada. Ya puedes pegarla en Dreamborn.ink u otro sitio compatible.'
  } catch {
    copyStatus.value = 'No se pudo copiar. Comprueba los permisos del navegador e inténtalo de nuevo.'
  }
}

function updateDeckZoom(event: MouseEvent) {
  const bounds = event.currentTarget instanceof HTMLElement
    ? event.currentTarget.getBoundingClientRect()
    : null

  if (!bounds) return

  const x = ((event.clientX - bounds.left) / bounds.width) * 100
  const y = ((event.clientY - bounds.top) / bounds.height) * 100
  deckZoomOrigin.value = `${x}% ${y}%`
}

function resetDeckZoom() {
  deckZoomOrigin.value = '50% 50%'
}
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
        <img class="mx-auto block h-auto w-full max-w-[480px] rounded-lg object-contain object-top" :src="captain.image" :alt="`Ilustración de ${captain.name}`">
        <div class="space-y-7">
          <section>
            <h2 class="font-display text-2xl font-semibold text-coconut-gold">Tintas</h2>
            <div class="flex gap-3">
              <figure v-for="ink in captain.inks" :key="ink.name" class="m-0 flex items-center gap-2">
                <img class="size-10 object-contain" :src="ink.image" :alt="ink.name" :title="ink.name">
                <figcaption class="text-sm text-coconut-muted">{{ ink.name }}</figcaption>
              </figure>
            </div>
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

      <section v-if="captain.deckImage || captainDeck" class="mt-12 border-t border-coconut-border pt-8">
        <div class="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 class="m-0 font-display text-2xl font-semibold text-coconut-gold">Deck de ejemplo</h2>
          <button v-if="captainDeck" type="button" class="rounded-md border border-coconut-green px-4 py-2 text-sm font-semibold text-coconut-green transition-colors hover:bg-coconut-active hover:text-coconut-gold" @click="copyDeckList">
            Exportar lista
          </button>
        </div>
        <p v-if="copyStatus" class="mb-4 text-sm text-coconut-muted" role="status" aria-live="polite">{{ copyStatus }}</p>
        <figure v-if="captain.deckImage" class="m-0 rounded-lg border border-coconut-line bg-coconut-card p-2 sm:p-4">
          <div class="group mx-auto max-w-[900px] overflow-hidden rounded-md" @mousemove="updateDeckZoom" @mouseleave="resetDeckZoom">
            <img class="block h-auto w-full cursor-zoom-in transition-transform duration-200 ease-out group-hover:scale-[3] group-hover:cursor-zoom-out motion-reduce:transition-none" :style="{ transformOrigin: deckZoomOrigin }" :src="captain.deckImage" :alt="`Deck de ejemplo de ${captain.name}`" loading="lazy" decoding="async">
          </div>
        </figure>
      </section>
    </template>
    <section v-else class="py-16">
      <h1 class="font-display text-4xl font-bold">Capit&aacute;n no encontrado</h1>
      <RouterLink to="/capitanes" class="text-coconut-green hover:text-coconut-gold">Volver a capitanes</RouterLink>
    </section>
  </div>
</template>
