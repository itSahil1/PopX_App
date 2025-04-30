import { useEffect } from "react";
import InputContainer from "./../components/InputContainer";
import RegisterForm from "./../components/RegisterForm";

function Register() {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <RegisterForm />
    </>
  );
}

export default Register;