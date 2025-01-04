import { Category, Property, Option } from "@/lib/api/types";

export interface FormValues {
  mainCategory: string;
  subCategory: string;
  [key: string]: string;
}
