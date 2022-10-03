import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Home from "../Home/Home";
import url from "../Services/url";
import UserContext from "../Contexts/UserContext";
import ModalGeneric from "../Shared/ModalGeneric";
import ModalContext from "../Contexts/ModalContext";

export default function SearchStudent({ setRenderFinds, renderFinds }) {
	const [searchDataInput, setSearchDataInput] = useState({
		name: "",
	});

	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { userData } = useContext(UserContext);
	const { setModalStatus } = useContext(ModalContext);

	function handleFormSearch(e) {
		let data = { ...searchDataInput };
		data[e.target.name] = e.target.value;
		setSearchDataInput(data);
	}

	async function searchName(e) {
		e.preventDefault();
		setIsModalOpen(true);

		let searchFor = searchDataInput.name;

		if (searchDataInput.name === "") {
			searchFor = "all";
		}

		if (userData) {
			try {
				const data = await axios.get(url.searchStudent + "/" + searchFor);

				setIsModalOpen(false);

				setRenderFinds(data.data);
			} catch (err) {
				setModalStatus({ status: "error", message: err.response.data });
			}
		} else {
			alert("Você precisa estar logado!");
			navigate("/");
		}
	}

	function showStudentInformation(index) {
		navigate(`/studentinfo/${index}`);
	}

	return (
		<Home>
			<ModalGeneric isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<Box>
				<form onSubmit={searchName}>
					<input
						type="text"
						name="nome"
						placeholder="Nome do aluno"
						onChange={(e) => handleFormSearch(e)}
						value={searchDataInput.name}
					></input>
					<button type="submit">Pesquisar</button>
				</form>
				<ContainerStudents>
					{renderFinds.length !== 0
						? renderFinds.map((element, index) => (
								<RenderStudent
									key={index}
									onClick={() => showStudentInformation(index)}
								>
									{element.name}
								</RenderStudent>
						  ))
						: null}
				</ContainerStudents>
			</Box>
		</Home>
	);
}

const Box = styled.div`
	background-color: white;
	width: 100%;
	height: 75vh;
	margin-left: 5px;
	border-radius: 5px;
	padding: 20px;

	form {
		display: flex;
		padding: 20px;

		input {
			width: 100%;
			border: 1px solid #87ceeb;
			border-radius: 5px;
			height: 30px;
			text-align: center;
		}

		button {
			border: none;
			border-radius: 5px;
			height: 30px;
			width: 100px;
			margin-left: 10px;
			background-color: #87ceeb;
			font-weight: bold;

			:hover {
				background-color: darkblue;
				color: white;
				cursor: pointer;
			}
		}
	}
`;

const ContainerStudents = styled.div`
	width: 100%;
	height: 85%;
	border: 1px solid #87ceeb;
	border-radius: 5px;
	overflow: auto;
	padding: 10px;
`;

const RenderStudent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50px;
	border: 1px solid black;
	border-radius: 5px;
	margin-bottom: 5px;
`;
