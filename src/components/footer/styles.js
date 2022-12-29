import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 80%;
    background-color: #0e0e0e;
    border-top: 2px solid #f1f1f1;
    margin: 0 auto;
    padding: 16px 0;
    padding-left: 32px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    font-size: 16px;
    color: #f1f1f1;
    gap: 16px;

    @media (max-width: 430px) {
		justify-content: center;
        
	}

    a {
        font-size: 16px;
        color: #FFC000;
        text-decoration: none;
    }


`
