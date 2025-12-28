<script setup lang="ts">
import { ShoppingBag } from "lucide-vue-next";
</script>

<template>
  <div class="flex items-center justify-between gap-2">
    <div class="flex items-center gap-3">
      <div class="p-2 border border-zinc-200 text-zinc-500 rounded-lg">
        <ShoppingBag />
      </div>
      <div class="flex flex-col items-start">
        <div>
          <el-text tag="b">Paypal</el-text>
        </div>
        <el-text>25 Fev 2022, 12:07</el-text>
      </div>
    </div>

    <el-text>R$ 100,00</el-text>
  </div>
</template>
