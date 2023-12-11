import React from 'react'
import './banner2.css'
import Image1 from '../../assets/brandss/Artboard ÔÇô 1111.png'

const Banner2 = () => {
  return (
 <div className='background_banner2' id='retails_part' >
    <div className='container'>
        <div className='col-lg-12 col-md-12 col-md-12 brands_partner' >
            <div className='col-lg-4 col-md-2 col-sm-12 brands_partner02'>
                <h1 style={{color:'#000'}}>Our </h1>
               
                <h1 style={{color:'#000'}}> Retail</h1>
                <h1 style={{color:'#000'}}>Partners</h1>
            </div>
                <div className='col-lg-8 col-md-11 col-sm-12  brands_partner0'>
                    <img className='logos_brands' src={Image1} alt='image' style={{maxWidth:"700PX",marginTop:"50px"}} />
                </div>

        </div>
    </div>
    </div>

  )
}

export default Banner2


// travel-watch
// youth - accessories