import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import type { Component } from "vue";
import { LayoutDashboard, Wallet } from "lucide-vue-next";

type RouteRecordRawModified = Array<RouteRecordRaw & { icon: Component }>;

export const routesProtected: RouteRecordRawModified = [
  {
    path: "/wallet",
    name: "Carteira",
    component: () => import("../presentation/wallet/pages/Wallet.vue"),
    icon: Wallet,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routesProtected,
});

export default router;
