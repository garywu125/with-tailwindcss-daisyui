const NUMBER_OF_HERO_IMAGES = 10;

export const getHeroImage = () => {
  const imageNumber = Math.floor(Math.random() * NUMBER_OF_HERO_IMAGES) + 1;
  return `/hero/hero_${imageNumber}.jpeg`;
};
