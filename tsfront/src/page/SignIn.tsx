import * as React from 'react';
import { Link} from "react-router-dom"
import { Box ,Container,Button} from '@mui/material'
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from 'yup'


const title = {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
} as const

const titlecontent = {
    height: "70px",
    alignContent: 'center',
}


const SignupSchema = Yup.object().shape({
  email:Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialvalues = {
  email: '',
  password: '',
}

function SignIn() {
    return (
        <>
        <Container maxWidth="sm">
            <Box sx={title}>
                <Box sx={titlecontent}>Sign in</Box>
            </Box>
        </Container>
        <Container maxWidth="sm">
            <Box  sx={title}>
            <Formik
              initialValues={initialvalues}
              validationSchema={SignupSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false)
                  alert(JSON.stringify(values, null, 2))
                }, 500);
              }}
            >
           { props => (
                  <Form>
                    <Field
                      component={TextField}
                      name="email"
                      type="email"
                      label="Email"
                    />
                    {props.errors.email && props.touched.email ? (
                      <div>{props.errors.email}</div>
                    ) : null}
                    <br />
                    <Field
                      component={TextField}
                      type="password"
                      label="Password"
                      name="password"
                    />
                    {props.errors.password? (
                      <div>{props.errors.password}</div>
                    ) : null}
                    <br />
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={props.isSubmitting}
                      onClick={props.submitForm}
                    >
                      Submit
                    </Button>
                  </Form>
                )}
         </Formik>
            </Box>
        </Container>
        <Container maxWidth="sm">
            <Box sx={title}>
                <Link to="/">
                    <Box sx={titlecontent}>Return to Home</Box>
                </Link>
            </Box>
        </Container>
        </>
    )
}

export default SignIn