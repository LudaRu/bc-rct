import React from "react";
import {Formik, Field} from "formik";
import BasicFormSchema from "./BasicFormSchema";
import {Button, Form, Container, Row, Col} from "react-bootstrap";

const SignUp = () => (
    <Container fluid>
        <Row noGutters>
            <Col>
                <Formik
                    validationSchema={BasicFormSchema}
                    initialValues={{name: ""}}
                    onSubmit={console.log}
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
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    isValid={touched.name}
                                />
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                            </Form.Group>
                            <Button type="submit">Submit form</Button>
                        </Form>
                    )}


                </Formik>

            </Col>
        </Row>
    </Container>
);

export default SignUp;
