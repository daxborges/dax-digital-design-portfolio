angular.module( 'dagb.directives.animations.listAnimate', [
  
])

.directive( 'dagbListAnimate', function() {
  return {
    restrict: 'A',
    link: function( scope, element, attrs ) {
    
      scope.$watch(attrs.dagbListAnimate, function(value) {
        if(!value) {
          var children = element.children();
          var delaySpan = 25;
          var delay = 0;
          
          /* $(children).css({ opacity : 0 }); */
          $(children).hide();
          for(var i = 0; i < children.length; i++) {
            var child = children[i];
            $(children[i]).delay(delay).fadeIn();
            delay += delaySpan;
          }
        }
      });
    }
  };
})

;