
import './App.css';
import FlightsPage from './pages/flights-page';
import ResultPage from './pages/result-page';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <main className="container" style={{ backgroundColor:"#F2F5F7",height:"100vh",overflow:"auto"  ,position:"relative" }}>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FlightsPage/>}/>
          <Route path="/result" element={<ResultPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </main>
  );
}

export default App;
