import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
      <>
          <Header/>
          <main className='my-3'>
              <Container>
                  <HomeScreen/>
              </Container>
          </main>
          <Footer/>
      </>
  );
}

export default App;
