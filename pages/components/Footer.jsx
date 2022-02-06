import { Flex, Column, Items } from './Styled/divs/Styled';
import { P, Title } from './Styled/fonts/Styled';

function Footer() {
    return (
        <div>
            <div className="bg-black">
                <section>
                    <Items mb="0" pt="4rem" mt="6rem">
                        <Column>
                            <Title
                                mb="1rem"
                                color="white"
                                align="left"
                                size="2rem"
                            >
                                Contact
                            </Title>
                            <P ls="0.05rem" color="white" font="Roboto">
                                prints@artcaymanco.com
                            </P>
                            <P ls="0.05rem" color="white" font="Roboto">
                                <a href="tel:+3459232222">+1(345) 923-2222</a>
                            </P>
                            <p>
                                <a href="tel:+4733378901">+47 333 78 901</a>
                            </p>
                        </Column>
                        <Column>
                            <Title
                                mb="1rem"
                                color="white"
                                align="left"
                                size="2rem"
                            >
                                Printing
                            </Title>
                            <P ls="0.05rem" color="white" font="Roboto">
                                Giclee
                            </P>
                            <P ls="0.05rem" color="white" font="Roboto">
                                Framing
                            </P>
                            <P ls="0.05rem" color="white" font="Roboto">
                                Photo Restoration
                            </P>
                            <P ls="0.05rem" color="white" font="Roboto">
                                Test Prints
                            </P>
                        </Column>
                        <Column>
                            <Title
                                mb="1rem"
                                color="white"
                                align="left"
                                size="2rem"
                            >
                                Artists
                            </Title>
                            <P ls="0.05rem" color="white" font="Roboto">
                                Discounts
                            </P>
                            <P ls="0.05rem" color="white" font="Roboto">
                                Prices
                            </P>
                        </Column>
                        <Column>
                            <Title
                                mb="1rem"
                                color="white"
                                align="left"
                                size="2rem"
                            >
                                The Printshop
                            </Title>
                            <P ls="0.05rem" color="white" font="Roboto">
                                Our Team
                            </P>
                            <P ls="0.05rem" color="white" font="Roboto">
                                Contact
                            </P>
                            <P ls="0.05rem" color="white" font="Roboto">
                                News
                            </P>
                            <P ls="0.05rem" color="white" font="Roboto">
                                Print Studio
                            </P>
                            <P ls="0.05rem" color="white" font="Roboto">
                                Privacy Policy
                            </P>
                        </Column>
                    </Items>
                </section>
            </div>
            <div>
                <Flex m="0" radius="0" color="var(--off1)" pt="1rem" pb="1rem">
                    <div>
                        <P
                            color="black"
                            font="Roboto"
                            font="Roboto"
                            ls="0.05rem"
                        >
                            The Printshop™
                        </P>
                    </div>
                    <div>
                        <P
                            color="black"
                            font="Roboto"
                            font="Roboto"
                            ls="0.05rem"
                        >
                            Art Cayman Co. - 2022
                        </P>
                    </div>
                </Flex>
            </div>
        </div>
    );
}

export default Footer;
