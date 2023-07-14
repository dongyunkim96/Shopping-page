import styles from "./Dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function Dropdown({ setShowDropdown }) {
    const handleClick = () => {
        setShowDropdown((prev) => !prev);
    };

    return (
        <div className={styles.bubble}
          onMouseOver={() => {
            setShowDropdown(true);
          }}
          onMouseOut={() => {
            setShowDropdown(false);
          }}
        >
            <div className={styles.menu}>hello! Dongyun</div>
            <div className={styles.menu}>
                <Link to="/products">
                    <span className={styles.button} onClick={handleClick}>
                        <FontAwesomeIcon className={styles.logo} icon={faGift} /> Product List
                    </span>
                </Link>
            </div>
            <div className={styles.menu}>
                <Link to="/bookmark">
                    <span className={styles.button} onClick={handleClick}>
                        <FontAwesomeIcon className={styles.logo} icon={faStar} /> Bookmark Page
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default Dropdown;