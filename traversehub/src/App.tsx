import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Pricing } from './pages/Pricing';
import { Product } from './pages/Product';
import { PageNotFound } from './pages/PageNotFound';
import { SignIn } from './pages/SignIn';
import { Traverse } from './pages/Traverse';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path='product' element={<Product />} />
                <Route path='login' element={<SignIn/>}/>
                <Route path="traverse" element={<Traverse/>}/>
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
