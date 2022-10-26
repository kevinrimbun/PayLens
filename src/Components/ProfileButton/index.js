// Bootstrap
import Button from 'react-bootstrap/Button';

// CSS
import '../../Styles/Components/ProfileButton/ProfileButton.css'

function ProfileButton(props) {
  // Props Data Button
  const { text, icon } = props;
  return (
      <Button variant="secondary" className='mt-3 ProfileButton d-flex justify-content-space-between align-items-center'>
        {text}{icon}
      </Button>
  );
}

export default ProfileButton;