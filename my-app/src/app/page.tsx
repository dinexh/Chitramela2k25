import './globals.css';
// import Navbar from './components/nav/nav';
import Footer from './components/footer/footer';
export default function Home() {
  return (
    <div className="home-container">
      <div className="home-container-nav">
        {/* <Navbar /> */}
      </div>
      <div className="home-container-component">
        <div className="home-container-component-in">

        </div>
      </div>
      <div className="home-container-footer">
        <Footer />
      </div>
    </div>
  );
}
