<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
import CaptainCard from '../components/CaptainCard.vue'

const captains = [
  { name: 'Ariel', image: '/img/capitanes/Ariel.jpg' },
  { name: 'Donald', image: '/img/capitanes/Donald.jpg' },
  { name: 'Dumbo', image: '/img/capitanes/Dumbo.jpg' },
  { name: 'John Silver', image: '/img/capitanes/John Silver.jpg' },
  { name: 'Mickey', image: '/img/capitanes/Mickey.jpg' },
  { name: 'Moana', image: '/img/capitanes/Moana.jpg' },
]
</script>

<template>
  <div class="page"><PageHeader eyebrow="02 - REGISTRO Y PRUEBAS" title="Capitanes" description="Anota tintas, habilidades y sinergias para los posibles Capitanes del set 14." />
    <section class="captain-grid"><CaptainCard v-for="(captain, index) in captains" :key="captain.name" :captain="captain" :number="index + 1" /></section>
  </div>
</template>

