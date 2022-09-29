import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TransactionModal = ({ show, onClose, onSave }) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else {
            onSave({
                tradingParty: form.elements.tradingParty.value,
                counterParty: form.elements.counterParty.value,
                amount: Number(form.elements.amount.value),
            })            
            setValidated(false);
        }        
    };

    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Add New Transaction</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Label>Trading Party</Form.Label>
                    <Form.Control
                        id="tradingParty"
                        type="text"
                        readOnly
                        disabled
                        defaultValue="me"
                    />
                    <Form.Label>Counter party</Form.Label>
                    <Form.Control
                        id="counterParty"
                        type="text"
                        required
                    />
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        id="amount"
                        type="number"
                        required
                    />
                    <Button variant="secondary" onClick={onClose}>Close</Button>
                    <Button type="submit">Submit form</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default TransactionModal;