import Link from "next/link";

const AuthForm = ({ head, handleSubmit, inputData, setInputData }) => {
  return (
    <form>
      <div className="formGroup">
        <label htmlFor="email">
          {head === "Login" ? "Email address" : "What's your email?"}
        </label>
        <input
          className="input"
          type="email"
          id="email"
          placeholder="Enter your email."
          value={inputData.email}
          onChange={(e) =>
            setInputData({ ...inputData, email: e.target.value })
          }
        />
      </div>
      {head === "Signup" && (
        <div className="formGroup">
          <label htmlFor="confirmEmail">Confirm your email</label>
          <input
            className="input"
            type="email"
            id="confirmEmail"
            placeholder="Enter your email again."
            value={inputData.confirmEmail}
            onChange={(e) =>
              setInputData({ ...inputData, confirmEmail: e.target.value })
            }
          />
        </div>
      )}
      <div className="formGroup">
        <label htmlFor="password">
          {head === "Login" ? "Password" : "Create a password"}
        </label>
        <input
          className="input"
          type="password"
          id="password"
          value={inputData.password}
          onChange={(e) =>
            setInputData({ ...inputData, password: e.target.value })
          }
          placeholder={
            head === "Login" ? "Enter your password." : "Create a password."
          }
        />
      </div>
      {head === "Signup" && (
        <div className="formGroup">
          <label htmlFor="confirmPassword">Confirm your password</label>
          <input
            className="input"
            type="password"
            id="confirmPassword"
            value={inputData.confirmPassword}
            onChange={(e) =>
              setInputData({ ...inputData, confirmPassword: e.target.value })
            }
            placeholder="Enter your password again."
          />
        </div>
      )}
      <button
        className="bg-green-400 px-10 py-3 mb-2 rounded-[30px] text-lg  font-bold hover:scale-110"
        type="submit"
        onClick={handleSubmit}
      >
        {head === "Login" ? "LOG IN" : "SIGN UP"}
      </button>
      {head === "Signup" && (
        <p className="mb-8 text-lg">
          Have an account?
          <Link
            href="/auth/login"
            className="underline text-green-800 hover:text-green-600"
          >
            Log in
          </Link>
        </p>
      )}

      {head === "Login" && (
        <div>
          <h2 className="font-bold text-lg">Don&#39;t have an account?</h2>
          <button
            className="mt-3 mb-8 authBtn border-2 text-gray-600"
            type="button"
          >
            <Link href="/auth/signup">SIGN UP FOR SPOTIFY</Link>
          </button>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
