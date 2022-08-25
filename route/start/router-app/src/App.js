import React, { Component } from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import Users from './components/admin/users';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/posts/:year/:month" element={<Posts />} />
            <Route path="/admin" element={<Dashboard />} >
              <Route path="users" element={<Users />} />
              <Route path="posts" element={<Posts />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/" exact element={<Home />} />

          </Routes>

        </div>
      </div>
    );
  }
}

export default App;
