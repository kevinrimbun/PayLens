// Bootstrap
import Card from 'react-bootstrap/Card';

// CSS
import '../../Styles/Components/UserTranscation/UserTranscation.css'

function UserTranscation(props) {
  // Props Data Users
  const { picture, name, transaction, nominal } = props;
  return (

    <Card className='UserTranscation-Comp mt-2'>
      <Card.Body className='d-flex align-items-center justify-content-between'>

        
        <div className='d-flex align-items-center justify-content-center'>
        <img src={picture} alt='Profile' className='Img-User border ' />
        <div className='d-flex flex-column align-items-center Data-User'>
          <h6>{name}</h6>
          <p>{transaction}</p>
          </div>
        </div>
        <h6 className='Nominal-User'>{nominal}</h6>

      </Card.Body>
    </Card>
  );
}

export default UserTranscation;