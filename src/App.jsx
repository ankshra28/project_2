

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import ScrollToTop from "./components/StopScroll/ScrollToTop";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/Footer";

/* Pages */
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Google from "./components/pages/Google/Google";
import GetInTouch from "./components/pages/GetInTouch/GetInTouch";
import Contact from "./components/pages/Contact/Contact";
import Career from "./components/pages/Career/Career";

/* Products */
import Birthday from "./components/pages/Birthday/Birthday";
import Anniversary from "./components/pages/Anniversary/Anniversary";
import BabyCeremony from "./components/pages/BabyCeremony/BabyCeremony";
import KidsSpecial from "./components/pages/KidsSpecial/KidsSpecial";
import HaldiMehndi from "./components/pages/HaldiMehndi/HaldiMehndi";

/* Cart & Payment */
import Cart from "./components/pages/Cart/Cart";
import Payment from "./components/pages/Payment/Payment";
import PaymentSuccess from "./components/pages/PaymentSuccess/PaymentSuccess";
import History from "./components/pages/History/History";
import VerifyPayment from "./components/pages/PaymentVerify/PaymentVerify";

/* Legal */
import Terms from "./components/pages/Terms/Terms";
import Privacy from "./components/pages/Privacy/Privacy";
import Sitemap from "./components/pages/Sitemap/Sitemap";
import Disclaimer from "./components/pages/Disclaimer/Disclaimer";
import RefundPolicy from "./components/pages/RefundPolicy/RefundPolicy";

/* 404 */
import NotFound from "./components/pages/NotFound/NotFound";


function AppContent() {
  const location = useLocation();

  const is404 = location.pathname === "/404";

  return (
    <>
      <ScrollToTop />

      {!is404 && <Navbar />}

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* General */}
        <Route path="/about" element={<About />} />
        <Route path="/google" element={<Google />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />

        {/* Products */}
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/anniversary" element={<Anniversary />} />
        <Route path="/baby-ceremony" element={<BabyCeremony />} />
        <Route path="/kids-special" element={<KidsSpecial />} />
        <Route path="/haldi-mehndi" element={<HaldiMehndi />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Payment */}
        <Route path="/payment" element={<Payment />} />

        <Route
          path="/payment/success/:invoiceId"
          element={<PaymentSuccess />}
        />

        <Route
          path="/history"
          element={<History />}
        />

        <Route
          path="/verify/:token"
          element={<VerifyPayment />}
        />

        {/* Legal */}
        <Route path="/terms" element={<Terms />} />
        <Route
          path="/privacy-policy"
          element={<Privacy />}
        />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route
          path="/disclaimer"
          element={<Disclaimer />}
        />
        <Route
          path="/refund-policy"
          element={<RefundPolicy />}
        />

        {/* 404 */}
        <Route
          path="/404"
          element={<NotFound />}
        />

        <Route
          path="*"
          element={<Navigate to="/404" replace />}
        />

      </Routes>

      {!is404 && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;