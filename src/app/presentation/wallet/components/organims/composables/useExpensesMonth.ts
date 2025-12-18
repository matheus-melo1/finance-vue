import { Swiper as SwiperType } from "swiper";
import { ref } from "vue";
import type { Expenses } from "../../../types/models/Expenses.model";

export const useExpensesMonth = () => {
  const swiperRef = ref<SwiperType | null>(null);

  const onSwiper = (swiper: SwiperType) => {
    swiperRef.value = swiper;
  };

  const onNextSwiper = () => {
    swiperRef.value?.slideNext();
  };

  const onPrevSwiper = () => {
    swiperRef.value?.slidePrev();
  };

  const expenses: Expenses[] = [
    {
      name: "Netflix",
      type: "STREAMING",
      amount: 100,
      date: "2022-01-01",
    },
    {
      name: "HBO MAX",
      type: "STREAMING",
      amount: 40,
      date: "2022-01-01",
    },
    {
      name: "Camiseta",
      type: "CLOTHING",
      amount: 100,
      date: "2022-01-01",
    },
  ];

  return {
    swiperRef,
    onSwiper,
    onNextSwiper,
    onPrevSwiper,
    expenses,
  };
};
