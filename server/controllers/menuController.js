import { menu } from "../data/menuData.js";

export const getMenu = (req, res) => {
  res.json(menu);
};