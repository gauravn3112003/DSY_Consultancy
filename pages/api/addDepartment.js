import initDB from "../../Helpers/initDB";
import Colleges from "../../Modal/Colleges";
initDB();

export default async (req, res) => {
  const { courseName, instituteCode, annalFee, choiceCode } = req.body;

  const filter = { instituteCode: instituteCode };

  try {
    if (!courseName || !instituteCode || !annalFee || !choiceCode) {
      return res.status(422).json({ error: "please fill all the fields" });
    }
    const checkDep = await Colleges.findOne({
      department: { $elemMatch: { choiceCode } },
    });

    const clgName = await Colleges.findOne({
      instituteCode: instituteCode,
    });
    if (!clgName) {
      return res.status(404).json({ error: "This Institute not Exists" });
    }

    if (checkDep) {
      return res.status(422).json({ error: "Department already added" });
    }
    let dep = {
      courseName,
      annalFee,
      choiceCode,
      cName: clgName.name,
    };
    const update = { $push: { department: dep } };

    const addDep = await Colleges.findOneAndUpdate(filter, update);
    res.status(201).json({ msg: "department Added", addDep });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
