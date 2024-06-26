<script setup lang="ts">
defineProps<{
  msg: string
}>()

const pics = [
  {src:"20230207_201942.jpg"}, 
  {src:"20230614_083806.jpg"}
]

const glob = import.meta.glob('@/assets/pics/*.jpg', { eager: true })

</script>

<template>
  <div class="bg-myPrimary">
    <h2 class="text-2xl">{{ msg }} </h2>
    <h3>
      Future home of A Very Fluffy Baby :)
      <!-- <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. -->
    </h3>
    <div v-for="pic in glob">
      <img :src="pic.default" alt="kitty" >
    </div>
    
  </div>
</template>
