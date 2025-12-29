<script setup lang="ts">
import { CreditCard } from "lucide-vue-next";
import { CardColor } from "../../types/enum/CardColor.enum";
import { CardType } from "../../types/enum/CardType.enum";
import { format } from "date-fns";
import type { Card } from "@/types/models/Card.model";

interface CardsProps {
  card: Card;
}

const props = defineProps<CardsProps>();

const colorsCard: Record<CardColor, string> = {
  [CardColor.BLUE]: "bg-blue-500",
  [CardColor.PINK]: "bg-pink-500",
  [CardColor.GREEN]: "bg-green-500",
};

const typeCard: Record<CardType, string> = {
  [CardType.CREDIT]: "Crédito",
  [CardType.DEBIT]: "Débito",
};

</script>

<template>
  <el-card :style="{ backgroundColor: card.color }" :class="['w-72! h-96! border-none! rounded-2xl!']">
    <template #header>
      <div class="bg-zinc-100/40 text-white w-fit p-4 rounded-xl">
        <CreditCard />
      </div>
    </template>

    <div class="w-full h-full flex flex-col justify-end items-start gap-2">
      <div>
        <el-text class="text-base! text-zinc-100! font-semibold!">
          {{ card.name }}
        </el-text>
      </div>

      <div>
        <el-text class="text-base! text-zinc-100! font-semibold!">
          {{ format(card.expiration_date, "MM/yy") }}
        </el-text>
      </div>
    </div>
  </el-card>
</template>
