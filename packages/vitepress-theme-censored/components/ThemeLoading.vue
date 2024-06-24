<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  setTimeout(() => {
    document.querySelectorAll('.inner div').forEach(div => div.classList.add('done'));

    setTimeout(() => {
      document.querySelectorAll('.inner div').forEach(div => div.classList.add('page'));

      setTimeout(() => {
        const pageLoad = document.querySelector('#load');
        if (pageLoad) {
          pageLoad.classList.add('off');
        }
        document.body.classList.add('on');
      }, 500);
    }, 500);
  }, 1500);
});
</script>

<template>
<div id="load">
  <div>G</div>
  <div>N</div>
  <div>I</div>
  <div>D</div>
  <div>A</div>
  <div>O</div>
  <div>L</div>
</div>
</template>

<style scoped>
#load {
  display: flex;
  justify-content: center;
  align-items: center;
  position:absolute;
  width:100%;
  height:100vh;
  left:50%;
  top:40%;
  margin-left:-300px;
  overflow:visible;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  cursor:default;

  background: var(--censored-bg-color);
}

#load div {
  position:absolute;
  width:20px;
  height:36px;
  opacity:0;
  font-family:Helvetica, Arial, sans-serif;
  animation:move 2s linear infinite;
  -o-animation:move 2s linear infinite;
  -moz-animation:move 2s linear infinite;
  -webkit-animation:move 2s linear infinite;
  transform:rotate(180deg);
  color:#35C4F0;
}

#load div:nth-child(2) {
  animation-delay:0.2s;
  -o-animation-delay:0.2s;
  -moz-animation-delay:0.2s;
  -webkit-animation-delay:0.2s;
}
#load div:nth-child(3) {
  animation-delay:0.4s;
  -o-animation-delay:0.4s;
  -webkit-animation-delay:0.4s;
}
#load div:nth-child(4) {
  animation-delay:0.6s;
  -o-animation-delay:0.6s;
  -moz-animation-delay:0.6s;
  -webkit-animation-delay:0.6s;
}
#load div:nth-child(5) {
  animation-delay:0.8s;
  -o-animation-delay:0.8s;
  -moz-animation-delay:0.8s;
  -webkit-animation-delay:0.8s;
}
#load div:nth-child(6) {
  animation-delay:1s;
  -o-animation-delay:1s;
  -moz-animation-delay:1s;
  -webkit-animation-delay:1s;
}
#load div:nth-child(7) {
  animation-delay:1.2s;
  -o-animation-delay:1.2s;
  -moz-animation-delay:1.2s;
  -webkit-animation-delay:1.2s;
}

@keyframes move {
  0% {
    left:0;
    opacity:0;
  }
	35% {
		left: 41%;
		transform:rotate(0deg);
		opacity:1;
	}
	65% {
		left:59%;
		transform:rotate(0deg);
		opacity:1;
	}
	100% {
		left:100%;
		transform:rotate(-180deg);
		opacity:0;
	}
}

@-moz-keyframes move {
	0% {
		left:0;
		opacity:0;
	}
	35% {
		left:41%;
		transform:rotate(0deg);
		opacity:1;
	}
	65% {
		left:59%;
		transform:rotate(0deg);
		opacity:1;
	}
	100% {
		left:100%;
		transform:rotate(-180deg);
		opacity:0;
	}
}

@-webkit-keyframes move {
	0% {
		left:0;
		opacity:0;
	}
	35% {
		left:41%;
		transform:rotate(0deg);
		opacity:1;
	}
	65% {
		left:59%;
		transform:rotate(0deg);
		opacity:1;
	}
	100% {
		left:100%;
		transform:rotate(-180deg);
		opacity:0;
	}
}

@-o-keyframes move {
	0% {
		left:0;
		opacity:0;
	}
	35% {
		left:41%;
		transform:rotate(0deg);
		opacity:1;
	}
	65% {
		left:59%;
		transform:rotate(0deg);
		opacity:1;
	}
	100% {
		left:100%;
		transform:rotate(-180deg);
		opacity:0;
	}
}

#load.off {
  opacity: 0;
  pointer-events: none;
}
</style>