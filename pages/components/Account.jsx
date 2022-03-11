import { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { auth, colRefOrder } from '../firebase/index';
import { Column, Flex } from './Styled/divs/Styled';
import { Title } from './Styled/fonts/Styled';
import { SButton, SForm, SInput } from './Styled/forms/Styled';
import { BtnBlack, Button } from './Styled/buttons/Styled';
import { RegisterForm } from './RegisterForm';
import {
    doc,
    getDocs,
    onSnapshot,
    orderBy,
    query,
    where,
} from 'firebase/firestore';
import OrderPreview from './OrderPreview';
import { FiFileText } from 'react-icons/fi';

const link =
    'https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

function App({ setIsAuth }) {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [user, setUser] = useState({});
    const [openRegForm, setOpenRegForm] = useState(false);
    const [myOrders, setMyOrders] = useState([]);
    const [showOrders, setShowOrders] = useState(true);

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
        } catch (error) {
            console.log(error.message);
            alert('Wrong Credentials!');
        }
        setRegisterEmail('');
        setRegisterPassword('');
    };

    //   LOGIN FUNCTION
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
        } catch (error) {
            console.log(error.message);
            alert('Wrong Credentials!');
        }
    };

    //   LOGOUT FUNCTION
    const logout = async () => {
        await signOut(auth);
        setLoginEmail('');
        setLoginPassword('');
    };

    // USEEFFECT
    useEffect(() => {
        return setIsAuth(user);
    });

    // GET DATA TO DISPLAY ORDER
    useEffect(() => {
        const getOrders = async () => {
            const data = await getDocs(colRefOrder);
            setMyOrders(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        };
        getOrders();
    }, []);

    // QUERY RESULTS
    const q = query(colRefOrder, where('email', '==', `${user?.email}`));

    onSnapshot(q, (snapshot) => {
        let orders = [];
        snapshot.docs.forEach((doc) => {
            orders.push({ ...doc.data(), id: doc.id });
        });
    });

    return (
        <Column p="0">
            {/* REGISTER FORM */}

            {openRegForm === true && (
                <RegisterForm
                    setRegisterEmail={setRegisterEmail}
                    setRegisterPassword={setRegisterPassword}
                    register={register}
                    setOpenRegForm={setOpenRegForm}
                    openRegForm={openRegForm}
                />
            )}

            {/* LOGIN FORM */}

            {user === null && openRegForm === false ? (
                <SForm>
                    <Column gap="2rem">
                        <Title size="2rem"> Login </Title>
                        <SInput
                            type="email"
                            placeholder="Email..."
                            onChange={(event) => {
                                setLoginEmail(event.target.value);
                            }}
                        />
                        <SInput
                            type="password"
                            placeholder="Password..."
                            onChange={(event) => {
                                setLoginPassword(event.target.value);
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
                            <BtnBlack onClick={login}>Login</BtnBlack>
                            <BtnBlack
                                bg="var(--accent)"
                                onClick={() => setOpenRegForm(!openRegForm)}
                            >
                                Create User
                            </BtnBlack>
                        </Flex>
                    </Column>
                </SForm>
            ) : (
                ''
            )}

            {/* WELCOME & LOGOUT & SHOW ORDERS */}

            {user && (
                <Flex color="none" img={link} attach="fixed" m="0">
                    <Column m="0" p="2rem" items="start">
                        <Title size="2rem"> Welcome! </Title>
                        <Title>{user?.email}</Title>
                        <BtnBlack w="100%" onClick={logout}>
                            Sign Out
                        </BtnBlack>
                    </Column>
                    <Column
                        colorH="var(--accent)"
                        p="2rem"
                        cursor="pointer"
                        onClick={() => setShowOrders(!showOrders)}
                    >
                        <FiFileText
                            style={{
                                width: '3rem',
                                height: '3rem',
                                color: 'white',
                                margin: 'auto',
                            }}
                        />
                        <Title font="Roboto" size="1rem" color="white">
                            My Orders
                        </Title>
                    </Column>
                </Flex>
            )}

            {/* DISPLAY ORDERS */}

            {user !== null && showOrders === false && (
                <Column color="none" m="0" p="4rem">
                    {myOrders.map((order) => {
                        return (
                            <div key={order.id}>
                                {user?.email === order.email && (
                                    <OrderPreview
                                        name={order.name}
                                        email={order.email}
                                        medium={order.medium}
                                        borders={order.borders}
                                        stretchers={order.stretchers}
                                        floaters={order.floaters}
                                        qty={order.qty}
                                        w={order.wide}
                                        h={order.tall}
                                        message={order.instructions}
                                        date={order.createdAt}
                                    />
                                )}
                            </div>
                        );
                    })}
                </Column>
            )}

            

        </Column>
    );
}

export default App;


// USER CONTEXT