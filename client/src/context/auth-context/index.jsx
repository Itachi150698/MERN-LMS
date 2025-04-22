import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormControls, setSignInFormData] = useState(
    initialSignInFormData
  );
  const [signUpFormControls, setSignUpFormData] = useState(
    initialSignUpFormData
  );

  return (
    <AuthContext.Provider
      value={{
        signInFormControls,
        setSignInFormData,
        signUpFormControls,
        setSignUpFormData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
