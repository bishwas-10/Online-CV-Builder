import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const useAuth = () => {
  const redirectPath = "/signpage"
  const router = useRouter();
  const isAuthenticated = !!useSelector(
    (state: RootState) => state.token.token
  );

  useEffect(() => {
    // Check if the user is authenticated
    // Replace this with your actual authentication logic

    if (!isAuthenticated) {
      // Redirect the user to the login page if not authenticated
      router.replace(redirectPath);
    }
  }, []);

  return null; // Return null to avoid rendering anything on the protected page
};

export default useAuth;
