const employeeData = require("../constant/data")
const USER = require("../model/userModel")

// add new user

const  addNewUser = async (req, res)=>{
    try{
        await USER.deleteMany({})
        const user = await USER.create(employeeData)
        res.status(201).send({
            msg : "user is created successfully",
            success: true,
            User : user
            })
        }catch (error) {
            console.log("Error while inserting data", error);
            res.status(400).json({
                success: false,
                error : error.message
            })
        }
} 



//find User
const getAllUser = async (req, res)=>{
    try{
        const result = await USER.find()
            res.status(200).send({
                msg : "All User Is Found",
                User : result
            })
         }
         catch(err){
            console.log("Error to Find User " + err)
         }
}

const salaryAboveThirtyThousand = async (req, res) => {
    try {
      const data = await USER.find({ salary: { $gt: "30000" } });
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error,
      });
    }
};

const experienceAboveTwoYears = async (req, res) => {
    try {
        const data = await USER.find({ "overallExp": { $gt: "2" } })
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

const gradAfterFifteenExpAboveOneYear = async (req, res) => {
    try {
        const data = await USER.find({ "overallExp": { $gt: "1" }, "yearGrad": { $gt: "2015" } })
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

const updateSalary = async (req, res) => {
    try {
        const data = await USER.updateOne({ "salary": "70000" }, { $set: { "salary": "65000" } })
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

const deleteEmp = async (req, res) => {
    try {
        const data = await USER.deleteOne({ "lastCompany": "Y" })
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}




module.exports = {addNewUser , getAllUser , salaryAboveThirtyThousand, experienceAboveTwoYears, gradAfterFifteenExpAboveOneYear , updateSalary , deleteEmp}
