<script setup lang="ts">
defineProps<{ value: string; title: string; description: string }>()
</script>

<template>
  <article class="rule-card"><strong>{{ value }}</strong><h2>{{ title }}</h2><p>{{ description }}</p></article>
</template>


