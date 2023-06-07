<template>
    <div>
        <ContentDoc />
    </div>
    


</template>

<script setup>
definePageMeta({
    layout : "events"
})

const sayHello = () => console.log("Hiiii")
sayHello();
</script>