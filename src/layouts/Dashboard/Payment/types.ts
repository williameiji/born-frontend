export type TAsynchronousInput = {
	paymentDataInput: Payment;
	setPaymentDataInput: React.Dispatch<React.SetStateAction<Payment>>;
};

export interface TPaymentForm extends TAsynchronousInput {
	submitPayment: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export type Payment = {
	id?: string;
	name: string;
	value: string;
	date: string;
	reference: string;
};
