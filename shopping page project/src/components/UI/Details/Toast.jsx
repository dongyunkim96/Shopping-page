import styles from "./Details.module.css";
import Modal from "../Modal";
import Detail from "./Detail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Toast = ({item, bookmarkState, setBookmarkState, isBookmarked }) => {
    const [showModal, setShowModal] = useState(false);
    const [willBookmarked, setWillBookmarked] = useState(false);

    const notifyBookmark = () => toast("The product has been added");
    const notifyDeleteBookmarked = () => toast("The product has been deleted");

    const handleModalOpen = () => {
        setShowModal(true);
        setWillBookmarked(isBookmarked);
    };

    const handleModalClose = () => {
        if (isBookmarked && !willBookmarked) {
            const updatedBookmarkState = updatedBookmarkState();
            setBookmarkState(updatedBookmarkState);
            notifyBookmark();
        }
        setShowModal(false);
    };

    useEffect(() => {
        if (showModal) {
            document.body.classList.add("modalOpen");
        }
        else{
            document.body.classList.remove("modalOpen");
        }
    }, [showModal]);

    const updateBookmarkState = () => {
        if (isBookmarked) {
            const existingItemIndex = bookmarkState.findIndex((e) => e.id === item.id);
            const updatedBookmarkState = [...bookmarkState];
            updatedBookmarkState.splice(existingItemIndex, 1);
            return updateBookmarkState;
        }
        else{
            const updatedBookmarkState = [item, ...bookmarkState];
            return updateBookmarkState;
        }
    };

    const handleBookmark = () => {
        const updatedBookmarkState = updateBookmarkState();
        setBookmarkState(updatedBookmarkState);
        isBookmarked ? notifyDeleteBookmark() : notifyBookmark();
    };

    useEffect(() => {
        localStorage.setItem("bookmark", JSON.stringify(bookmarkState));
    }, [bookmarkState]);

    const additionalInfo = () => {
        switch (item.type) {
            case "Brand":
                return <span className={styles.brand}>Likes</span>;
            case "Product":
                return <span className={styles.discount}>{item.discountPercentage}%</span>;
            default:
                return "";
        }
    };

    return (
        <>
        {showModal && (
            <Modal
              imageUrl={item.image_url || item.brand_image_url}
              handleModalClose={handleModalClose}
              title={item.title || item.brand_name}
              willBookmarked={willBookmarked}
              setWillBookmarked={setBookmarkState}
            />
        )}
        <div className={styles.item}>
            <div className={styles.imgBox}>
                <img
                  className={styles.image}
                  src={item.image_url ? item.image_url : item.brand_image_url}
                  alt="Product image"
                  onClick={handleModalOpen}
                />
                <FontAwesomeIcon
                  className={isBookmarked ? styles.yellowstar : styles.star}
                  size="lg"
                  icon={faStar}
                  onClick={() => {
                    handleBookmark();
                  }}
                />                  
            </div>
            <div className={styles.detail}>
                {<h1 className={styles.title}>
                    {item.title ? item.title : item.brand_name}
                </h1>}
                {additionalInfo()}
            </div>
            <Detail item={item} />
        </div>
    </>
    );
};

export default Toast;