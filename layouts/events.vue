<template>
    
    <div>
       
       
        <nav class="bg-white p-3">
            <ul>
                <li >
                    <NuxtLink to="/" class="px-2 underline">Home</NuxtLink>
                    <NuxtLink to="/events" class="px-2 underline">Events</NuxtLink>
                </li>
                
            </ul>
        </nav>
        <slot />
      
    </div>
   
    
</template>

<style scoped>
    div {
        background-image: url('https://img.freepik.com/premium-photo/soft-sky-with-pastel-color-background_6529-400.jpg?w=360');
        height:100vh;
        background-size: cover;
       
    }
</style>