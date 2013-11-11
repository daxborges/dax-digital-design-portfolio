angular.module( 'dagb.services.inBounds', [] )

.factory( 'inBounds', function() {

  var inBounds = {
    
    // The value just over the highest value
    upperBound : 0,
    
    // The lowest value
    lowerBound : 0,
    
    // Sets the upper bound
    setUpperBound : function(upperBound) {
      inBounds.upperBound = upperBound;
    },
    
    // Sets the lower bound
    setlowerBound : function(lowerBound) {
      inBounds.lowerBound = lowerBound;
    },
    
    // Checks if a value is above the upper bound
    isTooHigh : function(value) {
      return value > inBounds.upperBound;
    },
    
    // Checks if a value is below the lower bound
    isTooLow : function(value) {
      return value < inBounds.lowerBound;
    },
    
    // Checks if a value is out of bounds high or low
    isOutOfBounds : function(value) {
      return inBounds.isTooLow(value) || inBounds.isTooHigh(value);
    },
    
    // Keeps a value in bounds... creates a loop
    // - if it's too high it will return the lowerbound
    // - if it's too low it will return the upperbound
    // - otherwise it returns the value since it's in bounds
    keepInBounds : function(value) {
      if(inBounds.isOutOfBounds(value)) 
      {
        if(inBounds.isTooHigh(value)) 
        {
          return inBounds.lowerBound;
        }
        else if(inBounds.isTooLow(value)) 
        {
          return inBounds.upperBound;
        }
      }
      return value;
    }
  };
  
  return inBounds;
})

;