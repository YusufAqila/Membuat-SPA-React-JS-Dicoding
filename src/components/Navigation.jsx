import { ThemeContext } from "./ThemeProvider";
import { Link } from "react-router-dom";
import { MdOutlineArchive } from "react-icons/md";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import ActionButton from "./ActionButton";
function Navigation() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <>
          <h1>
            <Link to="/">Notes App </Link>
          </h1>
          <nav className="navigation">
            <ul>
              <li>
                <Link
                  to="/archives"
                  className="navigation__archive"
                  alt="Archives Page"
                  title="Archives Page"
                >
                  <MdOutlineArchive />
                </Link>
              </li>
              <li>
                <ActionButton title="Toggle Theme" onSubmit={toggleTheme}>
                  {theme === "dark" ? <FaRegMoon /> : <FaRegSun />}
                </ActionButton>
              </li>
            </ul>
          </nav>
        </>
      )}
    </ThemeContext.Consumer>
  );
}

export default Navigation;
