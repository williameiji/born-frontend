import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

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
					<TextField
						data-cy="name"
						name="name"
						label="Nome do aluno"
						variant="outlined"
						size="small"
						onChange={(e) => handleFormSearch(e)}
						sx={{ height: "30px", width: "100%" }}
					/>
					<button type="submit" data-cy="submit">
						Pesquisar
					</button>
				</form>
				<ContainerStudents data-cy="students">
					{renderFinds.length !== 0 ? (
						renderFinds.map((element, index) => (
							<RenderStudent
								key={index}
								onClick={() => showStudentInformation(index)}
							>
								{element.name}
							</RenderStudent>
						))
					) : (
						<Text>Pesquise um aluno por nome</Text>
					)}
				</ContainerStudents>
			</Box>
		</Home>
	);
}

const Box = styled.div`
	background-color: white;
	width: 100%;
	height: 100%;
	margin-left: 5px;
	border-radius: 5px;
	padding: 20px;

	@media (max-width: 480px) {
		margin: 0;
	}

	form {
		display: flex;
		padding: 20px;

		input {
			border-radius: 5px;
		}

		button {
			border: none;
			border-radius: 5px;
			height: 39px;
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

const Text = styled.p`
	text-align: center;
	color: lightgray;
`;

const ContainerStudents = styled.div`
	width: 100%;
	height: 100%;
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
	border: 1px solid lightgray;
	border-radius: 5px;
	margin-bottom: 5px;

	:hover {
		cursor: pointer;
	}
`;
