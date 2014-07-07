// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var thisChar, result;
  var toDebug = false;
  var oType = typeof obj;
  var jObj = JSON.stringify(obj);
  var objProps = [];
  
  var patt = new RegExp("[");
  var res = patt.test(str);



var string = eval(obj); // EVALUATES as an object literal...? Add escape characters...



  getProps = function() {
    for (var prop in obj) {
      var tStr = "" + prop + ": " + obj[prop]; 
      // console.log(tStr); 
      objProps.push(tStr);
    } };
  getProps();
  
  // |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  // ||||||||||||||||     stringifyJSON myCode:     ||||||||||||||||
  // |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                                  //dbg(obj, jObj); // for debugging
  if (oType === "undefined") {
    return "undefined";
  } // end if (undefined)  
  
  if (oType === "boolean") {
    return !!obj ? "true" : "false";
  } // end if (boolean)
    
  if (oType === 'number') {
    return ("" + obj);
  } // end if (number)
  
  if (oType === 'string') {
    result = "\"" + obj + "\"";
    return result;
  } // end if (number)
  
  if (oType === 'object') {
    
    if (obj === null) {
      return "null";
    }
    if (Array.isArray(obj)) {
      
    } // end if (is array)
    
    
    result = obj;
    
  } // end if (number)

  
  debugger;
  
  
  
  return result;
};
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// var stringifyJSON = JSON.stringify;
    // console.log("DEBUG: " + obj + " is a number");

// var jsst = JSON.stringify;
// var dbg = function(input, input2) /*{if (toDebug) */ {console.log("DEBUG: " + input + " is a " + (typeof input) + "   ||   JSON: " + input2 + " is a " + (typeof input2));} //}

// var num;
// var jsNum;
// var ary;
// var jsAry;
// var myObj;
// var jsmyObj;

////////////////////////////////////////////////////////////////////

// var upJSON = function() {
//   if (num) {jsNum = jsst(num);} else {console.log("No \'num\'");}
//   if (ary) {jsAry = jsst(ary);} else {console.log("No \'jaAry\'");}
//   if (myObj) {jsmyObj = jsst(myObj);} else {console.log("No \'myObj\'");}
// }; // end upJSON

// var testJSON = function() {
//   if (typeof num !== 'undefined')   {if (num === jsNum)     {console.log("jsNum = jsst(num) = " + jsNum);}       else {if (typeof num !== 'undefined')   console.log("num != jsst(num) || " + typeof num + " !== " + typeof jsNum);} }
//   if (typeof ary !== 'undefined')   {if (ary === jsAry)     {console.log("jsAry = jsst(ary) = " + jsAry);}       else {if (typeof ary !== 'undefined')   console.log("ary != jsst(ary) || " + typeof ary + " !== " + typeof jsAry);} }
//   if (typeof myObj !== 'undefined') {if (myObj === jsmyObj) {console.log("jsmyObj = jsst(myObj) = " + jsmyObj);} else {if (typeof myObj !== 'undefined') console.log("myObj != jsst(myObj) || " + typeof myObj + " !== " + typeof jsmyObj);} }
// }; // end upJSON

// var upTest = function() {
//   upJSON();
//   console.log("------------");
//   testJSON();
//   console.log("||||||||||||");
// };

// var allProps = function(input) {
//   for (var prop in input) {
//     console.log("" + prop + ": " + input[prop]);
//     }
// };