export const getImagePath = (path) => {
  return import.meta.env.PROD 
    ? `/webGallery-01-11-24-2-${path}` // Path untuk production
    : path;                            // Path untuk development
} 