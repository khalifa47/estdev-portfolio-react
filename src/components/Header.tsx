import { useState } from "react";
import styled, { keyframes } from "styled-components";

const NavItems = () => {
  return (
    <>
      <NavItem href="#about">About</NavItem>
      <NavItem href="#experience">Experience</NavItem>
      <NavItem href="#projects">Projects</NavItem>
      <NavItem href="https://github.com/khalifa47" target="_blank">
        GitHub
      </NavItem>
      <NavItem
        href="https://www.linkedin.com/in/khalifa-fumo-4199781ba/"
        target="_blank"
      >
        LinkedIn
      </NavItem>
      <NavItem
        href="https://drive.google.com/file/d/1Y9euqs9OMPXQOk3VXwiX5BjGwVOvhhrU/view?usp=sharing"
        target="_blank"
      >
        Resume
      </NavItem>
    </>
  );
};

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <Navbar>
      <Toolbar>
        <HeaderTitle>
          <img src="favicon.ico" alt="logo" />
          <div>
            <h1>
              Khalifa <span>Fumo</span>
            </h1>
            <p>Software Engineer</p>
          </div>
        </HeaderTitle>
        <MobileMenuToggle onClick={handleMobileMenuToggle}>
          &#9776;
          <MobileMenu
            onClick={handleMobileMenuToggle}
            style={{ display: isMobileOpen ? "flex" : "none" }}
          >
            <NavItems />
          </MobileMenu>
        </MobileMenuToggle>
        <HeaderNav>
          <NavItems />
        </HeaderNav>
      </Toolbar>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.header`
  color: #fff;
  padding: 1.2rem;
  background-color: ${(props) => props.theme.colors.headerBackground};
  position: sticky;
`;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    margin-right: 0.75rem;
    object-fit: contain;
    object-position: center;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 0.8rem;
    font-weight: 300;
  }

  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #fff;
  position: relative;

  &:after {
    content: "";
    height: 2px;
    background-color: ${(props) => props.theme.colors.main};
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    transform: scaleX(0);
  }

  &:hover:after {
    transform: scaleX(0.8);
    transform-origin: bottom left;
  }
`;

export const MobileMenuToggle = styled.div`
  display: none;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-200%);
  }

  to {
    transform: translateX(-100%);
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 65px;
  left: 20px;
  padding: 0.75rem;
  border-radius: 4px;
  width: fit-content;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.headerBackground};
  z-index: 10;
  flex-direction: column;
  gap: 0.75rem;
  transform: translateX(-100%);
  transition: all 0.25s ease-out;
  animation: ${slideIn} 0.25s ease-out forwards;
`;
