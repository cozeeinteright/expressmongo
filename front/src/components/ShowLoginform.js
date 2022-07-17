import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
 
 const ShowLoginform = () => (
   <div>
     <h1>Any place in your app!</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <TextField variant="standard" label="email" type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           <TextField variant="standard" label="password" type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <Button variant="contained" type="submit" disabled={isSubmitting}>
             Submit
           </Button>
         </Form>
       )}
     </Formik>
   </div>
 );
 
 export default ShowLoginform;