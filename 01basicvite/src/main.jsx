import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Youtube from './Youtube.jsx'

function MyApp(){
  return (
    <>
    <h1>My Vite App {2+2}</h1>
    <p>New Way</p>
    </>
  )
}

const AnotherElement = (
  <a href='https://google.com' target='_blank'>Go to Google</a>
)

const reactElement = React.createElement(
  'a',
  {href:"https://google.com", target:"_blank"},
  'visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
