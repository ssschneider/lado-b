import Hero from "../../components/hero/hero"
import { AboutUs, SpinningImage, Title, Wrapper, Text } from "./styles"

const Homepage = () => {
    return (
        <>
            <Hero />
            <Wrapper>
                <SpinningImage src="https://pngimg.com/uploads/vinyl/vinyl_PNG63.png" alt="Spinning vinyl"/>
                <Text>
                    <Title>A Casa do Rock 'n' Roll</Title>
                    <AboutUs>
                    Trazendo, revivendo e nutrindo o rock ao longo das gerações é a missão do Lado B! Do psicodélico ao love rock, você está em casa!
                    </AboutUs>
                </Text>
            </Wrapper>
        </>
    )
}

export default Homepage