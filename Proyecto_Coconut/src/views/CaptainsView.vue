<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
import CaptainCard from '../components/CaptainCard.vue'
const captains = 10
</script>

<template>
  <div class="page"><PageHeader eyebrow="02 - REGISTRO Y PRUEBAS" title="Capitanes" description="Anota tintas, habilidades y sinergias para los posibles Capitanes del set 14." />
    <section class="captain-grid"><CaptainCard v-for="number in captains" :key="number" :number="number" /></section>
  </div>
</template>


