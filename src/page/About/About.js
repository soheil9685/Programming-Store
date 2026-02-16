import MyNav from "../../components/Navbar/Nav";
import "./About.css"
import profile from "../../assets/Image/profile.jpg"
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <MyNav />
            <Container className="rounded" style={{ backgroundColor: "#EDEDED" }}>
                <Row>
                    <Col className="col-12 text-center my-5">
                        <img style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} className="img-fluid rounded-pill w-25" src={profile} alt="" />
                    </Col>
                    <Col className="estedad col-12 text-center">
                        <p>بسم الله الرحمن الرحیم</p>
                        <p>
                            سلام! من محمد سهیل حسینی هستم دانشجوی سال دوم مهندسی کامپیوتر دانشگاه شاهد.
                            طراحی این سایت به عنوان تمرینی در پایان دوره React،
                            در تاریخ 28 بهمن 1404 تمام گردید
                        </p>
                    </Col>
                    <Col>
                        <div className="icons text-center mb-5">
                            <Link to={"https://github.com/soheil9685"} className="fs-2 mx-2 socialLink">
                                <FaGithub />
                            </Link>
                            <Link to={"https://www.instagram.com/_soheil9685_/"} className="fs-2 mx-2 socialLink">
                                <FaInstagram />
                            </Link>
                            <Link to={"https://www.linkedin.com/in/mohammad-soheil-hosseini-6a3957333/"} className="fs-2 mx-2 socialLink">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;