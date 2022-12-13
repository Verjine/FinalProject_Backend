import flower from "../schema/ProductSchema.js";

export const getFlowers = async (req, res) => {
  try {
    const Flower = await flower.find();
    res.json(Flower);
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

export const postFlowers = async (req, res) => {
  try {
    const Flower = new flower({
      title: req.body.title,
      price: req.body.price,
      imgUrl: req.body.imgUrl,
    });
    await Flower.save();
    res.send(Flower);
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
