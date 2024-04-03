import { Link } from "react-router-dom";
import './Landing.css'

const Landing = ({ heading, paragraph }) => {
  return (
    <div className='container-landing'>
      <div className='info'>
        <h1 className="title">{heading}</h1>
        <p className="paragraph">{paragraph}</p>
        <div>
          <Link to='/register' className='btn-link'>
            Register
          </Link>
          <Link to='/login' className='btn-link'>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
