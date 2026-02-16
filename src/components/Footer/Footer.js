import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css"
import { FaRegCopyright } from "react-icons/fa";


function Footer() {
    return (
        <>
            <footer className="mt-5">
                <Container>
                    <Row className="text-center pt-3">
                        <Col>
                            <p className="estedad">
                                <FaRegCopyright className="me-2" />
                                تمامی حقوق این سایت محفوظ می باشد <br />
                                طراحی شده توسط سهیل حسینی
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer;