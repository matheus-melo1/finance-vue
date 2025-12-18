<script setup lang="ts">
import { computed } from "vue";

interface Props {
  income: number;
  expenses: number;
}

const props = defineProps<Props>();

const total = computed(() => props.income + props.expenses);

const incomePercent = computed(() =>
  total.value ? (props.income / total.value) * 100 : 0
);

const expensesPercent = computed(() =>
  total.value ? (props.expenses / total.value) * 100 : 0
);
</script>

<template>
  <div class="w-full rounded-2xl">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2 text-zinc-200">
        <el-text class="text-sm font-medium">Movimentação</el-text>
      </div>
    </div>

    <div class="relative h-2 w-full overflow-hidden rounded-full bg-zinc-800">
      <div class="absolute left-0 top-0 h-full bg-emerald-500" :style="{ width: `${incomePercent}%` }" />
      <div class="absolute right-0 top-0 h-full bg-red-500" :style="{ width: `${expensesPercent}%` }" />
    </div>

    <div class="mt-3 flex justify-between text-xs text-zinc-400">
      <el-text>Receitas</el-text>
      <el-text>Gastos</el-text>
    </div>
  </div>
</template>
