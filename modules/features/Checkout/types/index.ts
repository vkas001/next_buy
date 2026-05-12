export interface Address {
  id: string;
  name: string;
  phone: string;
  street: string;
  city: string;
  isDefault: boolean;
}

export interface PaymentMethod {
  id: string;
  type: "esewa" | "khalti" | "cash" | "bank";
  label: string;
  icon: string;
}

export interface CheckoutForm {
  addressId: string;
  paymentMethodId: string;
  note: string;
}
