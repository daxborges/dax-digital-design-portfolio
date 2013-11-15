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
      'website' : 'http://www.eathomegrown.com',
      'info' : {
        'client' : 'homegrown',
        'creative direction' : 'ben friedman',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'wordmark',
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
          'src' : clientImageDir + 'homegrown/slide3.jpg'
        },
        {
          'src' : clientImageDir + 'homegrown/slide4.jpg'
        },
        {
          'src' : clientImageDir + 'homegrown/slide5.jpg'
        }
      ]
    },
    // Phil Borges Productions
    {
      'id' : 'phil-borges-productions',
      'logo' : {
        'src' : clientSvgDir + 'phil_borges_productions.svg'
      },
      'website' : 'http://www.philborges.com',
      'info' : {
        'client' : 'Phil Borges Productions',
        'creative direction' : 'Phil Borges',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'wordmark',
          'website'
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
          'jquery',
          'angularjs'
        ]
      },
      'slides' : [
        {
          'src' : clientImageDir + 'phil_borges/slide1.jpg'
        },
        {
          'src' : clientImageDir + 'phil_borges/slide3.jpg'
        },
        {
          'src' : clientImageDir + 'phil_borges/slide5.jpg'
        },
        {
          'src' : clientImageDir + 'phil_borges/slide7.jpg'
        },
        {
          'src' : clientImageDir + 'phil_borges/slide6.jpg'
        }
      ]
    },
    // Rain Shadow Meats
    {
      'id' : 'rain-shadow-meats',
      'logo' : {
        'src' : clientSvgDir + 'rain_shadow_meats.svg'
      },
      'website' : 'http://www.rainshadowmeats.com',
      'info' : {
        'client' : 'Rain Shadow Meats',
        'creative direction' : 'russell flint',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'wordmark',
          'website'
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
          'src' : clientImageDir + 'rain_shadow_meats/slide1.jpg'
        },
        {
          'src' : clientImageDir + 'rain_shadow_meats/slide7.jpg'
        },
        {
          'src' : clientImageDir + 'rain_shadow_meats/slide6.jpg'
        },
        {
          'src' : clientImageDir + 'rain_shadow_meats/slide5.jpg'
        }
      ]
    },
    // Stirring The Fire
    {
      'id' : 'stirring-the-fire',
      'logo' : {
        'src' : clientSvgDir + 'stirring_the_fire.svg'
      },
      'website' : 'http://www.stirringthefire.com',
      'info' : {
        'client' : 'Stirring The Fire',
        'creative direction' : 'Phil Borges',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'website'
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
          'src' : clientImageDir + 'stirring_the_fire/slide6.jpg'
        },
        {
          'src' : clientImageDir + 'stirring_the_fire/slide8.jpg'
        },
        {
          'src' : clientImageDir + 'stirring_the_fire/slide9.jpg'
        },
        {
          'src' : clientImageDir + 'stirring_the_fire/slide7.jpg'
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
        'creative direction' : 'desirae rabe',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'wordmark'
        ],
        'software' : [
          'illustrator',
          'photoshop'
        ]/*
,
        'technologies' : [
          
        ],
        'frameworks' : [
          
        ]
*/
      },
      'slides' : [
        {
          'src' : clientImageDir + 'seattle_salads/slide1.jpg'
        }
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
        'creative direction' : 'joe donati',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'wordmark',
          'collateral'
        ],
        'software' : [
          'illustrator',
          'photoshop'
        ]/*
,
        'technologies' : [
          
        ],
        'frameworks' : [
          
        ]
*/
      },
      'slides' : [
        {
          'src' : clientImageDir + 'chignik/slide1.jpg'
        }/*
,
        {
          'src' : clientImageDir + 'chignik/slide2.jpg'
        }
*/
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
        'creative direction' : 'dax borges',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'wordmark',
          'web app'
        ],
        'software' : [
          'illustrator'
        ],
        'technologies' : [
          'ruby',
          'javascript',
          'mysql',
          'html',
          'css'
        ],
        'frameworks' : [
          'rails',
          'jquery'
        ]
      },
      'slides' : [
        {
          'src' : clientImageDir + 'vidwic/slide1.jpg'
        }
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
        'creative direction' : 'barbara rosen',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'wordmark'
        ],
        'software' : [
          'illustrator'
        ]/*
,
        'technologies' : [
          
        ],
        'frameworks' : [
          
        ]
*/
      },
      'slides' : [
        {
          'src' : clientImageDir + '3si/slide1.jpg'
        }
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
        'creative direction' : 'dax borges',
        'design direction' : 'dax borges'
      },
      'tech' : {
        'media' : [
          'wordmark',
          'collateral'
        ],
        'software' : [
          'illustrator',
          'photoshop',
          'fireworks'
        ]/*
,
        'technologies' : [
          
        ],
        'frameworks' : [
          
        ]
*/
      },
      'slides' : [
        {
          'src' : clientImageDir + 'sole_20/slide1.jpg'
        }
      ]
    }
  ];
  
  return projectsService;
})

;