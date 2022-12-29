import styled from "styled-components";

export const MainTitle = styled.h2`
    font-size: 40px;
    color: #f1f1f1;
    text-align: center;
    margin: 45px 0 90px;

    @media (max-width: 500px) {
		font-size: 32px;
	}
`

export const ContentProdutos = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 404px);
    flex-wrap: wrap;
    gap: 54px 32px;
    margin: 0 50px 48px;
    justify-content: space-around;

    @media (max-width: 875px) {
		display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto 48px;
	}
`