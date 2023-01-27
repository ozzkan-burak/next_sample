import React from "react";
import Typo from "../Typo";
import { HeaderBant, Header, NavbarS, SearchBar } from "./index.styles";

const Navbar = ({ data }) => {
  const headerItems = ["About", "Contact", "Help", "FAQs"];
  const navBarItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shops",
    },
    {
      title: "Shop Detail",
      link: "/shopDetail/1",
    },
    {
      title: "Pages",
      link: "/pages",
      options: [
        {
          title: "Shopping Cart",
          link: "/cart",
        },
        {
          title: "Checkout",
          link: "/checkout",
        },
      ],
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <Header>
      <HeaderBant>
        {headerItems.map((item, index) => (
          <Typo className="header-bant-item" as="span" text={item} />
        ))}
      </HeaderBant>
      <SearchBar>
        <span></span>
        <div>Search for products</div>
        <span>
          Customer Service <br /> +012 345 6789
        </span>
      </SearchBar>
      <NavbarS>
        <span>Categories</span>
        <div className="navbar-categories">
          {navBarItems.map((item, index) => (
            <a href={item.link} key={index}>
              {item.title}
            </a>
          ))}
        </div>
      </NavbarS>
    </Header>
  );
};

export default Navbar;

export async function getServerSideProps() {
  // örnek fetch
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // örnek
  return { props: { data } };
}

// getStaticProps yapısı da incelenecek
