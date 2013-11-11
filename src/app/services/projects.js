angular.module( 'dagbPortfolioSite.services.projects', [] )

.factory( 'projectsService', function() {

  var clientSvgDir = 'assets/svg/clients/';
  var clientImageDir = 'assets/img/clients/';
  
  var projectsService  = [
    // Homegrown
    {
      'id' : 'homegrown',
      'logo' : {
        'src' : clientSvgDir + 'homegrown.svg'
      },
      'info' : {
        'client' : 'homegrown',
        'creative direction' : 'ben friedman',
        'website' : 'http://www.eathomegrown.com',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'website',
          'print',
          'collateral'
        ],
        'software' : [
          'illustrator',
          'photoshop'
        ],
        'technologies' : [
          'php',
          'javascript',
          'mysql',
          'html',
          'css'
        ],
        'frameworks' : [
          'cakephp',
          'jquery'
        ]
      },
      'slides' : [
        {
          'src' : clientImageDir + 'homegrown/slide1.jpg'
        },
        {
          'src' : clientImageDir + 'homegrown/slide2.jpg'
        }
      ]
    },
    // Seattle Salads
    {
      'id' : 'seattle-salads',
      'logo' : {
        'src' : clientSvgDir + 'seattle_salads.svg'
      },
      'info' : {
        'client' : 'seattle salads',
        'creative direction' : 'ben friedman',
        'website' : 'http://www.eathomegrown.com',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'website',
          'print',
          'collateral'
        ],
        'software' : [
          'illustrator',
          'photoshop'
        ],
        'technologies' : [
          'php',
          'javascript',
          'mysql',
          'html',
          'css'
        ],
        'frameworks' : [
          'cakephp',
          'jquery'
        ]
      },
      'slides' : [
      
      ]
    },
    // Rain Shadow Meats
    {
      'id' : 'rain-shadow-meats',
      'logo' : {
        'src' : clientSvgDir + 'rain_shadow_meats.svg'
      },
      'info' : {
        'client' : 'Rain Shadow Meats',
        'creative direction' : 'ben friedman',
        'website' : 'http://www.eathomegrown.com',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'website',
          'print',
          'collateral'
        ],
        'software' : [
          'illustrator',
          'photoshop'
        ],
        'technologies' : [
          'php',
          'javascript',
          'mysql',
          'html',
          'css'
        ],
        'frameworks' : [
          'cakephp',
          'jquery'
        ]
      },
      'slides' : [
      
      ]
    },
    // Phil Borges Productions
    {
      'id' : 'phil-borges-productions',
      'logo' : {
        'src' : clientSvgDir + 'phil_borges_productions.svg'
      },
      'info' : {
        'client' : 'Phil Borges Productions',
        'creative direction' : 'ben friedman',
        'website' : 'http://www.eathomegrown.com',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'website',
          'print',
          'collateral'
        ],
        'software' : [
          'illustrator',
          'photoshop'
        ],
        'technologies' : [
          'php',
          'javascript',
          'mysql',
          'html',
          'css'
        ],
        'frameworks' : [
          'cakephp',
          'jquery'
        ]
      },
      'slides' : [
      
      ]
    },
    // Stirring The Fire
    {
      'id' : 'stirring-the-fire',
      'logo' : {
        'src' : clientSvgDir + 'stirring_the_fire.svg'
      },
      'info' : {
        'client' : 'Stirring The Fire',
        'creative direction' : 'ben friedman',
        'website' : 'http://www.eathomegrown.com',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'website',
          'print',
          'collateral'
        ],
        'software' : [
          'illustrator',
          'photoshop'
        ],
        'technologies' : [
          'php',
          'javascript',
          'mysql',
          'html',
          'css'
        ],
        'frameworks' : [
          'cakephp',
          'jquery'
        ]
      },
      'slides' : [
      
      ]
    },
    // Chignik
    {
      'id' : 'chignik',
      'logo' : {
        'src' : clientSvgDir + 'chignik.svg'
      },
      'info' : {
        'client' : 'Chignik',
        'creative direction' : 'ben friedman',
        'website' : 'http://www.eathomegrown.com',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'website',
          'print',
          'collateral'
        ],
        'software' : [
          'illustrator',
          'photoshop'
        ],
        'technologies' : [
          'php',
          'javascript',
          'mysql',
          'html',
          'css'
        ],
        'frameworks' : [
          'cakephp',
          'jquery'
        ]
      },
      'slides' : [
      
      ]
    },
    // Vidwic
    {
      'id' : 'vidwic',
      'logo' : {
        'src' : clientSvgDir + 'vidwic.svg'
      },
      'info' : {
        'client' : 'Vidwic',
        'creative direction' : 'ben friedman',
        'website' : 'http://www.eathomegrown.com',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'website',
          'print',
          'collateral'
        ],
        'software' : [
          'illustrator',
          'photoshop'
        ],
        'technologies' : [
          'php',
          'javascript',
          'mysql',
          'html',
          'css'
        ],
        'frameworks' : [
          'cakephp',
          'jquery'
        ]
      },
      'slides' : [
      
      ]
    },
    // 3Si
    {
      'id' : '3si',
      'logo' : {
        'src' : clientSvgDir + 'three_s_i.svg'
      },
      'info' : {
        'client' : '3SI',
        'creative direction' : 'ben friedman',
        'website' : 'http://www.eathomegrown.com',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'website',
          'print',
          'collateral'
        ],
        'software' : [
          'illustrator',
          'photoshop'
        ],
        'technologies' : [
          'php',
          'javascript',
          'mysql',
          'html',
          'css'
        ],
        'frameworks' : [
          'cakephp',
          'jquery'
        ]
      },
      'slides' : [
      
      ]
    },
    // Sole 2.0
    {
      'id' : 'sole-2-0',
      'logo' : {
        'src' : clientSvgDir + 'sole_2_0.svg'
      },
      'info' : {
        'client' : 'Sole 2.0',
        'creative direction' : 'ben friedman',
        'website' : 'http://www.eathomegrown.com',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'website',
          'print',
          'collateral'
        ],
        'software' : [
          'illustrator',
          'photoshop'
        ],
        'technologies' : [
          'php',
          'javascript',
          'mysql',
          'html',
          'css'
        ],
        'frameworks' : [
          'cakephp',
          'jquery'
        ]
      },
      'slides' : [
      
      ]
    }
  ];
  
  return projectsService;
})

;