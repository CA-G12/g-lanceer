/* eslint-disable max-len */
import Category from './Category';

function PopularCategories() {
  const categoriesList = new Array(8).fill('');
  return (
    <div className="container">
      <div className="popular-categories">
        <h2>Popular Categories</h2>
        <div className="categories">
          {categoriesList.map(() => (
            <Category
              imgUrl="https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/translate-600x399.jpg"
              title="lorem"
              desc="Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illo ducimus vel pariatur
              perspiciatis harum."
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;
