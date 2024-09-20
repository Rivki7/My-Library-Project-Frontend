import { useDispatch } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const UserArea = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logoutUser());
    navigate('/signin');
  };
  return (
    <div>
      <h1>User Area</h1>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};
export default UserArea;
