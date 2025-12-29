import { Swiper as SwiperType } from "swiper";
import { ref } from "vue";

export const useExpensesMonth = () => {
  const swiperRef = ref<SwiperType>();

  const onSwiper = (swiper: SwiperType) => {
    swiperRef.value = swiper;
  };

  const onNextSwiper = () => {
    swiperRef.value?.slideNext();
  };

  const onPrevSwiper = () => {
    swiperRef.value?.slidePrev();
  };

  return {
    swiperRef,
    onSwiper,
    onNextSwiper,
    onPrevSwiper,
  };
};
