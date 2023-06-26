import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from './contexts/AuthContext';

import DefaultLayout from './layouts/DefaultLayout';
import HeaderOnly from './layouts/HeaderOnly';
import HomgPage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';
import ProfilePage from './pages/ProfilePage';

function App() {
    const { user } = useContext(AuthContext);
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path={'/'}
                        element={
                            <DefaultLayout>
                                <HomgPage />
                            </DefaultLayout>
                        }
                    >
                        <Route
                            path="/:type"
                            element={
                                <DefaultLayout>
                                    <HomgPage />
                                </DefaultLayout>
                            }
                        />
                    </Route>
                    <Route
                        path="/user/profile/:username"
                        element={
                            user && (
                                <HeaderOnly>
                                    <ProfilePage username={user} />
                                </HeaderOnly>
                            )
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            user ? (
                                <HeaderOnly childPage="cart">
                                    <CartPage />
                                </HeaderOnly>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                    <Route
                        path="/product/:id"
                        element={
                            <HeaderOnly>
                                <ProductPage />
                            </HeaderOnly>
                        }
                    />
                    <Route
                        path="/order/:id"
                        element={
                            <HeaderOnly childPage="order">
                                <OrderPage />
                            </HeaderOnly>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
