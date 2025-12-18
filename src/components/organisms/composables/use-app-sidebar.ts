import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export const useAppSidebar = () => {
  const open = ref(false);
  const router = useRouter();
  const route = useRoute();

  const pathname = computed(() => route.path);

  const toggleOpen = () => {
    open.value = !open.value;
  };

  const isSelected = (path: string) => {
    return pathname.value === path;
  };

  const navigate = (path: string) => {
    router.push(path);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return {
    open,
    toggleOpen,
    handleLogout,
    pathname,
    isSelected,
    navigate,
  };
};
