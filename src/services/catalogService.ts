import { menu } from "../data/menu"
import { IDish } from "../types/IDish";

const getDishes = async () => {
  return new Promise<IDish[]>((resolve) => {
    setTimeout(() => resolve(menu), 250);
  })
}

export default {
  getDishes
}