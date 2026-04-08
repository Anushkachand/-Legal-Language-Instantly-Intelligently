import React, { useState } from "react";

// --- AUTH COMPONENT ---
const AuthPage = ({ setPage }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginData.username || !loginData.password) {
      alert("Username and password required");
      return;
    }

    setTimeout(() => {
      alert("Login successful 🎉");
      setPage("home");
    }, 800);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !registerData.username ||
      !registerData.email ||
      !registerData.password
    ) {
      alert("All fields required");
      return;
    }

    setTimeout(() => {
      alert("Registration successful 🎉");
      setIsRegister(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-900 border border-blue-900/50 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          {isRegister ? "Sign Up" : "Login"}
        </h2>

        <form onSubmit={isRegister ? handleRegister : handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-black border border-gray-700 text-white p-3 rounded-lg mb-4 focus:border-blue-500 outline-none"
            value={isRegister ? registerData.username : loginData.username}
            onChange={(e) =>
              isRegister
                ? setRegisterData({
                    ...registerData,
                    username: e.target.value,
                  })
                : setLoginData({
                    ...loginData,
                    username: e.target.value,
                  })
            }
          />

          {isRegister && (
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-black border border-gray-700 text-white p-3 rounded-lg mb-4 focus:border-blue-500 outline-none"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  email: e.target.value,
                })
              }
            />
          )}

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-black border border-gray-700 text-white p-3 rounded-lg mb-6 focus:border-blue-500 outline-none"
            value={isRegister ? registerData.password : loginData.password}
            onChange={(e) =>
              isRegister
                ? setRegisterData({
                    ...registerData,
                    password: e.target.value,
                  })
                : setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
            }
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
          >
            {isRegister ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          {isRegister
            ? "Already have an account?"
            : "Don't have an account?"}

          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-500 ml-2"
          >
            {isRegister ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

// --- HOME PAGE ---
const HomePage = ({ setPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      {/* HEADER */}
      <header className="flex justify-between items-center mb-12 border-b border-gray-800 pb-4">
        <div className="flex items-center gap-3">
          <img
            src=""
            alt="Titech Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-bold tracking-wide text-blue-500">
            TITECH
          </h1>
        </div>

        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold shadow-lg">
          A
        </div>
      </header>

      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto mt-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Simplify Legal Language <br />
          <span className="text-blue-500">
            Instantly & Intelligently
          </span>
        </h2>

        <p className="text-gray-400 text-lg mb-8">
          Solve any legal clause and get a clear, one-line explanation
          in seconds. Powered by AI for speed, clarity, and accuracy.
        </p>

        <button
          onClick={() => setPage("output")}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full text-lg font-semibold shadow-lg hover:scale-105"
        >
          Start Analysis →
        </button>
      </section>

      {/* FEATURE CARDS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mt-20">
        <div
          onClick={() => setPage("output")}
          className="group cursor-pointer bg-gray-900/70 backdrop-blur-xl p-10 rounded-3xl border border-gray-800 hover:border-blue-500 transition-all transform hover:-translate-y-2"
        >
          <h3 className="text-2xl font-bold mb-2">New Analysis</h3>
          <p className="text-gray-400">
            Solve a legal clause and get a simple explanation instantly.
          </p>
        </div>

        <div className="group cursor-pointer bg-gray-900/70 backdrop-blur-xl p-10 rounded-3xl border border-gray-800 hover:border-blue-500 transition-all transform hover:-translate-y-2">
          <h3 className="text-2xl font-bold mb-2">History</h3>
          <p className="text-gray-400">
            View previously simplified clauses and saved agreements.
          </p>
        </div>
      </div>

      <footer className="text-center text-gray-500 mt-20 text-sm">
        © 2026 TITECH — Innovation & Technology
      </footer>
    </div>
  );
};

// --- OUTPUT PAGE ---
const OutputPage = ({ setPage }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSimplify = () => {
    if (!input.trim()) {
      alert("Please enter a legal clause");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setResult(
        "You have to pay a late fee if rent is not received by the 5th of each month."
      );
      setLoading(false);
    }, 1500);
  };

  const copyResult = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      alert("Copied successfully ✅");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <nav className="p-4 border-b border-gray-800 flex items-center">
        <button
          onClick={() => setPage("home")}
          className="text-blue-500 hover:text-blue-400 mr-4"
        >
          ← Back
        </button>
        <span className="font-semibold">
          Legal Clause Simplifier
        </span>
      </nav>

      <div className="flex-1 max-w-5xl mx-auto w-full p-6 grid md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2 uppercase tracking-wider">
            Paste Legal Clause
          </label>

          <textarea
            className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-4 text-gray-300 focus:border-blue-500 outline-none resize-none"
            placeholder="E.g., The Lessee shall be liable for a pecuniary penalty..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={handleSimplify}
            disabled={loading}
            className="mt-4 bg-blue-600 py-3 rounded-xl font-bold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading
              ? "Gemma 270M is thinking..."
              : "Simplify Clause"}
          </button>
        </div>

        <div className="bg-gray-900/50 border border-blue-900/30 rounded-2xl p-8 flex flex-col">
          <label className="text-sm text-blue-500 mb-2 uppercase tracking-wider">
            Plain English Summary
          </label>

          <div className="flex-1 flex items-center justify-center italic text-lg text-center">
            {result ? (
              <p className="text-white">"{result}"</p>
            ) : (
              <p className="text-gray-600">
                The simplified version will appear here.
              </p>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between text-xs text-gray-500">
            <span>Powered by Gemma 270M</span>
            <button
              className="text-blue-500"
              onClick={copyResult}
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="font-sans selection:bg-blue-500/30 min-h-screen bg-black">
      {page === "login" && <AuthPage setPage={setPage} />}
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "output" && <OutputPage setPage={setPage} />}
    </div>
  );
}