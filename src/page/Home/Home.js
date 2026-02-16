import "./Home.css"
import MyNav from "../../components/Navbar/Nav"
import { Col, Container, Row } from "react-bootstrap";
import HeaderImg from "../../assets/Image/Header.jpg"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect, useState } from "react";
import Course from "../../components/Course/Course";
import axios from "axios";

function Home() {

    const [courses, setCourses] = useState([]);

    let arr = ["apple", "orange"]

    useEffect(() => {
        axios.get("http://localhost:5000/courses")
            .then(response => setCourses(response.data))
    }, [])

    console.log(courses)

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>
            <div className="Header">
                <MyNav />
                <Container>
                    <Row className="mt-5 d-flex align-items-center row-cols-1 row-cols-lg-2 gy-3">
                        <Col data-aos="fade-left">
                            <img className="HeaderImage w-75" src={HeaderImg} alt="" />
                        </Col>
                        <Col data-aos="fade-right">
                            <p className="estedad">
                                <span>به سهیل لرن خوش آمدید</span><br /><br />
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#9BA4B4" fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,229.3C384,213,480,139,576,117.3C672,96,768,128,864,122.7C960,117,1056,75,1152,74.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <section id="courses">
                <Container>
                    <h2 className="lalezar mb-4 text-center">دوره های آموزشی</h2>
                    <Row className="gy-3">
                        {courses.map(course => (
                            <Col key={course.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <Course {...course} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Home;