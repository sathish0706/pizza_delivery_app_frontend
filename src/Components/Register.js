import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const formValidationSchema = yup.object({
    username : yup.string().min(4,"User name must be 8 characters").required(),
    password : yup.string().min(8).max(12).required("Why not fill this Password ")

})

export default function Register () {
    const navigate = useNavigate();
    const formik = useFormik(
        { initialValues : {
             username : "",
             password : ""
          },
          validationSchema : formValidationSchema,
          onSubmit: async (values)=>{
            try{
              const response = await axios.post("https://webcode-2-pizza-delivery-backend.onrender.com/customers/signup",values)
              // localStorage.setItem("myreact", response.data.token)
              console.log(response);
              navigate("/login")
              
            }catch(err){
              console.log(err)
            }
            
           
            
          }
     });
      // console.log(values)

  return(
    <>
    <h1 id='register-tittle'>Register</h1>
    <div className='register-container'>
     <form onSubmit={formik.handleSubmit}>
            <TextField  label="User name"
             variant="outlined" className='signin-input'
             value={formik.values.username}
             onChange={formik.handleChange}
            onBlur={formik.handleBlur}

             type='text'
             name='username'
             /><br/>
             <span className='error'>{formik.touched.username && formik.errors.username ? formik.errors.username : null}</span>
             <br/><br/>

            <TextField  label="Password" 
            variant="outlined" className='signin-input'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type='password'
            name='password' /><br/>
            <span className='error'>{formik.touched.password && formik.errors.password ? formik.errors.password : null}</span>
             <br/><br/>
            <Button variant="contained" type='sunmit'
            color='success'
            className='signin-button'>Register</Button>
            </form>
    </div>
    </>
  )
}