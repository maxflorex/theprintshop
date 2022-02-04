
import { data } from '../api/dataProducts';
import Product from '../components/Product';
import { Column, Row } from '../components/Styled/divs/Styled';
import { Title } from '../components/Styled/fonts/Styled';





export const getStaticProps = async () => {
  return {
    props: {
      productList: data,
    }
  }
}




export default ({ productList }) => (


  <>
    <Column align='center' ml='0' mr='0'>
      <img src="https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80" alt="" style={{ width: '100vw', height: '20vh', objectFit: 'cover' }} />
      <Title size='3rem'>Details about product</Title>
      <Row>
        {productList.map(productList => (
          <Product key={productList.id} {...productList} />
        ))}
      </Row>
    </Column>
  </>
);


