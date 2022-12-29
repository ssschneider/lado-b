import styled, { keyframes } from "styled-components";

export const Wrapper = styled.header`
	background-color: #0e0e0e;
	max-width: 90%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 32px 12px;

	@media (max-width: 690px) {
		justify-content: center;
	}
`;

const Spinning = keyframes`
    0% {
            transform: rotate(0);
    }
    100% {
            transform: rotate(360deg);
    }
`

export const Logo = styled.img`
	width: 100px;
	height: 100px;

	&:hover {
		animation: 1s ${Spinning} linear infinite;
	}
`;

export const Nav = styled.nav`
	display: flex;
	row-gap: 24px;
	margin-top: 32px;
	justify-content: space-around;
	align-items: center;
	width: fit-content;

	@media (max-width: 500px) {
		flex-direction: column;
		width: 100%;
		align-items: center;
		justify-content: center;
	}
`;

export const NavItem = styled.button`
	background-color: #FFC000;
	color: #0e0e0e;
	font-size: 24px;
	padding: 8px 16px;
	text-decoration: none;
	border-radius: 16px;
	margin-left: 16px;
	transition: 0.5s ease-in-out;
	outline: none;
	cursor: pointer;

	&:hover {
		scale: 1.1;
	}
`;
