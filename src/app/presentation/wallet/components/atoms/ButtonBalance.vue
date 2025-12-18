<script setup lang="ts">
import { LucideIcon } from "lucide-vue-next";

interface ButtonBalanceProps {
  icon: LucideIcon;
  text: string;
}

const props = defineProps<ButtonBalanceProps>();
</script>

<template>
  <div class="w-full flex flex-col justify-center gap-2">
    <el-button class="bg-zinc-100! w-full text-2xl! text-zinc-600! border-none! py-7!" :icon="icon" round size="large" />
    <el-text size="medium">{{ text }}</el-text>
  </div>
</template>
