import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import './Component/Shared/Button.css'
import HomeIndex from './Component/Home/HomeIndex';
function App() {
  return (
    <div className='mx-auto container'>

      <Navigation></Navigation>
      <HomeIndex/>
    </div>
  );
}

export default App;
