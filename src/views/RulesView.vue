<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
import RuleCard from '../components/RuleCard.vue'
const rules = [
  { value: '60', title: 'Tama\u00f1o del mazo', description: 'El mazo debe tener exactamente 60 cartas.' },
  { value: '3', title: 'Tintas', description: 'Elige tres tintas e incluye las correspondientes a tu Capit\u00e1n.' },
  { value: '1\u00d7', title: 'Singleton', description: 'Una copia de cada carta; el Capit\u00e1n admite hasta cuatro copias.' },
]
</script>

<template>
  <div class="page"><PageHeader eyebrow="01 &middot; REGLAS" title="Reglas del formato" description="La estructura b&aacute;sica para preparar una partida Coconut." />
    <section class="content-section"><h2>Construcci&oacute;n del mazo</h2><div class="rule-grid"><RuleCard v-for="rule in rules" :key="rule.title" v-bind="rule" /></div></section>
    <section class="content-section victory-panel"><p class="eyebrow">CONDICI&Oacute;N DE VICTORIA</p><div><h2>Alcanza 25 de lore</h2><p>El primer jugador en llegar a 25 o m&aacute;s de lore gana inmediatamente.</p></div></section>
    <section class="content-section"><h2>Din&aacute;mica multijugador</h2><p class="body-copy">Coconut premia la diplomacia, el control de amenazas globales y la sinergia entre Capitanes. En singleton, el robo, la b&uacute;squeda y una curva de coste inteligente ayudan a mantener la consistencia.</p></section>
  </div>
</template>

