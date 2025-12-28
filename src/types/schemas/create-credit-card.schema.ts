import { z } from "zod";

export const createCreditCardSchema = z.object({
  name: z
    .string({ required_error: "Nome é obrigatório" })
    .trim()
    .min(3, { message: "Nome deve ter 3 caracteres" }),
  limit: z.string({ required_error: "Limite é obrigatório" }),
  expiration: z
    .string({ required_error: "Data de vencimento é obrigatório" })
    .min(5, { message: "Data deve ter 5 caracteres" })
    .max(10, { message: "Data deve ter 10 caracteres" }),
});

export type CreateCreditCard = z.infer<typeof createCreditCardSchema>;
