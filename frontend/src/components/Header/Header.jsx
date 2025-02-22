import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth",
      });
    }
    setMenuOpen(false); 
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>📱 PhoneHolder</div>

      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoClose /> : <IoMenu />}
      </div>
    
      <nav className={`${styles.burgerMenu} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li><a href="#features" onClick={(e) => handleScroll(e, "features")}>Переваги</a></li>
          <li><a href="#gallery" onClick={(e) => handleScroll(e, "gallery")}>Галерея</a></li>
          <li><a href="#howorder" onClick={(e) => handleScroll(e, "howorder")}>Як замовити</a></li>
          <li><a href="#reviews" onClick={(e) => handleScroll(e, "reviews")}>Відгуки</a></li>
          <li><a href="#order" onClick={(e) => handleScroll(e, "order")}>Купити</a></li>
          <li><a href="#fag" onClick={(e) => handleScroll(e, "fag")}>FAQ</a></li>

        </ul>
      </nav>
    </header>
  );
}