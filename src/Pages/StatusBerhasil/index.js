import React from "react";
import Status from "../../Layout/Status";
import Success from "../../Assets/success.svg"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image"

const StatusBerhasil = () => {
  return (
    <Status>
      <Image src={Success}/>
    </Status>
  );
};

export default StatusBerhasil;
