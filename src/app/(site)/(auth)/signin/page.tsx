import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign In | Optima AI Solutions - Your Partner in Intelligent Innovation 🚀",
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign In" />

      <Signin />
    </>
  );
};

export default SigninPage;
