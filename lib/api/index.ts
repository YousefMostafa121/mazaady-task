import axios from "axios";
import { Category, Property, Option } from "./types";

const API_BASE_URL = "https://staging.mazaady.com/api/v1";
const API_KEY = "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "private-key": API_KEY,
  },
});

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await api.get("/get_all_cats");
  return response.data.data.categories;
};

export const fetchProperties = async (
  categoryId: number
): Promise<Property[]> => {
  const response = await api.get(`/properties?cat=${categoryId}`);
  return response.data.data;
};

export const fetchOptionChildren = async (
  optionId: number
): Promise<Option[]> => {
  const response = await api.get(`/get-options-child/${optionId}`);
  return response.data.data;
};
