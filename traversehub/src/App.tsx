import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Pricing } from './pages/Pricing';
import { Product } from './pages/Product';
import { PageNotFound } from './pages/PageNotFound';
import { SignIn } from './pages/SignIn';
import { Traverse } from './pages/Traverse';
import { City } from './components/traverse/flow/City';
import { Country } from './components/traverse/flow/Country';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path='product' element={<Product />} />
                <Route path='login' element={<SignIn />} />
                <Route path="traverse" element={<Traverse />}>
                    <Route index element={<City/>}/>
                    <Route path='cities' element={<City />} />
                    <Route path='countries' element={<Country />} />
                </Route>
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
