import { Formik, Form, Field, ErrorMessage } from 'formik';
 
const ShowLoginform = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ name: '', email: '' }}
      validate={values => {
        const errors = {};
        if(!values.name) {
          errors.name = 'Resuired';
        }
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
        console.log(values)
        fetch('http://localhost:3000/api/user',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',        
          },
          body: JSON.stringify(values, null, 2),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
          console.error('Error:',error)
        });

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="name" name="name" />
          <ErrorMessage name="name" component="div" />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ShowLoginform;