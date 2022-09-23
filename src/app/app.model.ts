export type AddressLines = [string, ...string[]];

export type UserDetail = {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  shippingAddress: AddressLines;
  billingAddress: AddressLines;
  paymentMethod: {
    type: string;
    number: string;
    expiry: string;
    owner: string;
  };
};
