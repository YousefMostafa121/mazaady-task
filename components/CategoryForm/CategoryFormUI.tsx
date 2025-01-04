"use client";

import { FormikProps } from "formik";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Category, Property, Option } from "@/lib/api/types";
import { FormValues } from "./types";

interface CategoryFormUIProps {
  formik: FormikProps<FormValues>;
  categories: Category[];
  subCategories: Category[];
  properties: Property[];
  propertyOptions: Record<number, Option[]>;
  showResults: boolean;
  onMainCategoryChange: (value: string) => void;
  onSubCategoryChange: (value: string) => void;
  onPropertyChange: (propertyId: number, value: string) => void;
}

export function CategoryFormUI({
  formik,
  categories,
  subCategories,
  properties,
  propertyOptions,
  showResults,
  onMainCategoryChange,
  onSubCategoryChange,
  onPropertyChange,
}: CategoryFormUIProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Category Selection</CardTitle>
        <CardDescription>Select categories and properties</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Select
                onValueChange={onMainCategoryChange}
                value={formik.values.mainCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select main category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem
                      key={category.id}
                      value={category.id.toString()}
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formik.errors.mainCategory && (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.mainCategory}
                </p>
              )}
            </div>

            {subCategories.length > 0 && (
              <div>
                <Select
                  onValueChange={onSubCategoryChange}
                  value={formik.values.subCategory}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select sub category" />
                  </SelectTrigger>
                  <SelectContent>
                    {subCategories.map((category) => (
                      <SelectItem
                        key={category.id}
                        value={category.id.toString()}
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {formik.errors.subCategory && (
                  <p className="text-sm text-red-500 mt-1">
                    {formik.errors.subCategory}
                  </p>
                )}
              </div>
            )}

            {properties.map((property) => (
              <div key={property.id} className="space-y-2">
                <Select
                  onValueChange={(value) =>
                    onPropertyChange(property.id, value)
                  }
                  value={formik.values[`property_${property.id}`]}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={`Select ${property.name}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {property.options?.map((option) => (
                      <SelectItem key={option.id} value={option.id.toString()}>
                        {option.name}
                      </SelectItem>
                    ))}
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                {formik.values[`property_${property.id}`] === "other" && (
                  <Input
                    placeholder={`Enter custom ${property.name}`}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `property_${property.id}_custom`,
                        e.target.value
                      )
                    }
                    value={
                      formik.values[`property_${property.id}_custom`] || ""
                    }
                  />
                )}

                {propertyOptions[property.id]?.length > 0 && (
                  <Select
                    onValueChange={(value) =>
                      formik.setFieldValue(
                        `property_${property.id}_child`,
                        value
                      )
                    }
                    value={formik.values[`property_${property.id}_child`]}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder={`Select ${property.name} option`}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {propertyOptions[property.id].map((option) => (
                        <SelectItem
                          key={option.id}
                          value={option.id.toString()}
                        >
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
            ))}
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>

        {showResults && (
          <div className="mt-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(formik.values).map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell>{key}</TableCell>
                    <TableCell>{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
