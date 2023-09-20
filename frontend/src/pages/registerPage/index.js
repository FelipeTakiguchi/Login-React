import * as S from "./styled";
import { useCallback, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import React  from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigator = useNavigate();

    const handlePost = useCallback(async () => {
        const json = {
            email: email,
            name: name,
            password: password
        };

        var encryptedJson = CryptoJS.AES.encrypt(JSON.stringify(json), 'senhaultrasecreta123').toString();
 
        const res = await axios.post('http://localhost:8080/api/auth/register', {
            json: encryptedJson,
        });
        
        if(res.data)
        {
            navigator("/login");
        }
    }, [email, name, password]);

    return (
        <>
            <section>
                <S.Container>
                    <S.SpacedForm>
                        <h2>SIGN UP</h2>
                        <S.InputText type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}></S.InputText>
                        <S.InputText type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}></S.InputText>
                        <S.InputText type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}></S.InputText>
                        {/* <S.InputText type="text" placeholder='ConfirmPassword' onChange={(e) => setConfirmPassword(e.target.value)}></S.InputText> */}
                        <S.FontSize>
                            <span>Already have an account? </span>
                            <a href='/login'>LogIn</a>
                        </S.FontSize>
                        <S.SubmitButton onClick={handlePost} to="/login">Create</S.SubmitButton>
                    </S.SpacedForm>
                </S.Container>
            </section>
        </>
    )
}
