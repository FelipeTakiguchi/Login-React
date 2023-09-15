import * as S from "./styled";
import React, {useEffect}  from 'react';
import  { useNavigate } from 'react-router-dom'

export default function UnknownPage() {
    const navigating = useNavigate()

    useEffect(() => {
      setTimeout(() => {
        if(sessionStorage.getItem("token"))
          navigating('/')
        else
          navigating('/login')
      }, 2000)
    }, []);

    return(
        <S.Center>
            <h1>Unknown Page</h1>
            <h2>You are being redirected...</h2>
        </S.Center>
    )
}
