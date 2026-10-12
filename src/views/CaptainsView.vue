<script setup lang="ts">
import { computed, ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import CaptainCard from '../components/CaptainCard.vue'
import { captains } from '../data/captains'

const pageSize = 6
const currentPage = ref(1)
const pageCount = computed(() => Math.ceil(captains.length / pageSize))
const visibleCaptains = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return captains.slice(start, start + pageSize)
})
</script>

<template>
  <div class="mx-auto max-w-[1000px]"><PageHeader eyebrow="02 - REGISTRO Y PRUEBAS" title="Capitanes" description="Anota tintas, habilidades y sinergias para los posibles Capitanes del set 14." />
    <section class="grid grid-cols-2 gap-[15px] py-[45px] max-[800px]:grid-cols-1">
      <CaptainCard
        v-for="(captain, index) in visibleCaptains"
        :key="captain.slug"
        :captain="captain"
        :number="(currentPage - 1) * pageSize + index + 1"
      />
    </section>
    <nav v-if="pageCount > 1" class="mb-12 flex items-center justify-center gap-2" aria-label="Paginación de capitanes">
      <button
        type="button"
        class="rounded-md border border-coconut-border px-4 py-2 text-sm text-coconut-text hover:border-coconut-gold disabled:cursor-not-allowed disabled:opacity-40"
        :disabled="currentPage === 1"
        @click="currentPage--"
      >Anterior</button>
      <button
        v-for="page in pageCount"
        :key="page"
        type="button"
        class="size-10 rounded-md border border-coconut-border text-sm text-coconut-text hover:border-coconut-gold"
        :class="{ 'border-coconut-gold bg-coconut-active text-coconut-gold': currentPage === page }"
        :aria-current="currentPage === page ? 'page' : undefined"
        :aria-label="`Página ${page}`"
        @click="currentPage = page"
      >{{ page }}</button>
      <button
        type="button"
        class="rounded-md border border-coconut-border px-4 py-2 text-sm text-coconut-text hover:border-coconut-gold disabled:cursor-not-allowed disabled:opacity-40"
        :disabled="currentPage === pageCount"
        @click="currentPage++"
      >Siguiente</button>
    </nav>
  </div>
</template>
