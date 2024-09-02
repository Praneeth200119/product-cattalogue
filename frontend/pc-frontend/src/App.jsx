import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './components/Auth/Users';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProductForm from './components/Auth/ProductForm';
import ProductTable from './components/Auth/ProductTable';
<<<<<<< HEAD
import ProtectedRoute from './components/Auth/ProtectedRoute';

=======
>>>>>>> e9675392873891533552bfae94e77b2c453c93ba
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />
<<<<<<< HEAD

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
          <Route path="/productForm" element={<ProductForm />} />
          <Route path="/productTable" element={<ProductTable />} />
        </Route>
=======
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/productForm" element={<ProductForm />} />
        <Route path="/productTable" element={<ProductTable />} />

>>>>>>> e9675392873891533552bfae94e77b2c453c93ba
      </Routes>
    </Router>
  );
}

export default App;