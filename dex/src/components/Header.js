import React from 'react'
import logo from '../rizu-web3-logo.png'
import Eth from  '../eth.svg';
import { Link } from "react-router-dom";



function Header() {
  return (
    <header>
    <div className="leftH">
    <img src={logo} alt='logo' className='logo'/>
    <Link to="/" className="link">
    <div className="headerItem">Swap</div>
  </Link>
  <Link to="/tokens" className="link">
    <div className="headerItem">Tokens</div>
  </Link>

    </div>
    <div className='right'>
    <div className='headerItem'>
    <img src={Eth} alt='logo' className='eth'/>
     ETHERUM
    </div>
    <div className='connectButton'>Connect</div>
    </div>
    </header>

      )
}

export default Header