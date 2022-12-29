import Card from "../../components/card/card";
import { ContentProdutos, MainTitle } from "./styles";
import api from "../../services/api/api";
import { useEffect, useState } from "react";
import { saveRecords } from "../../services/store/loadCart";

const Produtos = () => {
	const [records, setRecords] = useState([]);


	const fetchRecords = async () => {
		const { data } = await api.get("records");
		setRecords(data);
	};

	useEffect(() => {
		fetchRecords();
	}, []);

	const recordsCart = [];

	const handleClick = (record) => {
		recordsCart.push(record);
		saveRecords(recordsCart);
		alert(`O disco "${record.title}" foi adicionado ao carrinho com sucesso!`)
	};

	return (
		<>
			<MainTitle>Mais Vendidos do Ano</MainTitle>
			<ContentProdutos>
				{records.map((record) => {
					return (
						<Card
							cover={record.cover}
							title={record.title}
							author={record.author}
							price={record.price}
							onClick={() => handleClick(record)}
							key={record.id}
						/>
					);
				})}
			</ContentProdutos>
		</>
	);
};

export default Produtos;
