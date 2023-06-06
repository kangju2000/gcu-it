import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Layout from './components/common/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
