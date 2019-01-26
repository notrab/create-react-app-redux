/**
 * ItemList
 */

import React from 'react';

const ItemList = ({ items }) => (
  <div>
    {items.map(item => (
      <div key={item.id}>
        {item.title}
      </div>
    ))}
  </div>
)
export default ItemList;
