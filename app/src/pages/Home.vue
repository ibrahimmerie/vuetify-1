<template>
  <div class="main-container">
    <h2>Hello App!</h2>

    <div class="flexin">
      <VBtn :loading="loading" @click="refreshData">Get Date</VBtn>
      <span> {{ data || 'No data' }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref<string>('')
const loading = ref<boolean>(false)

const refreshData = () => {
  loading.value = true

  window.setTimeout(() => {
    data.value = String(new Date(Date.now()))
    loading.value = false
  }, 1000)
}
</script>

<style scoped></style>
