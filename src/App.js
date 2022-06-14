import './App.css';
import Menu from './components/Menu';
import PersonalLinks from './components/PersonalLinks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu></Menu>
      </header>
      <body className="App-body">
        Completed sixth form in Singapore after having lived in Tokyo before continuing my studies in Computer Science at the University of Bath for which I achieved a Bachelor Of Science award with First-class honours.
      </body>
      <footer>
        <PersonalLinks></PersonalLinks>
      </footer>
    </div>
  );
}

export default App;
