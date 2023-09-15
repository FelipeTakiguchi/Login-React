import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import * as S from "./styled";
import React, { useEffect }  from 'react';

export default function AccessDenied() {
    const navigating = useNavigate()

    useEffect(() => {
      setTimeout(() => {
        navigating('/login')
      }, 2000)
    }, []);

    return(
        <S.Center>
            <h1>Denied Access</h1>
        </S.Center>
    )
}
