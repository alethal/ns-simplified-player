export const boxCoversOrder = [
  'Box Cover (Extra Large, Front)',
  'Box Cover (Front)',
  'Box Cover (160px Wide)',
  'Box Cover (140px High)',
  'Box Cover (64px, 100px)'
];

export const imagesMap = {
  2000: 0,
  1440: 1,
  1200: 2,
  1024: 3,
  640: 4,
  320: 5
};

export const getCoverImage = (images) => {
  let url;
  if (images?.length) {
    const cover = images.find(matchCoverImage);
    if (cover) {
      url = cover.url;
    } else {
      url = images[0].url;
    }
  }

  return url;
};

export const matchCoverImage = ({is_cover}) => !!is_cover;

export const getBoxCoverImage = (images) => {
  let url;
  if (images?.length) {
    let item = 0;
    const orderCount = boxCoversOrder.length;
    let image;
    while (!url && item < orderCount) {
      image = images.find(matchBoxCoverByType.bind(null, boxCoversOrder[item]));
      if (image) {
        url = image.url;
      }
      item++;
    }
    if (!url) {
      url = images[0].url;
    }
  }

  return url;
};

export const matchBoxCoverByType = (matchingType, {type}) => type === matchingType;

export const getBannerImage = (images, width) => {
  let url;
  let secondaryUrl;
  if (images && images.length) {
    const imagesCount = images.length;
    if (width && imagesCount === 6) {
      for (const key in imagesMap) {
        if (width > key) {
          url = images[imagesMap[key]].url;
        }
      }
      secondaryUrl = images[imagesCount - 1].url;
    } else {
      if (imagesCount > 3) {
        url = images[imagesCount - 3].url;
        secondaryUrl = images[imagesCount - 1].url;
      } else {
        url = images[0].url;
      }
    }
  }

  return {url, secondaryUrl};
};

export const getHeadshotImage = (images) => {
  let url;
  if (images.length) {
    const image = images.find(matchHeadshotImage);
    if (image) {
      url = image.url;
    }
    if (!url) {
      url = images[0].url;
    }
  }

  return url;
};

export const findExclusiveImages = (images) => {
  let imagesCount = 3;
  const exclusiveImages = {
    small: '',
    medium: '',
    large: ''
  };
  let item = images.length;
  let currentImage;
  while (item) {
    item--;
    currentImage = images[item];
    if (imagesCount && matchExclusiveImage(currentImage) && currentImage.filename.indexOf('master') === -1) {
      imagesCount--;
      if (!exclusiveImages.small) {
        exclusiveImages.small = currentImage;
      } else if (!exclusiveImages.medium) {
        exclusiveImages.medium = currentImage;
      } else {
        exclusiveImages.large = currentImage;
      }
    }
  }

  return exclusiveImages;
};

export const getExclusiveImage = (images) => {
  let url;
  if (images.length) {
    const {small, medium, large} = findExclusiveImages(images);
    const image = large || medium || small;
    if (image) {
      url = image.url;
    }
    if (!url) {
      url = images[0].url;
    }
  }

  return url;
};

export const getNumberOneImage = (images) => {
  let url;
  if (images.length) {
    const image = images.find(matchNumberOneImage);
    if (image) {
      url = image.url;
    }
    if (!url) {
      url = getBoxCoverImage(images);
    }
  }

  return url;
};

export const matchHeadshotImage = ({type}) => type === 'Headshot';

export const matchExclusiveImage = ({type}) => type === 'Exclusive';

export const matchNumberOneImage = ({type}) => {
  const propertyId = process.env.REACT_APP_PROPERTY_ID;
  return type === `NumberOne-${propertyId}`;
};
