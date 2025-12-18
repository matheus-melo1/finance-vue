<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  PanelRightOpen,
  PanelRightClose,
  LogOut,
  Landmark,
} from "lucide-vue-next";
import { useAppSidebar } from "./composables/use-app-sidebar.ts";
import { routesProtected } from "@/app/router";

interface SidebarProps { }
const props = defineProps<SidebarProps>();

const { open, toggleOpen, handleLogout, isSelected, pathname, navigate } = useAppSidebar();

</script>

<template>
  <div class="h-full max-sm:h-fit max-md:p-0">
    <nav :class="[
      'h-full bg-white transition-all border-zinc-300 overflow-hidden dark:bg-card border-r flex flex-col max-md:h-fit max-md:rounded-full max-md:z-[999] max-md:left-1/2 max-md:-translate-x-1/2 max-md:flex-row max-md:fixed max-md:bottom-10 max-md:shadow-lg max-md:border',
      open ? 'w-48' : 'w-20 max-md:w-fit',
    ]">
      <div
        class="relative flex justify-center h-[4.25rem] overflow-hidden items-center gap-3 p-5 border-b border-zinc-300 max-md:hidden">
        <p :class="[
          'absolute font-bold transition-all duration-300',
          !open ? 'translate-x-0 opacity-100' : '-translate-x-72 opacity-0',
        ]">
          <Landmark :stroke-width="1.5" class="h-7 w-7" />
        </p>
        <p :class="[
          'absolute truncate font-bold transition-all duration-300',
          !open ? 'translate-x-96 opacity-0' : 'translate-x-0 opacity-100',
        ]">
          Finance
        </p>
      </div>

      <div class="px-2 py-2 h-full flex flex-col justify-between gap-1.5 max-md:flex-row">
        <div class="w-full flex flex-col items-start gap-1.5 max-md:flex-row">
          <div :class="['w-full flex my-3', open ? 'justify-end' : 'justify-center']">
            <button class="text-muted-foreground cursor-pointer max-md:hidden" @click="toggleOpen">
              <PanelRightOpen v-if="open" class="w-5 h-5" />
              <PanelRightClose v-else class="w-5 h-5" />
            </button>
          </div>

          <button v-for="route in routesProtected" :key="route.path" :class="[
            'w-full relative flex text-base gap-5 hover:bg-zinc-100 transition-all py-4 duration-300 justify-start cursor-pointer rounded-2xl max-md:w-14 max-md:justify-center',
            isSelected(route.path) ? 'text-blue-500' : 'text-zinc-600',
          ]" @click="navigate(route.path)">
            <div v-if="isSelected(route.path)"
              class="w-[5px] h-2/4 absolute rounded-r-xl bg-blue-500 -left-[6.5px] top-1/2 -translate-y-1/2 max-md:rounded-br-none max-md:rounded-t-xl max-md:h-1.5 max-md:w-12 max-md:top-full max-md:translate-y-0 max-md:left-1/2 max-md:-translate-x-1/2">
            </div>

            <component :is="route.icon" :class="[
              'w-6 h-6 shrink-0 grow-0 transition-all duration-300',
              !open
                ? 'translate-x-[20px] max-md:mr-0 max-md:translate-x-0'
                : ' translate-x-[10px]',
            ]" />

            <p :class="[
              'truncate font-semibold text-base transition-all duration-300 max-md:hidden',
              !open
                ? 'translate-x-96 opacity-0'
                : 'translate-x-0 opacity-100',
            ]">
              {{ route.name }}
            </p>
          </button>
        </div>

        <button :class="[
          'w-full h-4 relative flex text-muted-foreground text-base gap-4 hover:bg-zinc-100 transition-all py-6 px-3 duration-300 justify-start items-center cursor-pointer rounded-2xl max-md:w-fit',
        ]" @click="handleLogout">
          <LogOut :class="[
            'shrink-0 grow-0 w-5 h-5 transition-all duration-300',
            !open
              ? 'translate-x-[14px] max-md:mr-0 max-md:translate-x-0'
              : 'translate-x-[2px]',
          ]" />
          <p :class="[
            'truncate transition-all duration-300 max-md:hidden',
            !open ? 'translate-x-96 opacity-0' : 'translate-x-0 opacity-100',
          ]">
            Sair
          </p>
        </button>
      </div>
    </nav>
  </div>
</template>
