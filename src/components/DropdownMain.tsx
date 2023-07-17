import { NavLink } from "react-router-dom";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

type Props = {};

const DropdownMain = (_prop: Props) => {
  return (
    <NavDropdownMenu className="d-flex" title="Store">
      <DropdownSubmenu title="Pants">
        <NavLink to="/store/pants/dior-pants" className="dropdown-item">
          Dior
        </NavLink>
        <NavLink to="/store/pants/gucci-pants" className="dropdown-item">
          Gucci
        </NavLink>
        <NavLink to="/store/pants/prada-pants" className="dropdown-item">
          Prada
        </NavLink>
      </DropdownSubmenu>
      <DropdownSubmenu title="T-Shirts">
        <NavLink to="/store/tshirts/dior-tshirts" className="dropdown-item">
          Dior
        </NavLink>
        <NavLink to="/store/tshirts/gucci-tshirts" className="dropdown-item">
          Gucci
        </NavLink>
        <NavLink to="/store/tshirts/prada-tshirts" className="dropdown-item">
          Prada
        </NavLink>
      </DropdownSubmenu>
      <DropdownSubmenu title="Backpacks">
        <NavLink to="/store/backpacks/dior-backpacks" className="dropdown-item">
          Dior
        </NavLink>
        <NavLink
          to="/store/backpacks/gucci-backpacks"
          className="dropdown-item"
        >
          Gucci
        </NavLink>
        <NavLink
          to="/store/backpacks/prada-backpacks"
          className="dropdown-item"
        >
          Prada
        </NavLink>
      </DropdownSubmenu>
      <DropdownSubmenu title="Hoodies">
        <NavLink to="/store/hoodie/dior-hoodie" className="dropdown-item">
          Dior
        </NavLink>
        <NavLink to="/store/hoodie/gucci-hoodie" className="dropdown-item">
          Gucci
        </NavLink>
        <NavLink to="/store/hoodie/prada-hoodie" className="dropdown-item">
          Prada
        </NavLink>
      </DropdownSubmenu>
    </NavDropdownMenu>
  );
};

export default DropdownMain;
