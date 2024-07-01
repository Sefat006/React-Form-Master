import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'
import HookForm from './Components/HookForm/HookForm'
import ReuseableForm from './Components/ReuseableForm/ReuseableForm'


function App() {
  
  return (
    <>
    <h1>Vite + React</h1>
      <h2>by SimpleForm</h2>
      <SimpleForm></SimpleForm>
      <h2>by StateFulForm</h2>
      <StatefulForm></StatefulForm>
      <h2>by HookForm</h2>
      <HookForm></HookForm>
      <h2>by ReUseableForm</h2>
      <ReuseableForm formTitle={'sign-up'}></ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'} submitBtnText='update'></ReuseableForm>
    </>
  )
}

export default App
