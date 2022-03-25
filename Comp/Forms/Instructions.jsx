import { Column, Flex } from '../../Styled/divs/Styled';
import { Title } from '../../Styled/fonts/Styled';
import { SInput, STextArea } from '../../Styled/forms/Styled';
import { FiDownloadCloud } from 'react-icons/fi';

const Instructions = ({
    qty,
    handleChange,
    wide,
    tall,
    txt,
    uploadFiles,
    upload,
    imageUrl,
    selectedImage,
    instructions,
}) => {


    return (
        <div>
            <Flex color="var(--off2)" p="2rem" m="2rem" gap="4rem" mMd="0">
                <Flex color="none" m="0" p="0" align="flex-start" gapMd="1rem">
                    <div>
                        <label htmlFor="qty">
                            <Title
                                mb="1rem"
                                mt="2"
                                font="Roboto"
                                size="1rem"
                                align="left"
                            >
                                Quantity:
                            </Title>
                        </label>
                        <SInput
                            type="number"
                            name="qty"
                            value={qty}
                            min="1"
                            max="200"
                            onChange={handleChange}
                            placeholder="Qty"
                            required
                            w="80%"
                            p="1rem"
                        />
                    </div>
                    <div>
                        <label htmlFor="wide">
                            <Title mb="1rem" mt="2" font="Roboto" size="1rem">
                                Width:
                            </Title>
                        </label>
                        <SInput
                            type="number"
                            name="wide"
                            value={wide}
                            min="1"
                            max="200"
                            onChange={handleChange}
                            placeholder="0"
                            required
                            p="1.6rem"
                        />
                    </div>
                    <div>
                        <label htmlFor="tall">
                            <Title mb="1rem" mt="2" font="Roboto" size="1rem">
                                Height:
                            </Title>
                        </label>
                        <SInput
                            type="number"
                            name="tall"
                            value={tall}
                            min="1"
                            max="200"
                            onChange={handleChange}
                            placeholder="0"
                            required
                            p="1.6rem"
                        />
                    </div>
                </Flex>
                <Column p="0" m="0">
                    <Flex color="none" m="0" gap="2rem">
                        <label>
                            <Title mb="1rem" mt="2rem" align="right">
                                {txt}
                            </Title>
                        </label>

                        <div>
                            <FiDownloadCloud
                                style={{
                                    width: '4rem',
                                    height: '4rem',
                                    border: 'none',
                                    outline: 'none',
                                    cursor: 'pointer',
                                }}
                                onClick={uploadFiles}
                            />
                            <input
                                type="file"
                                id="files"
                                name="files"
                                accept="image/png, image/jpeg"
                                style={{
                                    display: 'none',
                                }}
                                onChange={upload}
                            />
                        </div>
                    </Flex>
                    <Column m="0" p="0" color="none">
                        <img
                            src={imageUrl}
                            alt={selectedImage}
                            style={{
                                maxHeight: '8rem',
                                maxWidth: '8rem',
                                margin: 'auto',
                            }}
                        />
                        <Title font="Roboto" size="1rem">
                            {selectedImage === null ? '' : selectedImage.name}
                        </Title>
                    </Column>
                </Column>
                <Flex color="none" m="0" p="0">
                    <label htmlFor="qty">
                        <Title mb="1rem" mt="2rem">
                            Aditional Details / Description / Instructions
                        </Title>
                    </label>
                    <STextArea
                        rows="8"
                        cols="1000"
                        name="instructions"
                        value={instructions}
                        onChange={handleChange}
                        placeholder="Send a message"
                    />
                </Flex>
            </Flex>
        </div>
    );
};

export default Instructions;
