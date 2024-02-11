<template>
  <div class="main-container">
    <h2>Home</h2>

    <div class="flexin">
      <VBtn :loading="loading1" @click="getDate">Get Date</VBtn>
      <span> {{ date || '-' }} </span>
    </div>

    <div class="flexin">
      <VBtn :loading="loading2" @click="getRandomName">Get Random Name</VBtn>
      <span> {{ homeStore.name || '-' }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHomeStore } from '../stores/homeStore'

const homeStore = useHomeStore()

const date = ref<string>('')
const loading1 = ref<boolean>(false)
const loading2 = ref<boolean>(false)

const getDate = () => {
  loading1.value = true

  window.setTimeout(() => {
    date.value = String(new Date(Date.now()))
    loading1.value = false
  }, 2000)
}

const getRandomName = async () => {
  loading2.value = true
  await homeStore.getRandomName()
  loading2.value = false
}

getDate()
</script>

<style scoped></style>
