import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Home from "./Index";
import TestaCPF from "../../shared/checkCPF";
import NewStudent from "../../layouts/NewStudents/NewStudent";
import ModalContext from "../../contexts/ModalContext";
import ModalGeneric from "../../shared/ModalGeneric";
import { addStudent } from "../../services/studentsApi";
import { getToken } from "../../shared/getToken";

export default function NewStudentsScreen({ setRenderFinds }) {
	const [signupData, setSignupData] = useState({
		date: "",
		value: "",
		name: "",
		cpfStudent: "",
		rgStudent: "",
		nameResp: "",
		cpfResp: "",
		rgResp: "",
		adress: "",
		number: "",
		district: "",
		city: "",
		phone: "",
		email: "",
	});

	const { setModalStatus } = useContext(ModalContext);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const navigate = useNavigate();

	function handleSignupForm(e) {
		let data = { ...signupData };
		data[e.target.name] = e.target.value;
		setSignupData(data);
	}

	let config = {
		headers: {
			Authorization: `Bearer ${getToken()}`,
		},
	};

	async function signupNewStudent(e) {
		e.preventDefault();
		setIsModalOpen(true);

		if (getToken()) {
			try {
				//disable for tests (must be a valid 'cpf')
				if (signupData.cpfStudent !== "" && !TestaCPF(signupData.cpfStudent)) {
					throw { status: "Error:", message: "CPF do aluno inválido" };
				}

				if (signupData.cpfResp !== "" && !TestaCPF(signupData.cpfResp)) {
					throw { status: "Error:", message: "CPF do responsável inválido" };
				}
				//disable for tests (must be a valid 'cpf')

				await addStudent(signupData, config);
				setModalStatus({ status: "Sucesso!", message: "Cadastro efetuado!" });
				setRenderFinds([]);

				setTimeout(() => {
					navigate("/students");
				}, 2000);
			} catch (err) {
				setModalStatus({
					status: "Error:",
					message: err.response?.data || err.message,
				});

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

	return (
		<Home>
			<ModalGeneric isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<NewStudent
				signupData={signupData}
				handleSignupForm={handleSignupForm}
				signupNewStudent={signupNewStudent}
			/>
		</Home>
	);
}
