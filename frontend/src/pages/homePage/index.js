import { Col, Row } from 'react-bootstrap';
import * as S from "./styled";
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [jwt, setJwt] = useState('');

    return (
        <>
            <section>
                <Row className='content-products'>
                    <Col md={4} sm={6} xs={12}>
                        hello
                    </Col>
                </Row>
            </section>
        </>
    )    
}
