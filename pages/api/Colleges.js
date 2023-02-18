import initDB from "../../Helpers/initDB";
import Colleges from "../../Modal/colleges";
initDB();
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getCollege(req, res);
      break;
    case "POST":
      await addCollege(req, res);
      break;
  }
};

// To Add College
const addCollege = async (req, res) => {
  const {
    name,
    instituteCode,
    iframe,
    collegeUnder,
    collegeType,
    university,
    addressLine,
    taluka,
    district,
    city,
    latitude,
    longitude,
    rating,
    contactNo,
    website,
    email,
    approvedBy,
    image,
    topRecruiters,
  } = req.body;

  try {
    const checkCollege = await Colleges.findOne({ instituteCode });
    if (checkCollege) {
      return res.status(422).json({ error: "Already College Added" });
    }
    const college = await new Colleges({
      name,
      instituteCode,
      iframe,
      collegeUnder,
      collegeType,
      university,
      location: {
        addressLine,
        taluka,
        district,
        city,
        latitude,
        longitude,
      },
      rating,
      contacts: {
        contactNo,
        website,
        email,
      },
      approvedBy,
      image,
      topRecruiters,
    }).save();
    res.status(201).json({ msg: "College Added", college });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCollege = async (req, res) => {
  try {
    const getAllCollege = await Colleges.find();
    res.status(200).json(getAllCollege);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
