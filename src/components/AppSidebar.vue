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
  <aside class="fixed inset-y-0 left-0 z-20 flex w-[250px] flex-col border-r border-coconut-border bg-coconut-sidebar px-[22px] py-8 max-[800px]:sticky max-[800px]:top-0 max-[800px]:block max-[800px]:h-auto max-[800px]:w-full max-[800px]:border-x-0 max-[800px]:border-t-0 max-[800px]:border-b max-[800px]:px-4 max-[800px]:py-[13px]">
    <RouterLink class="font-bold tracking-[.12em] text-coconut-brand no-underline max-[800px]:mb-3 max-[800px]:block" to="/">COCONUT<span class="mt-[5px] block text-[10px] text-coconut-green max-[800px]:ml-[6px] max-[800px]:inline">LORCANA - SET 14</span></RouterLink>
    <p class="mt-[58px] mb-[14px] text-[10px] font-bold tracking-[.2em] text-coconut-green max-[800px]:hidden">GU&Iacute;A DEL FORMATO</p>
    <nav class="grid gap-[5px] max-[800px]:flex max-[800px]:gap-[3px] max-[800px]:overflow-auto" aria-label="Navegaci&oacute;n principal">
      <RouterLink v-for="link in links" :key="link.to" :to="link.to" exact-active-class="bg-coconut-active text-coconut-gold" class="rounded-md px-[11px] py-3 text-[13px] text-[#c1c9ba] no-underline hover:bg-coconut-active hover:text-coconut-gold max-[800px]:shrink-0 max-[800px]:whitespace-nowrap max-[800px]:px-[9px] max-[800px]:py-[9px] max-[800px]:text-[11px]">{{ link.label }}</RouterLink>
    </nav>
    <div class="mt-auto flex items-center gap-[9px] text-[10px] tracking-[.15em] text-[#bec9b4] max-[800px]:hidden"><span class="size-[7px] rounded-full bg-coconut-gold"></span> FORMATO EN BETA</div>
    WIP
  </aside>
</template>



