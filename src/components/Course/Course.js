import "./Course.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { PiUsersThreeFill } from "react-icons/pi";

function Course(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.img} />
            <span className="students estedad d-flex align-items-center justify-content-between"> 
                <PiUsersThreeFill className="fs-5"/>
                {props.students}
            </span>
            <Card.Body>
                <Card.Title className="lalezar fs-3">{props.title}</Card.Title>
                <Card.Text className="estedad my-4">
                    {props.desc}
                </Card.Text>
                <hr />
                <div className="cardFooter">
                    <p className="estedad d-flex justify-content-between">
                        <span>
                            <FaChalkboardTeacher className="fs-4" />
                            : {props.teacher}
                        </span>
                        <span>
                            <IoMdTime className="fs-4" />
                            : {props.time} دقیقه
                        </span>
                    </p>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Course;