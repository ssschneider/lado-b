import styled from "styled-components";

export const Title = styled.h2`
	font-size: 48px;
	text-align: center;
	margin: 45px 0 64px;
	color: #f1f1f1;
`;

export const Container = styled.section`
	width: 80%;
	margin: 0 auto 48px;
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

export const Cabecalho = styled.div`
	background-color: #f1f1f1;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 8px;

	h5 {
		font-size: 24px;
		text-transform: uppercase;
		background-color: transparent;

        @media (max-width: 540px) {
            font-size: 16px;
        }
	}

	button {
		background-color: transparent;
		border: 0;
		text-align: center;
		padding-left: 8px;
		outline: none;
		font-size: 24px;
		text-transform: uppercase;
		cursor: pointer;
		transition: 0.5s ease-in-out;

		&:hover {
			scale: 1.1;
		}

        @media (max-width: 540px) {
            font-size: 16px;
        }
	}
`;

export const CarrinhoVazio = styled.p`
	font-size: 24px;
	text-align: justify;
	color: #f1f1f1;
	width: 80%;
	margin: 0 auto;
`;
