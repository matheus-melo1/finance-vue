<script setup lang="ts">
import { useCard } from "./composables/useCard";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards } from 'swiper/modules'
import { Plus, ChevronRight, ChevronLeft } from "lucide-vue-next";
import CreditCardComponent from "../molecules/CreditCard.vue";
import DrawerCreateCreditCard from "../../../../../components/organisms/drawerCreditCard/drawer-create-credit-card.vue";
import type { DashboardCreditSection } from "@/types/models/DashboardWallet.model";
import { formatPrice } from "@/utils/format-price";

interface CardsProps {
  creditCards: DashboardCreditSection | undefined;
}

const props = defineProps<CardsProps>();

const { swiperRef, onSwiper, onNextSwiper, onPrevSwiper } = useCard()

</script>

<template>
  <el-card>
    <!-- <template #header> -->
    <!--   Cartões -->
    <!-- </template> -->

    <div class="w-full h-full flex flex-col gap-4 justify-center items-start">
      <swiper class="w-80! h-full!" :slides-per-view="1" :ref="swiperRef" :effect="'cards'" :loop="true"
        :grabCursor="true" :modules="[EffectCards]" @swiper="onSwiper">
        <swiper-slide v-for="card in creditCards?.cards" :key="card.id">
          <CreditCardComponent :card="card" />
        </swiper-slide>
      </swiper>
      <div class="w-full flex flex-col gap-2">
        <div>
          <el-text>Credito disponível</el-text>
        </div>
        <div className="w-full flex justify-between">
          <div class="flex items-start gap-2">
            <el-text class="text-start! text-zinc-400! font-semibold">R$</el-text>
            <el-text class="text-2xl! text-start! font-medium" tab="b">{{ formatPrice(creditCards?.available_limit ??
              0).slice(2) }}</el-text>
          </div>

          <div class="flex gap-0">
            <el-button @click="onPrevSwiper" text circle>
              <ChevronLeft class="w-5 h-5" />
            </el-button>
            <el-button @click="onNextSwiper" text circle>
              <ChevronRight class="w-5 h-5" />
            </el-button>
          </div>
        </div>
      </div>
      <DrawerCreateCreditCard>
        <template #trigger>
          <el-button :icon="Plus" class="w-full! p-5! flex!" round plain type="primary">
            Adicionar cartão
          </el-button>
        </template>
      </DrawerCreateCreditCard>
    </div>
  </el-card>
</template>
