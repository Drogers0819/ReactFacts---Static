import { createRoot } from 'react-dom/client'
import './App.css'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'

const root = createRoot(document.getElementById('root'))

function Page(){
   return ( <main>
        <Header />
        <MainContent />
    </main>
)
}
root.render(<Page />)