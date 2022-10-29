import React from "react";
import Status from "../../Layout/Status";
import Success from "../../Assets/success.svg"
import Failed from "../../Assets/failed.svg"
import Image from "react-bootstrap/Image"

const StatusGagal = () => {
  return (
    <Status>
      <Image src={Failed}/>
      <h4>Transfer Failed</h4>
      <p>We can't transfer your money at the moment, we recommend you to <br/>
      check your internet connection and please try again in a few minutes.</p>
    </Status>
  );
};

export default StatusGagal;