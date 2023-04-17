import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import './Component/Shared/Button.css'
import HomeIndex from './Component/Home/HomeIndex';
import Footer from './Component/Shared/Footer';
function App() {
  return (
    <div className='mx-auto container overflow-hidden'>

      <Navigation></Navigation>
      <HomeIndex />
      <Footer></Footer>
    </div>
  );
}

export default App;
