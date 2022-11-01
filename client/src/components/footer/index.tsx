import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import data from '../../categoris';
import './style.css';

function Footer() {
  const handelCategoryItem = () => {
    const categoryItem = [];
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < 4; index++) {
      categoryItem.push(data[index].name);
    }
    return categoryItem;
  };
  return (
    <footer>
      <div className="footer">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer-bar">
          <div className="footer-menu">
            <h4>Menu</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/jobs-search">Search</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-category">
            <h4>Category</h4>
            <ul>
              {handelCategoryItem().map((el) => <li><Link to={`/jobs-search/?category=${el}`}>{el}</Link></li>)}

            </ul>
          </div>
          <div className="footer-help">
            <h4>Help</h4>
            <ul>
              <li><Link to="/">Privcy Policy</Link></li>
              <li><Link to="/">Terms</Link></li>
              <li><Link to="/">Shipping</Link></li>
              <li><Link to="/">Secure</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
