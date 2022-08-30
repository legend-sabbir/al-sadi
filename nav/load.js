const load = `  <section class="loader">
    <svg>
      <circle cx="70" cy="70" r="70"></circle>
    </svg>
  </section>
  <style>
    
    body {
      overflow: hidden;
    }
    body.overflow { overflow: auto; }
    .loader {
      position: fixed;
      inset: 0;
      display: flex;
      background-color:white;
      z-index: 200;
      justify-content: center;
      align-items: center;
    }
    .loader.hide { display: none; }
    
    .loader svg {
      position: relative;
      width: 150px;
      height: 150px;
      z-index: 1;
      animation: rotate 1.5s linear infinite;
    }
    
    @keyframes rotate{
      0% {transform: rotate(0); }
      100% {transform: rotate(360deg); }
    }
    
    .loader svg circle {
      
      position: absolute;
      width: 100%;
      height: 100%;
      fill: none;
      stroke-width: 6;
      stroke: #616BD4;
      transform: translate(5px, 5px);
      stroke-dasharray: 440;
      stroke-dashoffset: 440;
      animation:animate 4s linear infinite;
    }
    
    @keyframes animate {
      0%,100% { stroke-dashoffset: 440; }
      50% { stroke-dashoffset: 0; }
      50.1% { stroke-dashoffset: 880; }
    }
    
  </style>`
  document.body.insertAdjacentHTML('afterbegin', load)

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader')
  loader.classList.add('hide');
  document.body.classList.add('overflow');
})
