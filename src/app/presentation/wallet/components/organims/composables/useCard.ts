import { ref } from "vue";
import { Swiper as SwiperType } from "swiper";
import type { Card } from "../../../types/models/Card.model";
import { CardType } from "../../../types/enum/CardType.enum";

export const useCard = () => {
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

  const cards: Card[] = [
    {
      id: "1",
      name: "Matheus Melo",
      brand: "Visa",
      type: CardType.CREDIT,
      expiration_date: new Date("2027-05-01"),
      color: "#66d0ed",
    },
    {
      id: "2",
      name: "Matheus Melo",
      brand: "Mastercard",
      type: CardType.DEBIT,
      expiration_date: new Date("2026-11-01"),
      color: "#6f65f7",
    },
    {
      id: "3",
      name: "Empresa XYZ",
      brand: "American Express",
      type: CardType.CREDIT,
      expiration_date: new Date("2028-02-01"),
      color: "#f75286",
    },
  ];

  return {
    swiperRef,
    onSwiper,
    onNextSwiper,
    onPrevSwiper,
    cards,
  };
};
