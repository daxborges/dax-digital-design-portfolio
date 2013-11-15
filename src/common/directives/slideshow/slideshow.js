angular.module( 'dagb.directives.slideshow.slideshow', [
  'dagb.directives.slideshow.slideSelector',
  'dagb.services.inBounds'
])

.directive( 'dagbSlideshow', function() {
  return {
    restrict: 'A',
    templateUrl: 'directives/slideshow/slideshow.tpl.html',
    controller: 'SlideshowCtrl',
    scope: {
      dagbSlideshow: "=dagbSlideshow"
    },
    link: function( scope, element, attrs ) {
    
      scope.slides = scope.dagbSlideshow;
      
      if(scope.hasMultipleSlides()) {
        scope.startAutoSlideshow();
      }
      
    }
  };
})

.controller( 'SlideshowCtrl', function SlideshowController( $scope, inBounds ) {
  
  $scope.currentSlideIndex = 0;
  
  var slidshowTimer;
  var slideshowTimerPause;
  
  var changeSlide = function(newIndex) {
    inBounds.setUpperBound($scope.slides.length-1);
    $scope.currentSlideIndex = inBounds.keepInBounds(newIndex);
    $scope.$broadcast('slideChanged', $scope.currentSlideIndex);
  };
  
  var nextSlideIndex = function() {
    return $scope.currentSlideIndex+1;
  };
  
  var previousSlideIndex = function() {
    return $scope.currentSlideIndex-1;
  };
  
  // Starts the timer
  var startTimer = function() {
    slidshowTimer = setInterval(function() {
      changeSlide(nextSlideIndex());
    }, 5000);
  };
  
  //Stops the timer
  var stopTimer = function() {
    clearInterval(slidshowTimer);
  };
  
  //delays the timer
  var delayTimer = function(delay) {
    if(typeof dealy === 'undefined') { dealy = 0; }
    stopTimer();
    slideshowTimerPause = setTimeout(function() {
      startTimer();
      clearTimerDelay();
    }, dealy);
  };
  
  //Clears the timer delay
  var clearTimerDelay = function() {
    clearTimeout(slideshowTimerPause);
  };
  
  
  
  $scope.startAutoSlideshow = function() {
    startTimer();
  };
  
  $scope.changeSlide = function(newIndex) {
    changeSlide(newIndex);
    delayTimer();
  };
  
  $scope.nextSlide = function() {
    $scope.changeSlide(nextSlideIndex());
  };
  
  $scope.previousSlide = function() {
    $scope.changeSlide(previousSlideIndex());
  };
  
  $scope.isCurrentSlideIndex = function(index) {
    return parseInt(index, 10) === $scope.currentSlideIndex;
  };
  
  $scope.hasMultipleSlides = function() {
    return $scope.slides.length > 1;
  };
  
})

;