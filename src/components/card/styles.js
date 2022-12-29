import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #f1f1f1;
    height: 100%;
    width: 404px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    transition: 0.5s ease-in-out;

    @media (max-width: 430px) {
		max-width: 320px;
	}

    &:hover {
        box-shadow: #f1f1f1 0px 0px 15px;
    }
`
export const CardImage = styled.img`
    max-width: 380px;
    max-height: 380px;
    margin: 12px;
    border-radius: 8px;

    @media (max-width: 430px) {
		max-width: 296px;
        max-height: 296px;
	}
`

export const RecordInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
    margin: 12px;
    color: #f1f1f1;
`

export const RecordTitle = styled.h3`
    font-size: 32px;

    @media (max-width: 430px) {
		font-size: 24px;
	}
`

export const RecordAuthor = styled.h5`
    font-size: 16px;

    @media (max-width: 430px) {
		font-size: 12px;
	}
`

export const RecordPrice = styled.h4`
    font-size: 24px;

    @media (max-width: 430px) {
		font-size: 18px;
	}
`

export const AddToCard = styled.button`
    width: 100%;
    height: 58px;
    font-size: 24px;
    padding: 8px 0;
    justify-self: flex-end;
    align-self: flex-end;
    text-transform: uppercase;
    text-align: center;
    outline: none;
    background-color: #f1f1f1;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    cursor: pointer;
    transition: 0.5s ease-in-out;

    &:hover {
        background-color: #ffc000;
        letter-spacing: 2px;
    }

    @media (max-width: 430px) {
		font-size: 18px;
	}
`