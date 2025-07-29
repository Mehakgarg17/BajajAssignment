const express=require("express");
const router=express.Router();

const fullName="john_doe";
const dob="17091999"; 
const email="john@xyz.com";
const rollNumber="ABCD123";

router.post("/",(req,res)=>{
  try{
    const{data}=req.body;

    if(!Array.isArray(data)){
      return res.status(400).json({is_success:false,message:"Invalid data format"});
    }
    let evenNumbers=[];
    let oddNumbers=[];
    let alphabets=[];
    let specialCharacters=[];
    let sum=0;
    let reverseAlphaConcat="";
    data.forEach(item=>{
      const strItem=item.toString();

      if(/^[0-9]+$/.test(strItem)){
        const num=parseInt(strItem);
        sum+=num;
        (num%2===0?evenNumbers:oddNumbers).push(strItem);
      }else if(/^[a-zA-Z]+$/.test(strItem)){
        alphabets.push(strItem.toUpperCase());
        reverseAlphaConcat=toggleCaps(strItem)+reverseAlphaConcat;
      }else{
        specialCharacters.push(strItem);
      }
    });

    return res.status(200).json({
      is_success:true,
      user_id:`${fullName.toLowerCase()}_${dob}`,
      email:email,
      roll_number:rollNumber,
      odd_numbers:oddNumbers,
      even_numbers:evenNumbers,
      alphabets:alphabets,
      special_characters:specialCharacters,
      sum:sum.toString(),
      concat_string:reverseAlphaConcat
    });
  }catch(error){
    return res.status(500).json({is_success:false,message:error.message});
  }
});

function toggleCaps(str) {
  return str
    .split("")
    .reverse()
    .map((ch,i)=>(i%2===0?ch.toUpperCase():ch.toLowerCase()))
    .join("");
}

module.exports=router;
