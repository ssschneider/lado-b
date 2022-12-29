import { useNavigate } from "react-router-dom";
import { Logo, Nav, NavItem, Wrapper } from "./styles";

const Header = () => {
    const navigate = useNavigate()

    const handleInicio = () => {
        navigate("/")
    }

    const handleProdutos = () => {
        navigate("/produtos")
    }

    const handleCarrinho = () => {
        navigate("/carrinho")
    }
    
	return (
		<Wrapper>
			<Logo src="https://pngimg.com/uploads/vinyl/vinyl_PNG63.png" alt="Logo da empresa Lado B"/>
            <Nav>
                <NavItem onClick={handleInicio}>Início</NavItem>
                <NavItem onClick={handleProdutos}>Produtos</NavItem>
                <NavItem onClick={handleCarrinho}>Carrinho</NavItem>
            </Nav>
		</Wrapper>
	);
};

export default Header;
