<script setup lang="ts">
defineProps<{
  number: number
  captain: {
    name: string
    image: string
  }
}>()
</script>

<template>
  <article class="grid grid-cols-[minmax(120px,.8fr)_minmax(0,1.2fr)] items-start gap-5 rounded-[9px] border border-coconut-line bg-coconut-card p-[22px] max-[480px]:grid-cols-[minmax(90px,.7fr)_minmax(0,1.3fr)] max-[480px]:gap-3 max-[480px]:p-[14px]">
    <img class="h-full max-h-[360px] w-full rounded-md object-contain object-top max-[480px]:max-h-[280px]" :src="captain.image" :alt="`Ilustración de ${captain.name}`" loading="lazy">
    <div class="min-w-0">
      <div class="flex justify-between gap-2 text-[9px] tracking-[.12em] text-coconut-green max-[480px]:flex-wrap"><span class="max-[480px]:text-[8px]">CAPIT&Aacute;N {{ String(number).padStart(2, '0') }}</span><span class="text-coconut-gold max-[480px]:text-[8px]">POR DEFINIR</span></div>
      <h2 class="mt-[10px] font-display text-[22px] font-semibold">{{ captain.name }}</h2>
      <dl class="my-4">
        <dt class="mt-[14px] text-[12px] font-bold text-coconut-dt">Tintas</dt><dd class="my-1 text-[13px] leading-[1.75] text-coconut-muted-strong">Completa las tres tintas, incluyendo las del Capit&aacute;n.</dd>
        <dt class="mt-[14px] text-[12px] font-bold text-coconut-dt">Habilidad</dt><dd class="my-1 text-[13px] leading-[1.75] text-coconut-muted-strong">A&ntilde;ade aqu&iacute; la habilidad de Capit&aacute;n.</dd>
        <dt class="mt-[14px] text-[12px] font-bold text-coconut-dt">Sinergias y notas</dt><dd class="my-1 text-[13px] leading-[1.75] text-coconut-muted-strong">Ideas de mazo y pruebas para este Capit&aacute;n.</dd>
      </dl>
      <div class="border-t border-coconut-line pt-[14px] text-[11px] leading-[1.75] text-coconut-muted-strong">Estado: En pruebas - Descartado - Competitivo</div>
    </div>
  </article>
</template>
