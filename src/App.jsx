import { default as NavBar } from "./components/NavBar.jsx";
import { default as InputForm } from "./components/InputForm.jsx";

// Styling
import './App.css'


function App() {
  return (
    <>
      <NavBar />
      <main>
        <InputForm />
      </main>
    </>
  )
}

export default App
