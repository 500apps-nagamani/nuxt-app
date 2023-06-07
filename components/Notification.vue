<template>
  <div>
    <div
      v-if="message"
      class="bg-white self-end m-4 rounded-md shadow-md text-center p-2 display"
    >
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

const {message} = defineProps(['message'])
// const message = ref("");
const { $bus } = useNuxtApp();
// $bus.$on("click",()=>(message.value= message.value? "" : "Error has been occured"))
</script>
