import React, {useState} from "react";
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
      if(result.success) {
        dispatch(setUserDetails(result));
        setResponseMsg({
            msgLabel: "Login successful, Welcome!",
            msgType: "success",
          });
          router.push('/profile')
      }else {
        setResponseMsg({ msgLabel: result.msg, msgType: "error" });
      }
    } catch (error) {
        setResponseMsg({ msgLabel: "error.msg", msgType: "error" });
        console.error("Error posting data:", error);
    }
  };
  return (
    <>
      <div className="w-full flex justify-center items-center mt-16 mb-[343px]">
        <div>
          <div className="text-3xl text-gray-500 text-center">
            <h1>Sign In</h1>
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
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="border p-2 w-full"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-600">{errors.email}</div>
                  ) : null}
                </div>

                <div>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="border p-2 w-full"
                  />
                  {errors.lastName && touched.lastName ? (
                    <div className="text-red-600">{errors.lastName}</div>
                  ) : null}
                </div>

                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="bg-green-900 px-4 p-2  rounded-lg text-white w-2/5 transition duration-300  hover:bg-green-700 hover:text-white uppercase font-semibold tracking-wide"
                  >
                    Sign In
                  </button>
                </div>

                <div className="flex justify-between pt-16">
                  <div
                    className="text-sm text-gray-400 cursor-pointer hover:text-green-900"
                    onClick={() => router.push("./register")}
                  >
                    <p>Don't have an account/Sign Up</p>
                  </div>
                  <div className="text-sm text-gray-400">Forgot Password?</div>
                </div>

                <div className="text-xs text-center border-t border-b py-2 mt-4">
                  <p>
                    By signing in or creating an account, you agree with our{" "}
                    <span className="text-blue-900">Terms & Conditions</span>{" "}
                    and <span className="text-blue-900">Privacy Statement</span>
                  </p>
                </div>
                <div className="text-xs text-center py-2">
                  <p>All rights reserved. Copyright 2023 – Bookly.com™ </p>
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
