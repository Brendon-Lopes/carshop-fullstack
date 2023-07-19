import { api } from "../providers/api";
import { IBrand } from "src/interfaces";

export const getAllBrands = async () => {
  try {
    const response: { data: IBrand } = await api.get("/brands");

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createBrand = async (name: string) => {
  try {
    const response: { data: IBrand } = await api.post("/brands", {
      name,
    });

    return response.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};
