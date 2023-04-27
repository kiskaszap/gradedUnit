import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Activities from './pages/Activities';
import Badges from './pages/Badges';
import SingleBadges from './pages/SingleBadges';
import Contact from './pages/Contact';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardParent from './pages/DashboardParent';
import Gallery from './pages/Gallery';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Games from './pages/Games';
import SingleGamePage from './pages/SingleGamePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          key={'home'}
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path='about-us'
            element={<Aboutus />}
          />
          <Route
            path='activities'
            element={<Activities />}
          />
          <Route
            path='badges'
            element={<Badges />}
          />
          <Route
            path='/badges/:id'
            element={<SingleBadges />}
          />
          <Route
            path='contact-us'
            element={<Contact />}
          />
          <Route
            path='games'
            element={<Games />}
          />
          <Route
            path='/games/:id'
            element={<SingleGamePage />}
          />
          <Route
            path='dashboard-admin'
            element={<DashboardAdmin />}
          />
          <Route
            path='dashboard-parent'
            element={<DashboardParent />}
          />
          <Route
            path='gallery'
            element={<Gallery />}
          />
          <Route
            path='login'
            element={<Login />}
          />
          <Route
            path='register'
            element={<Register />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
