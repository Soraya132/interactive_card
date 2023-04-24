import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRout({children,data}) {
    if (!data) return <Navigate to="/"/>
    return children
}
