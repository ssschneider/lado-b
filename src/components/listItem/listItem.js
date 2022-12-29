import { Btns, Container, Items, NumberOfItems, ProductInfo, RecordCover, RecordData, Total } from "./styles"

const ListItem = ({cover, title, author, onClickAdd, onClickMinus, numberOfItems, price, disabled}) => {
    return (
        <Container>
            <ProductInfo>
                <RecordCover src={cover}/>
                <RecordData>
                    <h5>{title}</h5>
                    <p>{author}</p>
                </RecordData>
            </ProductInfo>

            <NumberOfItems>
                <Btns onClick={onClickMinus} disabled={disabled}>-</Btns>
                <Items>{numberOfItems}</Items>
                <Btns onClick={onClickAdd}>+</Btns>
            </NumberOfItems>

            <Total>{price}</Total>
        </Container>
    )
}

export default ListItem