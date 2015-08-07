var exports=module.exports={};
var parsedArray=[];
var numberA=0;
var numberB=0;
var result=0;
//function for addition
exports.addition=function(a,b){
	parsedArray=parseFunction(a,b);
	numberA=parsedArray[0];
	numberB=parsedArray[1];
	console.log("Addition for "+numberA+" + "+numberB+" = ",numberA+numberB);
	var result=numberA+numberB;
	parsedArray=null;
	return result;
	}
//Substraction
exports.subtraction=function(a,b){
	parsedArray=parseFunction(a,b);
    numberA=parsedArray[0];
	numberB=parsedArray[1];
	console.log("Subtraction for "+numberA+" - "+numberB+" = ",numberA-numberB);
	var result=numberA-numberB;
	parsedArray=null;
	return result;
}
//Multiplication
exports.multiplication=function(a,b){
	parsedArray=parseFunction(a,b);
    numberA=parsedArray[0];
	numberB=parsedArray[1];
	console.log("Multiplication for "+numberA+" * "+numberB+" = ",+numberA*numberB);
    var result=numberA*numberB;
	parsedArray=null;
	return result;
}

//Division
exports.division=function(a,b){
	parsedArray=parseFunction(a,b);
    numberA=parsedArray[0];
	numberB=parsedArray[1];
		if(parsedArray[0] < parsedArray[1] || parsedArray[0]== 0 || parsedArray[1]==0 )
		{
		console.log("Error: Pased Numbers are Not valid \n may be divider is greater than divident or Divided by Zero\n Check Inputs:",numberA+" ",numberB);
		}
		else{
				console.log("Division for "+numberA+" / "+numberB+" = ",numberA/numberB);
				var result=numberA/numberB;
				parsedArray=null;
				return result;
        }
}
var parseFunction=function(a,b){
	var parsingArray=[];
	numberA=parseInt(a);
	numberB=parseInt(b);
	parsingArray.push(numberA);
	parsingArray.push(numberB);
	return parsingArray;
}
