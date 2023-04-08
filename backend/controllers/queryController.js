const catcher = require("../lib/utils/catcher");
const { createUser } = require("./userController");


module.exports.byFace=catcher(async(req,res)=>{
    console.log(req.file)

    const { data } = await axios.post("http://localhost:5000/query",req.file)

    const resp = JSON.parse(data)

    let user;
    if(resp['score']<0.7){
        user = await createUser(req.body)
    }
    else{
        return res.status(200).json({
            success:true,
            data:data
        })
    }

    const formdata = new FormData();
    formdata.append("image",req.file);
    formdata.append("id",user._id);

    const { addData } = await axios.post("http://localhost:5000/add",formdata)

    console.log(addData)

    return res.status(200).json({
        success:true,
        data:"No record"
    })
})


module.exports.byAadhar=catcher(async(req,res)=>{
    console.log(req.file)

    const { data } = await axios.post("http://localhost:5000/aadhar",req.file)

    const resp = JSON.parse(data)

    let user;
    if(resp['score']<0.7){
        user = await createUser(req.body)
    }
    else{
        return res.status(200).json({
            success:true,
            data:data
        })
    }

    const formdata = new FormData();
    formdata.append("image",req.file);
    formdata.append("id",user._id);

    const { addData } = await axios.post("http://localhost:5000/add",formdata)

    console.log(addData)

    return res.status(200).json({
        success:true,
        data:"No record"
    })
})