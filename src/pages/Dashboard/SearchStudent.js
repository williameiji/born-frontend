import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Home from "./Index";
import ModalContext from "../../contexts/ModalContext";
import ModalGeneric from "../../shared/ModalGeneric";
import InitialSearch from "../../layouts/SearchStudent/InitialSearch";
import { getStudentByName } from "../../services/studentsApi";
import { getToken } from "../../shared/getToken";

export default function SearchStudent({ setRenderFinds, renderFinds }) {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { setModalStatus } = useContext(ModalContext);
	const [searchDataInput, setSearchDataInput] = useState({
		name: "",
	});

	function handleFormSearch(e) {
		let data = { ...searchDataInput };
		data[e.target.name] = e.target.value;
		setSearchDataInput(data);
	}

	async function searchByName(e) {
		e.preventDefault();
		setIsModalOpen(true);

		let searchFor = searchDataInput.name;

		if (searchDataInput.name === "") {
			searchFor = "all";
		}

		if (getToken()) {
			try {
				const data = await getStudentByName(searchFor);

				setIsModalOpen(false);

				console.log(data);

				setRenderFinds(data);
			} catch (err) {
				setModalStatus({ status: "error", message: err.response.data });
				if (err.response?.status === 401) {
					setTimeout(() => {
						setIsModalOpen(false);
						navigate("/login");
					}, 2000);
				}
			}
		} else {
			alert("Você precisa estar logado!");
			navigate("/login");
		}
	}

	function showStudentInformation(index) {
		navigate(`/studentinfo/${index}`);
	}

	return (
		<Home>
			<ModalGeneric isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<InitialSearch
				handleFormSearch={handleFormSearch}
				searchByName={searchByName}
				showStudentInformation={showStudentInformation}
				renderFinds={renderFinds}
				searchDataInput={searchDataInput}
			/>
		</Home>
	);
}
