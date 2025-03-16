<script setup lang="ts">
const { signOut } = useAuth()
</script>

<template>
  <div>
    user
    <button @click="signOut({ redirectTo: '/' })">
      SignOut
    </button>
  </div>
</template>
