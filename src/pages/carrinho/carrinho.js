import { useState } from "react";
import ListItem from "../../components/listItem/listItem";
import { getRecords } from "../../services/store/loadCart";
import { Cabecalho, CarrinhoVazio, Container, Title } from "./styles";

const Carrinho = () => {
	let [numberOfItems, setNumberOfItems] = useState(1);
	let [totalCart, setTotalCart] = useState("Indisponível")
	const records = getRecords();

	const handleClick = () => {
		alert("Pagamento indisponível. Por favor, tente novamente mais tarde.");
	};

	const handleAdd = () => {
		setNumberOfItems(numberOfItems++);
	};

	const handleMinus = () => {
		setNumberOfItems(numberOfItems--);
		if (numberOfItems === 0) {
			const removeItem = window.confirm(
				"Tem certeza que deseja remover este item?"
			);
			removeItem
				? alert("Item removido.")
				: alert("O item não será removido");
		}
	};

	const emptyCart =
		"Poxa, o seu carrinho está vazio! Que tal começar a enchê-lo? É só ir na aba 'Produtos' e escolher os seus favoritos!";

	const cart = []
	let cartTotal = 0;

	const itemTotal = (cartItem, numberOfItems) => {
		const price = parseInt(cartItem);
		const quantity = parseInt(numberOfItems);
		const totalPrice = price * quantity;
		const itemTotalPrice = totalPrice.toFixed(2);
		cart.push(itemTotalPrice)
		return itemTotalPrice
	};

	const fullCart = () => {
		cart.reduce(function (previous, current) {
			return previous + current
		}, 0)
	} 

	console.log(fullCart());

	return (
		<>
			<Title>Checkout</Title>
			<Container>
				<Cabecalho>
					<h5>Produto</h5>
					<h5>Quantidade</h5>
					<h5>Total</h5>
				</Cabecalho>
				{records.length === 0 ? (
					<CarrinhoVazio>{emptyCart}</CarrinhoVazio>
				) : (
					records.map((cartItem) => {
						return (
							<ListItem
								cover={cartItem.cover}
								title={cartItem.title}
								author={cartItem.author}
								numberOfItems={numberOfItems}
								onClickAdd={handleAdd}
								onClickMinus={handleMinus}
								disabled={numberOfItems === 0 ? true : false}
								key={cartItem.id}
								price={itemTotal(cartItem.price, numberOfItems)}
							/>
						);
					})
				)}
				{records.length === 0 ? null : (
					<Cabecalho>
						<h5>Frete grátis</h5>
						<h5>Subtotal: R$ {totalCart}</h5>
						<button onClick={handleClick}>Pagar agora</button>
					</Cabecalho>
				)}
			</Container>
		</>
	);
};

export default Carrinho;
