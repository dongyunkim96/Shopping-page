import styles from "./Error.module.css";

function Error() {
    return (
        <div className={styles.error}>
            <p>Your bookmark page is empty.</p>
        </div>
    );
}

export default Error;