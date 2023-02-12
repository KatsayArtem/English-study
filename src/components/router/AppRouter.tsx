import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from './router'

const AppRoter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, component }) =>
        <Route key={path} path={path} element={component}/>
      )}
    </Routes>
  )
}

export default AppRoter