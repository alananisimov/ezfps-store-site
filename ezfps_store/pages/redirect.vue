<template>
<div class="w-full">
    <h1 class="mx-auto">Redirecting...</h1>
</div>
<component :is="'script'" src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive"></component>   
</template>
<script setup>
const user = useSupabaseUser()
watchEffect(()=>{
    if(user != null) {
        console.log(user.value.email)
        if (process.browser) {
            window.Telegram.WebApp.sendData(`{"email": "${user.value.email}"}`)
            navigateTo('/')
        }
    
    }
})
</script>