import { Link } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore'

function Nav() {
  const {login, setLogout} = useAuthStore();
  console.log(`nav:${login}`);
  if(!login) {
    return (
      <nav>
        <ul>
          <li><Link to="/" style={{color:'white'}}>HOME</Link></li>
          <li><Link to="/login">로그인</Link></li>
        </ul>
      </nav>
    )
  } else {
    return (
      <nav>
        <ul>
          <li><Link to="/" style={{color:'white'}} >HOME</Link></li>
          <li><Link to="/write">쓰기</Link></li>
          <li><Link to="/#" onClick={setLogout} >로그아웃</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav