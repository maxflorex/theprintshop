import React, { useState } from 'react';
import { dataBorders } from '../api/dataBorders';
import { Column, Flex, Items3, Items6 } from './Styled/divs/Styled';
import { Title } from './Styled/fonts/Styled';
import { SForm, SInput, SOption, SSelect, SLabel } from './Styled/forms/Styled';

const FormCanvas = () => {

    return (
        <SForm w="100%" m="0">
            <Title mt="4rem" mb="2rem">
                Select Borders
            </Title>

            <Items6 m="0" p="0" color="transparent">
                {dataBorders.map((data, index) => (
                    <Flex color="white" mr="0" ml="0" gapMd='1rem'>
                        <SLabel for={index}>{data.title}</SLabel>
                        <SInput
                            type="radio"
                            id={index}
                            value={data.title}
                            name={data.title}
                            outline="none"
                            w="auto"
                        />
                    </Flex>
                ))}
            </Items6>
        </SForm>
    );
};

export default FormCanvas;

{
    /* <Items3 m="0" gap="0" p='0'>
   
<Flex className='bg-white' color={`${selected === 'stretchers' ? 'var(--off2)' : 'white'}`} cursor='pointer' m="0" onClick={() => setSelectedTab('stretchers')}>
    <Title size="2rem">Stretcher Bars</Title>
</Flex>
</Items3> */
}
