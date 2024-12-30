import { BrowserRouter, Routes, Route } from 'react-router';

// Layouts
import MainLayout from './layouts/MainLayout';
import GameLayout from './layouts/GameLayout';

// Pages
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import SignIn from './pages/Auth/SignIn';
import PlayingMainPage from './pages/Game/PlayingMainPage';
import Ranks from './pages/Game/Ranks';
import Quiz from './pages/Game/Quiz';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/connexion' element={<Login />} />
                    <Route path='/jouer' element={<PlayingMainPage />} />
                    <Route path='/classements' element={<Ranks />} />
                    <Route path='/inscription' element={<SignIn />} />
                    <Route path='/jouer/:type' element={<GameLayout />}>
                        <Route index element={<Quiz />} />
                        
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
