const project =  require("../module/project")

module.exports = {

addpost: async function (req, res) {
    try {
      const createData = await project.create(req.body)
      return res.status(200).json({
        sucess: true,
        message: "Data fetched successfully",
        data: createData,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ sucess: false, message: error.message });
    }
  },

  applyproject: async function (req, res) {
    try {
      const createData = await project.updateOne(
        {_id: req.body._id },
        {
             $push: {
                applies: req.body.applies,
              },
        })
      return res.status(200).json({
        sucess: true,
        message: "Data fetched successfully",
        data: createData,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ sucess: false, message: error.message });
    }
  },

  get: async (req, res) => {
    try {
      const data = await project.find();
      console.log(data);
      return res.status(200).json({
        sucess: true,
        message: "Data fetched successfully",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({ sucess: false, message: error.message });
    }
  },

}

