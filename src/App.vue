<script setup lang="ts">
import AppSidebar from './components/AppSidebar.vue'
</script>

<template>
  <div class="min-h-screen bg-coconut-bg text-coconut-text [font-synthesis:none] [text-rendering:optimizeLegibility]">
    <AppSidebar />
    <main class="ml-[250px] max-w-[1400px] px-[7%] max-[800px]:mx-0 max-[800px]:px-[6%]"><RouterView /></main>
  </div>
</template>

