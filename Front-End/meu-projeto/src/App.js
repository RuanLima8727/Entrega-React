// import Menu from './Components/Menu/Menu'
// import Footer from './Components/footer/footer'
// import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import './App.css';
import {lazy, Suspense} from 'react'

const Menu = lazy(()=>import('./Components/Menu/Menu'))
const Footer = lazy(()=>import('./Components/footer/footer'))
const Routes = lazy(()=>import('./routes'))

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
            <Suspense fallback={<p> <bold>Carregando.......</bold></p>}>
              <Menu />  
            </Suspense>
        </header>
        <main>
          <Container fluid>
            <Suspense fallback={<p> <bold>Carregando.......</bold></p>}>
              <Routes />                
            </Suspense>
          </Container>
        </main>
        <Suspense fallback={<p> <bold>Carregando.......</bold></p>}>      
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
