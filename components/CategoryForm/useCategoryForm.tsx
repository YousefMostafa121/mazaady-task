"use client";

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  fetchCategories,
  fetchProperties,
  fetchOptionChildren,
} from "@/lib/api";
import { Category, Property, Option } from "@/lib/api/types";
import { FormValues } from "./types";

const validationSchema = Yup.object().shape({
  mainCategory: Yup.string().required("Main category is required"),
  subCategory: Yup.string().required("Sub category is required"),
});

export function useCategoryForm() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<Category[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [propertyOptions, setPropertyOptions] = useState<
    Record<number, Option[]>
  >({});
  const [showResults, setShowResults] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      mainCategory: "",
      subCategory: "",
    },
    validationSchema,
    onSubmit: () => {
      setShowResults(true);
    },
  });

  const handleMainCategoryChange = async (value: string) => {
    formik.setFieldValue("mainCategory", value);
    formik.setFieldValue("subCategory", "");
    setProperties([]);
    setPropertyOptions({});

    const category = categories.find((cat) => cat.id.toString() === value);
    if (category?.children) {
      setSubCategories(category.children);
    }
  };

  const handleSubCategoryChange = async (value: string) => {
    formik.setFieldValue("subCategory", value);
    try {
      const props = await fetchProperties(parseInt(value));
      setProperties(props);
    } catch (error) {
      console.error("Error loading properties:", error);
    }
  };

  const handlePropertyChange = async (propertyId: number, value: string) => {
    formik.setFieldValue(`property_${propertyId}`, value);

    if (value === "other") {
      return;
    }

    try {
      const option = await fetchOptionChildren(parseInt(value));
      if (option) {
        setPropertyOptions((prev) => ({
          ...prev,
          [propertyId]: option,
        }));
      }
    } catch (error) {
      console.error("Error loading option children:", error);
    }
  };
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    };
    loadCategories();
  }, []);

  return {
    formik,
    categories,
    subCategories,
    properties,
    propertyOptions,
    showResults,
    handleMainCategoryChange,
    handleSubCategoryChange,
    handlePropertyChange,
  };
}
