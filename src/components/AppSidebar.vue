<script setup lang="ts">
import { RouterLink } from 'vue-router'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/reglas', label: 'Reglas del formato' },
  { to: '/capitanes', label: 'Capitanes' },
  { to: '/construccion', label: 'Construcci\u00f3n de mazo' },
]
</script>

<template>
  <aside class="sidebar">
    <RouterLink class="brand" to="/">COCONUT<span>LORCANA - SET 14</span></RouterLink>
    <p class="nav-label">GU&Iacute;A DEL FORMATO</p>
    <nav aria-label="Navegaci&oacute;n principal">
      <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="nav-link">{{ link.label }}</RouterLink>
    </nav>
    <div class="beta"><span></span> FORMATO EN BETA</div>
    WIP
  </aside>
</template>




