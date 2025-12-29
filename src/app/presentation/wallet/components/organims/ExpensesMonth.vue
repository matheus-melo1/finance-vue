<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { useExpensesMonth } from "./composables/useExpensesMonth";
import { ChevronRight, ChevronLeft } from "lucide-vue-next";
import CardExpense from "../molecules/CardExpense.vue";
import type { RecurringBill } from "@/types/models/RecurringBill.model";
import { computed } from "vue";

interface ExpensesMonthProps {
  expensesMonth: RecurringBill[] | undefined;
}

const props = defineProps<ExpensesMonthProps>();

const { swiperRef, onSwiper, onNextSwiper, onPrevSwiper } = useExpensesMonth();
const expenseLength = computed(() => props.expensesMonth?.length ?? 0);

</script>

<template>
  <el-card class="w-full h-full border border-zinc-200">
    <template #header>
      <div class="card-header">
        <span>Faturas recorrentes</span>
      </div>
    </template>
    <div class="w-full h-full flex items-center gap-2">
      <swiper class="w-full! h-full!" :slides-per-view="2" :space-between="6" :loop="true" @swiper="onSwiper"
        :ref="swiperRef">
        <swiper-slide v-for="(expense, index) in expensesMonth" :key="index">
          <CardExpense :name="expense?.service_name ?? 'Serviço'" :amount="expense?.amount ?? 0"
            :date="new Date(expense?.due_date ?? '')" />
        </swiper-slide>
      </swiper>

      <div class="flex flex-col gap-2 items-end">
        <el-button :disabled="expenseLength <= 2" @click="onNextSwiper" text circle>
          <ChevronRight class="w-6 h-6" />
        </el-button>

        <el-button :disabled="expenseLength <= 2" @click="onPrevSwiper" text circle>
          <ChevronLeft class="w-6 h-6" />
        </el-button>
      </div>
    </div>
  </el-card>
</template>
