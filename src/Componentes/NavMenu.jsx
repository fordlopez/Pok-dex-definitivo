import { NavLink } from "react-router";

const navItems = [
    { to: "/", label: "Inicio" },
    { to: "/Personajes", label: "Categoría" },
    { to: "/favoritos", label: "Favoritos" }
];

const NavMenu = () => {
    return (
        <header className="top-nav">
            <div className="brand-mark">
                <span className="brand-badge">P</span>
                <div>
                    <strong>Pokédex</strong>
                    <small>Explorer</small>
                </div>
            </div>

            <nav className="nav-links" aria-label="Menú principal">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            `nav-link-item ${isActive ? "active" : ""}`
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
};

export default NavMenu;
