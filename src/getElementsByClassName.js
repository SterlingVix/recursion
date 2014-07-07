// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var result = [];
  var docLength = document.length;  //  var docLength = className.length;
  var childSearchArray = [];
  var nodeResults = [];
  
  // reject non-objects
  if (typeof className !== "object" && typeof className !== "string") {
    return className;
  }
  
  var childSearch = function(node, target) {
    var tempArray = []; // ???????
    
    for (var i = 0; i < node.length && node.length; i++) {  // node[i].childElementCount; // BASE CASE
      if (node[i].className === target) { // node; node[i]; 
        nodeResults.push(node[i]);
        tempArray.push(node[i].outerHTML);
        //debugger;
      } // end BASE CASE -- if (push matching class innerHTML onto array)
    
    tempArray.push( childSearch(node[i].children, target) ); // recursive call to get next element
    } // end for (iterate through childElements)

  return tempArray;
  }; // end childSearch
  
  childSearchArray = childSearch(document.children, className); // return is obsolete -- ignore
  
//   result = Array.prototype.slice.apply(nodeResults);
//   debugger;
  
  return nodeResults;
  
}; // end getElementsByClassName