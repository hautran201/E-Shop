import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import {
    ActivationPage,
    BestSellingPage,
    EventsPage,
    FAQPage,
    HomePage,
    LoginPage,
    ProductsPage,
    SignupPage,
} from './Router';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sign-in" element={<LoginPage />} />
                    <Route path="/sign-up" element={<SignupPage />} />
                    <Route
                        path="/activation/:activation_token"
                        element={<ActivationPage />}
                    />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/best-selling" element={<BestSellingPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}

export default App;
