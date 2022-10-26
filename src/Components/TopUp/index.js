// Bootstrap
import Card from 'react-bootstrap/Card';

// CSS
import '../../Styles/Components/TopUp/TopUp.css'

function TopUpInstruction(props) {
  // Props Data Users
  const { id, paragraph } = props;
  return (

    <Card className='TopUpInstruction-Comp m-2 mt-3 shadow'>
      <Card.Body className='d-flex align-items-center'>

        <div className='d-flex align-items-center'>
          <h5 className='me-2 text-primary me-3'>{id}</h5>
          <p>{paragraph}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TopUpInstruction;