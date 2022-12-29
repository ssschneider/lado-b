import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 0 32px;
	border-bottom: 1px solid #f1f1f1;
`;

export const ProductInfo = styled.div`
	display: flex;
	gap: 24px;
	width: fit-content;

	@media (max-width: 740px) {
		flex-direction: column;
	}
`;

export const RecordCover = styled.img`
	width: 150px;
	height: 150px;

    @media (max-width: 540px) {
        width: 100px;
	    height: 100px;
	}
`;

export const RecordData = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 12px;
	color: #f1f1f1;
	width: 150px;

	h5 {
		font-size: 24px;

		@media (max-width: 740px) {
			font-size: 16px;
			text-align: justify;
		}

        @media (max-width: 540px) {
			width: 110px;
		}
	}

	p {
		font-size: 16px;

        @media (max-width: 740px) {
			font-size: 12px;
			text-align: left;
		}
	}

	@media (max-width: 740px) {
		align-items: left;
	}
`;

export const NumberOfItems = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	margin: 0 auto;
    width: 27%;
`;

export const Items = styled.p`
	font-size: 24px;
	color: #f1f1f1;

    @media (max-width: 540px) {
			font-size: 24px;
	}
`;

export const Btns = styled.button`
	background-color: #f1f1f1;
	border: 1px solid #f1f1f1;
	padding: 8px;
	outline: none;
    cursor: pointer;
    font-size: 24px;
	border-radius: 4px;

	&:disabled {
		cursor: not-allowed;
		border: 1px solid #f1f1f1;
		background-color: #0e0e0e;
		color: #f1f1f1;
	}

    @media (max-width: 540px) {
        padding: 6px;
	}
`;

export const Total = styled.h4`
	font-size: 32px;
	color: #f1f1f1;
	margin: 0 auto;
    width: fit-content;

    @media (max-width: 540px) {
			font-size: 24px;
	}
`;
