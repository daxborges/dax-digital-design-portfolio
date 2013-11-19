angular.module( 'dagb.filters.isDefined', [] )

.filter('isDefined', function() {
  return function(value) {
    return typeof value !== 'undefined';
  };
})

;