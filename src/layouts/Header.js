
import '../assets/styles/Header.scss'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Header() {

  const [currentLocation, setCurrentLocation] = useState({});
  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async() => {
    const location = await axios.get('https://ipapi.co/json');
    setCurrentLocation(location.data);
  }

  return (
    <>
        <header className='header'>
            <div className='header_wrap'>
                <h1><Link to="/">anything </Link></h1>
                <div className='header_location'>
                    <span className='from_location'>Deliver to: </span>
                    <span className='current_location'>{currentLocation.latitude} {currentLocation.longitude} </span>
                    <p> to location: {currentLocation.city}</p>
                </div>
                <div className='search_wrap'>
                    <Link to="/login">
                        <span className='login_txt'><i className='ico_login'></i>Login</span>                    
                    </Link>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header