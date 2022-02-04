import { data } from '../api/dataProducts'
import { Column } from '../components/Styled/divs/Styled'
import { Title } from '../components/Styled/fonts/Styled'

// GET STATIC PROPS 

export const getStaticProps = async ({ params }) => {
    const products = data.filter(p => p.id.toString() === params.id)
    return {
        props: {
            singleProduct: products[0],
        }
    }
}

export const getStaticPaths = async () => {
    const paths = data.map(singleProduct => ({
        params: { id: singleProduct.id.toString() },
    }))
    return { paths, fallback: false }
}



export default ({ singleProduct }) => (
    <Column>
        <Title size='4rem'>
            {singleProduct.title}
        </Title>
        <Title>
            {singleProduct.desc}
        </Title>
    </Column>
)