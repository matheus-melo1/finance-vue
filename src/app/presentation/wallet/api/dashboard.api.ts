import { http } from "@/services/http";
import type { DashboardResponse } from "@/types/models/DashboardWallet.model";

interface DashboardApiImplementation {
  getDashboard(): Promise<DashboardResponse>;
}

class DashboardApi implements DashboardApiImplementation {
  async getDashboard() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await http.get<DashboardResponse>("/dashboard");

    return response.data;
  }
}

const dashboardApi = new DashboardApi();

export default dashboardApi;
