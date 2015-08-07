var exports=module.exports={};
var parsedArray=[];
//function for addition
exports.addition=function(a,b){
	parsedArray=parseFunction(a,b);
//	console.log(parsedArray);
	console.log("Addition for "+parsedArray[0]+" + "+parsedArray[1]+" = ",parsedArray[0]+parsedArray[1]);
	parsedArray=null;
	}
//Substraction
exports.substraction=function(a,b){
	parsedArray=parseFunction(a,b);
//	console.log(parsedArray);
	console.log("Substraction for "+parsedArray[0]+" - "+parsedArray[1]+" = ",parsedArray[0]-parsedArray[1]);
	
}
//Multiplication
exports.multiplication=function(a,b){
	parsedArray=parseFunction(a,b);
//	console.log(parsedArray);
	console.log("Multiplication for "+parsedArray[0]+" * "+parsedArray[1]+" = ",parsedArray[0]*parsedArray[1]);

}

//Division
exports.division=function(a,b){
	parsedArray=parseFunction(a,b);
		if(parsedArray[0] < parsedArray[1] || parsedArray[0]== 0 || parsedArray[1]==0 )
		{
		console.log("Error: Pased Numbers are Not valid \n may be divider is greater than divident or Divided by Zero\n Check Inputs:",parsedArray[0]+" ",parsedArray[1]);
		}
		else{
		console.log("Division for "+parsedArray[0]+" / "+parsedArray[1]+" = ",parsedArray[0]/parsedArray[1]);
		}
		//	console.log(parsedArray);
}
var parseFunction=function(a,b){
	var parsingArray=[];
	var numberA=parseInt(a);
	var numberB=parseInt(b);
	parsingArray.push(numberA);
	parsingArray.push(numberB);
	return parsingArray;
}
