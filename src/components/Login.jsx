import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ORDivider from "@/helpers/OrDivider";
import SEO from "@/helpers/SEO";
import Spinner from "@/helpers/Spinner";
import { Formik } from "formik";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      {/* SEO optimization */}
      <SEO
        title="LinkArray - Login"
        description="Login to your LinkArray account"
      />
      <div className="flex flex-col items-center justify-center py-2">
        <h1 className="text-3xl font-bold">Welcome Back!</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Login to your account by the following credentials
        </p>
      </div>
      <Card>
        <CardHeader></CardHeader>
        <CardContent className="space-y-2">
          <div>
            <Button className="flex justify-center items-center gap-2 w-full">
              <Github size={18} /> Github
            </Button>
          </div>
          <ORDivider />
          <div>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                // Email validation
                if (!values.email) {
                  errors.email = "Email is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                // Password validation
                if (!values.password) {
                  errors.password = "Password is required";
                } else if (values.password.length < 6) {
                  errors.password = "Invalid password address";
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  // Sending the request
                  let response = await fetch(
                    "http://localhost:4100/api/v1/auth/login",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        email: values.email,
                        password: values.password,
                      }),
                      credentials: "include",
                    }
                  );
                  let data = await response.json();
                  if (data.error) {
                    console.log(data.error.status);
                    alert(data.error.message);
                    return setSubmitting(false);
                  } else {
                    alert(data.message);
                    setSubmitting(false);
                  }
                } catch (error) {
                  console.error("Error occurred:", error);
                  setSubmitting(false);
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="example@domain.com"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={`${
                        errors.email &&
                        touched.email &&
                        "ring-1 ring-red-600 focus:ring-1 focus:ring-red-600  border-red-600"
                      }`}
                    />
                  </div>
                  {
                    <p className="text-xs text-red-600">
                      {errors.email && touched.email && errors.email}
                    </p>
                  }
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={`${
                        errors.password &&
                        touched.password &&
                        "ring-1 ring-red-600 focus:ring-1 focus:ring-red-600  border-red-600"
                      }`}
                    />
                  </div>
                  {
                    <p className="text-xs text-red-600">
                      {errors.password && touched.password && errors.password}
                    </p>
                  }
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={
                      isSubmitting ||
                      errors.email ||
                      errors.password ||
                      !values.email ||
                      !values.password
                    }
                  >
                    {isSubmitting ? <Spinner /> : "Login"}
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center pt-1">
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          Do not have account?{" "}
          <Link
            to={"/auth/signup"}
            className="text-blue-700 dark:text-blue-400 hover:underline hover:underline-offset-1 "
          >
            Signup
          </Link>
        </span>
      </div>
    </div>
  );
}
