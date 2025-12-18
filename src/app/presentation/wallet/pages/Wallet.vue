<script setup lang="ts">
import { CalendarClock, ReceiptText, TrendingUp, TrendingDown, ArrowLeftRight } from "lucide-vue-next";
import Balance from "../components/organims/Balance.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import ExpensesMonth from "../components/organims/ExpensesMonth.vue";
import Cards from "../components/organims/Cards.vue";

</script>

<template>
  <section class="w-full h-full flex gap-4">
    <div class="w-140 h-full flex flex-col gap-4">
      <Balance />
      <ExpensesMonth />
    </div>
    <div class="w-96 h-full flex flex-col gap-4">
      <Cards />
    </div>
  </section>
</template>
