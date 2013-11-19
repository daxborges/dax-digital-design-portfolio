angular.module( 'dagb.directives.slideshow.slideshow', [
  'dagb.directives.loader.loader',
  'dagb.directives.slideshow.slideSelector',
  'dagb.services.imagesloaded',
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
    
      scope.initSlideshow(scope.dagbSlideshow);
      
    }
  };
})

.controller( 'SlideshowCtrl', function SlideshowController( $scope, imagesloaded, inBounds ) {
  
  $scope.currentSlideIndex = 0;
  $scope.loading = true;
  
  var slidshowTimer;
  var slideshowTimerPause;
  var slides;
  
  $scope.initSlideshow = function(_slides) {
      slides = $scope.slides = _slides;
      loadSlides();
  };
  
  var loaderCallbacks = {
    'always' : function( instance ) {
      $scope.loading = false;
      $scope.$digest();
      if($scope.hasMultipleSlides()) {
        $scope.startAutoSlideshow();
      }
    }
  };
  
  var loadSlides = function() {
    var slidesArray = imagesloaded.convertObjectsWithSrcToArray(slides);
    imagesloaded.loadImages(slidesArray, loaderCallbacks );
  };
  
  var changeSlide = function(newIndex) {
    inBounds.setUpperBound(slides.length-1);
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
  
  $scope.hasMultipleSlides = function() {
    return slides.length > 1;
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
  
  
})

;