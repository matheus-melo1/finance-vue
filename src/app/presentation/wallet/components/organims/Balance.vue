<script setup lang="ts">
import { CalendarClock, ReceiptText, TrendingUp, TrendingDown, ArrowLeftRight } from "lucide-vue-next";
import ButtonBalance from "../atoms/ButtonBalance.vue";
import ButtonBalanceTransfer from "../atoms/ButtonBalanceTransfer.vue";
import SpaccingBar from "../atoms/SpaccingBar.vue";

</script>

<template>
  <div class="w-full flex flex-col">
    <div
      class="w-full h-fit relative flex flex-col gap-7 justify-start p-6 rounded-2xl border-t border-l border-r border-zinc-300">
      <div class="w-full flex flex-col items-start justify-start text-start gap-5">
        <p>Saldo disponível</p>
        <div class="flex items-start gap-2">
          <el-text class="text-start! text-zinc-400! font-semibold">R$</el-text>
          <el-text class="text-5xl! text-start! font-medium" tab="b">35.530,20</el-text>
        </div>
      </div>

      <div class="w-full flex items-center gap-4">
        <ButtonBalance :icon="CalendarClock" text="Extrato" />
        <ButtonBalance :icon="ReceiptText" text="Faturas" />
        <ButtonBalance :icon="TrendingUp" text="Entrada" />
        <ButtonBalance :icon="TrendingDown" text="Saída" />
        <ButtonBalanceTransfer :icon="ArrowLeftRight" text="Transferência" />
      </div>
      <el-divider class="absolute! -bottom-6! left-1/2 -translate-1/2 w-[95%]!" border-style="dashed" />

    </div>

    <div
      class="w-full h-fit flex gap-7 justify-start items-start p-6 rounded-2xl border-b border-l border-r border-zinc-300">
      <SpaccingBar :income="1000" :expenses="500" />
    </div>
  </div>
</template>
