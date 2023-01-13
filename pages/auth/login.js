import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Loader } from "../../components";
import Auth from "../../components/Auth";
import { auth } from "../../firebase/config";
import { useRouter } from "next/router";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check User State
  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <Auth head="Login" />
    </div>
  );
};

export default Login;
