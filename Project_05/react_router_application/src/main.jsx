import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { Home, About, Contact, User, Github} from './components'
import Layout from './Layout'



// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Route/>,
//     children: [
//       {
//         path:"",
//         element:<Home/>
//       }, 
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contactus",
//         element:<Contact/>
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>   {/* ✅ Use Layout */}
      <Route index element={<Home />} />     {/* index = default */}
      <Route path="about" element={<About />} />
      <Route path="contactus" element={<Contact />} />
      <Route path="user/:userid" element={<User/>} />
      <Route path="github" element={<Github/>} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
