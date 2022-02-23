import React, { useState } from 'react';
import { Column, Flex, Grid } from './Styled/divs/Styled';
import { Title } from './Styled/fonts/Styled';
import { FiCornerRightDown } from 'react-icons/fi';
import { BtnBlack } from '../components/Styled/buttons/Styled';
import Image from 'next/image';

const Faq = ({ question, answers, link, img }) => {
    const [answer, setAnswer] = useState(false);

    return (
        <section>
            <Column m="0" p="0">
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
                        style={{ borderLeft: '1px solid var(--off3)', transitionDuration: '5s' }}
                        onMouseLeave={() => setAnswer(false)}
                    >
                        <Image src={img} style={{margin: '2rem'}}/>
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
