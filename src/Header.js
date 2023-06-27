import Nav from './Nav';

export default function Header() {
    const headerNav = ["Women's", "Men's", "On the Street", "The Catwalk", "Adwatch", "About"];
    return (
        <header>
            <h1>Sartre's List</h1>
            <h2>Better Dressed People</h2>
            <nav className='main-nav'>
                <Nav 
                    links = {headerNav}
                />
            </nav>
        </header>
    );
}