import './index.css'

function Header() {
    return (
        <>
            <Title/>
            <h2>Lenovo</h2>
        </>
    )
}

function Content() {
    return (
        <>
            <Title/>
            <h2>Microsoft</h2>
        </>
    )
}

function Footer() {
    return (
        <>
            <Title/>
            <h2>Macos</h2>
        </>
    )
}

function Title() {
    return <span className="text">Have a nice day :)</span>
}

function App() {
    return (
        <div className="App">
            <h1>Laptop</h1>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
