import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Tictactoe from './tictactoe';
import Api from './api';
import NoPage from './NoPage';
import Home from './Home';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route index element={<Home />} />
          <Route path="api" element={<Api />} />
          <Route path="Tictactoe" element={<Tictactoe />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
