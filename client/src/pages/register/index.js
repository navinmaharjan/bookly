import React, { useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Alert } from "@mui/material";
const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const registerUser = () => {
  const router = useRouter();
  const [responseMsg, setResponseMsg] = useState({ msgLabel: "", msgType: "" });
  const addNewUser = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (response.status) {
        setResponseMsg({
          msgLabel: result.msg,
          msgType: response.status == 409 ? "error" : "success",
        });
      }
    } catch (error) {
      setResponseMsg({ msgLabel: error.msg, msgType: "error" });
      console.error("Error posting data:", error);
    }
  };
  return (
    <>
      <div className="w-full flex justify-center items-center mt-16 mb-[291px]">
        <div>
          <div className="text-3xl text-gray-500 text-center">
            <h1>Sign up/Create an account</h1>
          </div>
          {responseMsg.msgType && (
            <Alert
              severity={responseMsg.msgType}
              onClose={() => setResponseMsg({ msgLabel: "", msgType: "" })}
            >
              {" "}
              {responseMsg.msgLabel}{" "}
            </Alert>
          )}
          <Formik
            initialValues={{
              fullName: "",
              password: "",
              email: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              addNewUser(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col p-8 border-2 gap-5 w-[400px] mt-8 rounded-xl">
                <Field
                  name="fullName"
                  placeholder="Full Name"
                  className=" border p-2"
                />
                {errors.fullName && touched.fullName ? (
                  <div>{errors.fullName}</div>
                ) : null}
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="border p-2"
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="border p-2"
                />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="bg-blue px-4 p-2  text-white w-2/5"
                  >
                    Submit
                  </button>
                </div>
                <div
                  className="text-sm text-gray-400 cursor-pointer hover:text-blue text-center"
                  onClick={() => router.push("./login")}
                >
                  <p>Already have an account/Sign In</p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default registerUser;
