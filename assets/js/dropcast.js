var config = {
  "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
    
    "color": {
      "value": ["#6ECDDD", "#36BB93", "#7D43AE", "#E31565", "#EBA91F"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#111820"
      }
    },
    "opacity": {
      "value": .9,
      "random": true,
      "anim": {
        "enable": false,
        "speed": .1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 6,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 90,
      "color": "#EBA91F"
    },
      
    "move": {
      "enable": true,
      "speed": .7,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": true,
        "rotateX": 4400,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "push": {
        "particles_nb": 3
      }
    }
  },
  "retina_detect": true
};


particlesJS('site__bg', config);