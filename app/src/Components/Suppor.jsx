import React from 'react';
import Supp1 from '../Images/Frame2.png';
import Suup2 from '../Images/Rectangle.png';


const Suppor = () => {
  return (
    <div className='support'>
        <div className="max_w">
            <h3 className='h31'>PEOPLE OPERATIONS PLATFORM</h3>
            <h1 className='h11'>Swingvy makes it easy to<span>onboard</span>,<span>pay</span>, <span>insure</span> <br /> and <span>support</span>.</h1>
            <div className="bloc_sup">
                <div className="sup1">
                    <img src={Supp1} alt="404" />
                </div>
                <div className="sup1">
                    <img src={Suup2} alt="404" />
                    <h3><span>HR Hub.</span>Modern HR software that puts people first.</h3>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Suppor