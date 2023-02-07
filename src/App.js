import React from 'react'
import { Header, Home, Mobile, Navigation } from './component/index'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import OrderHome from './component/Order/OrderHome'
import Signup from './component/Account/Signup'
import Progress from './component/Progress'


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/mobile" element={<Mobile />} />
                <Route path="/order" element={<OrderHome />} />
                <Route path="/pro" element={<Progress />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App