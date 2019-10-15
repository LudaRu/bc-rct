import React from "react";
import {Formik} from "formik";
import {Button, Form, Col, InputGroup} from "react-bootstrap";
import * as Yup from "yup";

const schema = Yup.object().shape({
    img: Yup.string().required(),
    title: Yup.string().required(),
    tags: Yup.string().required(),
    price: Yup.string()
        .min(2, ">2")
        .max(20, "<20")
        .required(),
});


function ItemEditForm() {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                img: 'Otto',
                title: 'Mark',
                tags: 'Otto',
                price: 'Otto',
            }}
        >
            {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Control
                        type="text"
                        placeholder="img"
                        name="img"
                        value={values.img}
                        onChange={handleChange}
                        isInvalid={!!errors.img}
                    />

                    <Form.Control.Feedback type="invalid">
                        {errors.img}
                    </Form.Control.Feedback>

                    <Form.Control
                        type="text"
                        placeholder="title"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        isInvalid={!!errors.title}
                    />

                    <Form.Control.Feedback type="invalid">
                        {errors.title}
                    </Form.Control.Feedback>

                    <Form.Control
                        type="text"
                        placeholder="tags"
                        name="tags"
                        value={values.tags}
                        onChange={handleChange}
                        isInvalid={!!errors.tags}
                    />

                    <Form.Control.Feedback type="invalid">
                        {errors.tags}
                    </Form.Control.Feedback>

                    <Form.Control
                        type="text"
                        placeholder="price"
                        name="price"
                        value={values.price}
                        onChange={handleChange}
                        isInvalid={!!errors.price}
                    />

                    <Form.Control.Feedback type="invalid">
                        {errors.price}
                    </Form.Control.Feedback>
                </Form>
            )}
        </Formik>
    );
}

export default ItemEditForm;

