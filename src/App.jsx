import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'
import HookForm from './Components/HookForm/HookForm'
import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
import GrandFa from './Components/GrandFather/GrandFa/GrandFa'


function App() {
  const handleSignUpSubmit = data =>{
   console.log('sign up data', data)
}
const handleUpdateProfile = data =>{
 console.log('update Profile data', data);

}
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
      <ReuseableForm formTitle={'sign-up'} handleSubmit={handleSignUpSubmit}>
      <div>
        <h3>Sign Up</h3>
        <h5>please sign up here</h5>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='update'>
      <div>
        <h3>Sign Up</h3>
        <h5>please sign up here</h5>
        </div>
      </ReuseableForm>
      <h1>Component Context</h1>
      <h1>Grand Father</h1>
      <GrandFa></GrandFa>
    </>
  )
}

export default App
