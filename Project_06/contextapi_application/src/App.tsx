import Profile from "./components/Profile"
import Login from "./components/Login"
import UserContextProvider from "./context/UserContextProvider"

function App() {
  

  return (
    <>
      <div className='text-4xl flex justify-center bg-amber-300'>hello context apis...</div>
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
