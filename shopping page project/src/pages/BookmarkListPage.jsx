import Toast from "../components/UI/Details/Toast";
import Types from "../components/Types";
import styles from "./ProductListPage.module.css";
import Error from "../components/UI/Error";
import { useState, useEffect, useRef, useMemo } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookmarkListPage({ bookmarkState, setBookmarkState }) {
    const ITEM_PER_PAGE = 12;
    const [page, setpage] = useState(1);
    const [currentType, setCurrentType] = useState("all");
    const [isLoading, setIsLoading] = useState(false);
    const obsRef = useRef(null);

    /* Check if element is bookmarked (for passing props) */
    const checkIsBookmarked = (item) => {
        if (bookmarkState) {
            return bookmarkState.some((e) => e.id === item.id);
        }
        return false;
    };

    /* Create an observer on first render */
    useEffect(() => {
        const observer = new IntersectionObserver(obsHandler, {threshold: 1.0,});
        if (obsRef.current) observer.observe(obsRef.current);
        return () => {
            observer.disconnect();
        };
    }, []);

    /* Callback function for observer */
    const obsHandler = (entries) => {
        setIsLoading(true);
        setTimeout(() => {
            const target = entries[0];
            if (target.isIntersecting) {
                setpage((prev) => prev + 1);
            }
            setIsLoading(false);
        }, 500);
    };

    const filteredItem = useMemo(() => {
        if (currentType === "all") {
            return bookmarkState;
        }
        else {
            return bookmarkState.filter((item) => item.type === currentType);
        }
    }, [currentType, bookmarkState]);

    return (
        <div className={styles.mainbox}>
            <ToastContainer
              position="bottom-right"
              limit={3}
              closeButton={true}
              autoClose={3000}
            />
            <Types currentType={currentType} setCurrentType={setCurrentType} />
            <>
            {" "}
            <div className={styles.itemBox}>
                {bookmarkState && bookmarkState.length !== 0 ? (
                    filteredItem
                      .slice(0, ITEM_PER_PAGE * page)
                      .map((item) => (
                        <Toast
                          key={item.id}
                          item={item}
                          isBookmarked={checkIsBookmarked(item)}
                          bookmarkState={bookmarkState}
                          setBookmarkState={setBookmarkState}
                        />
                      ))
                ) : (
                    <Error />
                )}                            
            </div>
            {isLoading && (
                <div className={styles.ldsring}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}
            {page < Math.ceil(filteredItem.length / ITEM_PER_PAGE) && (
                <div ref={obsRef}></div>
            )}
        </>            
        </div>
    );
}

export default BookmarkListPage;