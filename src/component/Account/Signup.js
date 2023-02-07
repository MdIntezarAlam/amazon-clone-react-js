import React from 'react'
import '../Account/sign.css'
import { Link } from 'react-router-dom'


const Signup = () => {
    return (
        <div className='sig'>
            <div className='s_box'>
                <span>Sign In</span>
                <label>Email or mobile phone number</label>
                <input type="text" />
                <Link to="/pro" className='link_container'>
                    <button>continue</button>
                </Link>
                <div className='acc'>
                    <span>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</span>
                </div>
            </div>
            <Link to="/pro" className='btns'>
                <button>create account</button>
            </Link>
        </div>
    )
}

export default Signup