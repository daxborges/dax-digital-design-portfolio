/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'dagbPortfolioSite.projects', [
  'ui.router',
  'dagb.directives.slideshow.slideshow',
  'dagb.directives.svg.changeColor',
  'dagb.directives.svg.data',
  'dagb.filters.isDefined',
  'dagb.filters.isLink',
  'dagb.filters.replace',
  'dagb.services.inBounds',
  'dagbPortfolioSite.services.projects'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'projects', {
    name : 'projects',
    url: '/projects/:projectId',
    views: {
      "main": {
        controller: 'ProjectsCtrl',
        templateUrl: 'projects/project.tpl.html'
      },
      "header-nav": {
        controller: 'ProjectsCtrl',
        templateUrl: 'projects/project-nav.tpl.html'
      }
    },
    data:{ pageTitle: 'Projects' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'ProjectsCtrl', function ProjectsController( $scope, $stateParams, inBounds, projectsService ) {
  $scope.previousProject = null;
  $scope.nextProject = null;
  
  inBounds.setUpperBound(projectsService.length-1);
    
  for(var i = 0; i < projectsService.length; i++) {
    if(projectsService[i].id === $stateParams.projectId)
    {
      var previousIndex = inBounds.keepInBounds(i-1);
      var nextIndex = inBounds.keepInBounds(i+1);
      $scope.project = projectsService[i];
      $scope.previousProject = projectsService[previousIndex];
      $scope.nextProject = projectsService[nextIndex];
    }
  }
  
  
})

;