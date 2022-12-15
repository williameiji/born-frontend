export type TReceipt = {
	receiptDataInput: TReceiptForms;
	handleReceiptForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
	print: () => void;
	componentRef?: React.Ref<HTMLDivElement>;
};

type TReceiptForms = {
	name: string;
	cpf: string;
	value: string;
	ref: string;
};

export type TReceiptBody = {
	receiptDataInput: TReceiptForms;
};
