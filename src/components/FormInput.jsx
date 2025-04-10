import { useField } from 'formik'
import React from 'react'

const FormInput = ({label, ...props}) => {
    const [field, meta] = useField(props)
    console.log("meta", meta);
    
  return (
    <div className='mb-2'>
        <label className='d-block fs-20 mb-2 fw-semibold'>{label}</label>
        <input {...field} {...props} className={meta.touched && meta.error ? "input-error fs-18" : "fs-18"}  style={{maxWidth:'400px', minWidth:'300px', width:'30vw', height:'50px', padding:'10px', borderRadius:'10px'}} />
        {meta.touched && meta.error && <div className='error' style={{marginLeft:'5px'}}>{meta.error}</div>}
    </div>
  )
}

export default FormInput