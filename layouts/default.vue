<template>
    <div class="top-0 right-0">
        <nav class="p-3 bg-tahiti">
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
    div{
        background-image: url('https://img.freepik.com/premium-photo/retro-style-background_522560-5795.jpg?size=626&ext=jpg');
        height:100vh;
        background-size: cover;
       
    }

</style>
