import { Box } from '@chakra-ui/react'
import React from 'react'
import { Routes , Route,Navigate } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Lectures } from '../pages/Lectures'
import { Assignments } from '../pages/Assignments'
import { Quizzes } from '../pages/Quizzes'
import { Tickets } from '../pages/Tickets'
import { Discussions } from '../pages/Discussions'
import { Notifications } from '../pages/Notifications'
import { Messages } from '../pages/Messages'
import { Announcements } from '../pages/Announcements'
import { Courses } from '../pages/Courses'
import { Electives } from '../pages/Electives'
import { Login } from '../pages/Login'

export const AllRoutes = () => {
  return (
    <Box>
        <Routes>
            <Route path={"/"} element={ <Navigate to={"/dashboard"} replace />} />
            <Route path={"/dashboard"} element={<Dashboard/>} />
            <Route path={"/lectures"} element={<Lectures/>} />
            <Route path={"/assignments"} element={<Assignments/>} />
            <Route path={"/quizzes"} element={<Quizzes/>} />
            <Route path={"/tickets"} element={<Tickets/>} />
            <Route path={"/discussions"} element={<Discussions/>} />
            <Route path={"/notifications"} element={<Notifications/>} />
            <Route path={"/messages"} element={<Messages/>} />
            <Route path={"/electives"} element={<Electives/>} />
            <Route path={"/announcements"} element={<Announcements/>} />
            <Route path={"/courses"} element={<Courses/>} />
            <Route path={"/login"} element={<Login/>} />
        </Routes>
    </Box>
  )
}
