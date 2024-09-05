import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import Location from './pages/Location';
import Post from './pages/Post';
import User from './pages/User';

function App() {
  let Component
  switch(window.location.pathname) {
    case "/location":
      Component = <Location/>
      break
    case "/user":
      Component = <User/>
      break
    case "/post":
      Component = <Post/>
      break
  }
  return (
    <div className="App">
      <Appbar/>
      {Component}
    </div>
  );
}

export default App;
