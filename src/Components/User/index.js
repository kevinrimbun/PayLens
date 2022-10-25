import Card from 'react-bootstrap/Card';

function UserTranscation(props) {
    const {picture, name, transaction, nominal} = props;
  return (
    <Card>
      <Card.Body className='d-flex justify-content-space-between align-items-center'>
      <img src={picture} alt='Profile'/>
      <div className='d-flex flex-column align-items-center'>
        <h6>{name}</h6>
        <p>{transaction}</p>
      </div>
      <h6>{nominal}</h6>
      </Card.Body>
    </Card>
  );
}

export default UserTranscation;