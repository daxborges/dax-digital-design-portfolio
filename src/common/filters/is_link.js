angular.module( 'dagb.filters.isLink', [] )

.filter('isLink', function() {
  return function(stringValue) {
    return stringValue.indexOf('html://') === 0;
  };
})

;