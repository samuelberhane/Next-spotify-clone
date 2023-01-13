import Auth from "../../components/Auth";
import { useState, useEffect } from "react";
import { auth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { Loader } from "../../components";
import { useRouter } from "next/router";

const Signup = () => {
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
      <Auth head="Signup" />
    </div>
  );
};

export default Signup;
