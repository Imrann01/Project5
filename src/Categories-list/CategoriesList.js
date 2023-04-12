import { Link } from 'react-router-dom';

function CategoryList() {
  return (
    <ul>
      <li>
        <Link to="/category1" target="_blank">Category 1</Link>
      </li>
      <li>
        <Link to="/category2" target="_blank">Category 2</Link>
      </li>
      <li>
        <Link to="/category3" target="_blank">Category 3</Link>
      </li>
      <li>
        <Link to="/category4" target="_blank">Category 4</Link>
      </li>
      <li>
        <Link to="/category5" target="_blank">Category 5</Link>
      </li>
    </ul>
  );
}

export default CategoryList;
