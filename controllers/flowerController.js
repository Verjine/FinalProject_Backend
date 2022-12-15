import flower from "../schema/ProductSchema.js";

export const getFlowers = async (req, res) => {
  try {
    const Flower = await flower.find();
    res.json(Flower);
  } catch (error) {
    res.json({
      message: "something went wrong!",
    });
  }
};

export const getOneFlower = async (req, res) => {
  // const id=req.params.id
  // console.log(id)
  
  //  Wine.findOne({_id:id}, (err, wine)=> {
  //     if(err){
  //       "something wrong wrong"
  //     }
  //     else{
  //           res.json({wine});
  //         }
  //     });


  try {
      const id=req.params.id
      const Flower = await flower.findOne({_id:id})
      res.json(Flower)
  } catch (error) {
      console.log(error)
      res.json({
          message: "something went wrong"
      })
  }
}

export const updateFlower = async (req, res) => {
  try {
      const id=req.params.id
      const updatedFlower= {
          title:req.body.title,
          price:req.body.price,
          image:req.body.image,
          
           
      }
       
      const Flower = await flower.findOneAndUpdate({_id:id}, updatedFlower)
      await Flower.save()
      res.json(Flower)

  } catch (error) {
      console.log(error)
      res.json({
          message: "something went wrong"
      })
  }
}




export const postFlower = async (req, res) => {
  try {
      const Flower = new flower({
          title:req.body.title,
          price:req.body.price,
          image:req.body.image,
           
      })
      await Flower.save()
      res.json(Flower)
  } catch(error) {
      res.json({
          message:"something went wrong"
      })


  }
}


export const deleteFlower = async (req, res) => {
  try {
      const id=req.params.id
      const deletedFlower = await flower.findOneAndDelete({_id:id})
      
      res.json(deletedFlower)
  } catch(error) {
      res.json({
          message:"something went wrong"
      })


  }
}

// export const postFlowers = async (req, res) => {
//   try {
//     const Flower = new flower({
//       title: req.body.title,
//       price: req.body.price,
//       imgUrl: req.body.imgUrl,
//     });
//     await Flower.save();
//     res.send(Flower);
//   } catch (error) {
//     res.json({
//       message: "something went wrong!",
      
//     });
//   }
// };

