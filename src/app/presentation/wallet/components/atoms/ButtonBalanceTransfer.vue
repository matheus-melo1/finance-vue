<script setup lang="ts">
import { LucideIcon } from "lucide-vue-next";

interface ButtonBalanceProps {
  icon: LucideIcon;
  text: string;
}

const props = defineProps<ButtonBalanceProps>();
</script>

<template>
  <div class="flex flex-col justify-center gap-2">
    <el-button type="primary" class="w-36! text-2xl! border-none! py-7!" :icon="icon" round size="large" />
    <el-text size="medium">{{ text }}</el-text>
  </div>
</template>
