import Image from 'next/image';
import { Column, Flex, Grid, Row } from './Styled/divs/Styled';
import { P, Title, Title2 } from './Styled/fonts/Styled';

const Papers = () => {
    const link =
        'https://images.unsplash.com/photo-1531845116688-48819b3b68d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80';

    return (
        <>
            <Column color="none" m="0">
                <Grid gap="4rem">
                    <Column img={link} h="85vh" width="100%" />
                    <Column p="4rem">
                        <Title align="left" size="4rem">
                            Satin Paper.
                        </Title>
                        <Title2 font="Roboto" align="left" mb="2rem">
                            - Photo Luster
                        </Title2>
                        <P color="black" font="Roboto">
                            Anything but commonplace. A photo paper but
                            something more. A silky finish playfully teasing the
                            light. A delicate texture alive and mercurial. A
                            quicksand image dragging you ever deeper into
                            imagination. For images that will be seen, shared,
                            and cherished Vibrance Luster is a celebration and
                            the icing on the cake.
                        </P>
                        <Column p="0" mt="2rem" ml="0" mr="0">
                            <table>
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
                                    <td>60X480 (IN)</td>
                                    <td>255GSM</td>
                                </tr>

                                <tr>
                                    <th>
                                        <Title
                                            font="Roboto"
                                            size="1rem"
                                            w="600"
                                            align="left"
                                            mt='2rem'
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
                                            mt='2rem'
                                        >
                                            BASE COMPOSITION
                                        </Title>
                                    </th>
                                </tr>

                                <tr>
                                    <td>Luster</td>
                                    <td>Resin</td>
                                </tr>
                            </table>
                        </Column>
                    </Column>
                </Grid>
            </Column>
        </>
    );
};

export default Papers;
