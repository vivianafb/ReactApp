import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CartProvider";
import "./ModalDetail.css";
const ModalDetail = ({ item }) => {
  const { show, handleClose, cartItems } = useContext(CarritoContext);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Producto agregado con exito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Has agregado el siguiente producto al carrito:{" "}
          <strong>{item.name}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Link className="link" to={"/cart"}>
            <Button variant="secondary" onClick={handleClose}>
              Ir a carrito
            </Button>
          </Link>
          <Button variant="dark" onClick={handleClose}>
            Seguir Comprando
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDetail;
