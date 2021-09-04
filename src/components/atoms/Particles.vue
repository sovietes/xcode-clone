<template>
  <section class="presentation">
    <div id="particles-js"></div>
    <div class="content">
      <div class="img">
        <img src="../../assets/img/logo.png" />
      </div>
      <vue-typed-js
        style="display: inline"
        :strings="[
          'CRIAÇÃO DE SYSTEMS',
          'APLICADOR DE AULAS',
          'EQUIPE DE MARKETING',
          'SETOR DE INTELIGÊNCIA',
          'CONSTRUÇÃO DE BASES'
        ]"
        :typeSpeed="100"
        :backSpeed="80"
        :loop="true"
        :showCursor="false"
      >
        <div>
          <span class="typing"></span>
          <span class="cursor">|</span>
        </div>
      </vue-typed-js>
      <a href="#" class="get-xcode">QUERO A XCODE NA MINHA POLÍCIA</a>
    </div>
  </section>
</template>

<script>
import 'particles.js'

export default {
  mounted() {
    this.initParticles()
  },

  methods: {
    initParticles() {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              value_area: 400.8530152163807
            }
          },
          color: {
            value: '#ffffff'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.09620472365193136,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.6944499246364,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.5782952832645452,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
              mode: 'repulse'
            },
            onclick: {
              enable: false,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      })
    }
  }
}
</script>

<style scoped>
.presentation {
  background: rgb(47, 49, 54);
  height: calc(100vh - 30px);
  position: relative;
}

#particles-js {
  height: 100%;
  width: 100%;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.content .img {
  width: 250px;
  margin-bottom: 50px;
}

.content .img img {
  max-width: 100%;
  display: block;
}

span {
  color: var(--font-white);
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
}

.cursor {
  animation: opacity 1s linear infinite;
  transition: 0.5s;
}

/* button */

.get-xcode {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  border: 0px;
  padding: 0 20px;
  height: 2.5rem;
  border-radius: 10px;

  transition: all 0.5s ease 0s;
  background-color: rgb(67, 180, 129);

  text-align: center;
  text-decoration: none;
  color: var(--font-white);
  text-transform: uppercase;
}

.get-xcode:hover {
  background: rgb(39, 106, 76);
}

/* keyframe */

@keyframes opacity {
  0% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
}
</style>
