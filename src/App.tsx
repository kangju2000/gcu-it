import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Home from '@/pages/Home';
import Chart from '@/pages/Chart';
import Layout from '@/components/common/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chart' element={<Chart />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
