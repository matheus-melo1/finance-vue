<script setup lang="ts">
import AppSidebar from "../components/organisms/app-sidebar.vue"
</script>

<template>
  <main class="w-full h-screen flex">
    <AppSidebar />

    <section className="w-full h-full p-6">
      <router-view />
    </section>
  </main>
</template>
