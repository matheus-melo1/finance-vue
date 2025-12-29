<script setup lang="ts">
import { AlertCircle } from "lucide-vue-next";

</script>

<template>
  <main className="flex h-screen w-full flex-col items-center justify-center gap-6">
    <div className="flex flex-col items-center text-red-600! gap-3">
      <AlertCircle class="w-10! h-10!" />
      <h1 className="text-3xl font-semibold text-zinc-800!">
        Algo deu errado
      </h1>
    </div>
    <p className="text-lg text-center text-zinc-800 dark:text-zinc-400">
      Experimente novamente mais tarde
    </p>
    <Loader2 className="h-12! w-12! animate-spin text-zinc-200 dark:text-zinc-600" />
  </main>
</template>
