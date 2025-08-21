import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import Facebook from "./utils/FacebookPixel";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
//import FlightListOneWay from './Components/flight-list-grid/flight-list-one-way'
import CoxsBazar from "./Components/Tours/CoxsBazar";
import SayemanBeach2N3D from "./Components/Tours/CoxsBazar/Sayeman-Beach-Resort-2N3D";
import SeaPearlBeachResort2N3D from "./Components/Tours/CoxsBazar/Sea-Pearl-Beach-Resort-2N3D";
import FlightList from "./Components/flight-list-grid/demo-list";
import Privacy from "./Components/Pages/Privacy";
import TermsConditions from "./Components/Pages/TermsConditions";
import Refund from "./Components/Pages/Refund";
import Custom404 from "./Components/Pages/404";
import Career from "./Components/Pages/career";
import Aboutus from "./Components/Pages/about-us";
import Contactus from "./Components/Pages/contact-us";
import Payment from "./Components/Pages/payment";
import Faq from "./Components/Pages/faq";
import VisaThailand from "./Components/Visa/visaThailand";
import VisaMalaysia from "./Components/Visa/visaMalaysia";
import VisaSingapore from "./Components/Visa/visaSingapore";
import VisaUAE from "./Components/Visa/visaUAE";
import VisaVietnam from "./Components/Visa/visaVietnam";
import Thankyou from "./Components/Pages/thank-you";
import Thailand from "./Components/Tours/Thailand";
import Pattaya2N3D from "./Components/Tours/Thailand/Pattaya2N3D";
import BangkokPattaya4N5D from "./Components/Tours/Thailand/Bangkok-Pattaya-4N5D";
import PhuketPhiPhiKrabi5N6D from "./Components/Tours/Thailand/Phuket-phi-phi-krabi-5N6D";
import PhuketPhiPhiKrabi6N7D from "./Components/Tours/Thailand/Phuket-phi-phi-krabi-6N7D";
import HulhumaleMaafushi3N4D from "./Components/Tours/Maldives/Hulhumale-Maafushi-3N4D";
import CentaraRasfushi3N4D from "./Components/Tours/Maldives/Centara-Rasfushi-3N4D";
import FihalhohiIslandResort3N4D from "./Components/Tours/Maldives/Fihalhohi-Island-Resort-3N4D";
import AdaaranClubRannalhi3N4D from "./Components/Tours/Maldives/Adaaran-Club-Rannalhi-3N4D";
import SunSiyamOlhuveli3N4D from "./Components/Tours/Maldives/Sun-Siyam-Olhuveli-3N4D";
import DiamondsAthuruga3N4D from "./Components/Tours/Maldives/Honeymoon-Special-3N4D";
import Singapore from "./Components/Tours/Singapore";
import ExploreSingapore3N4D from "./Components/Tours/Singapore/Explore-Singapore-3N4D.jsx";
import Maldives from "./Components/Tours/Maldives";
import Vietnam from "./Components/Tours/Vietnam";
import Hanoi3N4D from "./Components/Tours/Vietnam/Hanoi-3N4D.jsx";
import HANOIHALONGBAY3N4D from "./Components/Tours/Vietnam/HANOI-HA-LONG-BAY-3N4D";
import HANOIHALONGBAYCRUISE3N4D from "./Components/Tours/Vietnam/HANOI-HALONG-BAY-CRUISE-3N4D";
import HANOIHALONGBAYNINHBINH4N5D from "./Components/Tours/Vietnam/HANOI-HALONGBAY-NINHBINH-4N5D";
import HANOININHBINH3N4D from "./Components/Tours/Vietnam/HANOI-NINH-BINH-3N4D";
import HANOISAPAHANOI3N4D from "./Components/Tours/Vietnam/HANOI-SAPA-HANOI-3N4D";
import Nepal from "./Components/Tours/Nepal";
import KathmanduPokhara3N4D from "./Components/Tours/Nepal/Kathmandu-Pokhara-3N4D";
import HeritageKathmandu2N3D from "./Components/Tours/Nepal/Heritage-Kathmandu-2N3D";
import HeritageKathmanduNagarkot3N4D from "./Components/Tours/Nepal/Heritage-Kathmandu-Nagarkot-3N4D";
import ExploreKathmanduPokhara4N5D from "./Components/Tours/Nepal/Explore-Kathmandu-Pokhara-4N5D";
import ExploreKathmanduNagarkotPokhara5N6D from "./Components/Tours/Nepal/Explore-Kathmandu-Nagarkot-Pokhara-5N6D";
import SriLanka from "./Components/Tours/Srilanka";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <Facebook />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Custom404 />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/FlightList",
        element: <FlightList />,
      },
      {
        path: "/Thankyou",
        element: <Thankyou />,
      },
      {
        path: "/Privacy",
        element: <Privacy />,
      },
      {
        path: "/TermsConditions",
        element: <TermsConditions />,
      },
      {
        path: "/Refund",
        element: <Refund />,
      },
      {
        path: "/Career",
        element: <Career />,
      },
      {
        path: "/Contactus",
        element: <Contactus />,
      },
      {
        path: "/Payment",
        element: <Payment />,
      },
      {
        path: "/Faq",
        element: <Faq />,
      },
      {
        path: "/Aboutus",
        element: <Aboutus />,
      },
      {
        path: "/CoxsBazar",
        element: <CoxsBazar />,
      },
      {
        path: "/CoxsBazar/Sayeman-Beach-Resort-2N3D",
        element: <SayemanBeach2N3D />,
      },
      {
        path: "/CoxsBazar/Sea-Pearl-Beach-Resort-2N3D",
        element: <SeaPearlBeachResort2N3D />,
      },

      {
        path: "/VisaThailand",
        element: <VisaThailand />,
      },
      {
        path: "/VisaMalaysia",
        element: <VisaMalaysia />,
      },
      {
        path: "/VisaSingapore",
        element: <VisaSingapore />,
      },
      {
        path: "/VisaUAE",
        element: <VisaUAE />,
      },
      {
        path: "/VisaVietnam",
        element: <VisaVietnam />,
      },
      {
        path: "/Thailand",
        element: <Thailand />,
      },
      {
        path: "/Thailand/Pattaya2N3D",
        element: <Pattaya2N3D />,
      },
      {
        path: "/Thailand/Bangkok-Pattaya-4N5D",
        element: <BangkokPattaya4N5D />,
      },
      {
        path: "/Thailand/Phuket-phi-phi-krabi-5N6D",
        element: <PhuketPhiPhiKrabi5N6D />,
      },
      {
        path: "/Thailand/Phuket-phi-phi-krabi-6N7D",
        element: <PhuketPhiPhiKrabi6N7D />,
      },
      {
        path: "/Singapore",
        element: <Singapore />,
      },
      {
        path: "/Singapore/Explore-Singapore-3N4D",
        element: <ExploreSingapore3N4D />,
      },
      {
        path: "/Maldives",
        element: <Maldives />,
      },
      {
        path: "/Maldives/Hulhumale-Maafushi-3N4D",
        element: <HulhumaleMaafushi3N4D />,
      },
      {
        path: "/Maldives/Centara-Rasfushi-3N4D",
        element: <CentaraRasfushi3N4D />,
      },
      {
        path: "/Maldives/Fihalhohi-Island-Resort-3N4D",
        element: <FihalhohiIslandResort3N4D />,
      },
      {
        path: "/Maldives/Adaaran-Club-Rannalhi-3N4D",
        element: <AdaaranClubRannalhi3N4D />,
      },
      {
        path: "/Maldives/Sun-Siyam-Olhuveli-3N4D",
        element: <SunSiyamOlhuveli3N4D />,
      },
      {
        path: "/Maldives/Honeymoon-Special-3N4D",
        element: <DiamondsAthuruga3N4D />,
      },

      {
        path: "/Vietnam",
        element: <Vietnam />,
      },
      {
        path: "/Vietnam/HANOI-HA-LONG-BAY-3N4D",
        element: <HANOIHALONGBAY3N4D />,
      },
      {
        path: "/Vietnam/HANOI-HALONG-BAY-CRUISE-3N4D",
        element: <HANOIHALONGBAYCRUISE3N4D />,
      },
      {
        path: "/Vietnam/HANOI-HALONGBAY-NINHBINH-4N5D",
        element: <HANOIHALONGBAYNINHBINH4N5D />,
      },
      {
        path: "/Vietnam/HANOI-NINH-BINH-3N4D",
        element: <HANOININHBINH3N4D />,
      },
      {
        path: "/Vietnam/HANOI-SAPA-HANOI-3N4D",
        element: <HANOISAPAHANOI3N4D />,
      },

      {
        path: "/Nepal",
        element: <Nepal />,
      },
      {
        path: "/Nepal/Kathmandu-Pokhara-3N4D",
        element: <KathmanduPokhara3N4D />,
      },
      {
        path: "/Nepal/Heritage-Kathmandu-2N3D",
        element: <HeritageKathmandu2N3D />,
      },
      {
        path: "/Nepal/Heritage-Kathmandu-Nagarkot-3N4D",
        element: <HeritageKathmanduNagarkot3N4D />,
      },
      {
        path: "/Nepal/Explore-Kathmandu-Pokhara-4N5D",
        element: <ExploreKathmanduPokhara4N5D />,
      },
      {
        path: "/Nepal/Explore-Kathmandu-Nagarkot-Pokhara-5N6D",
        element: <ExploreKathmanduNagarkotPokhara5N6D />,
      },
      {
        path: "/SriLanka",
        element: <SriLanka />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
