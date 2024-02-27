'use client'
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';

async function insert(values) {
  const result = await fetch("/api/submit", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({...values}),
  }).catch((error) => {
    console.log('Error:', error);
  });

  console.log(JSON.stringify(values));
}

function Email() {
  const schema = object({
    email: string().required().email("Invalid email"),
    password: string().required("Password is required"),
    discription:string().required("Description is required"),

  });

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "",discription:"" }}
        onSubmit={(values) => insert(values)}
        validationSchema={schema}
      >
        <Form className='bg-red-500 p-10  w-1/3  rounded-lg shadow-xl'>
          Email <Field type="email" name="email" />
          <ErrorMessage name="email" render={(msg) => <div>{msg}</div>} />

          Password <Field type="password" name="password" />
          <ErrorMessage name="password" render={(msg) => <div>{msg}</div>} />
          Discription <Field as="textarea" name="discription"/>
          <button className='bg-black text-white' type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default Email;
