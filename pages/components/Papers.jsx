 
import { useEffect } from 'react';
import { dataPapers } from '../api/dataPapers';
import { Column, Flex, Grid, Row } from '../../Styled/divs/Styled';
import { P, Title, Title2 } from '../../Styled/fonts/Styled';

const Papers = () => {
    return (
        <>
            {dataPapers.map((data, index) => (
                <Column color="none" m="0" key={index} mSm='0' pSm='0'>
                    <Grid gap="2rem" ml="1rem" mr="1rem" p="0"  gapSm='0'>
                        <Column
                            img={data.img}
                            imgMd={data.img}
                            h="60vh"
                            hMd="40vh"
                            width="100%"
                            m="0"
                            mtSm='4rem'
                        />

                        <Column p="4rem" pSm='0'>
                            <Title align="left" size="4rem">
                                {data.title}
                            </Title>
                            <Title2 font="Roboto" align="left" mb="2rem">
                                {data.sub}
                            </Title2>
                            <P color="black" font="Roboto">
                                {data.desc}
                            </P>
                            <Column p="0" mt="2rem" ml="0" mr="0">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <Title
                                                    font="Roboto"
                                                    size="1rem"
                                                    w="600"
                                                    align="left"
                                                >
                                                    MAX PRINT SIZE
                                                </Title>
                                            </th>
                                            <th>
                                                <Title
                                                    font="Roboto"
                                                    size="1rem"
                                                    w="600"
                                                    align="left"
                                                >
                                                    WEIGHT
                                                </Title>
                                            </th>
                                        </tr>

                                        <tr>
                                            <td>{data.size}</td>
                                            <td>{data.weight}</td>
                                        </tr>

                                        <tr>
                                            <th>
                                                <Title
                                                    font="Roboto"
                                                    size="1rem"
                                                    w="600"
                                                    align="left"
                                                    mt="2rem"
                                                >
                                                    FINISH
                                                </Title>
                                            </th>
                                            <th>
                                                <Title
                                                    font="Roboto"
                                                    size="1rem"
                                                    w="600"
                                                    align="left"
                                                    mt="2rem"
                                                >
                                                    BASE COMPOSITION
                                                </Title>
                                            </th>
                                        </tr>

                                        <tr>
                                            <td>{data.finish}</td>
                                            <td>{data.base}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Column>
                        </Column>
                    </Grid>
                </Column>
            ))}
        </>
    );
};

export default Papers;
