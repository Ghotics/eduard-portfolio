import AboutMe from './components/AboutMe/AboutMe';
import MovingForward from './components/MovingForward/MovingForward';
import Projects from './components/Projects/Projects';
import TopBar from './components/TopBar/TopBar';
import './App.scss';

function App() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show")
      } else {
        entry.target.classList.remove("show")
      }
    })
  })

  const hiddenElements = document.querySelectorAll(".hidden")
  hiddenElements.forEach((el) => observer.observe(el))

  return (
    <div className="App">
      <TopBar />
      <AboutMe className="hidden"/>
      <Projects className="hidden"/>
      <MovingForward className="hidden"/>
    </div>
  );
}

export default App;
