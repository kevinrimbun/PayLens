// Bootstrap
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

// CSS
import '../../Styles/Components/TopUp/TopUp.css'

function TopUpInstruction(props) {
  // Props Data Users
  const { id, paragraph } = props;
  return (

    <Card className='TopUpInstruction-Comp m-2 mt-3 shadow card-intsructions'>
      <Card.Body className='d-flex align-items-center'>

        <Dropdown className="dropdown-instructions">
          <Dropdown.Item className="dropdown-instructions">
            <h5 className='me-2 text-primary me-3'>{id}</h5>
            <p>{paragraph}</p>
          </Dropdown.Item>
        </Dropdown>

      </Card.Body>
    </Card>
  );
}

export default TopUpInstruction;