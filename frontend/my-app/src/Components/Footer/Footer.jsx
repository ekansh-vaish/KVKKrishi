import React from 'react'
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import Logo from "../../assets/Screenshot 2025-10-06 210210.png"
function Footer() {
  return (
  <footer className="footer bg-dark text-light pt-5 pb-3">
<div className="container">
<div className="row">

<div className="col-md-4 mb-3">
<h5>Krishi Vikas Kendra</h5>
<p>Har Waqt Kisano ke Sath</p>
<img src={Logo} alt="logo" height={"100px"} width={"auto"} />
</div>

<div className="col-md-4 mb-3">
<h5>Quick Links</h5>
<ul className="list-unstyled">
<li><a href="/product" className="footer-link">Home</a></li>
<li><a href="/product" className="footer-link">Products</a></li>
<li><a href="/contactus" className="footer-link">Contact Us</a></li>
<li><a href="/aboutus" className="footer-link">About Us</a></li>
<li><a href="/network" className="footer-link">Network</a></li>
<li><a href="/login" className="footer-link">Login</a></li>

</ul>
</div>

<div className="col-md-4 mb-3">
<h5>Contact</h5>
<p>Email: ekansh982@gmail.com</p>
<p>Phone: +91 6395208277</p>
<p>Phone: +91 7830301838</p>

<div className="d-flex gap-3 mt-2">
<a href="https://m.facebook.com/Diamondagencies/" target="_blank" rel="noopener noreferrer">
<TiSocialFacebook size={30} color="#3b5998" />
</a>
<a href="https://www.instagram.com/diamondsbd?igsh=MTl3aHJpY2NyaTNnMg==" target="_blank" rel="noopener noreferrer">
<TiSocialInstagram size={30} color="#E1306C" />
</a>
<a href="https://www.linkedin.com/in/ekansh-vaish-594832295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
<TiSocialLinkedin size={30} color="#0077B5" />
</a>
</div>
</div>

</div>
<hr className="bg-light" />
<p className="text-center mb-0">© 2025 Krishi Vikas Kendra. All rights reserved.</p>
</div>
</footer>
  )
}

export default Footer
