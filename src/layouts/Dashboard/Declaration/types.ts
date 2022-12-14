export type TDeclaration = {
	declarationDataInput: TFormsValue;
	handleDeclarationForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
	print: () => void;
	componentRef?: React.Ref<HTMLDivElement>;
};

type TFormsValue = {
	nome: string;
	cpf: string;
	idioma: string;
	inicio: string;
	final: string;
	horas: string;
	pontos: string;
	presença: string;
};

export type TDeclarationBody = {
	declarationDataInput: TFormsValue;
};
