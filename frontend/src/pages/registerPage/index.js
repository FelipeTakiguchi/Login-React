import { Col, Container, Row } from 'react-bootstrap';
import * as S from "./styled";
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

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
        
        console.log(res);
    }, [email, name, password]);

    return (
        <>
            <section>
                <Container>
                    <S.SpacedForm>
                        <h2>SIGN UP</h2>
                        <S.InputText type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}></S.InputText>
                        <S.InputText type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}></S.InputText>
                        <S.InputText type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}></S.InputText>
                        {/* <S.InputText type="text" placeholder='ConfirmPassword' onChange={(e) => setConfirmPassword(e.target.value)}></S.InputText> */}
                        <S.SubmitButton onClick={handlePost}>Submit</S.SubmitButton>
                    </S.SpacedForm>
                </Container>
            </section>
        </>
    )
}
