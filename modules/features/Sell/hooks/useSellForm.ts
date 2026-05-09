import { useState } from "react";
import { SellForm } from "../types";

const initialForm: SellForm = {
  title: "",
  description: "",
  price: "",
  originalPrice: "",
  condition: null,
  category: null,
  location: "",
  images: [],
};

export function useSellForm() {
  const [form, setForm] = useState<SellForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof SellForm, string>>>(
    {},
  );

  // Update any field
  const updateField = (field: keyof SellForm, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Validate form before submitting
  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof SellForm, string>> = {};

    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.description.trim())
      newErrors.description = "Description is required";
    if (!form.price.trim()) newErrors.price = "Price is required";
    if (!form.condition) newErrors.condition = "Condition is required";
    if (!form.category) newErrors.category = "Category is required";
    if (!form.location.trim()) newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form - backend will implement Appwrite call here
  const submitListing = async () => {
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      // TODO: backend will implement API call here
      console.log("Submitting listing:", form);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setForm(initialForm);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    errors,
    isSubmitting,
    updateField,
    submitListing,
  };
}
