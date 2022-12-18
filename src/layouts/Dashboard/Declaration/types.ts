export type TDeclaration = {
	declarationDataInput: TFormsValue;
	setDeclarationDataInput: React.Dispatch<React.SetStateAction<TFormsValue>>;
	print: (e: any) => void;
	componentRef?: React.Ref<HTMLDivElement>;
};

type TFormsValue = {
	name: string;
	cpf: string;
	language: string;
	startDate: string;
	endDate: string;
	hours: string;
	score: string;
	frequency: string;
};

export type TDeclarationBody = {
	declarationDataInput: TFormsValue;
};
