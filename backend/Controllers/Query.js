const Query = require("../Model/Query");
const { ReportSchema } = require("../Validation/Schema"); // ✅ Fix here

module.exports.UserQuery = async (req, res) => {
  try {
    const { error, value } = ReportSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { Name, Email, Phone, Subject, Message } = value;

    const newQuery = new Query({
      Name,
      Email,
      Phone,
      Subject,
      Message
    });

    await newQuery.save();

    res.status(201).json({ message: "Your query has been successfully submitted." });
  } catch (err) {
    console.error("Query submission failed:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
