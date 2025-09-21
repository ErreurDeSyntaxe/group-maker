import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NamesProvider } from './contexts/NamesContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Generator from './pages/Generator';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <NamesProvider>
      <BrowserRouter basename="/group-maker">
        <Header />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </NamesProvider>
  );
}

export default App;
