import { useQuery } from "@tanstack/vue-query";
import dashboardApi from "../api/dashboard.api";
import type { DashboardResponse } from "@/types/models/DashboardWallet.model";

export const useDashboardQuery = () => {
  return useQuery<DashboardResponse, Error>({
    queryKey: ["dashboard"],
    queryFn: () => dashboardApi.getDashboard(),
  });
};
