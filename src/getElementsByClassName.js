// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var childSearchArray = [];
  var nodeResults = [];
  
  // reject non-objects
  if (typeof className !== "object" && typeof className !== "string") {
    return className;
  }
  
  var childSearch = function(node, target) {
    var tempArray = [];
    
    var nodeHasClassName = function(inString) {
      if ( inString.search(target) >= 0 ) {
        return true;
      } else {
        return false;
      }
    }; // end nodeHasClassName
    
    for (var i = 0; i < node.length && node.length; i++) { // BASE CASE
        if ( nodeHasClassName(node[i].className) ) {
          nodeResults.push(node[i]);
          tempArray.push(node[i].outerHTML);
        } // end BASE CASE (if (push matching class innerHTML onto array))
    
    tempArray.push( childSearch(node[i].children, target) ); // recursive call to get next element
    } // end for (iterate through childElements)

  return tempArray;
  }; // end childSearch
  
  childSearchArray = childSearch(document.children, className); // return is obsolete -- ignore
  var result = Array.prototype.slice.apply(nodeResults);
  
  return nodeResults;  
}; // end getElementsByClassName