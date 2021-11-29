import React from 'react';

const  Container = (props) => {
    const { Tag = "div", ...other  } = props;
    return (
      <Tag
      { ... other }
    />
    );
}   

export { Container };
