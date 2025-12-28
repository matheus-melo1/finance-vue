<script setup lang="ts">
import { ref } from "vue";
import type { DrawerProps } from 'element-plus'
import { User, DollarSign, Calendar } from "lucide-vue-next";
import { useCreateCreditCard } from "./composables/use-create-credit-card";
import InputForm from "../../molecules/input-form.vue";
import { format } from "date-fns";
import { cardColors } from "@/utils/card-colors";
import { CardColors } from "@/types/enum/card-colors.enum";

const methods = useCreateCreditCard()
const { open, direction, handleClose, onSubmit, values, cardsFormatted, onChangeCardColor, selectedCardColor } = methods

</script>

<template>
  <el-drawer v-model="open" title="Adicionar cartao" :direction="direction" :before-close="handleClose">
    <template #default>
      <div class="flex flex-col gap-6">
        <InputForm prepend name="limit" type="number" label="Limite" placeholder="Digite o limite"> 
          <template #prepend>
            <el-button class="rounded-2xl!" :icon="DollarSign" />
          </template>
        </InputForm>

        <div class="grid grid-cols-2 gap-2">
          <InputForm prepend name="name" label="Nome" placeholder="Digite o nome"> 
            <template #prepend>
              <el-button class="rounded-2xl!" :icon="User" />
            </template>
          </InputForm>

          <InputForm type="date" append name="expiration" label="Data de vencimento"> 
            <template #append>
              <el-button class="rounded-2xl!" :icon="Calendar" />
            </template>
          </InputForm>
        </div>

        <div class="flex flex-col items-center gap-4">
          <div class="flex items-center gap-2">
            <el-button v-for="color in cardsFormatted" :key="color.key" @click="onChangeCardColor(color.key)" :class="[color.value, color.key === selectedCardColor && 'border-2! border-zinc-800!', 'w-5! h-5!']" circle></el-button>
          </div>
          <div :class="[cardColors[selectedCardColor], 'w-full flex p-3 transition-all rounded-xl']">

            <div class="flex flex-col gap-2 h-48 justify-end">
              <el-text class="text-white! font-semibold!">{{ values.name.length === 0 ? "Digite um nome" : values.name }}</el-text>
              <div>
                <el-text class="text-white! font-semibold!">{{ values.expiration.length === 0 ? "00/00" : format(values.expiration, "MM/yy") }}</el-text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <el-button @click="onSubmit" class="w-fit p-5! flex! justify-center font-semibold!" type="primary" round>Salvar</el-button>
    </template>
  </el-drawer>

  <div @click="open = true" class="w-full">
    <slot name="trigger" />
  </div>
</template>
