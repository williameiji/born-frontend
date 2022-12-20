import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Home from "./Index";
import ModalContext from "../../contexts/ModalContext";
import ModalGeneric from "../../shared/ModalGeneric";
import InitialSearch from "../../layouts/Dashboard/SearchStudent";
import { getStudentByName } from "../../services/studentsApi";
import InformationContext from "../../contexts/InformationContext";

export default function SearchStudent() {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const informations = useContext(InformationContext);

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
				renderFinds={informations.renderFinds}
				searchDataInput={searchDataInput}
			/>
		</Home>
	);
}
