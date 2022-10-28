// Bootstrap
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// CSS
import '../../Styles/Components/ProfileButton/ProfileButton.css';

function ProfileButton(props) {
  // Props Data Button
  const { text, icon, link } = props;
  return (
    <Link to={link}>
      <Button className='position-relative mt-3 ProfileButton d-flex align-items-center justify-content-between'>
        <span className='float-start'>{text}</span>
        <span className='float-end Icon-Button'>{icon}</span>
      </Button>
    </Link>
  );
}

export default ProfileButton;