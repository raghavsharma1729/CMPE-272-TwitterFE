import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Container from 'react-bootstrap/Container';
import RouterContent from './Router';


function App() {
  return (
    <div className="App">
      <Header />
      <Container style={{ minHeight: "75vh" }}>
        <RouterContent />
      </Container>
      <Footer />
    </div >
  );
}

export default App;
