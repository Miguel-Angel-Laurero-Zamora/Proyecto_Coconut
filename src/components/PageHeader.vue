<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; description?: string }>()
</script>

<template>
  <header class="flex min-h-[330px] flex-col items-start justify-center border-b border-coconut-border pt-[75px] pb-[55px] max-[800px]:min-h-[270px] max-[800px]:py-[50px]">
    <p class="text-[10px] font-bold tracking-[.2em] text-coconut-green">{{ eyebrow }}</p>
    <h1 class="my-3 font-display text-[clamp(42px,6vw,68px)] leading-[1.1] font-bold text-coconut-text">{{ title }}</h1>
    <p v-if="description" class="max-w-[700px] text-[15px] leading-[1.8] text-coconut-muted">{{ description }}</p>
  </header>
</template>
