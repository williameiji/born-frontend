import { TEditForm } from "../../layouts/Dashboard/EditStudentInformation/types";

export type TEditProvider = {
	editInformation: TEditForm;
	setEditInformation: React.Dispatch<React.SetStateAction<TEditForm>>;
};
