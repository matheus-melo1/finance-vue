import { useDashboardQuery } from "../queries/useDashboard.query";

export const useWallet = () => {
  const {
    data: dashboard,
    isLoading: isLoadingDashboard,
    isError: isErrorDashboard,
  } = useDashboardQuery();

  return {
    dashboard,
    isLoadingDashboard,
    isErrorDashboard,
  };
};

export type useWalletReturnType = ReturnType<typeof useWallet>;
