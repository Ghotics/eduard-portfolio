import './App.scss';
import AboutMe from './components/AboutMe/AboutMe';
import MovingForward from './components/MovingForward/MovingForward';
import Projects from './components/Projects/Projects';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <AboutMe />
      <Projects />
      <MovingForward />
    </div>
  );
}

export default App;
