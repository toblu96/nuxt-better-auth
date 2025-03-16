<script setup lang="ts">
definePageMeta({
  auth: {
    only: 'guest',
    redirectUserTo: '/user',
  },
})
const auth = useAuth()

const email = ref('')
const password = ref('')
const name = ref('')
const loading = ref(false)

async function signIn() {
  if (loading.value) return
  loading.value = true
  const { error } = await auth.signIn.email({
    email: email.value,
    password: password.value,
  })
  if (error) {
    console.error({
      title: error.message,
      color: 'red',
    })
  }
  else {
    await navigateTo('/user')
    console.info({
      title: `You have been signed in!`,
    })
  }
  loading.value = false
}

async function signUp() {
  if (loading.value) return
  loading.value = true
  const { error } = await auth.signUp.email({
    email: email.value,
    password: password.value,
    name: name.value,
  })
  if (error) {
    console.error({
      title: error.message,
      color: 'red',
    })
  }
  else {
    console.info({
      title: `You have been signed up!`,
    })
    await navigateTo('/user')
  }
  loading.value = false
}
</script>

<template>
  <div>
    index

    <form @submit.prevent="signIn">
      <input
        v-model="email"
        type="text"
        data-1p-ignore
      >
      <input
        v-model="password"
        type="password"
        data-1p-ignore
      >
      <button type="submit">
        SignIn
      </button>
    </form>
    <form @submit.prevent="signUp">
      <input
        v-model="email"
        type="text"
        data-1p-ignore
      >
      <input
        v-model="password"
        type="password"
        data-1p-ignore
      >
      <button type="submit">
        SignUp
      </button>
    </form>
  </div>
</template>
