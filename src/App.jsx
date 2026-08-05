import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Cart from "./components/pages/Cart/Cart";


import About from "./components/pages/About/About"
import Google from "./components/pages/Google/Google"
import GetInTouch from "./components/pages/GetInTouch/GetInTouch";



// import BabyShower from "./components/pages/BabyShower/BabyShower"
import Anniversary from "./components/pages/Anniversary/Anniversary";
import KidsSpecial from "./components/pages/KidsSpecial/KidsSpecial";
import Birthday from "./components/pages/Birthday/Birthday";
import HaldiMehndi from "./components/pages/HaldiMehndi/HaldiMehndi";

import Contact from "./components/pages/Contact/Contact"
import Terms from "./components/pages/Terms/Terms"
import Privacy from "./components/pages/Privacy/Privacy"
import Sitemap from "./components/pages/Sitemap/Sitemap"
import Disclaimer from "./components/pages/Disclaimer/Disclaimer";
// import RefundPolicy from "./components/pages/RefundPolicy/RefundPolicy";
import RefundPolicy from "./components/pages/RefundPolicy/RefundPolicy";
import BabyCeremony from "./components/pages/BabyCeremony/BabyCeremony";
import Career from "./components/pages/Career/Career"
function Home() {
  return <h1 style={{ padding: "40px" }}>Home Page</h1>;
}

// function About() {
//   return <h1 style={{ padding: "40px" }}>About Us</h1>;
// }

// function Reviews() {
//   return <h1 style={{ padding: "40px" }}>Google Reviews</h1>;
// }

function App() {
  return (
    <BrowserRouter>
    
    
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/google" element={<Google />} />
        <Route path="/get-in-touch" element={<GetInTouch/>}/>
       <Route path="/cart" element={<Cart />} />
      
        {/* <Route path="/babyshower" element={<BabyShower />}  */}
        <Route path="/baby-ceremony" element={<BabyCeremony />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/anniversary" element={<Anniversary/>}/>
        <Route path="/kids-special" element={<KidsSpecial/>}/>
        <Route path="/haldi-mehndi" element={<HaldiMehndi/>}/>

        <Route path="/contact" element={<Contact/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/privacy-policy" element={<Privacy/>}/>
        <Route path="/sitemap" element={<Sitemap/>}/>
        {/* <Route peth="/career" element={<Career/>}/> */}
        <Route path="/career" element={<Career />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />



      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;