import React from "react";
import Status from "../../Layout/Status";
import Success from "../../Assets/success.svg"

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image"
// import NavbarComp from "../../Components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Link, useParams, Component, useNavigate } from "react-router-dom";
import Content from "../../Layout/Content";
import { transferService } from "../../services/transfer";
import NavbarComp from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";

const StatusBerhasil = () => {

  return(
    <>
    
    <Status>

    <Image src={Success}/>
    <h4>Transfer Success</h4>

  </Status>
  </>
  ) 

}

export default StatusBerhasil;
