import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Checkout.css";
import useFireStore from "../../hooks/useFireStore";
import { CarritoContext } from "../../context/CartProvider";
import { useNavigate } from "react-router-dom";
const Checkout = ({ cartItems, total }) => {
  const { generateOrder } = useFireStore();
  const { clear } = useContext(CarritoContext);

  const [form, setForm] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    items: cartItems,
    total: total,
    date:Date.now()
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [e.target.name]: e.target.value,
      },
    });
  };

  const hanlderSubmit = (e) => {
    e.preventDefault();
    generateOrder({ data: form });
    clear();
  };
  return (
    <div className="divContainer ">
      <Form onSubmit={hanlderSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="label">Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            value={form.buyer.name}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="label">Phone</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="phone"
            value={form.buyer.phone}
            type="number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="label">Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="email"
            value={form.buyer.email}
            type="email"
          />
        </Form.Group>

        <Button
          disabled={!form.buyer.name || !form.buyer.phone || !form.buyer.email}
          variant="dark"
          type="submit"
        >
          Comprar
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
