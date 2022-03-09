import { useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "./firebase/index";
import { Column, Flex } from "./components/Styled/divs/Styled";
import { Title } from "./components/Styled/fonts/Styled";
import { SButton, SForm, SInput } from "./components/Styled/forms/Styled";
import { BtnBlack, Button } from './components/Styled/buttons/Styled'
import { RegisterForm } from "./components/RegisterForm";

function App({ setIsAuth }) {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});
    const [openRegForm, setOpenRegForm] = useState(false)


    // PREVENTS USER TO AUTOMATICALLY LOGOUT
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    //   REGISTER FUNCTION
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
        }
        catch (error) {
            console.log(error.message);
        }
    };

    //   LOGIN FUNCTION
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    //   LOGOUT FUNCTION
    const logout = async () => {
        await signOut(auth);
        setLoginEmail('')
        setLoginPassword('')
    };

    // USEEFFECT
    useEffect(() => {
       return setIsAuth(user)
    })

    return (
        <Column>

            {/* REGISTER FORM */}
            {openRegForm === true ?
                (<RegisterForm setRegisterEmail={setRegisterEmail} setRegisterPassword={setRegisterPassword} register={register} setOpenRegForm={setOpenRegForm} openRegForm={openRegForm} />)
                : ''}

            {/* LOGIN FORM */}

            {user === null && openRegForm === false ?
                (<SForm>
                    <Column gap='2rem'>
                        <Title size='2rem'> Login </Title>
                        <SInput
                            type='email'
                            placeholder="Email..."
                            onChange={(event) => {
                                setLoginEmail(event.target.value);
                            }}
                        />
                        <SInput
                            type='password'
                            placeholder="Password..."
                            onChange={(event) => {
                                setLoginPassword(event.target.value);
                            }}
                        />

                        <Flex color='none' m='0' p='0' justify='center' gap='2rem' gapMd='2rem'>
                            <BtnBlack onClick={login}>Login</BtnBlack>
                            <BtnBlack bg='var(--accent)' onClick={() => setOpenRegForm(!openRegForm)}>Create User</BtnBlack>
                        </Flex>
                    </Column>
                </SForm>) : ''}

            {/* WELCOME & LOGOUT */}

            {user &&
                (<Column m='0' color='white'>
                    <Title size='2rem'> Welcome! </Title>
                    <Title mb='2rem'>{user?.email}</Title>

                    <BtnBlack m='auto' onClick={logout}>Sign Out</BtnBlack>
                </Column>)}

        </Column>
    );
}

export default App;



// import { useState } from 'react';
// import { Column, Flex } from './components/Styled/divs/Styled';
// import { Title } from './components/Styled/fonts/Styled';
// import { SButton, SForm, SInput } from './components/Styled/forms/Styled';
// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     onAuthStateChanged,
//     signOut,
// } from 'firebase/auth';
// import { auth } from './firebase/index';
// import { Btn, BtnBlack, Button } from './components/Styled/buttons/Styled';

// const Account = () => {
//     const [registerEmail, setRegisterEmail] = useState('');
//     const [registerPassword, setRegisterPassword] = useState('');
//     const [loginEmail, setLoginEmail] = useState('');
//     const [loginPassword, setLoginPassword] = useState('');

//     const [user, setUser] = useState({});

//     onAuthStateChanged(auth, (currentUser) => {
//         setUser(currentUser);
//     });

//     const register = async () => {
//         try {
//             const user = await createUserWithEmailAndPassword(
//                 auth,
//                 registerEmail,
//                 registerPassword
//             );
//             console.log(user);
//         } catch (error) {
//             console.log(error.message);
//         }
//     };

//     const login = async () => {
//         try {
//             const user = await signInWithEmailAndPassword(
//                 auth,
//                 loginEmail,
//                 loginPassword
//             );
//             console.log(user);
//         } catch (error) {
//             console.log(error.message);
//         }
//     };

//     const logout = async () => {
//         await signOut(auth);
//     };

//     console.log(user);

//     return (
//         <Column>
//             {/* LOGIN */}

//             <Title size="4rem">Login</Title>
//             <SForm gap="2rem">
//                 <Column gap="2rem" width="60%" m="auto">
//                     <SInput
//                         type="email"
//                         placeholder="Email"
//                         onChange={(e) => {
//                             setLoginEmail(e.target.value);
//                         }}
//                     />
//                     <SInput
//                         type="password"
//                         placeholder="Password"
//                         onChange={(e) => {
//                             setLoginPassword(e.target.value);
//                         }}
//                     />
//                     <Flex
//                         m="0"
//                         p="0"
//                         color="none"
//                         justify="center"
//                         gap="2rem"
//                         gapMd="2rem"
//                     >
//                         <SButton
//                             type="submit"
//                             value="Login"
//                             bgColor="#22c55e"
//                             m="0"
//                             onClick={login}
//                         />
//                         <SButton
//                             type="submit"
//                             value="Create New Account"
//                             m="0"
//                         />
//                     </Flex>
//                 </Column>
//             </SForm>

//             {/* REGISTER */}

//             <Title size="4rem">Register New User</Title>
//             <SForm gap="2rem">
//                 <Column gap="2rem" width="60%" m="auto">
//                     <SInput
//                         type="email"
//                         placeholder="Email"
//                         onChange={(e) => {
//                             setRegisterEmail(e.target.value);
//                         }}
//                     />
//                     <SInput
//                         type="password"
//                         placeholder="Password"
//                         onChange={(e) => {
//                             setRegisterPassword(e.target.value);
//                         }}
//                     />
//                     <Column
//                         m="0"
//                         p="0"
//                         color="none"
//                         justify="center"
//                         gap="2rem"
//                         gapMd="2rem"
//                     >
//                         <SButton
//                             type="submit"
//                             value="Create User"
//                             m="auto"
//                             bgColor="#38bdf8"
//                             onClick={register}
//                         />
//                     </Column>
//                 </Column>
//             </SForm>

//             {/* WELCOME MESSAGE */}
//             {/* {user && ( */}
//             <div>
//                 <Title size="2rem">{user?.email}</Title>
//                 <BtnBlack m="auto" onClick={logout}>
//                     Sign Out
//                 </BtnBlack>
//             </div>
//             {/* )} */}
//         </Column>
//     );
// };

// export default Account;
