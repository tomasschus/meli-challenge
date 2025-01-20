import "@styles/Navbar.scss";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const [search, setSearch] = useState<string>("");
  const navegate = useNavigate();

  const handleSearch = () => {
    if (search) {
      navegate(`/items?q=${search}`, {
        replace: true,
      });
    }
  };

  return (
    <div className="navbar">
      <img
        className="logo"
        src="/assets/Logo_ML.png"
        alt="MercadoLibre"
        onClick={() => {
          navegate("/");
          setSearch("");
        }}
      />
      <div className="search">
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button onClick={handleSearch}>
          <img
            className="button-icon"
            src="/assets/ic_Search.png"
            alt="Buscar"
          />
        </button>
      </div>
    </div>
  );
};
