import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Pricing } from './pages/Pricing';
import { Product } from './pages/Product';
import { PageNotFound } from './pages/PageNotFound';
import { SignIn } from './pages/SignIn';
import { Traverse } from './pages/Traverse';
import { CityList } from './components/traverse/flow/CityList';
import { CountryList } from './components/traverse/flow/CountryList';
import { City } from './components/traverse/flow/City';
import { TripProvider } from './context/TripContext';

export const App = () => {
    return (
        <TripProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path='product' element={<Product />} />
                    <Route path='login' element={<SignIn />} />
                    <Route path="traverse" element={<Traverse />}>
                        <Route index element={<Navigate replace to="cities" />} />
                        <Route path='cities' element={<CityList />} />
                        <Route path='cities/:id' element={(<City />)} />
                        <Route path='countries' element={<CountryList />} />
                    </Route>
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </TripProvider>
    )
}
