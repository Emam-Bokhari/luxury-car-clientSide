import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 " >
          <footer className="footer p-10 bg-[#272530] text-white">
  <aside>
  <img className="w-24" src="https://i.ibb.co/GkMR3wX/logo.png" alt="" />
    <p>Luxury Car<br/> Choice Your Best Car</p>
  </aside> 

  {/* Site Links */}
  <nav>
    <header className="footer-title">Site Links</header> 
    <Link to="/" className="link link-hover">Home</Link> 
    <Link to="#" className="link link-hover">About Us</Link> 
    <Link to="/addProduct" className="link link-hover">Add Product</Link> 
    <Link to="/myCart" className="link link-hover">My Cart</Link> 
  </nav> 

  {/* Social Links */}
  <nav>
    <header className="footer-title">Social Links</header> 
    <Link to="#" className="link link-hover">Facebook</Link> 
    <Link to="#" className="link link-hover">Instagram</Link> 
    <Link to="#" className="link link-hover">Twitter</Link> 
    <Link to="#" className="link link-hover">Linkedin</Link>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms And Condition</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookies policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;