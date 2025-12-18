<script setup lang="ts">
import { CalendarClock, ReceiptText, TrendingUp, TrendingDown, ArrowLeftRight } from "lucide-vue-next";
import Balance from "../components/organims/Balance.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useExpensesMonth } from "./composables/useExpensesMonth";
import { ChevronRight, ChevronLeft, Tv } from "lucide-vue-next";
import CardExpense from "../molecules/CardExpense.vue";

const { swiperRef, onSwiper, onNextSwiper, onPrevSwiper, expenses } = useExpensesMonth();

</script>

<template>
  <el-card class="w-full h-full border border-zinc-200">
    <template #header>
      <div class="card-header">
        <span>Faturas recorrentes</span>
      </div>
    </template>
    <div class="w-full h-full flex items-center gap-2">
      <swiper class="w-full! h-full!" slides-per-view="2" :space-between="6" :loop="true" @swiper="onSwiper"
        :ref="swiperRef">
        <swiper-slide v-for="item in expenses" :key="item">
          <CardExpense :name="item.name" :amount="item.amount" :date="item.date" />
        </swiper-slide>
      </swiper>

      <div class="flex flex-col gap-2 items-end">
        <el-button @click="onNextSwiper" text circle>
          <ChevronRight class="w-6 h-6" />
        </el-button>

        <el-button @click="onPrevSwiper" text circle>
          <ChevronLeft class="w-6 h-6" />
        </el-button>
      </div>
    </div>
  </el-card>
</template>
