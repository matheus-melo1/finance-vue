<script setup lang="ts">
import { CalendarClock, ReceiptText, TrendingUp, TrendingDown, ArrowLeftRight } from "lucide-vue-next";
import Balance from "../components/organims/Balance.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import ExpensesMonth from "../components/organims/ExpensesMonth.vue";
import Cards from "../components/organims/Cards.vue";
import Transactions from "../components/organims/Transactions.vue";

</script>

<template>
  <section class="w-full h-full grid grid-cols-[32%_28%_38%] gap-6">
    <div class="w-full h-full flex flex-col gap-4">
      <Balance />
      <ExpensesMonth />
    </div>
    <div class="w-full h-full flex flex-col gap-4">
      <Cards />
    </div>
    <div class="w-full h-full flex flex-col gap-4">
      <Transactions />
    </div>
  </section>
</template>
