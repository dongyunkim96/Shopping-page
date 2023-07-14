import styles from "./BookmarkList.module.css";

function BookmarkList({ bookmarkState, setBookmarkState }) {
    const ITEMS_PER_DIV = 4;
    
    const checkIsBookmarked = (item) => {
        if (bookmarkState) {
            return bookmarkState.some((e) => e.id === item.id);
        }
        return false;
    };

    return (
        <div className={styles.mainbox}>
            <h1 className={styles.title}>Bookmark List</h1>
            <div className={styles.listWrapper}>
                {bookmarkState && bookmarkState.length !== 0 ? (
                    bookmarkState
                      .slice(0, ITEMS_PER_DIV)
                      .map((item) => (
                        <item
                          key={item.id}
                          item={item}
                          isBookmarked={checkIsBookmarked(item)}
                          checkIsBookmarked={checkIsBookmarked}
                          setBookmarkState={setBookmarkState}
                        />
                      ))
                ) : (
                    <Error />
                )}
            </div>
        </div>
    );
}

export default BookmarkList;