import React, { useContext, useState } from 'react'
import '../../app.css'
import { fdata1 } from '../../App'
import Spinner from './Spinner';
export default function Alert(props) {
  const data = useContext(fdata1);
  const [line, setLine] = useState('underline')
  const [line1, setLine1] = useState('none')
  return (
    <>
      <div className='row '>
        <div className='col-2 my-1 mx-2'>
          <h3 className='text-white ' style={{ textDecoration: 'underline', textDecorationColor: 'blue' }}>Section</h3>
        </div>
        <div className='col-3 bg-secondary radius ml-auto my-1 mx-2 py-1 '>
          <span className='text-primary'><i className="fa fa-regular fa-wallet"></i> </span> <b>0.2 $xyz</b> <button className='btn btn-secodary ml-3 text-primary radius tier' >Tier 1</button>
        </div>
      </div>
      <div className='container'>
        <div className='row my-0 radius tier'>
          <div className='col-11   '>
            <div className='alert   text-dark' >
              lorem ipsum is simply dummy text of the printing and typesetting industry.
              <button className='close' data-dismiss="alert">
                <span >&times;</span>
              </button><br />

              <button className='btn btn-white radius px-5 my-2'>Tutorial</button>

            </div>
          </div>
        </div>

      </div>

      <div className='row bg-secondary flex-column radius w-5  m-auto'>
        <div className='col-8 pt-3'>
          <p> <b>Your rewards</b></p>
        </div>
        <div className='col-6'><span className='align-content-center'><b>$0.26231428</b></span></div>
        <div className='col-3 ml-auto'> <button className='btn btn-primary radius m-0 p-1 px-3 text-white'><i className="fa fa-external-link mr-2"></i> custom link</button></div>
        <br />
        <div className='row pb-1 m-0'>

          <span className='radius1 mx-1 px-2'>$4d Avax</span>
          <span className='radius1 mx-1 px-2'>$10 BNB</span>
          <span className='radius1 mx-1 px-2'> $210 BTC</span>
        </div>


      </div>
      <div className='row   pt-2'>
        <div className='col-5 radius  py-2 m-auto bg-secondary'>
          <h3> <span>icon</span>12.5% of fee</h3><br />
          <p className='text-white'> Your referral Link for xyz</p>
          <div className='radius1 px-2 py-1'>https://unityexchange.design <i className="fa fa-clone mr-2"></i>  </div>

        </div>
        <div className='col-5 radius py-2 m-auto bg-secondary'>
          <h3> <span>icon</span>12.5% of fee</h3><br />
          <p className='text-white'> Your referral Link for xyz</p>
          <div className='radius1 px-2 py-1'>https://unityexchange.design <i className="fa fa-clone mr-2"></i>  </div>
        </div>
      </div>
      <div className='container'>

        <div className='row'>
          <h4  ><a href='/' className='text-white mr-2' style={{ textDecoration: `${line}`, textDecorationColor: 'blue' }} onClick={() => { setLine('line') }} >First Tab</a></h4>
          <h4><a href='/' className='text-white' onClick={() => {
            setLine1('underline')
            setLine('none')
          }} style={{ textDecoration: `${line1}`, textDecorationColor: 'blue' }}  >Second Tab</a></h4>

        </div>
        <div className='row bg-secondary radius p-2'>
          <div className='col-3 text-center'>ASSET</div>
          <div className='col-3 text-center'>AMOUT</div>
          <div className='col-3 text-center'>USERACCOUNT</div>
          <div className='col-3 text-center'>REFERRAL EARNING </div>
        </div>
        <div>
        {!props.value &&<Spinner/>}  
        </div>
       {props.value&&<div className='row mt-1 bg-secondary radius p-2'>
          <div className='col-3 text-center'>
            <img src={`${data.img}`} alt='...' /><span>{data.asset}<br />{data.type}<span className='radius1 px-2'>&nbsp;<img src={`${data.chain.img}`} alt="please wait" /><span>{data.chain.name}</span></span></span>


          </div>
          <div className='col-3 text-center'>{data.referral_earnings}BNB<br />{data.state}</div>
          <div className='col-3 text-center'>0xf6..1353</div>
          <div className='col-3 text-center'>{data.referral_earnings}BNB<br /><p className='text-dark'>view on BSC Scan <i className="fa fa-external-link mr-2"></i></p></div>
        </div>}
       

      </div>
    </>
  )
}