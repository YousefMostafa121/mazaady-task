"use client";

import { CategoryFormUI } from "./CategoryFormUI";
import { useCategoryForm } from "./useCategoryForm";

export default function CategoryForm() {
  const {
    formik,
    categories,
    subCategories,
    properties,
    propertyOptions,
    showResults,
    handleMainCategoryChange,
    handleSubCategoryChange,
    handlePropertyChange,
  } = useCategoryForm();

  return (
    <CategoryFormUI
      formik={formik}
      categories={categories}
      subCategories={subCategories}
      properties={properties}
      propertyOptions={propertyOptions}
      showResults={showResults}
      onMainCategoryChange={handleMainCategoryChange}
      onSubCategoryChange={handleSubCategoryChange}
      onPropertyChange={handlePropertyChange}
    />
  );
}
