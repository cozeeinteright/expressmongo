import * as React from 'react';
import { Link} from "react-router-dom"
import { Box ,Container,Button, LinearProgress} from '@mui/material'
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';


const title = {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
} as const

const titlecontent = {
    height: "70px",
    alignContent: 'center',
}

interface Values {
    email: string
    password: string
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
      initialValues={{
        email: '',
        password: '',
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            name="email"
            type="email"
            label="Email"
          />
          <br />
          <Field
            component={TextField}
            type="password"
            label="Password"
            name="password"
          />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
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