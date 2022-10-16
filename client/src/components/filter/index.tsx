/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import {
  Container, Radio, RadioGroup, FormControlLabel, FormControl, Select, Input,
} from '@mui/material';
import React from 'react';
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
            defaultValue={category}
            name="radio-buttons-group"
            className="categories"
            onChange={changeCategory}
          >
            {data.map((ele, i) => {
              return (
                <FormControlLabel
                  key={i + 5}
                  label={ele.name}
                  value={ele.name}
                  control={<Radio />}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>
    </Container>
  );
}

export default Filter;
