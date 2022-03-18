import React from 'react';
import { BtnBlack } from './Styled/buttons/Styled';
import { Column, Flex } from './Styled/divs/Styled';
import { Title } from './Styled/fonts/Styled';
import { SForm, SInput } from './Styled/forms/Styled';

export function RegisterForm({
    setRegisterEmail,
    setRegisterPassword,
    register,
    setOpenRegForm,
    openRegForm,
}) 

{

    const handleClick = () => {
        register()
        setOpenRegForm(!openRegForm)
    }
    
    return (
        <div>
            <SForm>
                <Column gap="2rem">
                    <Title size="2rem">Register User</Title>
                    <SInput
                        type="email"
                        required
                        placeholder="Email..."
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    />
                    <SInput
                        type="password"
                        required
                        placeholder="Password..."
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                    />

                    <Flex
                        color="none"
                        m="0"
                        p="0"
                        justify="center"
                        gap="2rem"
                        gapMd="2rem"
                    >
                        <BtnBlack onClick={handleClick}>
                            Sign Up
                        </BtnBlack>
                        <BtnBlack bg='var(--color)' onClick={() => setOpenRegForm(!openRegForm)}>
                            Already registered?
                        </BtnBlack>
                    </Flex>
                </Column>
            </SForm>
        </div>
    );
}
