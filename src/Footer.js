import Nav from './Nav';

export default function Footer() {
    const footerNav = ["Home", "Women's", "Men's", "On the Street", "The Catwalk", "Adwatch", "About", "Tips"];
    return (
        <footer>
            <nav className="foot-nav">
                <Nav
                    links = {footerNav}
                />
            </nav>
            <p>&#169 2013 Valet Industries</p>
        </footer>
    );
}