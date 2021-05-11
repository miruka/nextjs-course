import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Nabaya</span>Technologies
      </h1>
      <p className={headerStyles.description}>
        Graphic Design, Branding and Large Format Printing
      </p>
    </div>
  );
};

export default Header;
