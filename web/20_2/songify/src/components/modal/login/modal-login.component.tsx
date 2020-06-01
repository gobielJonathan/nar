import React from 'react'
import './modal-login.component.scss'
import GModal, { ModalProps } from '../modal.component'
import { Col, Row, Form, Button } from 'react-bootstrap'
import TextLogo from '../../text-logo/text-logo.component'

const LoginModal: React.FC<ModalProps> = ({
    onClose,
    show
}) => {

    return (
        <GModal
            show={show}
            onClose={onClose}
        >
            <section className="modal-login">
                <Row className="h-100 mx-0">
                    <Col sm="6" className="d-flex align-items-center justify-content-center">
                        <TextLogo className="display-4" />
                    </Col>
                    <Col sm="6" className="modal-login__form">
                        <Form className="py-3">
                            <Form.Group controlId="exampleForm.email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" className="border-0 pl-0 bg-transparent" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.password" className="my-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="******" className="border-0 pl-0 bg-transparent" />
                            </Form.Group>

                            <Button type="submit"
                                variant="outline-primary"
                                className="btn w-100"
                                style={{ boxShadow: "0 0 15px 0 rgba(255, 255, 255, 0.2)" }}>Login</Button>
                        </Form>
                    </Col>
                </Row>
            </section>
        </GModal>
    )
}

export default LoginModal