function controller(hero) {
  let jump = false;
  let heights = {
    low: true,
    medium: true,
    high: true
  };

  hero
    .findBirds()
    .filter((bird) => bird.x - (bird.speed * 2) <= 30)
    .forEach((bird) => {
      if (bird.y < 50) jump = true;

      if (bird.y >= 50 && bird.y < 125) {
        heights.low = false;
      } else if (bird.y <= 150) {
        heights.medium = false;
      } else if (bird.y <= 200) {
        heights.high = false;
      }
    });

  jump && hero.jump(heights.low ? 1 : heights.medium ? 2 : 3);
};
