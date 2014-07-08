// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var thisChar;
  var result;
  var toDebug = false;
  var oType = typeof obj;
  var jObj = JSON.stringify(obj);
  var arrayStart = "\[";
  var arrayEnd = "\]";
  var objectStart = "\{";
  var objectEnd = "\}";
  var notStringifiable = /notStringifiable/;
  
  
  
//   var deQuote = function(inString) {
//     var iLength = inString.length;
    
//     if (inString.charAt(0) !== "'" && inString.charAt(0) !== '"') {
//       //return alert("Warning! " + inString.charAt(0) + " at beginning of " + inString);
//       alert("Warning! " + inString.charAt(0) + " at beginning of " + inString);
//       debugger;
//     } // end if (wrong termination)
//     if (inString.charAt(iLength-1) !== "'" && inString.charAt(iLength-1) !== '"') {
//       //return alert("Warning! " +  inString.charAt(iLength-1) + " at end of " + inString);
//       alert("Warning! " +  inString.charAt(iLength-1) + " at end of " + inString);
//       debugger;
//     } // end if (wrong termination)
    
//     inString.slice(1, -1);                 // OR:    inString.slice(1, iLength-1);
//     return true; // CAREFUL with this return - don't assign your return to it! Used for completion check    
//   }; // end deQuote
  
  
  
  
  
  
//   var gProps = function(input) {
//     var tmpString = "" + input + "\n";
//     for (var prop in input) {
//       tmpString += input + "[" + prop + "]: " + input[prop] + "\n";
//     }
//   return tmpString;
//   };
  
//   var argsString = gProps(arguments);
//   var objString = gProps(obj);
  
//   var alertString = gProps(arguments);
//   alertString += 'eval(arguments) = ' + eval(arguments) + '\n\n';
//   alertString += 'obj:\n';
//   alertString += gProps(obj);
//   if (oType !== "string") {alertString += 'eval(obj) = ' + (eval(obj)) + '\n\n';}
//   // alert(alertString);

  
  // console.clear();
  // console.log("arguments properties are:\n" + argsString);
  // console.log("obj's properties are:\n" + objString);
  
           
      

//var string = eval(obj); // EVALUATES as an object literal...? Add escape characters...

  
  // |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  // ||||||||||||||||     stringifyJSON myCode:     ||||||||||||||||
  // |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                                  //dbg(obj, jObj); // for debugging

// used for stringifyJSON spec
// hint: JSON does not allow you to stringify functions or
// undefined values, so you should skip those key/value pairs.



  if (oType === 'undefined') { 
    result = notStringifiable; // empty return
    //result = "undefined";
    
  } else if (oType === 'boolean') {           // end if (undefined) ==> if (boolean)
    result = !!obj ? "true" : "false";
    
  } else if (oType === 'number') {            // end if (boolean) ==> if (number)
    result = ("" + obj);
    
  } else if (oType === 'string') {            // end if (number) ==> if (string)
    result = '"' + obj + '"'; // wraps basic string in quotes. OK for string w/o escape characters...
    
  } else if (oType === 'function') {          // end if (string) ==> if (function)
    result = notStringifiable; // return nothing
  } else if (oType === 'object') {            // end if (function) ==> if (object)
    if (obj === null) {
      var regExpNull = /null/;
      result = regExpNull.source;
      
    } else if (Array.isArray(obj)) {          // end if (object.null) ==> if (object.Array)
      var elementContents = "";
      
      for (var i = 0; i < obj.length; i++) {
        if (i !== 0) { elementContents += ','; }// don't add ',' for index 0
        var rawArrayContents = stringifyJSON(obj[i]);
        
        // check for function returns, or escape characters down the line...
        if (rawArrayContents.source === notStringifiable.source) { // no entry because this is not stringifiable
          console.log("WARNING: you've got a non-stringifiable item here...");
          var lastCharWritten = elementContents.slice(0, -1);
          if (',' === elementContents) {elementContents = elementContents.slice(0, -1);} // remove comma
        } else {
          elementContents += rawArrayContents; // append rawArrayContents to comma-separated string
        } // end else
        
      } // end for (iterate through array)

      result = arrayStart + elementContents + arrayEnd;
    } else { // end if (is array) ==> is (Object)
      var objectContents = "";
      var i = 0;
      
      for (var prop in obj) {
        if (i !== 0) { objectContents += ','; }// don't add ',' for index 0
        
        var rawObjProp = stringifyJSON(prop);
        var rawObjValue = stringifyJSON(obj[prop]);
        
        // check for function returns, or escape characters down the line...
        if (rawObjValue.source === notStringifiable.source) {
          console.log("WARNING: you've got a non-stringifiable item here...");
        } else { // no entry because this is not stringifiable
          objectContents += rawObjProp; // append rawObjProp
          objectContents += ':'; // append colon
          objectContents += rawObjValue; // append rawObjValue
          i++; // iterate counter for adding commas
        } // end else
      } // end for (iterate through obj)
            
      result = objectStart + objectContents + objectEnd;
    } // end object.Object
  } // end (object)

  return result;
};