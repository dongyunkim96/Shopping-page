import styles from "./Type.module.css";
import all from "../../assets/all.png";
import brand from "../../assets/brand.png";
import category from "../../assets/category.png";
import product from "../../assets/product.png";
import special from "../../assets/special.png";

function Type({ type, currentType, setCurrentType }) {
  let imgSrc;
  let title;
  switch (type) {
    case "all":
      imgSrc = all;
      title = "전체";
      break;
    case "Brand":
      imgSrc = brand;
      title = "브랜드";
      break;
    case "Category":
      imgSrc = category;
      title = "카테고리";
      break;
    case "Product":
      imgSrc = product;
      title = "상품";
      break;
    case "Exhibition":
      imgSrc = special;
      title = "기획전";
      break;
    default:
      imgSrc = all;
      title = "전체";
      break;
  }

  const handleClick = () => {
    setCurrentType(type);
  };

  return (
    <div className={styles.typeBox} onClick={handleClick}>
      <img src={imgSrc} alt="" />
      <div className={currentType === type ? styles.colored : styles.title}>
        {title}
      </div>
    </div>
  );
}

export default Type;