import type { CardType } from "../enum/CardType.enum";

export interface Card {
  id: string;
  name: string;
  brand: string;
  type: string;
  expiration_date: Date;
  color: string;
}
