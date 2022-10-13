interface CategoryProps {
  imgUrl: string,
  title: string,
  desc: string,
  alt: string
}
function Category({
  imgUrl, title, desc, alt,
}: CategoryProps) {
  return (
    <div className="category">
      <div className="category-img">
        <img
          src={imgUrl}
          alt={alt}
        />
      </div>
      <div className="category-title">
        {title}
      </div>
      <div className="category-desc">
        {desc}
      </div>
    </div>
  );
}

export default Category;
