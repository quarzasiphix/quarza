import { createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import { useState, useEffect } from 'react'
import BlogList from './views/BlogList'
import HomePage from './views/Home'
import Items from './views/Items'
import Contact from './help/contact'
import Faq from './help/faq'


import Calender from './views/calender'

import RootLayout from './layout/RootLayout'
import HelpLayout from './layout/HelpLayout'

import Users from './views/Users'
import NotFound from './views/NotFound'
import './index.css'
import WorkoutReminder from './views/WorkoutBot'
import Remind from './views/remind'

const router = createBrowserRouter(
  createRoutesFromElements(<>
    <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="users" element={<Users />} />
            <Route path="blogs" element={<BlogList title='blogs' />} />
            <Route path="calender" element={<Calender />} />
            <Route path="remind" element={<Remind/>} />

            <Route path="workout" element={<WorkoutReminder />} />
            <Route path="help" element={<HelpLayout />}>
                <Route path="faq" element={<Faq />} />
                <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<NotFound />} />
    </Route> </>
    )
)

const App = () => {
  return(
    <RouterProvider router={router} />
  )
}

export default App
