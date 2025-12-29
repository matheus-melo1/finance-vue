<script setup lang="ts">
import type { Transaction } from "@/types/models/Transaction.model";
import TransactionCard from "../molecules/TransactionCard.vue";

interface TransactionsProps {
  transactions: Transaction[] | undefined
}

const props = defineProps<TransactionsProps>();

</script>

<template>
  <el-card class="w-full h-full border border-zinc-200">
    <template #header>
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <span>Transações</span>
          <el-button plain round>Ver mais</el-button>
        </div>
        <div class="flex items-center">
          <el-button round>
            Todos
          </el-button>
          <el-button round>
            Despesas
          </el-button>
          <el-button round>
            Rendas
          </el-button>
        </div>
      </div>

      <div class="flex flex-col overflow-y-auto gap-4 py-3">
        <TransactionCard v-for="transaction in transactions" :key="transaction.id" :transaction="transaction" />
      </div>
    </template>
  </el-card>
</template>
