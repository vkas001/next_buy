import { useState } from "react";
import { Address, CheckoutForm, PaymentMethod } from "../types";

const dummyAddresses: Address[] = [
  {
    id: "1",
    name: "John Doe",
    phone: "9800000000",
    street: "Thamel, Ward 26",
    city: "Kathmandu",
    isDefault: true,
  },
  {
    id: "2",
    name: "John Doe",
    phone: "9800000000",
    street: "New Road, Ward 18",
    city: "Kathmandu",
    isDefault: false,
  },
];

const dummyPaymentMethods: PaymentMethod[] = [
  { id: "1", type: "esewa", label: "eSewa", icon: "phone-portrait-outline" },
  { id: "2", type: "khalti", label: "Khalti", icon: "wallet-outline" },
  { id: "3", type: "cash", label: "Cash on Delivery", icon: "cash-outline" },
  { id: "4", type: "bank", label: "Bank Transfer", icon: "business-outline" },
];

export function useCheckout() {
  const [addresses] = useState<Address[]>(dummyAddresses);
  const [paymentMethods] = useState<PaymentMethod[]>(dummyPaymentMethods);
  const [form, setForm] = useState<CheckoutForm>({
    addressId: "1",
    paymentMethodId: "1",
    note: "",
  });
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const updateForm = (field: keyof CheckoutForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const placeOrder = async () => {
    setIsPlacingOrder(true);
    try {
      // TODO: backend will implement Appwrite order creation here
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return true;
    } finally {
      setIsPlacingOrder(false);
    }
  };

  return {
    addresses,
    paymentMethods,
    form,
    isPlacingOrder,
    updateForm,
    placeOrder,
  };
}
