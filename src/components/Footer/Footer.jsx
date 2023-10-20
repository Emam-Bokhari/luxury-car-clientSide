import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10" >
<footer className="footer p-10 bg-[#2b3440] text-white">
  <div>
    <img className="w-32" src="https://i.ibb.co/GkMR3wX/logo.png"  />
    <h2 className="text-[#ff5a25] font-bold text-xl" >Choose Your Best Car</h2>
    <h2 className="text-sm text-[#ff5a25] tracking-wider " >luxurycar.com</h2>
  </div> 
  <nav>
    <header className="footer-title">Site Links</header> 
    <Link className="link link-hover" to="/" >Home</Link>
    <Link className="link link-hover" to="#" >About Us</Link>
    <Link className="link link-hover" to="/addProduct" >Add Product</Link>
    <Link className="link link-hover" to="/myCart" >My Cart</Link>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <Link className="link link-hover">Terms </Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </nav> 
  <form>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control ">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="abc@site.com" className="input input-bordered  pr-16" /> 
        <button className="btn btn-error absolute top-0 right-0 rounded-l-none placeholder:text-black">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;