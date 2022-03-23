import Image from "next/image";
import { Column, Items3 } from "./Styled/divs/Styled";
import { dataStretchers } from '../api/dataStretchers'
import { Title } from "./Styled/fonts/Styled";

const Stretchers = () => {
    return (
        <Column p="4rem" gap="2rem" attach="fixed">
            <Title size="3rem" mb="2rem">
                Stretcher Bar Depths
                
            </Title>
            <Items3 p="0" m="0" gap="4rem">
                {dataStretchers.map((dataStretchers, index) => (
                    <Column m="0" p="0" key={index}>
                        <Column
                            width="50%"
                            widthMd="75%"
                            widthSm="100%"
                            m="auto"
                            p="0"
                        >
                            <Image src={dataStretchers.img} alt={dataStretchers.title} objectFit="cover" />
                        </Column>
                        <Title>{dataStretchers.title}</Title>
                    </Column>
                ))}
            </Items3>
        </Column>
    );
};

export default Stretchers;
