import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { ActivationPage, HomePage, LoginPage, SignupPage } from './Router';
import { useSelector } from 'react-redux';

function App() {
    const token = useSelector((state) => state.token);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-in" element={<LoginPage />} />
                    <Route path="/sign-up" element={<SignupPage />} />
                    <Route
                        path="/activation/:activation_token"
                        element={<ActivationPage />}
                    />
                    <Route path="/" element={<HomePage />} />
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
