/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import {
  Container, Radio, RadioGroup, FormControlLabel, FormControl, Input,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import data from '../../categoris';
import './style.css';

interface Props {
  category: string,
  changeCategory: (cate: any) => void,
  priceChange: (data: any) => void,
  price : number
}

function Filter({
  category, changeCategory, priceChange, price,
}: Props) {
  console.log(category);
  const location = useLocation();
  return (
    <Container className="content">
      <div className="sideBar">
        <FormControl>
          <label className="label">Price</label>
          <Input
            name="price"
            type="number"
            onChange={priceChange}
            value={price}
          />
          <label id="demo-radio-buttons-group-label" className="label catelabel">Categories</label>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={location.state?.category || category}
            name="radio-buttons-group"
            className="categories"
            onChange={changeCategory}
          >
            {data.map((ele) => (
              <FormControlLabel
                key={ele.name}
                label={ele.name}
                value={ele.name}
                control={<Radio />}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </Container>
  );
}

export default Filter;
