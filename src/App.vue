<script setup lang="ts">
import MeetPrecious from './components/MeetPrecious.vue'
import TheWelcome from './components/TheWelcome.vue'





//ToDo: add UI State management for light/dark mode
</script>

<template id="app" class=" text-myText" >
  <div class="h-100 w-100% grid grid-rows-[3rem_1fr] ">
    <div class=" bg-mySecondary">top bar</div>
    <div class="h-full bg-myBackground">
      <MeetPrecious msg="Tada!!!"/>
    </div>
  </div>
</template>

