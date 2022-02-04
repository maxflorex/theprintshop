import Navbar from './navbar';
import Footer from './footer';
export default function Layout({ children }) {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <div>{children}</div>
            <Footer />
        </>
    );
}
