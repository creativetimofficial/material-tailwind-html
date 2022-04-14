const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents }) {
  const typography = {
    '*': {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    },
    'h1,h2,h3,h4,h5,h6': {
      'font-weight': '400',
      'font-family': 'Roboto Slab,sans-serif',
      'letter-spacing': '-.05rem',
      'margin-bottom': '.5rem',
      'color': '#344767'
    },
    'a': {
      'color': '#344767'
    },
    'h1,.h1': {
      'font-size': '3rem',
      'line-height': '1.25'
    },
    'h2,.h2': {
      'font-size': '2.25rem',
      'line-height': '1.3'
    },
    'h3,.h3': {
      'font-size': '1.875rem',
      'line-height': '1.375'
    },
    'h4,.h4': {
      'font-size': '1.5rem',
      'line-height': '1.375'
    },
    'h5,.h5': {
      'font-size': '1.25rem',
      'line-height': '1.375'
    },
    'h6,.h6': {
      'font-size': '1rem',
      'line-height': '1.625',
      'text-transform': 'uppercase'
    },
    '.lead': {
      'font-size': '1.25rem',
      'line-height': '1.625',
      'font-weight': '400',
    },
    'p': {
      'line-height': '1.625',
      'font-weight': '300',
    }
  }
  const buttons = {
    '.button': {
      'padding': '.625rem 1.5rem',
      'borderRadius': '.5rem',
      'fontWeight': '700',
      'fontSize': '.75rem',
      'color': '#fff',
      'display': 'inline-block',
      'lineHeight': '1.45',
      'textAlign': 'center',
      'verticalAlign': 'middle',
      'transition': 'all .15s ease-in',
      'cursor': 'pointer',
      'letter-spacing': '0',
      'background-size': '150%',
      'background-position-x': '25%',
      'position': 'relative',
      'overflow': 'hidden',
      'text-transform': 'uppercase',

      '&.button-sm': {
        'padding': '.375rem 1rem',
        'font-size': '.75rem',
        'border-radius': '.5rem'
      },
      '&.button-lg': {
        'padding': '.75rem 1.75rem',
        'font-size': '.875rem',
        'border-radius': '.5rem'
      },
      'i': {
        'vertical-align': 'middle',
        'font-size': '1.1rem',
        'display': 'inline-block'
      }

    },
    '.button-primary': {
       'box-shadow': '0 3px 3px 0 rgba(233, 30, 99, .15), 0 3px 1px -2px rgba(233, 30, 99, .2), 0 1px 5px 0 rgba(233, 30, 99, .15)',
       'background-color': '#e91e63',
       '&:hover': {
        'box-shadow': '0 14px 26px -12px rgba(233, 30, 99, .4), 0 4px 23px 0 rgba(233, 30, 99, .15), 0 8px 10px -5px rgba(233, 30, 99, .2)'
       }
    },
    '.button-secondary': {
      'box-shadow': '0 3px 3px 0 rgba(70, 69, 68, .15), 0 3px 1px -2px rgba(104, 102, 102, .2), 0 1px 5px 0 rgba(143, 143, 143, .15)',
      'background-color': '#7b809a',
      '&:hover': {
        'box-shadow': '0 14px 26px -12px rgba(70, 69, 68, .4), 0 4px 23px 0 rgba(104, 102, 102, .15), 0 8px 10px -5px rgba(143, 143, 143, .2)'
       }
    },
    '.button-info': {
      'box-shadow': '0 3px 3px 0 rgba(26, 115, 232, .15), 0 3px 1px -2px rgba(26, 115, 232, .2), 0 1px 5px 0 rgba(26, 115, 232, .15)',
      'background-color': '#1a73e8',
      '&:hover': {
        'box-shadow': '0 14px 26px -12px rgba(26, 115, 232, .4), 0 4px 23px 0 rgba(26, 115, 232, .15), 0 8px 10px -5px rgba(26, 115, 232, .2)'
      }
    },
    '.button-success': {
      'box-shadow': '0 3px 3px 0 rgba(76, 175, 80, .15), 0 3px 1px -2px rgba(76, 175, 80, .2), 0 1px 5px 0 rgba(76, 175, 80, .15)',
      'background-color': '#4caf50',
      '&:hover': {
        'box-shadow': '0 14px 26px -12px rgba(76, 175, 80, .4), 0 4px 23px 0 rgba(76, 175, 80, .15), 0 8px 10px -5px rgba(76, 175, 80, .2)'
      }
    },
    '.button-warning': {
      'box-shadow': '0 3px 3px 0 rgba(251, 140, 0, .15), 0 3px 1px -2px rgba(251, 140, 0, .2), 0 1px 5px 0 rgba(251, 140, 0, .15)',
      'background-color': '#fb8c00',
      '&:hover': {
        'box-shadow': '0 14px 26px -12px rgba(251, 140, 0, .4), 0 4px 23px 0 rgba(251, 140, 0, .15), 0 8px 10px -5px rgba(251, 140, 0, .2)'
      }
    },
    '.button-danger': {
      'box-shadow': '0 3px 3px 0 rgba(244, 67, 53, .15), 0 3px 1px -2px rgba(244, 67, 53, .2), 0 1px 5px 0 rgba(244, 67, 53, .15)',
      'background-color': '#f44335',
      '&:hover': {
        'box-shadow': '0 14px 26px -12px rgba(244, 67, 53, .4), 0 4px 23px 0 rgba(244, 67, 53, .15), 0 8px 10px -5px rgba(244, 67, 53, .2)'
      }
    },
    '.button-dark': {
      'box-shadow': '0 3px 3px 0 rgba(52, 71, 103, .15), 0 3px 1px -2px rgba(52, 71, 103, .20), 0 1px 5px 0 rgba(52, 71, 103, .15)',
      'background-color': '#344767',
      '&:hover': {
        'box-shadow': '0 14px 26px -12px rgba(52, 71, 103, .4), 0 4px 23px 0 rgba(52, 71, 103, .15), 0 8px 10px -5px rgba(52, 71, 103, .2)'
      }
    },
    '.button-light': {
      'box-shadow': '0 3px 3px 0 rgba(240, 242, 245, .15), 0 3px 1px -2px rgba(240, 242, 245, .2), 0 1px 5px 0 rgba(240, 242, 245, .15)',
      'background-color': '#f0f2f5',
      'color': '#495057',
      '&:hover': {
        'box-shadow': '0 14px 26px -12px rgba(240, 242, 245, .4), 0 4px 23px 0 rgba(240, 242, 245, .15), 0 8px 10px -5px rgba(240, 242, 245, .2)'
      }
    },

  }  
  const gradients = {
    '.bg-gradient-primary': {
      'background-image': 'linear-gradient(195deg, #ec407a, #d81b60)',
      '&.button': {
        'box-shadow': '0 3px 3px 0 rgba(233, 30, 99, .15), 0 3px 1px -2px rgba(233, 30, 99, .2), 0 1px 5px 0 rgba(233, 30, 99, .15)',

        '&:hover': {
          'box-shadow': '0 14px 26px -12px rgba(233, 30, 99, .4), 0 4px 23px 0 rgba(233, 30, 99, .15), 0 8px 10px -5px rgba(233, 30, 99, .2)'
        }
      }
    },
    '.bg-gradient-secondary': {
      'background-image': 'linear-gradient(195deg, #747b8a, #495361)',
      '&.button': {
        'box-shadow': '0 3px 3px 0 rgba(70, 69, 68, .15), 0 3px 1px -2px rgba(104, 102, 102, .2), 0 1px 5px 0 rgba(143, 143, 143, .15)',

        '&:hover': {
          'box-shadow': '0 14px 26px -12px rgba(70, 69, 68, .4), 0 4px 23px 0 rgba(104, 102, 102, .15), 0 8px 10px -5px rgba(143, 143, 143, .2)'
        }
      }
    },
    '.bg-gradient-info': {
      'background-image': 'linear-gradient(195deg, #49a3f1, #1a73e8)',
      '&.button': {
        'box-shadow': '0 3px 3px 0 rgba(26, 115, 232, .15), 0 3px 1px -2px rgba(26, 115, 232, .2), 0 1px 5px 0 rgba(26, 115, 232, .15)',

        '&:hover': {
          'box-shadow': '0 14px 26px -12px rgba(26, 115, 232, .4), 0 4px 23px 0 rgba(26, 115, 232, .15), 0 8px 10px -5px rgba(26, 115, 232, .2)'
        }
      }
    },
    '.bg-gradient-success': {
      'background-image': 'linear-gradient(195deg, #66bb6a, #43a047)',
      '&.button': {
        'box-shadow': '0 3px 3px 0 rgba(76, 175, 80, .15), 0 3px 1px -2px rgba(76, 175, 80, .2), 0 1px 5px 0 rgba(76, 175, 80, .15)',

        '&:hover': {
          'box-shadow': '0 14px 26px -12px rgba(76, 175, 80, .4), 0 4px 23px 0 rgba(76, 175, 80, .15), 0 8px 10px -5px rgba(76, 175, 80, .2)'
        }
      }
    },
    '.bg-gradient-warning': {
      'background-image': 'linear-gradient(195deg, #ffa726, #fb8c00)',
      '&.button': {
        'box-shadow': '0 3px 3px 0 rgba(251, 140, 0, .15), 0 3px 1px -2px rgba(251, 140, 0, .2), 0 1px 5px 0 rgba(251, 140, 0, .15)',

        '&:hover': {
          'box-shadow': '0 14px 26px -12px rgba(251, 140, 0, .4), 0 4px 23px 0 rgba(251, 140, 0, .15), 0 8px 10px -5px rgba(251, 140, 0, .2)'
        }
      }
    },
    '.bg-gradient-danger': {
      'background-image': 'linear-gradient(195deg, #ef5350, #e53935)',
      '&.button': {
        'box-shadow': '0 3px 3px 0 rgba(244, 67, 53, .15), 0 3px 1px -2px rgba(244, 67, 53, .2), 0 1px 5px 0 rgba(244, 67, 53, .15)',

        '&:hover': {
          'box-shadow': '0 14px 26px -12px rgba(244, 67, 53, .4), 0 4px 23px 0 rgba(244, 67, 53, .15), 0 8px 10px -5px rgba(244, 67, 53, .2)'
        }
      }
    },
    '.bg-gradient-dark': {
      'background-image': 'linear-gradient(195deg, #42424a, #191919)',
      '&.button': {
        'box-shadow': '0 3px 3px 0 rgba(52, 71, 103, .15), 0 3px 1px -2px rgba(52, 71, 103, .20), 0 1px 5px 0 rgba(52, 71, 103, .15)',

        '&:hover': {
          'box-shadow': '0 14px 26px -12px rgba(52, 71, 103, .4), 0 4px 23px 0 rgba(52, 71, 103, .15), 0 8px 10px -5px rgba(52, 71, 103, .2)'
        }
      }
    },
    '.bg-gradient-light': {
      'background-image': 'linear-gradient(195deg, #ebeff4, #ced4da)',
      'color': '#495057',
      '&.button': {
        'box-shadow': '0 3px 3px 0 rgba(240, 242, 245, .15), 0 3px 1px -2px rgba(240, 242, 245, .2), 0 1px 5px 0 rgba(240, 242, 245, .15)',

        '&:hover': {
          'box-shadow': '0 14px 26px -12px rgba(240, 242, 245, .4), 0 4px 23px 0 rgba(240, 242, 245, .15), 0 8px 10px -5px rgba(240, 242, 245, .2)'
        }
      }
    },
    ".text-gradient": {
      "background-clip": "text",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      "z-index": "1",
      position: "relative"
    }
  }
  const card = {
    '.card': {
      'display': 'flex',
      'flex-direction': 'column',
      'word-wrap': 'break-word',
      'background-color': '#fff',
      'background-clip': 'border-box',
      'border-radius': '.75rem',
      'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);',

      '.card-header': {
        'transform': 'translateZ(0)',
        'transition': 'all .3s cubic-bezier(.34,1.61,.7,1)',

        '.img-fluid': {
          'border-radius': '.5rem',
        }
      },
      '.card-body': {
        'padding': '1.5rem',
        'flex': '1 1 auto',
        'color': '#7b809a'
      },
      '.card-footer': {
        'padding': '1.5rem',
        'background-color': 'transparent',
        'color': '#7b809a'
      }
    },
    '.card[data-animation="true"]:hover': {
      '.card-header': {
        'transform': 'translate3d(0,-50px,0)'
      }
    },
    '.colored-shadow': {
      'transform': 'scale(.94)',
      'top': '3.5%',
      'filter': 'blur(12px)',
      'position': 'absolute',
      'left': '0',
      'width': '100%',
      'height': '100%',
      'background-size': 'cover',
      'z-index': '-1'
    }
  }
  const alerts = {
    '.alert': {
      'position': 'relative',
      'padding': '1rem',
      'margin-bottom': '1rem',
      'border': '0 solid transparent',
      'border-radius': '0.375rem',
      'line-height': '1.25rem',
      'opacity': '1',
      'transition': 'opacity .15s linear',

      '&.hide': {
        'opacity': '0',
        'display': 'none'
      },

      '&.alert-primary': {
        'background-image': 'linear-gradient(195deg, #ec407a, #d81b60)'
      },
      '&.alert-secondary': {
        'background-image': 'linear-gradient(195deg, #747b8a, #495361)'
      },
      '&.alert-info': {
        'background-image': 'linear-gradient(195deg, #49a3f1, #1a73e8)'
      },
      '&.alert-success': {
        'background-image': 'linear-gradient(195deg, #66bb6a, #43a047)'
      },
      '&.alert-danger': {
        'background-image': 'linear-gradient(195deg, #ffa726, #fb8c00)'
      },
      '&.alert-warning': {
        'background-image': 'linear-gradient(195deg, #ef5350, #e53935)'
      },
      '&.alert-dark': {
        'background-image': 'linear-gradient(195deg, #42424a, #191919)'
      },
      '&.alert-light': {
        'background-image': 'linear-gradient(195deg, #ebeff4, #ced4da)',
        'color': '#495057',
      }
    }
  }

  const avatars = {
    '.avatar': {
      'color': '#fff',
      'position': 'relative',
      'display': 'inline-flex',
      'align-items': 'center',
      'justify-content': 'center',
      'font-size': '1rem',
      'border-radius': '50rem',
      'height': '48px',
      'width': '48px',
      'transition': 'all .2s ease-in-out',

      'img': {
        // 'border-radius': '50rem',
      },

      '&.avatar-xs': {
        'width': '24px',
        'height': '24px',
        'font-size': '.75rem'
      },
      '&.avatar-sm': {
        'width': '36px',
        'height': '36px',
        'font-size': '.875rem'
      },
      '&.avatar-lg': {
        'width': '58px',
        'height': '58px',
        'font-size': '.875rem'
      },
      '&.avatar-xl': {
        'width': '74px',
        'height': '74px'
      },
    },

    '.avatar-group': {
      '.avatar': {
        'position': 'relative',
        'z-index': '2',
        'border': '2px solid #fff',
        'cursor': 'pointer',

        '&+.avatar': {
          'margin-left': '-1rem'
        },

        '&:hover': {
          'z-index': '3'
        }
      }
    }
  }

  const navbar = {
    '.navbar': {
      'position': 'relative',
      'display': 'flex',
      'padding': '.5rem 1rem',
      'border-radius': '.75rem',
      'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);',
    },
    '.nav-link': {
      'padding': '.5rem 1rem',
      'font-weight': '400',
      'font-size': '.875rem',
      'color': '#344767',
      'align-items': 'center',
      'display': 'flex'
    }
  }
  const dropdown = {
    '.dropdown-menu': {
      'display': 'block',
      'position': 'absolute',
      'opacity': '0',
      'transform-origin': '0 0',
      'inset': '0 auto auto 0',
      'pointer-events': 'none',
      'transform': 'scale(.95)',
      '-webkit-backface-visibility': 'hidden',
      'backface-visibility': 'hidden',
      'will-change': 'transform, box-shadow',
      'box-shadow': '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      'transition': 'transform .3s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)',
      'cursor': 'pointer',
      'z-index': '1000',
      'min-width': '11rem',
      'padding': '.5rem 0',
      'margin': '0',
      'font-size': '.875rem',
      'color': '#7b809a',
      'text-align': 'left',
      'list-style': 'none',
      'background-color': '#fff',
      'background-clip': 'padding-box',
      'border': '0 solid transparent',
      'border-radius': '.375rem',
      'margin-top': '2.8125rem',

      '&::before': {
        'font-family': 'FontAwesome',
        'content': '"\\f0d8"',
        'position': 'absolute',
        'top': '0',
        'left': '28px',
        'right': 'auto',
        'font-size': '1.375rem',
        'color': '#fff',
        'transition': 'top .35s ease',
        'display': 'block',
        'clear': 'both',
        'box-sizing': 'border-box'
      },

      '&.dropdown-end': {
        'right': '0',
        'left': 'auto',

        '&:before': {
          'right': '28px',
          'left': 'auto'
        }
      }
    },

    '.dropdown': {
      'position': 'relative',

      '&.open': {
        '.dropdown-menu': {
          'opacity': '1',
          'pointer-events': 'auto',
          'transform': 'scale(1)',
          'margin-top': '2.8125rem',

          '&:before': {
            'top': '-19px'
          }
        }
      }
    },

    '.dropdown-item': {
      'display': 'block',
      'width': '100%',
      'padding': '.3rem 1rem',
      'clear': 'both',
      'font-weight': '400',
      'color': '#7b809a',
      'text-align': 'inherit',
      'white-space': 'nowrap',
      'border-radius': '.375rem',
      'background-color': 'transparent',
      'border': '0',
      'transition': 'background-color .3s ease, color .3s ease',
    
      '&:hover': {
        'color': '#344767',
        'background-color': '#f0f2f5'
      }
    }
  }

  const misc = {
    '.blurr': {
      'box-shadow': 'inset 0 0 2px #fefefed1',
      '-webkit-backdrop-filter': 'saturate(200%) blur(30px)',
      'backdrop-filter': 'saturate(200%) blur(30px)',
      'background-color': 'hsla(0,0%,100%,.8)'
    },
    '.shadow-blur': {
      'box-shadow': 'inset 0 0 1px 1px hsla(0,0%,100%,.9),0 20px 27px 0 rgba(0,0,0,.05)',
    }
  }
  const icon = {
    '.icon': {
      'width': '48px',
      'height': '48px',
      'background-position': '50%',
      'border-radius': '0.5rem',

      'i': {
        'color': '#fff',
        'top': '11px',
        'position': 'relative'
      },
      '&.icon-xl': {
        'width': '100px',
        'height': '100px',
        'i': {
          'top': '35%',
          'font-size': '2.1rem'
        }
      },
      '&.icon-lg': {
        'width': '64px',
        'height': '64px',
        'i': {
          'top': '31%',
          'font-size': '1.5rem'
        }
      },
      '&.icon-sm': {
        'width': '32px',
        'height': '32px',
        'i': {
          'top': '9px',
          'font-size': '.875rem'
        }
      },
      '&.icon-xs': {
        'width': '24px',
        'height': '24px',
        'i': {
          'top': '-1px',
          'font-size': '.75rem'
        }
      }
    }
  }

  const badges = {
    '.badge': {
      'display': 'inline-block',
      'padding': '0.55em 0.9em',
      'font-size': '.75em',
      'font-weight': '600',
      'line-height': '1',
      'color': '#fff',
      'text-align': 'center',
      'white-space': 'nowrap',
      'vertical-align': 'baseline',
      'border-radius': '0.45rem',
      'text-transform': 'uppercase',

      '&.badge-md': {
        'padding': '0.65em 1em'
      },
      '&.badge-lg': {
        'padding': '.85em 1.375em'
      },

      '&.badge-primary': {
        'color': '#cc084b',
        'background-color': '#f8b3ca'
      },
      '&.badge-secondary': {
        'color': '#6c757d',
        'background-color': '#d7d9e1'
      },
      '&.badge-info': {
        'color': '#095bc6',
        'background-color': '#aecef7'
      },
      '&.badge-success': {
        'color': '#339537',
        'background-color': '#bce2be'
      },
      '&.badge-warning': {
        'color': '#c87000',
        'background-color': '#ffd59f'
      },
      '&.badge-danger': {
        'color': '#f61200',
        'background-color': '#fcd3d0'
      }
    }
  }

  const modal = {
    '.modal': {
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'z-index': '0',
      'width': '100%',
      'height': '100%',
      'overflow-x': 'hidden',
      'overflow-y': 'auto',
      'outline': '0',
      'opacity': '0',
      'visibility': 'hidden',
      'transition': 'opacity .15s linear',

      '.modal-dialog': {
        'transition': 'transform .15s ease-out',
        'transform': 'translateY(-50px)',
        'min-height': 'calc(100% - 15rem)',
        'max-width': '500px',
        'margin': '1.75rem auto',
        'display': 'flex',
        'align-items': 'center',
        'position': 'relative',
        'width': 'auto',
        'pointer-events': 'none'
      },

      '&.open': {
        'visibility': 'visible',
        'opacity': '1',
        'z-index': '1050',

        '.modal-dialog': {
          'transform': 'none',
          'z-index': '1212'
        }
      },

      '.modal-overlay': {
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'width': '100vw',
        'height': '100vh',
        'z-index': '1200',
        'background-color': 'rgba(0,0,0,0.5)',
        'transition': 'opacity .15s linear'
      },

      '.modal-content': {
        'position': 'relative',
        'display': 'flex',
        'flex-direction': 'column',
        'width': '100%',
        'pointer-events': 'auto',
        'background-color': '#fff',
        'background-color': '#fff',
        'background-clip': 'padding-box',
        'border': 'none',
        'border-radius': '0.4rem',
        'box-shadow': '0 27px 24px 0 rgba(0, 0, 0, .2), 0 40px 77px 0 rgba(0, 0, 0, .22)',
        'outline': '0',
        'z-index': '1300'
      },

      '.modal-header': {
        'display': 'flex',
        'flex-shrink': '0',
        'align-items': 'center',
        'justify-content': 'space-between',
        'padding': '1rem',
        'border-bottom': '1px solid #dee2e6',
        'border-top-left-radius': 'calc(0.5rem - 1px)',
        'border-top-right-radius': 'calc(0.5rem - 1px)',

        '.button-close': {
          'box-sizing': 'content-box',
          'padding': '0.25em',

          'i': {
            'color': '#344767',
            'font-size': '.875rem'
          }
        }
      },

      '.modal-body': {
        'position': 'relative',
        'flex': '1 1 auto',
        'padding': '1rem'
      },

      '.modal-footer': {
        'display': 'flex',
        'flex-wrap': 'wrap',
        'flex-shrink': '0',
        'align-items': 'center',
        'justify-content': 'flex-end',
        'padding': '0.75rem',
        'border-top': '1px solid #dee2e6',
        'border-bottom-right-radius': 'calc(0.5rem - 1px)',
        'border-bottom-left-radius': 'calc(0.5rem - 1px)'
      }

    }
  }
  
  const inputs = {
    '.form-control': {
      'display': 'block',
      'width': '100%',
      'padding': '0.5rem 0',
      'font-size': '.875rem',
      'font-weight': '400',
      'line-height': '1.15rem',
      'color': '#495057',
      'background-color': 'transparent',
      'background-clip': 'padding-box',
      'border': '1px solid #d2d6da',
      'appearance': 'none',
      'border-radius': '0.375rem',
      'transition': '.2s ease',

      '&:focus-visible': {
        'outline': 'none'
      }
    },

    '.form-label': {
      'position': 'absolute'
    },

    '.form-label,label': {
      'font-size': '.875rem',
      'font-weight': '400',
      'margin-bottom': '0.5rem',
      'color': '#7b809a',
      'margin-left': '0',
      'transition': 'all .2s ease',
    },

    '.input-group': {
      'position': 'relative',
      'display': 'flex',
      'flex-wrap': 'wrap',
      'align-items': 'stretch',
      'width': '100%',
      'transition': '.2s ease',
      'border': 'none',

      '&.input-group-outline': {
        '.form-label': {
          'display': 'flex',
          'line-height': '3.925',
          'top': '-0.375rem',
          'margin-bottom': '0',

          '&:before,&:after': {
            'content': '""',
            'border-top': '1px solid',
            'border-top-color': '#d2d6da',
            'pointer-events': 'none',
            'margin-top': '0.375rem',
            'box-sizing': 'border-box',
            'display': 'block',
            'height': '0.5rem',
            'width': '0.625rem',
            'border-width': '1px 0 0',
            'border-color': 'transparent'
          },

          '&:before': {
            'margin-right': '4px',
            'border-left': '1px solid transparent',
            'border-radius': '6px 0'
          },

          '&:after': {
            'flex-grow': '1',
            'margin-left': '4px',
            'border-right': '1px solid transparent',
            'border-radius': '0 6px'
          }
        },

        '.form-control': {
          'background': 'none',
          'border': '1px solid #d2d6da',
          'border-radius': '0.375rem',
          'border-top-left-radius': '0.375rem',
          'border-bottom-left-radius': '0.375rem',
          'padding': '0.625rem 0.75rem',
          'line-height': '1.25rem',
          'z-index': '20'
        }
      },

      '&.input-group-dynamic,&.input-group-static,': {
        '.form-control': {
          'border-radius': '0',
          'border': '0',
          'background': 'no-repeat bottom,50% calc(100% - 1px)',
          'background-image': 'linear-gradient(0deg,#e91e63 2px,rgba(156,39,176,0) 0),linear-gradient(0deg,#d2d2d2 1px,hsla(0,0%,82%,0) 0)',
          'background-size': '0 100%,100% 100%',
          'transition': '.2s ease',
        },
        '.form-label': {
          'top': '0.4rem'
        }
      },

      '&.input-group-static': {
        'label': {
          'margin-bottom': '0'
        },
      },

      '&.focused,&.is-filled': {
        '.form-label': {
          'width':' 100%',
          'height': '100%',
          'font-size': '.6875rem',
          'color': '#e91e63',
          'display': 'flex',
          'line-height': '1.25',

          '&:before': {
            'opacity': '1',
            'border-top-color': '#e91e63',
            'box-shadow': 'inset 0 1px #e91e63'
          },

          '&:after': {
            'opacity': '1',
            'border-top-color': '#e91e63',
            'box-shadow': 'inset 0 1px #e91e63'
          }
        },

        '&.input-group-outline': {
          '.form-label+.form-control': {
            'border-color': '#e91e63',
            'border-top-color': 'transparent',
            'box-shadow': 'inset 1px 0 #e91e63, inset -1px 0 #e91e63, inset 0 -1px #e91e63'
          },
        },

        '&.input-group-dynamic': {
          '.form-label': {
            'top': '-0.7rem'
          }
        },

        '&.input-group-static': {
          'label': {
            'color': '#e91e63'
          }
        },

        '.form-control': {
          'background-size': '100% 100%,100% 100%'
        }
      },

      '&:focus-visible': {
        'outline': 'none'
      }
    }
  } 

  const checkbox = {
    '.form-check': {
      'display': 'flex',
      'min-height': 'auto',
      'margin-bottom': '.125rem',

      '.form-check-input': {
        'width': '1.23rem',
        'height': '1.23rem',
        'background-color': '#fff',
        'background-repeat': 'no-repeat',
        'background-position': '50%',
        'background-size': 'contain',
        'border': '1px solid #cbd3da',
        'position': 'relative',
        'background-image': 'none',
        'border-radius': '0.35rem',
        'cursor': 'pointer',
        'margin-right': '7px',
        'transition': 'background-color .25s ease,border-color .25s ease,background-position .15s ease-in-out,opacity .15s ease-out,box-shadow .15s ease-in-out'  
      },

      '[type="checkbox"]:checked + .form-check-input:after': {
        'transition': 'opacity .25s ease-in-out',
        'font-family': 'FontAwesome',
        'content': `"\\f00c"`,
        'width': '100%',
        'height': '100%',
        'color': '#fff',
        'position': 'absolute',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'font-size': '.67rem'
      },
      
      '[type="checkbox"]:checked + .form-check-input': {
        'background-color': '#e91e63',
        'border-color': '#e91e63'
      }
    }
  }

  const radios = {
    '.form-check': {
      '[type="radio"] + .form-check-input': {
        'border-radius': '50%'
      },

      '[type="radio"] + .form-check-input:after': {
        'transition': 'opacity .25s ease-in-out',
        'content': '""',
        'position': 'absolute',
        'width': '.8375rem',
        'height': '.8375rem',
        'border-radius': '50%',
        'background-image': 'linear-gradient(195deg, #ec407a, #d81b60)',
        'opacity': '0',
        'left': '0px',
        'right': '0',
        'top': '0px',
        'bottom': '0',
        'margin': 'auto'
      },
      '[type="radio"][checked] + .form-check-input': {
        'border-color': '#e91e63'
      },
      '[type="radio"][checked] + .form-check-input:after': {
        'opacity': '1'
      }
    }
  }

  const pagination = {
    '.pagination': {
      'display': 'flex',
      'padding-left': '0',
      'list-style': 'none',

      '.page-item': {
        '.page-link,span': {
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'color': '#7b809a',
          'padding': '0',
          'margin': '0 3px',
          'border-radius': '50%',
          'width': '36px',
          'height': '36px',
          'font-size': '.875rem'
        },
        
        '&.active': {
          '.page-link': {
            'z-index': '3',
            'color': '#fff',
            'background-color': '#e91e63',
            'border': 'none',
            'box-shadow': '0 3px 5px -1px rgba(0, 0, 0, .09), 0 2px 3px -1px rgb(0, 0, 0, .07)'
          }
        }

      },
      '.page-link': {
        'position': 'relative',
        'background-color': '#fff',
        'border': '1px solid #dee2e6',
        'trasition': 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',

        '&:hover': {
          'z-index': '2',
          'background-color': '#e9ecef',
        }
      }
    }
  }

  const progress = {
    '.progress': {
      'overflow': 'visible',
      'display': 'flex',
      'height': '6px',
      'font-size': '.75rem',
      'background-color': '#e9ecef',
      'border-radius': '.125rem',

      '.progress-bar': {
        'flex-direction': 'column',
        'justify-content': 'center',
        'color': '#fff',
        'text-align': 'center',
        'white-space': 'nowrap',
        'background-color': '#e91e63',
        'transition': 'width .6s ease',
        'border-radius': '.125rem',

        '&[striped]': {
          'background-image': 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)',
          'background-size': '1rem 1rem',
        },

  
      }
    }
  }

  const collapse = {
    '.collapse.open': {
      'opacity': '1',
      'transition': 'all .35s ease'

    },
    '.collapse:not(.open)': {
      'opacity': '0',
      'height': '0',
      'transition': 'all .35s ease'
    },
    '.accordion-button:not(.collapsed)': {
      'color': '#344767',
      'background-color': 'transparent',
      'box-shadow': 'inset 0 0 0 rgba(0, 0, 0, .13)'
    },
    '.accordion-button': {
      'position': 'relative',
      'display': 'flex',
      'align-items': 'center',
      'width': '100%',
      'padding': '1rem',
      'font-size': 'inherit',
      'color': '#7b809a',
      'text-align': 'left',
      'background-color': 'transparent',
      'border': '0',
      'border-radius': '0',
      'border-bottom': '1px solid #dee2e6',
      'overflow-anchor': 'none',
      'transition': 'all .15s ease-in,border-radius .15s ease',

      '&[aria-expanded="true"]': {
        '.collapse-close': {
          'display': 'none'
        },
        '.collapse-open': {
          'display': 'block'
        }
      }, 
      '&[aria-expanded="false"]': {
        '.collapse-close': {
          'display': 'block'
        },
        '.collapse-open': {
          'display': 'none'
        }
      }
    }
  }

  const tooltips = {
    '.tooltip': {
      'background': '#333',
      'z-index': '1060',
      'color': '#fff',
      'font-weight': 'bold',
      'padding': '4px 8px',
      'font-size': '.8125rem',
      'border-radius': '.25rem',
      'display': 'none',

      '&[data-show]': {
        'display': 'block'
      },

      '&[data-popper-placement^="top"] > .arrow': {
        'bottom': '-4px'
      },

      '&[data-popper-placement^="bottom"] > .arrow': {
        'top': '-4px'
      },

      '&[data-popper-placement^="left"] > .arrow': {
        'right': '-4px'
      },

      '&[data-popper-placement^="right"] > .arrow': {
        'left': '-4px'
      },
    

      '.arrow,.arrow:before': {
        'position': 'absolute',
        'width': '.5rem',
        'height': '.5rem',
        'background': 'inherit'
      },

      '.arrow': {
        'visibility': 'hidden',
      },

      '.arrow:before': {
        'visibility': 'visible',
        'content': '""',
        'transform': 'rotate(45deg)'
      }
    }
  }

  const popovers = {
    '.popover': {
      'position': 'absolute',
      'z-index': '1060',
      'display': 'block',
      'max-width': '276px',
      'font-size': '.75rem',
      'word-wrap': 'break-word',
      'background-color': '#fff',
      'border': '0 solid rgba(0, 0, 0, .2)',
      'border-radius': '0.5rem',
      'box-shadow': '0 0.3125rem 0.625rem 0 rgba(0, 0, 0, .12)',

      '.popover-title': {
        'text-transform': 'uppercase',
        'font-weight': '600',
        'padding': '1rem',
        'padding-bottom': '.5rem',
        'color': '#7b809a',
        'border-bottom': '1px solid rgba(241, 245, 249, 1)'

      },

      '.popover-body': {
        'padding': '1rem',
        'padding-top': '.5rem',
        'color': '#7b809a'
      },

      '&[data-popper-placement="top"]': {
        'margin-bottom': '.5rem !important',

        '.arrow': {
          'bottom': '-4px',
          'top': 'auto'
        }
      },

      '&[data-popper-placement="right"]': {
        'margin-left': '.5rem !important',

        '.arrow': {
          'left': '-4px'
        }
      },

      '&[data-popper-placement="bottom"]': {
        'margin-top': '.5rem !important',

        '.arrow': {
          'top': '-4px'
        }
      },

      '&[data-popper-placement="left"]': {
        'margin-right': '.5rem !important',

        '.arrow': {
          'right': '-4px'
        }
      },

      '.arrow,.arrow:before': {
        'position': 'absolute',
        'width': '.5rem',
        'height': '.5rem',
        'background': 'inherit'
      },

      '.arrow': {
        'visibility': 'hidden',
        'top': '-4px'
      },

      '.arrow:before': {
        'visibility': 'visible',
        'content': '""',
        'transform': 'rotate(45deg)'
      }

    }
  }

  const toggle = {
    '.form-switch': {
      '.form-check-input': {
        'position': 'relative',
        'background-color': '#ced4da',
        'height': '.9375rem',
        'width': '1.875rem',
        'background-image': 'none',
        'background-position': '0',
        'border-radius': '1.875rem',
        'transition': 'background-color .25s ease,border-color .25s ease,background-position .15s ease-in-out,opacity .15s ease-out,box-shadow .15s ease-in-out',

        '&:after': {
          'transition': 'transform .25s ease-in-out,background-color .25s ease-in-out',
          'content': '""',
          'width': '1.25rem',
          'height': '1.25rem',
          'border-radius': '50%',
          'border': '1px solid #ced4da',
          'position': 'absolute',
          'background-color': '#fff',
          'transform': 'translateX(1px)',
          'box-shadow': '0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
          'top': '-3px',
          'left': '-5px'
        },

        '&[checked]': {
          'border-color': '#42424a',
          'background-color': '#42424a',
          'background-position': '100%',
          'background-image': 'none',

          '&:after': {
            'transform': 'translateX(21px)',
            'border-color': '#42424a'
          }
        }
      }
    }
  }

  const carousel = {
    '.carousel': {
      'position': 'relative',
      'width': '100%',
      'overflow': 'hidden',
      'height': '450px',
      'border-radius': '6px',
      'box-shadow': '0 3px 6px rgba(0, 0, 0, 0.2)',

      '&:hover .controls': {
        'opacity': '1'
      },

      '.controls': {
        'opacity': '0',
        'display': 'flex',
        'position': 'absolute',
        'top': '50%',
        'left': '0',
        'justify-content': 'space-between',
        'width': '100%',
        'z-index': '99999',
        'transition': 'all ease 0.5s',
        
        '.control': {
          'margin': '0 5px',
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'height': '40px',
          'width': '40px',
          'color': '#fff',
          'opacity': '.7',
          'transition': 'ease .3s',
          'cursor': 'pointer',
          
          '&:hover': {
            'opacity': '1'
          }
        }
      },

      '.slides': {
        'position': 'absolute',
        'top': '50%',
        'left': '0',
        'transform': 'translateY(-50%)',
        'display': 'flex',
        'width': '100%',
        'transition': '1s ease-in-out all',
        
        '.slide': {
          'min-width': '100%',
          'min-height': '$carousel-height',
          'height': 'auto'
        }
      }
    }
  }

  addComponents(typography),
  addComponents(alerts),
  addComponents(avatars),
  addComponents(badges),
  addComponents(buttons),
  addComponents(card),
  addComponents(carousel),
  addComponents(collapse),
  addComponents(dropdown),
  addComponents(gradients),
  addComponents(navbar),
  addComponents(icon),
  addComponents(misc),
  addComponents(modal),
  addComponents(inputs),
  addComponents(checkbox),
  addComponents(radios),
  addComponents(pagination),
  addComponents(progress),
  addComponents(popovers),
  addComponents(tooltips),
  addComponents(toggle)
})
