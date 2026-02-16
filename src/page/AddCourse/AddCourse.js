import { Button, Container, Form } from "react-bootstrap";
import MyNav from "../../components/Navbar/Nav";
import "./AddCourse.css"
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

function AddCourse() {

    const [formData, setFormData] = useState({});

    function formHandler(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function submitHandler() {
        axios.post("http://localhost:5000/courses", formData)
            .then(response => {
                if (response.status == 201) {
                    Swal.fire({
                        title: "دوره با موفقیت ثبت شد",
                        icon: "success",
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "ای وای...!",
                    text: "مقاله ساخته نشد!",
                    timer: 1500
                });
            })
        setFormData({
            title: "",
            desc: "",
            img: "",
            teacher: "",
            time: "",
            students: ""
        })
    }

    return (
        <>
            <MyNav />
            <Container>
                <Form>
                    <Form.Group className="estedad my-3">
                        <Form.Label>موضوع:</Form.Label>
                        <Form.Control value={formData.title} type="text" name="title" onChange={formHandler} placeholder="موضوع دوره را وارد کنید" required />
                    </Form.Group>
                    <Form.Group className="estedad my-3">
                        <Form.Label>شرح:</Form.Label>
                        <Form.Control value={formData.desc} type="text" name="desc" onChange={formHandler} placeholder="شرح دوره را وارد کنید" required />
                    </Form.Group>
                    <Form.Group className="estedad my-3">
                        <Form.Label>عکس:</Form.Label>
                        <Form.Control value={formData.img} type="text" name="img" onChange={formHandler} placeholder="پیوند عکس را وارد کنید" required />
                    </Form.Group>
                    <Form.Group className="estedad my-3">
                        <Form.Label>مدرس:</Form.Label>
                        <Form.Control value={formData.teacher} type="text" name="teacher" onChange={formHandler} placeholder="مدرس دوره را وارد کنید" required />
                    </Form.Group>
                    <Form.Group className="estedad my-3">
                        <Form.Label>مدت زمان:</Form.Label>
                        <Form.Control value={formData.time} type="number" name="time" onChange={formHandler} min={0} required />
                    </Form.Group>
                    <Form.Group className="estedad my-3">
                        <Form.Label>تعداد دانشجو:</Form.Label>
                        <Form.Control value={formData.students} type="number" name="students" onChange={formHandler} min={0} required />
                    </Form.Group>
                    <Button onClick={submitHandler} variant="primary" type="button">
                        ثبت دوره
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default AddCourse;