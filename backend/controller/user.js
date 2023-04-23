const user = require("../module/user")

module.exports = {

    userpost: async function (req, res) {
        try {
          const createData = await user.create(req.body)
          return res.status(200).json({
            sucess: true,
            message: "Data added successfully",
            data: createData,
          });
        } catch (error) {
          console.log(error);
          return res.status(500).json({ sucess: false, message: error.message });
        }
      },


    userget: async (req, res) => {
    try {
      const data = await user.find();
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


