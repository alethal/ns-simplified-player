import { compareByKey } from "../util-service/util.service";

export const sortGalleryArray = (gallery) => {
  const sortedGallery = [];
  let tmp = [], lastBlockId = 0;

  gallery.forEach((image, idx, arr) => {
		const next = arr?.[idx + 1];
		tmp.push(image);

		if (idx === 0) {
			lastBlockId = image.master_image_id
		}

		if (next?.master_image_id !== lastBlockId) {
			sortedGallery.push(tmp);
			tmp.sort(compareByKey("width"));
			lastBlockId = next?.master_image_id;
			tmp = [];
		}
  });
  return sortedGallery;
};

export const getGalleryUrlsBasedOnScreen = (sortedGallery = []) => {
  const screenWidth = window.outerWidth;
  const galleryURLs = [];
  let lastIdAdded;

  sortedGallery.forEach((imageArray) => {
    imageArray.forEach((image, idx, arr) => {
      const previous = arr?.[idx - 1] || arr[idx];
      const next = arr?.[idx + 1];

      if (image.master_image_id !== lastIdAdded) {
        if (image.width > screenWidth) {
          galleryURLs.push(previous.url);
          lastIdAdded = image.master_image_id;
        } else if (image.width > next?.width || !next?.width) {
          galleryURLs.push(image.url);
          lastIdAdded = image.master_image_id;
        }
      }
    });
  });
  return galleryURLs;
};

/**
 * 
 * @param gallery Expects a sorted gallery array
 * @returns Array of image urls
 */
export const handleMovieGallery = (gallery = []) => {
  return getGalleryUrlsBasedOnScreen(sortGalleryArray(gallery));
};
