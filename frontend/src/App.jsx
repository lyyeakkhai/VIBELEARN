import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600/20 text-indigo-400 mb-4">
          <span className="text-2xl font-bold">VL</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
          Vibelearn
        </h1>
        <p className="text-slate-400 text-sm mb-6">
          Phase 1 Foundation scaffolded with React, Vite, and TailwindCSS.
        </p>

        <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-700/60 mb-6">
          <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">
            Status
          </p>
          <div className="flex items-center justify-center space-x-2 text-emerald-400 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Frontend Ready</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-150 cursor-pointer text-sm shadow-md"
        >
          Interactive Check (Clicks: {count})
        </button>
      </div>
    </div>
  )
}

export default App
