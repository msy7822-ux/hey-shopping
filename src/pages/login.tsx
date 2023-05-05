import React from "react";
import { signIn, useSession } from "next-auth/react";

const LoginPage: React.FC = () => {
  const session = useSession();
  console.log(session);

  return (
    <div>
      <h1>Login</h1>
      <button
        type="button"
        onClick={() => {
          signIn();
        }}
      >
        signup
      </button>
    </div>
  );
};

export default LoginPage;
