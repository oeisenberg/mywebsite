import "./App.css";
import Menu from "./components/Menu";
import PersonalLinks from "./components/PersonalLinks";

const MyCV = () => {
  return (
    <div>
      <header className="App-header">
        <Menu />
      </header>
      <body className="App-body">
        My CV
      </body>
      <footer className="App-footer">
        <PersonalLinks />
      </footer>
    </div>
  );
};
export default MyCV;
