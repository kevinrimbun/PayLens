import React, { useCallback, useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Content from '../../Layout/Content'
import { BiTrashAlt } from "react-icons/bi"
import "../../Styles/Pages/ManagePhoneNum/managephonenum.css"
import { useNavigate, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { getDetailUserService, deletePhoneNumberService } from "../../services/user";




const ManagePhoneNum = () => {

  const [phoneNumber, setPhoneNumber] = useState("");
  const detailUserId = localStorage.getItem("detailUserId");

  const getDetailUser = useCallback (async () => {

    const response = await getDetailUserService(detailUserId);
    console.log(response);
    const data = response.data.data;
    setPhoneNumber(data.phoneNumber);
  }, []);

  const deletePhoneNumber = async (e, detailUserId) => {
    e.preventDefault();
    // const detailUserId = localStorage.getItem("detailUserId");

    const response = await deletePhoneNumberService(detailUserId);
    console.log(response);
  };

  useEffect(() => {
    getDetailUser();
  }, [getDetailUser]);

  return <Content>
    <Row>
      <div className='addnum-title'>
        <h4>Manage Phone Number</h4>
        <p>You can only delete the phone number <br /> and then you must add another phone number.</p>
      </div>
    </Row>
    <Row className='p-4'>
      <Card style={{ width: '100%' }} className='shadow mt-3 CardPhone'>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Phone Number</Card.Subtitle>
          <Card.Subtitle className="float-end Delete-Button"><i onClick={(e) => deletePhoneNumber(e)}> <BiTrashAlt /> </i>
          </Card.Subtitle>
          <Card.Text>
            <div className="d-flex managenum-body">
              <h5>{phoneNumber}</h5>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Row>
    <Link to='/add-phone'>
    
      <button className="btn-addphone mt-2" id='submit' type="submit" value="Enter">Add Phone Number</button>
    </Link>




  </Content>
}

export default ManagePhoneNum