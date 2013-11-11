angular.module( 'dagb.filters.replace', [] )

.filter('dagbReplace', function() {
  return function(haystack, needle, replacement, regexFlag) {
    if(replacement === undefined) { replacement = ''; }
    //if(g !== undefined) { needle = "/"+needle+"/g"; }
    needle = new RegExp(needle, regexFlag);
    return haystack.replace(needle, replacement);
  };
})

;