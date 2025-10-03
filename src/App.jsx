import './App.css'
import { useState } from 'react';
function App() {

  const [isDark, setIsDark] = useState(false);

  return (
    <>
    <div className={isDark ? 'dark-theme' : ''} style={{ background: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <h1>Hello Themed World</h1>
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
    </div>
    <div className={isDark ? 'dark-theme' : ''} style={{ background: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <h1>Hello Themed World</h1>
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
    </div>
    </>
  );
}
 
export default App
