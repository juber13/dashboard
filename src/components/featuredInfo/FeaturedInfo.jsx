import React from 'react'
import './featuredInfo.css'
import {ArrowDownward , ArrowUpward} from '@material-ui/icons'
function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItems">
         <span className='featuredTitle'>Revanue</span>
         <div className="featuredMoneyContainer">
            <span className='featuredMoneyRate'>$2,455</span>
            <span className='featuredMoneyRate'>-12.4
             <ArrowDownward/>
            </span>
         </div>
          <span className='featuredSub'>Compared to last month</span>
        </div>

        <div className="featuredItems">
         <span className='featuredTitle'>Sales</span>
         <div className="featuredMoneyContainer">
            <span className='featuredMoneyRate'>$2,455</span>
            <span className='featuredMoneyRate'>-12.4
             <ArrowUpward/>
            </span>
         </div>
          <span className='featuredSub'>Compared to last month</span>
        </div>


        <div className="featuredItems">
         <span className='featuredTitle'>Cost</span>
         <div className="featuredMoneyContainer">
            <span className='featuredMoneyRate'>$2,455</span>
            <span className='featuredMoneyRate'>-12.4
             <ArrowDownward/>
            </span>
         </div>
          <span className='featuredSub'>Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo