import React, { useState } from 'react';

// --- Components ---

const LoginPage = ({ onLogin }) => (
  <div className="min-h-screen bg-black flex items-center justify-center px-4">
    <div className="max-w-md w-full bg-gray-900 border border-blue-900/50 p-8 rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold text-white mb-2 text-center">Legal<span className="text-blue-500">Ease</span></h2>
      <p className="text-gray-400 text-center mb-8">Simplify your rental agreements in seconds.</p>
      <input type="email" placeholder="Email Address" className="w-full bg-black border border-gray-700 text-white p-3 rounded-lg mb-4 focus:border-blue-500 outline-none transition" />
      <input type="password" placeholder="Password" className="w-full bg-black border border-gray-700 text-white p-3 rounded-lg mb-6 focus:border-blue-500 outline-none transition" />
      <button onClick={onLogin} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-blue-500/20">
        Enter Workspace
      </button>
    </div>
  </div>
);

const HomePage = ({ setPage }) => (
  <div className="min-h-screen bg-black text-white p-6">
    <header className="flex justify-between items-center mb-12 border-b border-gray-800 pb-4">
      <h1 className="text-2xl font-bold italic text-blue-500">LegalEase AI</h1>
      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">HT</div>
    </header>
    
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-20">
      {/* Option 1: New Chart/Simplify */}
      <div onClick={() => setPage('output')} className="group cursor-pointer bg-gray-900 p-10 rounded-3xl border border-gray-800 hover:border-blue-500 transition-all transform hover:-translate-y-2">
        <div className="bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
          <svg className="w-8 h-8 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">New Analysis</h3>
        <p className="text-gray-400">Paste a legal clause to get a one-sentence plain English summary.</p>
      </div>

      {/* Option 2: History */}
      <div className="group cursor-pointer bg-gray-900 p-10 rounded-3xl border border-gray-800 hover:border-blue-500 transition-all transform hover:-translate-y-2">
        <div className="bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">History</h3>
        <p className="text-gray-400">View your previously simplified clauses and saved agreements.</p>
      </div>
    </div>
  </div>
);

const OutputPage = ({ setPage }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSimplify = () => {
    setLoading(true);
    // Simulating Gemma AI processing
    setTimeout(() => {
      setResult("You have to pay a late fee if rent is not received by the 5th of each month.");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <nav className="p-4 border-b border-gray-800 flex items-center">
        <button onClick={() => setPage('home')} className="text-blue-500 hover:text-blue-400 mr-4">← Back</button>
        <span className="font-semibold">Legal Clause Simplifier</span>
      </nav>

      <div className="flex-1 max-w-5xl mx-auto w-full p-6 grid md:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2 uppercase tracking-wider">Paste Legal Clause</label>
          <textarea 
            className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-4 text-gray-300 focus:border-blue-500 outline-none resize-none"
            placeholder="E.g., 'The Lessee shall be liable for a pecuniary penalty in the event of default...'"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
            onClick={handleSimplify}
            className="mt-4 bg-blue-600 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-900/40"
          >
            {loading ? "Gemma 270M is thinking..." : "Simplify Clause"}
          </button>
        </div>

        {/* Output Section */}
        <div className="bg-gray-900/50 border border-blue-900/30 rounded-2xl p-8 flex flex-col">
          <label className="text-sm text-blue-500 mb-2 uppercase tracking-wider">Plain English Summary</label>
          <div className="flex-1 flex items-center justify-center italic text-lg text-center">
            {result ? (
              <p className="text-white animate-fade-in">"{result}"</p>
            ) : (
              <p className="text-gray-600">The simplified version will appear here.</p>
            )}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between text-xs text-gray-500">
            <span>Powered by Gemma 270M</span>
            <button className="text-blue-500">Copy to Clipboard</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App Logic ---

export default function App() {
  const [page, setPage] = useState('login');

  return (
    <div className="font-sans selection:bg-blue-500/30">
      {page === 'login' && <LoginPage onLogin={() => setPage('home')} />}
      {page === 'home' && <HomePage setPage={setPage} />}
      {page === 'output' && <OutputPage setPage={setPage} />}
    </div>
  );
}
