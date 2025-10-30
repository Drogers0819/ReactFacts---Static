import reactLogo from './assets/react.svg'
export default function Navbar() {
    return (
        <header className='header'>
            <nav>    
                <img src={reactLogo} className="logo react" alt="React logo" />
                <span>ReactFacts</span>
            </nav>
        </header >
    )
}