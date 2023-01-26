import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";

import "./App.css";
import { AuthenticationContextProvider } from "./context/AuthenticationContext";

function App() {
  return (
    <div className="App">
      <AuthenticationContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </Router>
      </AuthenticationContextProvider>
    </div>
  );
}

export default App;
