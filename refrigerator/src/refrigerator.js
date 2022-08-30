import{arr}from"./refrigeratorData.js";import{deepArr}from"./refrigeratorData.js";import{beverageArr}from"./refrigeratorData.js";const title=document.querySelector("title");let url=window.location.href,product=url.split("?")[1];const imgFolder=(product=(title.innerHTML=product).includes("#")?product.split("#")[0]:product).split("-")[0];let img1Src,img2Src,img3Src,img4Src,img5Src;async function carousel(){const imgArr=[img1Src,img2Src,img3Src,img4Src,img5Src];imgArr.forEach((img,i)=>{fetch(img).then(res=>{if(!res.ok){const navContainer=document.querySelector(".navigation"),slideContainer=document.querySelector(".slider-container");var res=document.querySelector(".slide-"+(i+1)),navImg=document.querySelector(".navigation .img-"+(i+1));slideContainer.removeChild(res),navContainer.removeChild(navImg),--len,marker.style.transform=`translateX(${navigationImg[0].offsetLeft}px)`}})}),fetch(imgArr[1]).then(res=>{const navContainer=document.querySelector(".navigation");res.ok?autoPlay():navContainer.remove()});var carouselData=`<section class="carousel">

        <div class="wrapper">

          <div class="slider-container">

            <div class="slide">
              <img src="${img1Src}" alt="img1">
            </div>  
            
            <div class="slide slide-2">
              <img src="${img2Src}" alt="img2">
            </div>  
            
            <div class="slide slide-3">
              <img src="${img3Src}" alt="img3">
            </div>

            <div class="slide slide-4">
              <img src="${img4Src}" alt="img4">
            </div>

            <div class="slide slide-5">
              <img src="${img5Src}" alt="img5">
            </div>


          </div>

        </div>
        
         <div class="navigation">
            <div id="marker"></div>
            <div class="img"> <img src="${img1Src}" alt="img1"></div>
            <div class="img img-2"> <img src="${img2Src}" alt="img2"></div>
            <div class="img img-3"> <img src="${img3Src}" alt="img3"></div>
            <div class="img img-4"> <img src="${img4Src}" alt="img4"></div>
            <div class="img img-5"> <img src="${img5Src}" alt="img5"></div>
          </div>
       </div>
       
      </section>
`;const carouselSection=document.querySelector(".carousel");carouselSection.innerHTML=carouselData}[...arr,...deepArr,...beverageArr].forEach((item,index)=>{if(item.name===product){img1Src=`/refrigerator/img/${imgFolder}/${item.name}/i1.webp`,img2Src=`/refrigerator/img/${imgFolder}/${item.name}/i2.webp`,img3Src=`/refrigerator/img/${imgFolder}/${item.name}/i3.webp`,img4Src=`/refrigerator/img/${imgFolder}/${item.name}/i4.webp`,img5Src=`/refrigerator/img/${imgFolder}/${item.name}/i5.webp`;item=`   <div class="product-info">
            <h1 class="title">${item.name}</h1>
            <p class="text type">- type: ${item.type}</p>
            <p class="text gross-volume">- Gross Volume: ${item.gVolume}</p>
            <p class="text net-volume">- Net Volume: <span>${item.nVolume}</span></p>
            <p class="text gross-weight">- Gross Weight: ${item.gWeight}</p>
            <p class="text net-weight">- Net Weight: ${item.nWeight}</p>
            <p class="text inverter ${item.inverter?"":"hide"}">- Using Latest <span>INVERTER Technology</span></p>
            <p class="text stabilizer ${item.stablizer?"hide":""}">- No Need To Use <span>Voltage Stabilizer</span></p>
          </div>

          <div class="product-price">

            <div class="price ${item.discount!=item.price?"hide":""}">TK <span>${5<item.price.length?item.price.substr(0,3)+","+item.price.substr(3,6):item.price.substr(0,2)+","+item.price.substr(2,5)}</span></div>

            <div class="discount-price ${item.discount==item.price?"hide":""}">
              <div class="discount">নগদ টাকায় কিনলে ডিসকাউন্ট সহ মূল্য : <span>${item.discount.length<6?item.discount.substr(0,2)+","+item.discount.substr(2,5):item.discount.substr(0,3)+","+item.discount.substr(3,6)} </span>টাকা</div>
              <div class="normal">৩ মাসের কিস্তিতে নিলে ডিসকাউন্ট পাবেন না, মূল্য : <span>${5<item.price.length?item.price.substr(0,3)+","+item.price.substr(3,6):item.price.substr(0,2)+","+item.price.substr(2,5)}</span> টাকা</div>
            </div>

          </div>`;const container=document.querySelector(".product-details .container");container.innerHTML=item}}),carousel();const slider=document.querySelector(".slider-container"),slides=Array.from(document.querySelectorAll(".slide")),wrapper=document.querySelector(".wrapper"),marker=document.querySelector("#marker"),navigationImg=Array.from(document.querySelectorAll(".navigation .img")),arrowLeft=document.querySelector("[data-arrow-left]"),arrowRight=document.querySelector("[data-arrow-right]");let isDragging=!1,startPos=0,animationID=0,currentTranslate=0,prevTranslate=0,currentIndex=0,isPlay=!0,clear=0,len=navigationImg.length;function touchStart(e){isDragging=!0,isPlay=!1,clearTimeout(clear),startPos=getPositionX(e),animationID=requestAnimationFrame(animation)}function touchEnd(){isDragging=!1,cancelAnimationFrame(animationID);var movedBy=currentTranslate-prevTranslate;movedBy<-80&&currentIndex<len-1&&(currentIndex+=1),80<movedBy&&0<currentIndex&&--currentIndex,navigationChange(navigationImg[currentIndex],currentIndex)}function touchMove(e){isDragging&&(e=getPositionX(e),currentTranslate=e+prevTranslate-startPos)}function getPositionX(e){return e.type.includes("mouse")?e.pageX:e.touches[0].clientX}function setSliderPositon(){slider.style.transform=`translateX(${currentTranslate}px)`}function animation(){setSliderPositon(),isDragging&&requestAnimationFrame(animation)}function setPositionByIndex(){var width=wrapper.clientWidth;currentTranslate=currentIndex*-width,prevTranslate=currentTranslate,setSliderPositon()}function navigationChange(item,i){indicator(item),currentIndex=i,setPositionByIndex()}function indicator(e){marker.style.transform=`translateX(${e.offsetLeft}px)`}function autoPlay(){if(isPlay)for(let x=0;x<=len;x++)clear=setTimeout(()=>{if(isPlay)return x===len?autoPlay():void navigationChange(navigationImg[x],x)},1500*x)}wrapper.oncontextmenu=e=>{e.preventDefault(),e.stopPropagation()},slides.forEach((slide,index)=>{const slideImg=slide.querySelector("img");slideImg.addEventListener("dragstart",e=>e.preventDefault()),slide.addEventListener("touchstart",touchStart),slide.addEventListener("touchend",touchEnd),slide.addEventListener("touchmove",touchMove),slide.addEventListener("mousedown",touchStart),slide.addEventListener("mouseup",touchEnd),slide.addEventListener("mouseleave",touchEnd),slide.addEventListener("mousemove",touchMove)}),navigationImg.forEach((item,i)=>{item.addEventListener("click",()=>{navigationChange(item,i),isPlay=!1,clearTimeout(clear)})});