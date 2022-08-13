import React from "react";
import "./assets/styles/main.scss";
import {Route, Routes, BrowserRouter as Router,} from 'react-router-dom';
import Dashboard from "./containers/Dashboard";
import Profile from "./containers/Profile";
import Layout from "./components/Layout";

function App() {
  return (
    <main>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/profile/:username" element={<Profile/>}/>
          </Routes>
        </Layout>
      </Router>
    </main>
  );
}

export default App;
