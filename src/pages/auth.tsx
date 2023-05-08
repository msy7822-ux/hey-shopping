import React from "react";
import { signIn, useSession } from "next-auth/react";
import { Layout } from "@/components/Layout";

const AuthPage: React.FC = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <Layout>
      <h1>Login</h1>
      <button
        type="button"
        onClick={async () => {
          await signIn();
          console.log(window.localStorage.getItem("next-auth.session-token"));
        }}
      >
        signup
      </button>
    </Layout>
  );
};

export default AuthPage;
