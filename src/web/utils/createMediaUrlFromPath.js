const BASE_MEDIA_URL = "https://adaptcommerce.org";

const createMediaUrlFromPath = path => {
  if (path && path.indexOf("http") !== -1) {
    return path;
  }

  return BASE_MEDIA_URL + path;
};

export default createMediaUrlFromPath;
