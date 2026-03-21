import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(email, password);

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border-2 bg-fuchsia-200  backdrop-blur-xl p-8 rounded-2xl shadow-xl w-96">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 absolute text-violet-600 hover:underline cursor-pointer"
        >
          ← Back
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-violet-500"
          />

          <input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-violet-500"
          />

          <button
            type="submit"
            className="cursor-pointer w-full bg-gradient-to-r from-violet-600 to-purple-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
