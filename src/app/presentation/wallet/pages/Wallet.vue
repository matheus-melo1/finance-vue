<script setup lang="ts">
import Balance from "../components/organims/Balance.vue";
import ExpensesMonth from "../components/organims/ExpensesMonth.vue";
import Cards from "../components/organims/Cards.vue";
import Transactions from "../components/organims/Transactions.vue";
import { useWallet } from "../composables/use-wallet.composable";
import ErrorPage from "@/components/molecules/ErrorPage.vue";
import SkeletonPage from "../components/molecules/SkeletonPage.vue";

const { dashboard, isLoadingDashboard, isErrorDashboard } = useWallet();

</script>

<template>
  <SkeletonPage v-if="isLoadingDashboard" />
  <ErrorPage v-else-if="isErrorDashboard" />

  <section v-else class="w-full h-full grid grid-cols-[32%_28%_38%] gap-6">
    <div class="w-full h-full flex flex-col gap-4">
      <Balance :balance="dashboard?.balance" :monthlySummary="dashboard?.monthly_summary" />
      <ExpensesMonth :expensesMonth="dashboard?.recurring_bills" />
    </div>
    <div class="w-full h-full flex flex-col gap-4">
      <Cards :creditCards="dashboard?.credit_section" />
      <div class="border border-zinc-300 flex w-full h-[34%] rounded-2xl"></div>
    </div>
    <div class="w-full h-full flex flex-col gap-4">
      <Transactions :transactions="dashboard?.recent_transactions" />
    </div>
  </section>
</template>
