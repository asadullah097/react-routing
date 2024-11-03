import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import User from './components/user/User.jsx'
import Github from './components/github/Github.jsx'
import Contact from './components/contact/Contact.jsx'
import { githubInfoLoader } from './utils/api.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/' element={<User />} >
        <Route path=':userId' element={<User />} />
      </Route>
      <Route
        loader={githubInfoLoader}
        path='github' element={<Github />}
      />
      <Route path='*' element={<div>404</div>} />
    </Route>
  ))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
