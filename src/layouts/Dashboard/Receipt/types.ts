export type TReceipt = {
	receiptDataInput: TReceiptForms;
	setReceiptDataInput: React.Dispatch<React.SetStateAction<TReceiptForms>>;
	handlePrint: () => void;
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
