import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
