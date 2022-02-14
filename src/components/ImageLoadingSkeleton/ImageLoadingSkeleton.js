import React from 'react';

import './ImageLoadingSkeleton.scss';

const ImageLoadingSkeleton = ({className, style}) => {
  const classes = ['ImageLoadingSkeleton'];
  if (className) {
    classes.push(className);
  }
  return (
    <div className={classes.join(' ')} style={style}/>
  );
};

export default ImageLoadingSkeleton;
