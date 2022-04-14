
import './App.css';
import FlightsPage from './pages/flights-page';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <main style={{ backgroundColor:"#F2F5F7",height:"100vh",overflow:"auto" }}>
      <Header/>
      <FlightsPage/>
      <Footer/>
    </main>
  );
}

export default App;
