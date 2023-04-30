import Styles from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <header className={Styles.header}>
        <h1>React + TS - To Do</h1>
      </header>
    </div>
  );
};

export default Header;
