import "./Course.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { PiUsersThreeFill } from "react-icons/pi";

function Course() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://dl.next1code.ir/images/courses/typescript.png" />
            <span className="students estedad d-flex align-items-center justify-content-between"> 
                <PiUsersThreeFill className="fs-5"/>
                215
            </span>
            <Card.Body>
                <Card.Title className="lalezar fs-3">موضوع</Card.Title>
                <Card.Text className="estedad my-4">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </Card.Text>
                <hr />
                <div className="cardFooter">
                    <p className="estedad d-flex justify-content-between">
                        <span>
                            <FaChalkboardTeacher className="fs-4" />
                            : سهیل حسینی
                        </span>
                        <span>
                            <IoMdTime className="fs-4" />
                            : 50 دقیقه
                        </span>
                    </p>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Course;