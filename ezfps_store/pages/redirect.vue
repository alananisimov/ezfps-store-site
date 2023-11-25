<template>

</template>
<script setup>
const user = useSupabaseUser()
watchEffect(() => {
    if (user) navigateTo('/profile')
    else navigateTo('/signin')
})
</script>