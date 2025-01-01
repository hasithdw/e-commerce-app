import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home/Home"
import User from "../Pages/User/User"
import Login from "../Pages/Login/Login"
import UserProtected from "./UserProtected"
import Category from "../Pages/Category/Category"



const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>} />
                <Route path="category" element={<Category/>} />
                <Route element={<UserProtected/>}>
                    <Route path="profile" element={<User/>} />
                </Route>
            </Route> 
            <Route path="/login" element={<Login/>}/>

        </Routes>

      
    </BrowserRouter>
  )
}

export default AppRouter
