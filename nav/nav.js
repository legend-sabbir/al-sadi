/*
const xhttp = new XMLHttpRequest();
 xhttp.onload = function() {
   document.body.insertAdjacentHTML('afterbegin', this.responseText);
 }
 xhttp.open("GET", "/nav/nav.txt", true);
 xhttp.send();
*/

const nav = `      <style>
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'); 

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
}

.nav-header {
  background-color:#60b4df;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  z-index: 100;
}

.container {
  max-width: 1250px;
  margin: 0 auto;
  height: 100%;
  position: relative;
  padding: 0 clamp(1rem, 3vw, 1.6rem);
  display: flex;
}

.logo-container {
  flex: 1;
  display: flex;
  align-items: center;
}

.nav-btn {
  flex: 2.5;
  display: flex;
  justify-content: center;
}

.nav-links {
  flex: 2;
}

.logo-image-container {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

.logo-image {
  max-width: 100%;
  height: 100%;
  padding: 5px 0;
  filter: invert(96%) sepia(4%) saturate(0%) hue-rotate(297deg) brightness(204%) contrast(105%);
}

.logo-text {
  color: white;
  text-transform: uppercase;
  font-size: clamp(1.1rem, 3vw, 1.6rem);
  font-weight: 200;
  letter-spacing: 2px;
}

.logo-text span {
  font-weight: 700;
  font-size: clamp(1.1rem, 3vw, 1.6rem);
}


ul {
  list-style: none;
}

.nav-header a {
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
}

.nav-links>ul {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-link>a {
  color: white;
  padding: 0 .8rem;
  line-height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-link>a>i {
  margin-left: .2rem;
}

.nav-link:hover>a {
  font-weight: 600;
}

.nav-link {
  position: relative;
}

.dropdown {
  position: absolute;
  left: 0;
  top: 100%;
  width: 180px;
  border-radius: 4px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px);
  transition: 0.3s;
}

.dropdown-link>a {
  display: flex;
  padding: .5rem 1rem;
  color: white;
  background-color: hsla(200, 66%, 53%, 1);
  font-size: .9rem;
  align-items: center;
  justify-content: space-between;
}

.arrow {
  position: absolute;
  height: 11px;
  width: 11px;
  background-color: hsla(200, 66%, 53%, 1);
  left: 28px;
  top: -5.5px;
  z-index: -1;
  transform: rotate(45deg);
}

.dropdown-link {
  border-bottom: 2px solid black;
}

.dropdown-link:hover a {
  background-color: hsla(339, 63%, 40%, 1);
}

.dropdown-link:first-child:hover~.arrow {
  background-color: hsla(339, 63%, 40%, 1);
}

.nav-link:hover .dropdown {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

#check {
  display: none;
}

.hamburger-menu-container {
  display: none;
  flex: 1;
  display: none;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
}

.waltonLogo {
  max-width: 100%;
  display: none;
  height: 45%;
}

.hamburger-menu {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hamburger-menu div {
  width: 80%;
  height: 3px;
  background-color: #fff;
  border-radius: 3px;
  position: relative;
  transition: 0.3s;
  transition: all 350ms cubic-bezier(-0.67, -1.55, 0.62, 1.5);
}

.hamburger-menu div:before,
.hamburger-menu div:after {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  background-color: #fff;
  transition: 0.3s;
  border-radius: inherit;
  transition: all 350ms cubic-bezier(-0.67, -1.55, 0.62, 1.5);
}

.hamburger-menu div:before {
  transform: translateY(-7px);
}

.hamburger-menu div:after {
  transform: translateY(7px);
}

#check:checked~.hamburger-menu-container .hamburger-menu div:before {
  transform: translateY(0) rotate(-45deg);
}

#check:checked~.hamburger-menu-container .hamburger-menu div:after {
  transform: translateY(0) rotate(45deg);
}

#check:checked~.hamburger-menu-container .hamburger-menu div {
  background-color: transparent;
}

.nav-header svg {
  height: 100%;
  font-size: 20px;
}

.products svg {
  margin-left: .5rem;
}

.nav-contact svg {
  margin-left: .5rem;
}

@keyframes nav {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}


@media (max-width: 600px) {
  .container {
    justify-content: space-between;
    align-items: center;
  }

  .logo-container {
    padding-left: 1.2rem;
  }

  .hamburger-menu-container {
    display: flex;
  }

  .waltonLogo {
    display: block;
  }

  .logo-image-container {
    display: none;
  }

  .nav-btn {
    position: fixed;
    height: calc(100vh - 3rem);
    top: 3rem;
    left: 0;
    width: 100%;
    background-color: hsla(200, 72%, 56%, 1);
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;
    transform: translateX(-100%);
    transition: 0.35s ease;
  }

  #check:checked~.nav-btn {
    transform: translateX(0);
  }

  .nav-links {
    width: 100%;
  }

  .nav-links>ul {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }

  .nav-link>a {
    justify-content: flex-start;
    padding: .6rem 1rem .6rem 2rem;
  }

  .nav-link>a>i {
    margin-left: 1rem;
  }

  .nav-link {
    width: 100%;
  }

  .nav-link:hover>a {
    background-color: hsla(200, 66%, 43%, 1);
  }

  .dropdown {
    position: relative;
    top: initial;
    left: initial;
    transform: initial;
    opacity: 1;
    pointer-events: none;
    width: 100%;
    padding: 0;
    display: block;
  }

  .dropdown-link:hover>a {
    background-color: hsla(200, 66%, 43%, 1);
  }

  .dropdown-link {
    border-bottom: none;
  }

  .dropdown-link>a {
    color: #fff;
    background-color: transparent;
    padding: 1.2rem 2rem 1.2rem 3rem;
    line-height: 1;
    justify-content: center;
    text-align: left;
    gap: 5px;
    opacity: 0;
    transform: translateY(25px);
  }

  .arrow {
    left: 70px;
    display: none;
  }

  .products {
    display: none !important;
  }

  .nav-contact {
    font-size: 1.3rem;
  }


  .nav-link:first-child {
    opacity: 0;
    transform: translateY(25px);
  }

  #check:checked~.nav-btn .nav-link.nav-link:first-child,
  #check:checked~.nav-btn .dropdown-link>a {
    animation: nav .4s cubic-bezier(0.67, -0.55, 0.22, 3.075) forwards var(--i);
  }

}
 
      </style>
      
      <header>
        <nav class="nav-header">
          <div class="container">
            <input type="checkbox" name="" id="check">
            <div class="logo-container">
              <h1 class="logo-text">AL-<span>SADI</span></h1>
            </div>
            <div class="nav-btn">
              <div class="nav-links">
                <ul>
               
                <li class="nav-link" style="--i: .3s"><a class="nav-contact"></a></li>
                  <li class="nav-link">
                    <a href="#" class="products">Products <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
                        <path fill="currentColor" d="m342.43 238.23l-74.13 89.09a16 16 0 0 1-24.6 0l-74.13-89.09A16 16 0 0 1 181.86 212h148.28a16 16 0 0 1 12.29 26.23Z" />
                        <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z" />
                      </svg> </a>
                    <div class="dropdown">
                      <ul>
                        <li class="dropdown-link" style="--i:.4s"><a href="/index.html">Refrigerator <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                              <path fill="currentColor" d="M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z" />
                            </svg> </a></li>
                        <li class="dropdown-link" style="--i: .5s"><a href="/product/ac.html">Air conditioner <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 3.6V11H2V3.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6ZM18 7h1M2 11l.79 2.584A2 2 0 0 0 4.702 15H6m16-4l-.79 2.584A2 2 0 0 1 19.298 15H18m-8.5-.5s0 7-3.5 7m8.5-7s0 7 3.5 7m-6-7v7" />
                            </svg> </a></li>
                        <li class="dropdown-link"><a href="/product/tv.html" style="--i: .6s">Television <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M4.75 4A2.75 2.75 0 0 0 2 6.75v8.5A2.75 2.75 0 0 0 4.75 18h14.5A2.75 2.75 0 0 0 22 15.25v-8.5A2.75 2.75 0 0 0 19.25 4H4.75ZM3.5 6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-8.5ZM5.75 19.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H5.75Z" />
                            </svg> </a></li>

                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="logo-image-container">


                <img src="/nav/waltonlogo.png" alt="abc" class="logo-image">
              </div>
            </div>
            <img src="/nav/m-logo-new.svg" alt="" class="waltonLogo">


            <div class="hamburger-menu-container">

              <label for="check">
                <div class="hamburger-menu">
                  <div></div>
                </div>
              </label>
            </div>
          </div>
        </nav>
      </header>
 `

document.body.insertAdjacentHTML('afterbegin', nav)

const navlink = Array.from(document.querySelectorAll('.nav-link a'));

navlink.forEach(item => {
  item.addEventListener('click', () => {
    const checkbox = document.querySelector('#check:checked').checked = false;
  })
})


const navJs = document.querySelector('#navJs')
document.body.removeChild(navJs)
