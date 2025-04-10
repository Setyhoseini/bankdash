import React from 'react'

const Transaction = (props) => {
  return (
    <div className='d-flex flex-row align-items-center'>
            <img src={props.url} alt="" style={{width:'55px', height:'55px'}} className='me-4'/>
            <div style={{height:'44px', width:'167px'}} className='d-flex flex-column justify-content-between me-4'>
                <span className='text-transaction-section fs-16 fw-medium'>{props.title}</span>
                <span className='text-transaction-section-light fs-15 fw-normal'>{props.date}</span>
            </div>
            <span className={`text-transaction-${props.color} fs-16 fw-medium`}>{props.amount}</span>
    </div>
  )
}

export default Transaction