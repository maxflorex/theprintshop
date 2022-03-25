import Navbar from './Navbar';
import Footer from './Footer';
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
