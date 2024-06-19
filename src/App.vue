<script setup>
  import PriceRangeSlider from './components/PriceRangeSlider.vue';
  import TrialComponent from './components/TrialComponent.vue';
</script>

<template>
  <div class="font-manrope bg-[url('/src/assets/images/bg-pattern.svg')] bg-cover h-[70vh] w-screen">
    <header class="absolute inset-0 flex items-center justify-center">
      <img src="/src/assets/images/pattern-circles.svg" alt="Logo" class="w-auto h-auto max-w-full max-h-full scale-100 translate-y-[-130%] mt-[-50px]">
      <div class="absolute inset-0 mt-1 sm:mt-4">
        <h1 class="relative text-[1.3rem] font-extrabold text-dark-desaturated-blue mt-24 text-center">Simple, traffic-based pricing</h1>
        <p class="text-center text-grayish-blue text-[0.95rem] font-medium mt-2 px-20 leading-relaxed">Sign-up for our 30-day trial. No credit card required.</p>
      </div>
    </header>

    <div class="relative">
      <PriceRangeSlider />
      <TrialComponent />
    </div>
  </div>
</template>
