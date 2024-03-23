import React from 'react'
import { Link } from 'react-router-dom';


export default function NotFound() {
  return (
    <div>This page not faund <Link to="/news">Back to main page</Link></div>
  )
}
