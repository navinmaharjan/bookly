import React, { useState } from "react";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { setUserDetails } from "../../redux/reducerSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Alert } from "@mui/material";
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [responseMsg, setResponseMsg] = useState({ msgLabel: '', msgType: '' })
  const { isLoggedIn } = useSelector((state) => state.user);

  const handleLogin = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (result.success) {
        dispatch(setUserDetails(result));
        setResponseMsg({
          msgLabel: "Login successful, Welcome!",
          msgType: "success",
        });
        router.push('/profile')
      } else {
        setResponseMsg({ msgLabel: result.msg, msgType: "error" });
      }
    } catch (error) {
      setResponseMsg({ msgLabel: "error.msg", msgType: "error" });
      console.error("Error posting data:", error);
    }
  };
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-1/2 h-screen flex justify-center relative">
          <Image
            src="/login-banner.jpg"
            width={2000}
            height={500}
            alt="image"
            className="absolute w-full h-full object-cover"
          />
        </div>

        <div className="w-1/2 h-screen flex flex-col justify-center items-center">
          <div className="text-3xl text-gray-500 text-center">
            <h1>Log In</h1>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              handleLogin(values)

            }}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col p-8 border-2 gap-5  w-[400px] mt-8 rounded-xl">
                {responseMsg.msgType && <Alert severity={responseMsg.msgType} onClose={() => setResponseMsg({ msgLabel: '', msgType: '' })}> {responseMsg.msgLabel} </Alert>}
                <div>
                  <Field name="email" type="email" placeholder="Email" className="border p-2 w-full" />
                  {errors.email && touched.email ? (<div className="text-red">{errors.email}</div>) : null}
                </div>

                <div>
                  <Field name="password" type="password" placeholder="Password" className="border p-2 w-full" />
                  {errors.lastName && touched.lastName ? (<div className="text-red">{errors.lastName}</div>) : null}
                </div>

                <div className="text-center mt-4">
                  <button type="submit" className="bg-red px-4 p-2 text-white w-2/5" >
                    Sign In
                  </button>
                </div>

                <div className="flex justify-between">
                  <div className="text-sm text-gray-400 cursor-pointer hover:text-gray-900" onClick={() => router.push("./register")} >
                    <p>Don't have an account/Sign Up</p>
                  </div>
                  <div className="text-sm text-gray-400">Forgot Password?</div>
                </div>

                <div className="text-sm text-gray-400 cursor-pointer hover:text-blue text-center" onClick={() => router.push("/")}>
                  <p>Back to Home</p>
                </div>
              </Form>
            )}
          </Formik>
        </div>

      </div>
    </>
  );
};

export default Login;
