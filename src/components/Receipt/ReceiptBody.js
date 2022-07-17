import styled from "styled-components";
import numero from "numero-por-extenso";
import dayjs from "dayjs";

import logo from "../../assets/image/logo-born.png";

export default function ReceiptBody({ receiptDataInput }) {
	return (
		<>
			<ContainerReceipt>
				<Top>
					<img src={logo} alt="logo" />
					<div>
						<p>Rocha Centro de Idiomas LTDA</p>
						<p>CNPJ 09.586.161/0001-83</p>
						<p>Avenida Santo Antônio nº 1562</p>
						<p>Marilía - SP</p>
						<p>3454-2853 / 99723-5927</p>
					</div>
				</Top>
				<Body>
					<h2>**RECIBO**</h2>
					<h3>{`Valor: ${
						receiptDataInput.valor !== ""
							? parseInt(receiptDataInput.valor).toFixed(2).replace(".", ",")
							: "0,00"
					}`}</h3>
					<p>{`Recebi(emos) de ${receiptDataInput.nome.toUpperCase()} - ${
						receiptDataInput.cpf
					}`}</p>
					<p>{`a quantia supra de ${numero
						.porExtenso(
							parseInt(receiptDataInput.valor),
							numero.estilo.monetario
						)
						.toUpperCase()}`}</p>
					<p>{`Referente a ${receiptDataInput.ref.toUpperCase()}`}</p>
				</Body>
				<Assign>
					<p>__________________________________________</p>
					<p>Rocha Centro de Idiomas LTDA</p>
					<p>CNPJ 09.586.161/0001-83</p>
					<p>{`Marilía-SP - ${dayjs().format("DD/MM/YYYY HH:mm:ss")}`}</p>
				</Assign>
			</ContainerReceipt>
		</>
	);
}

const ContainerReceipt = styled.div`
	width: 100%;
	height: 85%;
	border: 1px solid #87ceeb;
	border-radius: 5px;
	overflow: auto;
	padding: 10px;
`;

const Top = styled.span`
	display: flex;

	img {
		height: 90px;
		margin: 0 10px 0 40px;
	}

	p {
		font-size: 18px;
	}
`;

const Body = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;

	h2 {
		margin: 0 auto;
		font-size: 30px;
		font-weight: bold;
		margin-top: 40px;
	}

	h3 {
		text-align: right;
		font-size: 20px;
		font-weight: bold;
		margin: 40px 40px 40px 0;
	}

	p {
		margin: 10px 0 0 40px;
		text-align: left;
		font-size: 20px;
	}
`;

const Assign = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin: 90px 40px 0 0;

	p {
		margin: 5px 0 0 0;
	}
`;
