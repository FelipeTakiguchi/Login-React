import { Col, Container, Row } from 'react-bootstrap';
import * as S from "./styled";
import { useCallback, useState } from 'react';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React  from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigator = useNavigate();

    const handlePost = useCallback(async () => {
        const json = {
            email: email,
            password: password
        };

        var encryptedJson = CryptoJS.AES.encrypt(JSON.stringify(json), 'senhaultrasecreta123').toString();
 
        const res = await axios.post('http://localhost:8080/api/auth/login', {
            json: encryptedJson,
        });
    
        console.log(res.data);
        if(res.data.token)
        {
            sessionStorage.setItem("token", res.data.token);
            navigator("/");
        }
    }, [email, password]);

    return (
        <>
            <section>
                <Container>
                    <S.SpacedForm>
                        <h2>LOG IN</h2>
                        <S.InputText type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}></S.InputText>
                        <S.InputText type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}></S.InputText>
                        <div>
                            <span>Don't have an account? </span>
                            <a href='/register'>Create here</a>
                        </div>
                        <S.SubmitButton onClick={handlePost}>Submit</S.SubmitButton>
                    </S.SpacedForm>
                </Container>
            </section>
        </>
    )
}
