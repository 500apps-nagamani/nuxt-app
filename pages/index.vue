<template>
  <div class="flex flex-col">
    <div>
      <h1 class="font-serif italic">Hello User</h1>

      <p>Welcome to Nuxt 3 application</p>
      <button class="btn mt-4" @click="showError">Get started</button>
    </div>
    <Notification  :message="message
    "/>
  </div>
</template>

<script setup lang="ts">
const message = ref("");
// const { hooks } = useNuxtApp();

const showError = () => {
 
  // $bus.$emit("click");
   message.value = message.value
    ? ""
   : "Error has occured while clicking the button";
};
</script>

<style>
.error {
  display: none;
}
</style>
