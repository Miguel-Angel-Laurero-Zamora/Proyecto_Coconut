<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageHeader from '../components/PageHeader.vue'
</script>

<template>
  <div class="page">
    <PageHeader eyebrow="DISNEY LORCANA - SET 14" title="Formato Coconut" description="Una modalidad multijugador en beta donde tu Capit&aacute;n define las tintas y marca el rumbo de la partida." />
    <section class="welcome-panel"><p class="eyebrow">EMPIEZA POR AQU&Iacute;</p><h2>Una gu&iacute;a para jugar y construir</h2><p>Consulta las reglas, registra posibles Capitanes y prepara tu estrategia singleton.</p><RouterLink class="button-link" to="/reglas">Ver reglas <span aria-hidden="true">-</span></RouterLink></section>
    <section class="overview-grid" aria-label="Resumen del formato"><article><strong>60</strong><span>cartas por mazo</span></article><article><strong>3</strong><span>tintas elegidas</span></article><article><strong>25</strong><span>lore para ganar</span></article></section>
    <p class="beta-note">Formato Coconut en fase beta. Las reglas y los Capitanes pueden evolucionar con las pruebas.</p>
  </div>
</template>


