import './App.css'
import {NavBar} from "./Components/NavBar.tsx";
import {Hero} from "./Components/Hero.tsx";
import {About} from "./Components/About.tsx";
import {Stack} from "./Components/Stack.tsx";
import {Projects} from "./Components/Projects.tsx";
import {Services} from "./Components/Services.tsx";
import {Contact} from "./Components/Contact.tsx";
import {Analytics} from "@vercel/analytics/react";


function App() {

    return (
        <div className='app'>
            <NavBar/>
            <Hero/>
            <About/>
            <Stack/>
            <Projects/>
            <Services/>
            <Contact/>
            <Analytics/>
        </div>
    )
}

export default App
