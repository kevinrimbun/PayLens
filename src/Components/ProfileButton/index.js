// Bootstrap
import Button from 'react-bootstrap/Button';

// CSS
import '../../Styles/Components/ProfileButton/ProfileButton.css'

function ProfileButton(props) {
  // Props Data Button
  const { text, icon } = props;
  return (
      <Button className='mt-3 ProfileButton d-flex align-items-center'>
        <span className='float-start'>{text}</span>
        <span className='float-end Icon-Button'>{icon}</span>
      </Button>
  );
}

export default ProfileButton;