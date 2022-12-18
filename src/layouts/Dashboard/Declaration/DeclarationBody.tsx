import styled from "styled-components";
import dayjs from "dayjs";
import React from "react";

import logo from "../../../assets/image/logo-timbre.png";
import mCPF from "../../../shared/mCPF";
import "dayjs/locale/pt-br";
import * as types from "./types";

export const DeclarationBody = React.forwardRef(
	(props: types.TDeclarationBody, ref: React.LegacyRef<HTMLDivElement>) => {
		return (
			<div ref={ref}>
				<ContainerDeclaration>
					<Top>
						<img src={logo} alt="logo" />
					</Top>
					<Body>
						<div>{`${dayjs().format("DD")} de ${dayjs()
							.locale("pt-br")
							.format("MMMM")} de ${dayjs().format("YYYY")}`}</div>
						<h2>**DECLARAÇÃO**</h2>

						<p>{`Declaramos para os devidos fins que se fizerem necessários que ${props.declarationDataInput.name.toUpperCase()}, portador(a) do CPF nº ${mCPF(
							props.declarationDataInput.cpf
						)}, estudou ${props.declarationDataInput.language.toUpperCase()} de ${
							props.declarationDataInput.startDate
						} a ${props.declarationDataInput.endDate} com um total de ${
							props.declarationDataInput.hours
						} horas, com ${props.declarationDataInput.score} pontos e ${
							props.declarationDataInput.frequency
						}% de frequência.`}</p>
					</Body>
					<Assign>
						<p>Sem mais para o momento,</p>
						<p>Atenciosamente,</p>
						<p>__________________________________________</p>
						<p>Exemplo LTDA</p>
						<p>CNPJ 00.000.000/0001-00</p>
					</Assign>
				</ContainerDeclaration>
			</div>
		);
	}
);

const Body = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	h2 {
		margin: 50px auto;
		font-size: 30px;
		font-weight: bold;
	}

	div {
		display: flex;
		justify-content: right;
		font-size: 20px;
		margin: 30px 40px 0 0;
	}

	p {
		margin: 10px 40px 0 40px;
		text-align: left;
		font-size: 25px;
		line-height: 35px;
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

	p:nth-child(2) {
		margin-bottom: 30px;
	}
`;

const ContainerDeclaration = styled.div`
	width: 100%;
	height: 85%;

	border-radius: 5px;
	padding: 10px;
`;

const Top = styled.span`
	display: flex;

	img {
		height: 150px;
		margin: 0 10px 0 22px;
	}

	p {
		font-size: 18px;
	}
`;
