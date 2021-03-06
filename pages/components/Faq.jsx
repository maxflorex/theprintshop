import React, { useState } from 'react';
import { Column, Flex, Grid } from '../../Styled/divs/Styled';
import { Title } from '../../Styled/fonts/Styled';
import { FiCornerRightDown } from 'react-icons/fi';
import { BtnBlack } from '../../Styled/buttons/Styled';
 

const Faq = ({ question, answers, link, img }) => {
    const [answer, setAnswer] = useState(false);

    return (
        <section>
            <Column m="0" p="0" mSm='0'>
                <Flex
                    m="1rem"
                    gapMd="1rem"
                    className="bg-white"
                    onClick={() => setAnswer(!answer)}
                >
                    <Title>{question}</Title>
                    <FiCornerRightDown style={{ color: 'var(--off3)' }} />
                </Flex>
                {answer && (
                    <Column
                        p="4rem"
                        m="1rem"
                        radius="0"
                        mSm="2rem"
                        style={{ borderLeft: '1px solid var(--off3)', transition: '5000s ease all' }}
                        onMouseLeave={() => setAnswer(false)}
                    >
                        <img src={img} alt={img} style={{ maxWidth: '3rem', maxHeight: '3rem', margin: 'auto'}} />
                        <Title font="Roboto" lh="2rem">
                            {answers}
                        </Title>
                        { link === '' ? '' : ( <BtnBlack href={link}>Order now</BtnBlack> )}
                    </Column>
                )}
            </Column>
        </section>
    );
};

export default Faq;
