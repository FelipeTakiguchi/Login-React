import { Col, Row } from 'react-bootstrap';
import * as S from "./styled";
import React, { useEffect, useState } from 'react';
import Post from '../../components/Post';

export default function HomePage() {
    const [jwt, setJwt] = useState('');

    return (
        <>
            <S.Content>
                <Post/>
            </S.Content>
        </>
    )    
}
