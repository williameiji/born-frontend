import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Home from "./Index";
import ModalContext from "../../contexts/ModalContext";
import ModalGeneric from "../../shared/ModalGeneric";
import InitialSearch from "../../layouts/Dashboard/SearchStudent";
import { getStudentByName } from "../../services/studentsApi";
import { getToken } from "../../shared/getToken";
import { TEditForm } from "../../layouts/Dashboard/EditStudentInformation/types";

type TSearch = {
	setRenderFinds: React.Dispatch<React.SetStateAction<[]>>;
	renderFinds: TEditForm[];
};

export default function SearchStudent({
	setRenderFinds,
	renderFinds,
}: TSearch) {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const modal = useContext(ModalContext);
	const [searchDataInput, setSearchDataInput] = useState({
		name: "",
	});

	async function searchByName(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsModalOpen(true);

		let searchFor = searchDataInput.name;

		if (searchDataInput.name === "") {
			searchFor = "all";
		}

		try {
			const data = await getStudentByName(searchFor);

			setIsModalOpen(false);

			informations.setRenderFinds(data);
		} catch (err: any) {
			modal?.setModalStatus({ status: "error", message: err.response.data });
		}
	}

	function showStudentInformation(index: number) {
		navigate(`/studentinfo/${index}`);
	}

	return (
		<Home>
			<ModalGeneric isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<InitialSearch
				setSearchDataInput={setSearchDataInput}
				searchByName={searchByName}
				showStudentInformation={showStudentInformation}
				renderFinds={renderFinds}
				searchDataInput={searchDataInput}
			/>
		</Home>
	);
}
