import React from 'react'
import AppBar from "./AppBar";
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';

 const Home = () => {
  return (
    <div><h1>Home</h1>
   <ErrorBoundary><Counter /></ErrorBoundary>
    
    
    </div>
  )
}
export default Home;