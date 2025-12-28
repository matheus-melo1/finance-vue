import {
  createCreditCardSchema,
  type CreateCreditCard,
} from "@/types/schemas/create-credit-card.schema";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { ref } from "vue";
import type { DrawerProps } from "element-plus";
import { cardColors } from "@/utils/card-colors";
import { CardColors } from "@/types/enum/card-colors.enum";

export const formInitialValues: CreateCreditCard = {
  name: "",
  limit: "0",
  expiration: "",
};

export const useCreateCreditCard = () => {
  const form = useForm<CreateCreditCard>({
    validationSchema: toTypedSchema(createCreditCardSchema),
    initialValues: formInitialValues,
  });
  const { handleSubmit, resetForm, values } = form;

  const open = ref(false);
  const direction = ref<DrawerProps["direction"]>("rtl");
  const selectedCardColor = ref<CardColors>(CardColors.VIOLET);

  const onChangeCardColor = (color: CardColors) => {
    selectedCardColor.value = color;
  };

  const cardsFormatted = Object.entries(cardColors).map(([key, value]) => ({
    key,
    value,
  }));

  const handleClose = () => {
    open.value = false;
    resetForm({ values: formInitialValues });
  };

  const onSubmit = handleSubmit(async (data: CreateCreditCard) => {
    console.log(data);
  });

  return {
    open,
    direction,
    handleClose,
    onSubmit,
    values,
    cardsFormatted,
    onChangeCardColor,
    selectedCardColor,
  };
};

export type useCreateCreditCard = ReturnType<typeof useCreateCreditCard>;
