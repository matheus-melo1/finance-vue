<script setup lang="ts">
import { Tv } from "lucide-vue-next";
import { format } from "date-fns";
import { formatPrice } from "@/utils/format-price";

interface CardExpensesProps {
  name: string;
  amount: number;
  date: Date;
}

const props = defineProps<CardExpensesProps>();

</script>

<template>
  <el-card class="w-full! h-full! bg-zinc-50! border-none! rounded-2xl!">
    <template #header>
      <div class="bg-zinc-200 w-fit p-4 rounded-xl">
        <Tv />
      </div>
    </template>

    <div class="w-full h-full flex flex-col justify-end items-start gap-2">
      <div>
        <el-text class="text-base!">
          {{ name }}
        </el-text>
      </div>

      <div class="flex items-start gap-2">
        <el-text class="text-start! text-blue-700! font-semibold">R$</el-text>
        <el-text class="text-2xl! text-start! font-medium" tab="b">{{ formatPrice(amount).slice(3)
        }}</el-text>
      </div>
      <div>
        <el-text class="text-base!">
          {{ format(date, "dd/MM/yyyy") }}
        </el-text>
      </div>
    </div>
  </el-card>
</template>
