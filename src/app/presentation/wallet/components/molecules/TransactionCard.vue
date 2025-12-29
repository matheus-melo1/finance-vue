<script setup lang="ts">
import type { Transaction } from "@/types/models/Transaction.model";
import { formatPrice } from "@/utils/format-price";
import { format } from "date-fns";
import { ShoppingBag } from "lucide-vue-next";

interface TransactionCardProps {
  transaction: Transaction
}

const props = defineProps<TransactionCardProps>();

</script>

<template>
  <div class="flex items-center justify-between gap-2">
    <div class="flex items-center gap-3">
      <div class="p-2 border border-zinc-200 text-zinc-500 rounded-lg">
        <ShoppingBag />
      </div>
      <div class="flex flex-col items-start">
        <div>
          <el-text tag="b">{{ transaction.name }}</el-text>
        </div>
        <el-text>{{ format(transaction.date, "dd/MM/yyyy, HH:mm") }}</el-text>
      </div>
    </div>

    <el-text>{{ formatPrice(transaction.amount) }}</el-text>
  </div>
</template>
