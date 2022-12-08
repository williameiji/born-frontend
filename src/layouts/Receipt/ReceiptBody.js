import styled from "styled-components";
import numero from "numero-por-extenso";
import dayjs from "dayjs";
import React from "react";

import logo from "../../assets/image/logo-born.png";
import mCPF from "../../shared/mCPF";

export const ReceiptBody = React.forwardRef((props, ref) => {
	return (
		<div ref={ref}>
			<ContainerReceipt>
				<Top>
					<img src={logo} alt="logo" />
					<div>
						<p>Rocha Centro de Idiomas LTDA</p>
						<p>CNPJ 00.000.000/0001-00</p>
						<p>Avenida Exemplo nº 100</p>
						<p>Exemplo - SP</p>
						<p>9999-9999 / 99999-9999</p>
					</div>
				</Top>
				<Body>
					<h2>**RECIBO**</h2>
					<h3>{`Valor: ${
						props.receiptDataInput.valor !== ""
							? parseInt(props.receiptDataInput.valor)
									.toFixed(2)
									.replace(".", ",")
							: "0,00"
					}`}</h3>
					<p>{`Recebi(emos) de ${props.receiptDataInput.nome.toUpperCase()} - ${mCPF(
						props.receiptDataInput.cpf
					)}`}</p>
					<p>{`a quantia supra de ${numero
						.porExtenso(
							parseInt(props.receiptDataInput.valor),
							numero.estilo.monetario
						)
						.toUpperCase()}`}</p>
					<p>{`Referente a ${props.receiptDataInput.ref.toUpperCase()}`}</p>
				</Body>
				<Assign>
					<p>__________________________________________</p>
					<p>Exemplo LTDA</p>
					<p>CNPJ 00.000.000/0001-00</p>
					<p>{`Marilía-SP - ${dayjs().format("DD/MM/YYYY HH:mm:ss")}`}</p>
				</Assign>
			</ContainerReceipt>
		</div>
	);
});

const ContainerReceipt = styled.div`
	width: 100%;
	height: 85%;
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
