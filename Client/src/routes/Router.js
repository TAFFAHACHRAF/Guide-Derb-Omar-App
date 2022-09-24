import { lazy } from "react";
import { Navigate } from "react-router-dom";
/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Navbar = lazy(() => import("../views/landing/LNavbar.js"));
const Header = lazy(() => import("../views/landing/LHeader.js"));
const Feature = lazy(() => import("../views/landing/LFeature.js"));
const Services = lazy(() => import("../views/landing/LServices.js"));
const Contact = lazy(() => import("../views/landing/LContact.js"));
const Subscribe = lazy(() => import("../views/landing/LSubscribe.js"));
const Footer = lazy(() => import("../views/landing/LFooter.js"));


const Login = lazy(() => import("../views/Authentification/Login.js"));
const Register = lazy(() => import("../views/Authentification/Register.js"));

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
// const Badges = lazy(() => import("../views/ui/Badges"));
// const Buttons = lazy(() => import("../views/ui/Buttons"));
// const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Transporters = lazy(() => import("../views/ui/Transporters"));
const Importers = lazy(() => import("../views/ui/Importers"));
const GuideConsultations = lazy(() => import("../views/ui/GuideConsultations"));
const Price_packages = lazy(() => import("../views/ui/Price_packages"));
const Sellers = lazy(() => import("../views/ui/Sellers"));
const Training = lazy(() => import("../views/ui/Trainings"));
const Visitors = lazy(() => import("../views/ui/Visitors"));
const Guides = lazy(() => import("../views/ui/Guides"));
const Coachs = lazy(() => import("../views/ui/Coachs"));
const Source_product = lazy(() => import("../views/ui/Source_products"));
const UpdateTransporter = lazy(() => import("../views/ui/UpdateTransporter.js"));
const UpdateImporter = lazy(() => import("../views/ui/UpdateImporter"));
const UpdateSeller = lazy(() => import("../views/ui/UpdateSeller"));
const UpdateGuide = lazy(() => import("../views/ui/UpdateGuide"));
const UpdateCoach = lazy(() => import("../views/ui/UpdateCoach"));
const UpdateVisitor = lazy(() => import("../views/ui/UpdateVisitor"));
const UpdateTraining = lazy(() => import("../views/ui/UpdateTraining"));
const UpdateGuideConsultations = lazy(() => import("../views/ui/UpdateguideConsultation"));
const UpdatePrice_package = lazy(() => import("../views/ui/UpdatePrice_packages"));
const UpdateSource_product = lazy(() => import("../views/ui/UpdateSource_product"));
const AddTransporter = lazy(() => import("../views/ui/AddTransporter"));
const AddImporter = lazy(() => import("../views/ui/AddImporter"));
const AddSeller = lazy(() => import("../views/ui/AddSeller"));
const AddGuide = lazy(() => import("../views/ui/AddGuide"));
const AddCoach = lazy(() => import("../views/ui/AddCoach"));
const AddVisitor = lazy(() => import("../views/ui/AddVisitor"));
const AddTraining = lazy(() => import("../views/ui/AddTraining"));
const AddGuideConsultation = lazy(() => import("../views/ui/AddGuideConsultation"));
const AddPlan = lazy(() => import("../views/ui/AddPlan"));
const AddSource_product = lazy(() => import("../views/ui/AddSource_product"));

////

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/login",
    element : <Login />,
    exact: true
  },
  {
    path: "/register",
    element : <div className="bg-white"><Register /></div>,
    exact: true
  },
  {
    path: "/",
    element: <div>
              <Navbar />
              <Header />
              <Feature />
              <Services />
              <Contact />
              <Subscribe />
              <Footer />
            </div>,
      exact: true
  },
  {
    path: "/dachbord",
    element: <FullLayout />,
    children: [
      { path: "/dachbord", element: <Navigate to="/dachbord" /> },
      { path: "/dachbord/alert", exact: true, element: <Alerts /> },
      { path: "/dachbord/starter", exact: true, element: <Starter /> },
      { path: "/dachbord/transporters", exact: true, element: <Transporters /> },
      { path: "/dachbord/importers", exact: true, element: <Importers /> },
      { path: "/dachbord/sellers", exact: true, element: <Sellers /> },
      { path: "/dachbord/guides", exact: true, element: <Guides /> },
      { path: "/dachbord/coachs", exact: true, element: <Coachs /> },
      { path: "/dachbord/visitors", exact: true, element: <Visitors /> },
      { path: "/dachbord/trainings", exact: true, element: <Training /> },
      { path: "/dachbord/grid", exact: true, element: <Grid /> },
      { path: "/dachbord/guideConsultations", exact: true, element: <GuideConsultations /> },
      { path: "/dachbord/price_packages", exact: true, element: <Price_packages /> },
      { path: "/dachbord/source_products", exact: true, element: <Source_product /> },
      { path: "/dachbord/updateTransporter/", exact: true, element: <UpdateTransporter /> },
      { path: "/dachbord/updateImporter/", exact: true, element: <UpdateImporter /> },
      { path: "/dachbord/updateSeller/", exact: true, element: <UpdateSeller /> },
      { path: "/dachbord/updateGuide/", exact: true, element: <UpdateGuide /> },
      { path: "/dachbord/updateCoach/", exact: true, element: <UpdateCoach /> },
      { path: "/dachbord/updateVisitor/", exact: true, element: <UpdateVisitor /> },
      { path: "/dachbord/updateTraining/", exact: true, element: <UpdateTraining /> },
      { path: "/dachbord/updateGuideConsultations/", exact: true, element: <UpdateGuideConsultations /> },
      { path: "/dachbord/updatePlan/", exact: true, element: <UpdatePrice_package /> },
      { path: "/dachbord/updateSource_product/", exact: true, element: <UpdateSource_product /> },
      { path: "/dachbord/addTransporter/", exact: true, element: <AddTransporter /> },
      { path: "/dachbord/addImporter/", exact: true, element: <AddImporter /> },
      { path: "/dachbord/addSeller/", exact: true, element: <AddSeller /> },
      { path: "/dachbord/addGuide/", exact: true, element: <AddGuide /> },
      { path: "/dachbord/addCoach/", exact: true, element: <AddCoach /> },
      { path: "/dachbord/addVisitor/", exact: true, element: <AddVisitor /> },
      { path: "/dachbord/addTraining/", exact: true, element: <AddTraining /> },
      { path: "/dachbord/addGuideConsultation/", exact: true, element: <AddGuideConsultation /> },
      { path: "/dachbord/addPlan/", exact: true, element: <AddPlan /> },
      { path: "/dachbord/addSource_product/", exact: true, element: <AddSource_product /> },
    ],
  }
];

export default ThemeRoutes;
