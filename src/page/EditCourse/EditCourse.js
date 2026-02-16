import "./EditCourse.css"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { Button, Container, Form } from "react-bootstrap";
import MyNav from "../../components/Navbar/Nav";
import { useParams } from "react-router-dom";

function EditCourse() {

    const [formData, setFormData] = useState({});
    let id = useParams().courseId;
    console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:5000/courses/${id}`)
            .then(response => setFormData(response.data))
    }, [])

    function formHandler(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function submitHandler() {
        axios.put(`http://localhost:5000/courses/${id}`, formData)
            .then(response => {
                if (response.statusText == "OK") {
                    Swal.fire({
                        icon: "success",
                        title: "تغییرات با موفقیت ذخیره شد!",
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true
                    })
                }
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
                        ویرایش
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default EditCourse;