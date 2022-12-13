export interface IModal {
	modalStatus: TStatus | null;
	setModalStatus: React.Dispatch<React.SetStateAction<TStatus | null>>;
}

export type TStatus = {
	status: string;
	message: string;
};
