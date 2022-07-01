import { Outlet, Link } from "react-router-dom";

import { Logo } from "../components/Logo";
import Row from "../components/Row";

const routes = [
  { route: "/", name: "Who am I?" },
  { route: "/Hobby", name: "Personal projects" },
];

const Layout = () => {
  return (
    <div className="flex flex-col flex-grow w-full h-full font-Roboto">
      <div className="flex flex-row sticky w-full h-14 items-center justify-start bg-Dark text-Neon">
        <Link to="/">
          <Logo />
        </Link>
        <Row>
          {routes.map((route) => {
            return (
              <div className="m-4">
                <Link to={route.route}>{route.name}</Link>
              </div>
            );
          })}
        </Row>
      </div>
      <Row className="w-full h-full bg-Light">
        <div className="w-14 bg-Dark flex flex-col-reverse items-center">
          <div className="h-24 w-0.5 m-2 bg-Neon"></div>
          <img
            className="h-5 w-5 m-0.5 cursor-pointer"
            src="icons/Contact/WhatsApp.svg"
            alt="WhatsApp"
            onClick={() => {
              navigator.clipboard.writeText("+55(51)995087494");
            }}
          />
          <a
            className="m-0.5"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/CorpseSaviour"
          >
            <img
              className="h-5 w-5"
              src="icons/Contact/LinkedIn.svg"
              alt="LinkedIn"
            />
          </a>
          <a
            className="m-0.5"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/CorpseSaviour"
          >
            <img
              className="h-5 w-5"
              src="icons/Contact/GitHub.svg"
              alt="GitHub"
            />
          </a>
        </div>
        <div className="h-full">
          <Outlet />
        </div>
      </Row>
    </div>
  );
};

export default Layout;
