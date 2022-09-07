import{arr}from"./refrigeratorData.js";import{deepArr}from"./refrigeratorData.js";import{beverageArr}from"./refrigeratorData.js";let currentArr=arr.slice(0);const deep=document.querySelector(".deep"),beverage=document.querySelector(".beverage"),footer=(deep.addEventListener("click",()=>{[deep,beverage].forEach(a=>a.classList.remove("active")),deep.classList.add("active"),currentArr=deepArr,filterRender(1)}),beverage.addEventListener("click",()=>{[deep,beverage].forEach(a=>a.classList.remove("active")),beverage.classList.add("active"),currentArr=beverageArr,filterRender(1)}),document.getElementById("contact")),searchInput=document.getElementById("search"),searchList=document.querySelector(".search-list"),searchArr=[...arr,...deepArr,...beverageArr];function displayName(value){searchInput.value=value,searchList.innerHTML="",currentArr=searchArr.filter(item=>item.name===value);document.getElementById("contact");filterRender(1)}searchInput.addEventListener("keyup",()=>{searchList.innerHTML="";let val=searchInput.value.toUpperCase().trim();val=val.replace(/\ /g,"-");var li,len=searchArr.length;for(let i=0;i<len;i++)searchArr[i].name.match(val)&&""!=val&&(li=`<li>${searchArr[i].name}</li>`,searchList.insertAdjacentHTML("afterbegin",li),document.querySelector(".search-list li").addEventListener("click",()=>{displayName(searchArr[i].name)}))});const searchBtn=document.getElementById("search-btn");function searchEnter(){window.scrollTo(0,350);let val=searchInput.value.toUpperCase().trim();val=val.replace(/\ /g,"-"),searchInput.blur(),searchList.innerHTML="",currentArr=searchArr.filter(item=>item.name.match(val)),filterRender(1),document.querySelector(".page-active").classList.remove("page-active"),pageNavIcon[0].classList.add("page-active")}searchInput.addEventListener("keypress",e=>{"Enter"==e.key&&searchEnter()}),searchBtn.addEventListener("click",searchEnter);const radioBtn=Array.from(document.querySelectorAll(".item input")),resetBtn=(radioBtn.forEach(btn=>{btn.addEventListener("change",()=>{window.scrollTo(0,350),searchInput.value="",searchList.innerHTML="",[deep,beverage].forEach(a=>a.classList.remove("active")),currentArr=arr.filter(item=>parseInt(item.discount)>parseInt(btn.value)&&parseInt(item.discount)<=parseInt(btn.dataset.value)),filterRender(1),document.querySelector(".page-active").classList.remove("page-active"),pageNavIcon[0].classList.add("page-active")})}),document.querySelector(".reset")),el=resetBtn.getBoundingClientRect(),goTop=(resetBtn.addEventListener("click",()=>{currentArr=arr.slice(0),searchInput.value="",filterRender(1),document.querySelector(".page-active").classList.remove("page-active"),pageNavIcon[0].classList.add("page-active");const check=document.querySelector(".item input:checked");check&&(check.checked=!1),searchInput.value="",searchList.innerHTML="",[deep,beverage].forEach(a=>a.classList.remove("active"))}),document.querySelector(".go-top")),pageNavigation=(window.addEventListener("scroll",e=>{450<=window.scrollY?goTop.classList.add("active"):goTop.classList.remove("active")}),document.querySelector(".page-navigation")),pageNavIcon=Array.from(pageNavigation.querySelectorAll(".icon"));function navBtn(){document.querySelector(".page-active").classList.remove("page-active"),this.classList.add("page-active"),filterRender(this.innerText)}function navBtnHide(cl){let navLen=pageNavIcon.length,i,len=navLen;if(cl<20)return pageNavigation.classList.add("hide");for(pageNavigation.classList.remove("hide"),20<=cl&&cl<=40?i=2:40<=cl&&cl<=60?i=3:60<=cl&&cl<=80?i=4:80<=cl&&cl<=100?i=5:100<=cl&&cl<=120?i=6:120<=cl&&cl<=140?i=7:140<=cl&&cl<=160?i=8:160<=cl&&cl<=180&&(i=9);len--;)pageNavIcon[len].classList.remove("child-hide");for(;navLen>i;)pageNavIcon[i++].classList.add("child-hide")}function filterRender(e){let pageArr;switch(currentArr=currentArr.sort((a,b)=>parseInt(b.discount)-parseInt(a.discount)),e.toString()){case"1":pageArr=currentArr.filter((item,i)=>i<20);break;case"2":pageArr=currentArr.filter((item,i)=>i<40&&19<i);break;case"3":pageArr=currentArr.filter((item,i)=>i<60&&39<i);break;case"4":pageArr=currentArr.filter((item,i)=>i<80&&59<i);break;case"5":pageArr=currentArr.filter((item,i)=>i<100&&79<i);break;case"6":pageArr=currentArr.filter((item,i)=>i<120&&99<i);break;case"7":pageArr=currentArr.filter((item,i)=>i<140&&119<i);break;case"8":pageArr=currentArr.filter((item,i)=>i<160&&139<i);break;case"9":pageArr=currentArr.filter((item,i)=>i<180&&159<i)}pageArr.sort((a,b)=>parseInt(a.discount)-parseInt(b.discount)),navBtnHide(currentArr.length),render(pageArr)}pageNavIcon.forEach(item=>{item.addEventListener("click",navBtn)});const productContainer=document.querySelector(".product-list .container");function render(array){productContainer.innerHTML="",array.forEach((item,index)=>{index=` <div class="product-card">
            <a href="/refrigerator/product.html?${item.name}">
            <div class="product-top">

             <h1 class="title">${item.name}</h1>

              <p class="gross-volume">Gross Volume: ${item.gVolume}</p>
              <p class="net-volume">Net Volume: <span>${item.nVolume}</span></p>
            </div>

           <img src="/refrigerator/img/${item.name.split("-")[0]}/${item.name}/logo.webp" alt="product-img" loading="${5<index?"lazy":""}">

            <div class="product-bottom">

              <div class="price ${item.price!=item.discount?"line-through":""}">Tk <span>${5<item.price.length?item.price.substr(0,3)+","+item.price.substr(3,6):item.price.substr(0,2)+","+item.price.substr(2,5)}</span></div>


              <div class="discount ${item.price==item.discount?"hide":""}">
                <div class="discount-price">Tk <span>${item.discount.length<6?item.discount.substr(0,2)+","+item.discount.substr(2,5):item.discount.substr(0,3)+","+item.discount.substr(3,6)}</span></div>
                <div class="discount-text">Discount!!!</div>
              </div>


            </div>
            </a>
          </div>
`;productContainer.insertAdjacentHTML("afterbegin",index)})}filterRender(1);