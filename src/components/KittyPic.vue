<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  src: string
}>()
const dialog = ref(null)

</script>

<template>
<img :src="$props.src" alt="kitty" class="w-60 inline p-2" @click="dialog.showModal()">

<dialog ref="dialog">
    <button @click="dialog.close()">Close</button>
    <img :src="$props.src" alt="" class="max-h-100vh max-w-100vw">
</dialog>
</template>