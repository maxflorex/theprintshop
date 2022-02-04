import { useRouter } from "next/router";
import { data } from '../api/dataProducts'
import { Btn } from '../components/Styled/buttons/Styled'
import { Hero } from "../components/Styled/divs/Styled";
import { P, Title } from "../components/Styled/fonts/Styled";


export default () => {
    const router = useRouter();

    const product = data[router.query.id]


    if (!product) return (
        <Hero>
            <Title>Not a product</Title>
            <Btn href="/products">
                Go back
            </Btn>
        </Hero>)


    return (
        <Hero>
            <Title size='4rem'>{product.title}</Title>
            <P color='dark'>{product.desc}</P>
            <img src={product.img} />
            <Btn href="/products">
                Go back
            </Btn>
        </Hero>
    )
}



// LET'S TRY SOMETHING ELSE



