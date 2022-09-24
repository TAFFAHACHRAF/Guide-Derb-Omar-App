import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

const navigation = [
  {
    title: "Accuil",
    href: "/dachbord/starter",
    icon: "bi bi-house-fill",
  },
  {
    title: "Transporters",
    href: "/dachbord/transporters",
    icon: "bi bi-truck",
  },
  {
    title: "Importers",
    href: "/dachbord/importers",
    icon: "bi bi-person-plus-fill",
  },
  {
    title: "Sellers",
    href: "/dachbord/sellers",
    icon: "bi bi-shop",
  },
  {
    title: "Guides",
    href: "/dachbord/guides",
    icon: "bi bi-question-circle",
  },
  {
    title: "Coaches",
    href: "/dachbord/coachs",
    icon: "bi bi-person-video3",
  },
  {
    title: "Source product",
    href: "/dachbord/source_products",
    icon: "bi bi-link-45deg",
  },
  {
    title: "Visitors",
    href: "/dachbord/visitors",
    icon: "bi bi-people",
  },
  {
    title: "Training",
    href: "/dachbord/trainings",
    icon: "bi bi-youtube",
  },
  {
    title: "Guide Consultations",
    href: "/dachbord/guideConsultations",
    icon: "bi bi-patch-question-fill",
  },
  {
    title: "Price packages",
    href: "/dachbord/price_packages",
    icon: "bi bi-currency-dollar",
  }
];

const Sidebar = () => {
  const [cookies, setCookie, removeCookie] = useCookies('Administrator');

  const logOut = () =>{
    removeCookie("type")
    removeCookie("email")
    removeCookie("id")
    removeCookie("accessToken")
    window.location.href="/#/login"
  }

  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3 w-20">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            onClick={logOut}
          >
            Log out
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
