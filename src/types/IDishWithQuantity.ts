import { IDish } from "./IDish";

export interface IDishWithQuantity extends IDish {
  quantity: number;
}