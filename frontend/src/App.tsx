import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './pages/NoPage';
import RegisterPage from './pages/RegisterPage';
import BankDashboard from './pages/BankDashBoad';

function App() {
  return (
    <BrowserRouter>
                    <Routes>
                        <Route path="/dashboard" element={<BankDashboard />}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="*" element={<NoPage/>}/>
                    </Routes>
        </BrowserRouter>
  )
}

export default App;