import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#video", label: "Video" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <h1 className="font-palanquin font-bold">
            <span className="text-green-600 inline-block mt-3">Tokopedia</span>{" "}
            PLAY
          </h1>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
