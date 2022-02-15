import { Flex, Items3 } from './Styled/divs/Styled';
import { Title } from './Styled/fonts/Styled';

const Tabs = ({ setSelectedTab }) => {

    const reset1 = (e) => {
        if (e.target.classList.contains('reset')) {
            setSelectedTab(null);
        }
    };

    const stretcherTab = () => setSelectedTab('stretchers')

    return (
        <Items3 m="2rem" gap="4rem" p='0'>
            <Flex className='bg-white' cursor='pointer' m="0" hMax='4rem' align='start' onClick={stretcherTab}>
                <Title size="2rem">Stretcher Bars</Title>
            </Flex>
            <Flex className='bg-white' cursor='pointer' m="0" onClick={() => setSelectedTab('wrap')}>
                <Title size="2rem">Gallery Wraps</Title>
            </Flex>
            <Flex className='bg-white' cursor='pointer' m="0" onClick={() => setSelectedTab('floaters')}>
                <Title size="2rem">Floating Frames</Title>
            </Flex>
        </Items3>
    );
};

export default Tabs;
