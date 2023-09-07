import './App.css';
import About from './components/About/about';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Computer from './components/main/computer';
import Partners from './components/partners/partners';
import Review from './components/recenzje/recenzje';
import Team from './components/team/team';

function App() {
  return (
    <div className="App">
      <div className='box'>
      <Header/>
      <Computer/>
      <About/>
      <Partners/>
      <Team/>
      <Partners/>
      <Review/>
      <hr style={{height:'5px',backgroundColor:'#fff',marginTop:'10%'}}/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
