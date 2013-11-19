angular.module( 'dagb.services.imagesloaded', [] )

.factory( 'imagesloaded', function() {
  var _imgLoader = null;
  var _loaderContainer = null;
  
  var imagesloaded = {
  
    loadImages : function( imagesSrcsArray, callbacks ) {
      imagesloaded.destroyLoader();
      
      for(var i = 0; i < imagesSrcsArray.length; i++) {
        imagesloaded.addImageToLoader(imagesSrcsArray[i]);
      }
      
      if(imagesloaded.loadContainerExists()) {
         _imgLoader = imagesLoaded(_loaderContainer);
         if(typeof callbacks.always === 'function') {
           _imgLoader.on('always', function(instance) {
            callbacks.always(instance);
            imagesloaded.destroyLoader();
          });
         }
      }
      else
      {
        if(window.console && console.log) {
          console.log( 'No Load container exists!' );
        } 
      }
    },
    
    addImageToLoader : function(imgSrc) {
      if(!imagesloaded.loadContainerExists()) {
        imagesloaded.createLoadContainer();
      }
      _loaderContainer.append('<img src="' + imgSrc + '" />');
    },
    
    createLoadContainer : function() {
      var loadContainerId = 'dagbImageLoaderContainer';
      $('body').append('<div id="' + loadContainerId + '" style="display:none; opacity: 0; width: 0px; height: 0px; position: fixed;"></div>');
      _loaderContainer = $('#' + loadContainerId);
    },
    
    convertObjectsWithSrcToArray : function(objects) {
      var srcArray = [];
      for(var i = 0; i < objects.length; i++) {
        if(typeof objects[i].src !== 'undefined') {
          srcArray.push(objects[i].src);
        }
      }
      return srcArray;
    },
    
    destroyLoader : function() {
      if(imagesloaded.loadContainerExists()) {
        _loaderContainer.remove();
        _loaderContainer = null;
      }
      
      if(imagesloaded.imageLoaderExists()) {
        _imgLoader = null;
      }
    },
    
    loadContainerExists : function() {
      return _loaderContainer !== null;
    },
    
    imageLoaderExists : function() {
      return _imgLoader !== null;
    }
    
  };
  
  return imagesloaded;
})

;