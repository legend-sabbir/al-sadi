const footer = `<footer class="footer" id="contact">
    <div class="container">
      <h1 class="title">Al-Sadi Electronics</h1>
      <div class="contact-us">
        
        <div class="mobile-num contact-item">
          <h3 class="contact-title">প্রোপাইটার</h3>
          <div class="pro-details">
            <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"/></svg></div>
            <div class="num-list">
              <p class="text">মো: দেলোয়ার হোসেন</p>
            </div>
          </div>
        </div>

        <div class="location contact-item">
          <h3 class="contact-title">ঠিকানা </h3>
          <div class="location-details">
            <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8Z" />
                </g>
              </svg></div>
              <p class="text">১নং বাবুরাইল মোর, মসজিদ সংলগ্ন, হ্রদয় প্লাজা, লেকপার, নারায়ণগঞ্জ  </p>
          </div>
        </div>

        <div class="mobile-num contact-item">
          <h3 class="contact-title">যোগাযোগ</h3>
          <div class="mobile-details">
            <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor" d="m7.772 2.439l1.076-.344c1.009-.322 2.087.199 2.519 1.217l.86 2.028c.374.883.166 1.922-.514 2.568L9.818 9.706c.117 1.076.479 2.135 1.085 3.177a8.677 8.677 0 0 0 2.27 2.595l2.276-.76c.862-.287 1.802.044 2.33.821l1.233 1.81c.615.904.504 2.15-.259 2.916l-.817.821c-.814.817-1.977 1.114-3.052.778c-2.54-.792-4.873-3.143-7.003-7.053c-2.133-3.916-2.886-7.24-2.258-9.968c.264-1.148 1.081-2.063 2.149-2.404Z" />
              </svg></div>
            <div class="num-list">
              <p class="text"><a href="tel:+8801869343388" class="number-link" data-num="1.">+880 1869-343388</a></p>
              <p class="text"><a href="tel:+8801614922850" class="number-link" data-num="1.">+880 1614-922850</a></p>
            </div>
          </div>
        </div>
        

      </div>
    </div>
  </footer>


  <style>
  .footer {
      background-image: radial-gradient(circle, hsl(250, 7%, 17%), hsl(250, 11%, 11%));
  }
    .footer .container {
      display: block;
      color: white;
      margin-top: 60px;
      padding-block: 30px;
    }
    
    .footer.hide { display:none; }
    
    .contact-us {
      display: flex;
      column-gap: 30px;
      flex-wrap: wrap;
    }

    .footer h1 {
      font-size: 1.5rem;
    }

    .contact-item {
      margin-block: 20px;
    }

    .contact-title {
      margin-block: 5px;
      margin-inline: 15px;
    }
    .footer .text { max-width: 30ch; }

    .contact-us :is(.location-details, .mobile-details,.pro-details) {
      display: flex;
      align-items: center;
      gap: 12px;
    }

   :is(.mobile-details,.pro-details) a {
      color: white;
    }

    .footer .icon {
      background-color: red;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: white;
      padding: 8px;
      font-size: 1.4rem;
    }
   .footer .icon svg {
     height: 40 px;
     width: 40 px;
   }

    .mobile-details .icon {
      background-image: linear-gradient(to top left, #17E55C, #5DE38A);
    }

    .location-details .icon {
      background-image: linear-gradient(to top left, #E51717, #E5175E);
    }
    
   .pro-details .icon {
     background-image: linear-gradient(to top left, #B911E2, #E2117E);
   }
  </style>`
  
  document.body.insertAdjacentHTML('beforeend', footer);

