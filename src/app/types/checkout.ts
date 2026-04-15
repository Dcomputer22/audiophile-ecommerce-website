export interface CheckoutFormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    zipCode: string;
    city: string;
    country: string;
    paymentMethod: 'e-money' | 'cash';
    eMoneyNumber: string;
    eMoneyPin: string;
}