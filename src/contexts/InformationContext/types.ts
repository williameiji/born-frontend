import { TEditForm } from "../../layouts/Dashboard/EditStudentInformation/types";

export type TInformationProvider = {
	renderFinds: TEditForm[];
	setRenderFinds: React.Dispatch<React.SetStateAction<TEditForm[]>>;
};
