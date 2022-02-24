import React from 'react'
import '../../app.css'



export default function Navbar() {
  return (
    <>
  <div className='container'>
  <div className='row'>
    <div className='col-12 py-3'>
    <button className='btn-sm btn-primary mx-2 btnN ' >N</button>
    <b> Name </b><span className='ml-4'>  &8592; </span>
    </div>
  </div> 
<div className='row'>
<div className='list-group list-group-flush '>

        <a href='/' className='list-group-item w-100 link text-white list-group-item-action'><i className="fa fa-th-large mr-2"></i>Home</a>
        <a href='/' className='list-group-item  link text-white list-group-item-action'><i className="fa fa-bars mr-2"></i>Section 1</a>
        <a href='/' className='list-group-item  link text-white list-group-item-action'><i className="fa fa-map-signs mr-2"></i>Section 2</a>
        <a href='/' className='list-group-item  link text-white list-group-item-action'><i className="fa fa-envelope mr-2" ></i>Section 3</a>
        <a href='/' className='list-group-item link text-white  list-group-item-action'> <i className="fa fa-usd btnN mr-2"></i>Section 4</a>
        <a href='/' className='list-group-item link text-white  list-group-item-action'> <i className="fa fa-database mr-2"></i> Section 5</a>
        <a href='/' className='list-group-item  link text-white list-group-item-action'> <i className="fa fa-pie-chart mr-2"></i> Section 6</a>
        <a href='/' className='list-group-item  link text-white list-group-item-action'>  <i className="fa fa-signal mr-2"></i>Section 7</a>
        <a href='/' className='list-group-item  link text-white list-group-item-action'> <i className="fa fa-share-alt mr-2"></i> Section 8</a>
        <a href='/' className='list-group-item  link text-white list-group-item-action'> <i className="fa fa-file-text-o mr-2"></i>documentation</a>

        
    </div>
</div>
<div className='row flex-row'>
  <div className='col-md-5 bg-secondary radius px-2 mx-1 py-1'>
<div className='radius  text-white px-2  '><span className="btnN bg-primary px-1 ">N</span>$0.90</div>
  </div>
  <div className='col-md-6 bg-secondary radius px-2   '>

Buy $XYZ</div>
</div>
    <div className='row'>
      <div className='col-2 my-2 px-3'>
      <i className="fa fa-thin fa-globe"></i>

      </div>
      <div className='col-6  my-2 ml-auto'>
      <span>
      <i className="fa fa-toggle-on"></i>
      </span>

      </div>
    </div>
  </div>

    </>
  )
}