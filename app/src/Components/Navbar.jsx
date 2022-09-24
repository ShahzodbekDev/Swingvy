import React from 'react';
import Logo from '../Images/Frame.png';

const Navbar = () => {

    const bos = () => {
    }

  return (
    <div className='navbar'>
        <div className="max_w">
            <div className="bloc_nav ">
                <div className="fl1">
                    <img className='img1' src={Logo} alt="404" />
                    <select className='down'>
                        <option>PRODUCTS</option>
                    </select>
                    <ul>
                        <li><a href="#">PRICING</a></li>
                        <li><a href="#">PARTNERS</a></li>
                    </ul>
                    <select className='down'>
                        <option>COMPANY</option>
                    </select>
                </div>
                <div className="fl2">
                    <ul>
                        <li><a href="#">SIGN IN</a></li>
                    </ul>

                    <button>REQUEST DEMO</button>
                    
                </div>
        
            </div>   
            
        </div>
    </div>
  )
}

export default Navbar