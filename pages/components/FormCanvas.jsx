import React, { useEffect, useState } from 'react';
import { dataBorders } from '../api/dataBorders';
import { Column, Flex, Items3, Items6, Row } from './Styled/divs/Styled';
import { Title } from './Styled/fonts/Styled';
import { SForm, SInput, SOption, SSelect, SLabel } from './Styled/forms/Styled';
import { FiChevronDown } from 'react-icons/fi';
import { dataStretchers } from '../api/dataStretchers';
import { dataFloaters } from '../api/dataFloaters';

const FormCanvas = ({
    setIsBorder,
    setStretchers,
    setIsFloaters,
    qty,
    handleChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [isOpenSb, setIsOpenSb] = useState(false);
    const toggleSb = () => setIsOpenSb(!isOpenSb);

    const [isOpenF, setIsOpenF] = useState(false);
    const toggleF = () => setIsOpenF(!isOpenF);

    // useEffect(() => {
    //     borders = isBorder
    //     console.log(isBorder)
    // })

    return (
        <>
            <Flex
                m="0"
                p="0 "
                mb="2rem"
                color="none"
                bb="solid var(--off3) 1px"
                radius="0"
                justify="start"
                gap="0"
            >
                <Title m="2rem" cursor="pointer" onClick={toggle}>
                    Select Borders
                </Title>
                <FiChevronDown />
            </Flex>

            {/* ----------------------------------------------- */}

            {isOpen && (
                <Items6 mt="2rem" ml="0" mr="0" p="0" color="transparent">
                    {dataBorders.map((data, index) => (
                        <Flex
                            color="white"
                            mr="0"
                            ml="0"
                            gapMd="1rem"
                            key={index}
                            cursor="pointer"
                            onClick={() => setIsBorder(data.title)}
                        >
                            <Title>{data.title}</Title>
                        </Flex>
                    ))}
                </Items6>
            )}
            <Flex
                m="0"
                p="0 "
                mb="2rem"
                color="none"
                bb="solid var(--off3) 1px"
                radius="0"
                justify="start"
                gap="0"
            >
                <Title m="2rem" cursor="pointer" onClick={toggleSb}>
                    Select Stretchers
                </Title>
                <FiChevronDown />
            </Flex>

            {/* ----------------------------------------------- */}

            {isOpenSb && (
                <Items3 mt="2rem" ml="0" mr="0" p="0" color="transparent">
                    {dataStretchers.map((data, index) => (
                        <Flex
                            color="white"
                            mr="0"
                            ml="0"
                            gapMd="1rem"
                            key={index}
                            cursor="pointer"
                            onClick={() => setStretchers(data.title)}
                        >
                            <Title>{data.title}</Title>
                        </Flex>
                    ))}
                </Items3>
            )}

            <Flex
                m="0"
                p="0 "
                mb="2rem"
                color="none"
                bb="solid var(--off3) 1px"
                radius="0"
                justify="start"
                gap="0"
            >
                <Title m="2rem" cursor="pointer" onClick={toggleF}>
                    Select Floaters
                </Title>
                <FiChevronDown />
            </Flex>

            {/* ----------------------------------------------- */}

            {isOpenF && (
                <Items3 mt="2rem" ml="0" mr="0" p="0" color="transparent">
                    {dataFloaters.map((data, index) => (
                        <Flex
                            color="none"
                            colorH="var(--off2)"
                            mr="0"
                            ml="0"
                            gapMd="1rem"
                            key={index}
                            cursor="pointer"
                            onClick={() => setIsFloaters(data.title)}
                        >
                            <Column m="auto" p="0" align="centre">
                                <span className={data.color}></span>
                                <Title>{data.title}</Title>
                            </Column>
                        </Flex>
                    ))}
                </Items3>
            )}

            {/* ----------------------------------------------- */}

            <Row color="none">
                <Flex color="none">
                    <label htmlFor="qyu">Quantity:</label>
                    <SInput
                        type="number"
                        name="qty"
                        value={qty}
                        min="1"
                        max="200"
                        onChange={handleChange}
                        placeholder="Quantity"
                        required
                    />
                </Flex>
                <Flex>
                    <label htmlFor="avatar">Choose a profile picture:</label>

                    <input
                        type="file"
                        id="avatar"
                        name="avatar"
                        accept="image/png, image/jpeg"
                        onChange={handleChange}
                        placeholder="Quantity"
                        required
                    />
                </Flex>
            </Row>
        </>
    );
};

export default FormCanvas;
