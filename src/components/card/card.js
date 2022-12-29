import { AddToCard, CardImage, Container, RecordAuthor, RecordInfo, RecordPrice, RecordTitle } from "./styles"

const Card = ({cover, title, author, price, onClick, id}) => {
    return (
        <Container id={id}>
            <CardImage src={cover} alt={title}/>
            <RecordInfo>
                <RecordTitle>{title}</RecordTitle>
                <RecordAuthor>{author}</RecordAuthor>
                <RecordPrice>{price}</RecordPrice>
            </RecordInfo>
            <AddToCard onClick={onClick}>Adicionar ao Carrinho</AddToCard>
        </Container>
    )
}

export default Card