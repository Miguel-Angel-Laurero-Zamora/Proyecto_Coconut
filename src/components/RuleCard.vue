<script setup lang="ts">
defineProps<{ value: string; title: string; description: string }>()
</script>

<template>
  <article class="rounded-[9px] border border-coconut-line bg-coconut-card p-[22px]">
    <strong class="font-display text-4xl font-bold text-coconut-gold">{{ value }}</strong>
    <h2 class="my-[15px] mb-2 font-sans text-[17px] font-semibold">{{ title }}</h2>
    <p class="text-[13px] leading-[1.75] text-coconut-muted-strong">{{ description }}</p>
  </article>
</template>

