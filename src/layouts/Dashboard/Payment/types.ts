export type TAsynchronousInput = {
	getStudentInformation: (e: { name: string } | null) => void;
};

export interface TPaymentForm extends TAsynchronousInput {
	handlePaymentForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
	submitPayment: () => void;
	paymentDataInput: Payment;
}

export type Payment = {
	id: string;
	name: string;
	value: string;
	date: string;
	reference: string;
};
