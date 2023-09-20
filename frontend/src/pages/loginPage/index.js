import * as S from "./styled";
import { useCallback, useState } from 'react';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React  from 'react';
import jwtDecode from "jwt-decode";

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
    
        if(res.data.token)
        {
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("username", jwtDecode(res.data.token).name);
            navigator("/");
        }
    }, [email, password]);

    return (
        <>
            <section>
                <S.Container>
                    <S.SpacedForm>
                        <h2>LOG IN</h2>
                        <S.InputText type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}></S.InputText>
                        <S.InputText type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}></S.InputText>
                        <S.FontSize>
                            <span>Don't have an account? </span>
                            <a href='/register'>Create here</a>
                        </S.FontSize>
                        <S.SubmitButton onClick={handlePost}>Enter</S.SubmitButton>
                    </S.SpacedForm>
                </S.Container>
            </section>
        </>
    )
}
