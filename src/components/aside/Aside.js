import React, {  useContext, useState } from 'react'
import '../../app.css'
import { fdata1 } from '../../App'


export default function Aside(props) {
    const [color, setColor] = useState(['primary', 'dark'])
    const data=useContext(fdata1);

    return (
        <div className='container '>
            <div className='row mt-3 justify-content-around'>
                <div className='col-md-5'>

                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          {props.value&&<img src={`${data.chain.img}`} alt='...' />  }  
                            Avalanche
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Action</button>
                            <button className="dropdown-item" type="button">Another action</button>
                            <button className="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>


                </div>


                <div className='col-md-5'>
                    <div className="dropdown">
                        <button className="btn btn-outline-primary btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-regular fa-wallet mr-1"></i>0xf6..1353
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Action</button>
                            <button className="dropdown-item" type="button">Another action</button>
                            <button className="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-9'>

                    <h6 className='my-3'><span className='pr-1'>&#8592;</span> Custom link</h6>
                </div>
                <div className='col-12'>
                    <label htmlFor='email'>https://testnet.xyz/trade?ref=</label><br />

                    <input type='email' className='form-control my-4  mx-auto py-3 placeholderValue radius bg-secondary text-white' placeholder='ENTER' id='email' /><br />
                </div>
            </div>
            <div className='row justify-content-around'>
                <div className='col-md-5'>
                    <button onClick={() => {
                        setColor(['primary', 'dark'])
                    }} className={`btn btn-${color[0]} radius`}><i className="fa fa-external-link mr-2"></i> Link</button>
                </div>
                <div className='col-md-5'>
                    <button onClick={() => {
                        setColor(['dark', 'primary'])
                    }} className={`btn btn-${color[1]} radius`}><i className="fa fa-sign-in mr-2"></i>Cancel</button>
                </div>

            </div>


        </div>
    )
}