//select option width in search bar in nav bar header
window.addEventListener('DOMContentLoaded', () => {

    console.log("DOMContentLoaded");
    const selectElement = document.getElementById('search-select-id');
    
    console.log("selectElement");
    // console.log(selectElement);

    selectElement.addEventListener('change', () => {

        console.log("change");
      updateSelectWidth(selectElement);
    });
    updateSelectWidth(selectElement);
  });
  
  function updateSelectWidth(selectElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    console.log("selectedOption=");
    console.log(selectedOption);
    if (selectedOption) {
        const optionWidth = getTextWidth(selectedOption.text);
        console.log("optionWidth=");
        console.log(optionWidth);
        paddingleft=2;
        if(optionWidth<=70){
        selectElement.style.width = optionWidth+25 + 'px';
        selectElement.style.paddingLeft = paddingleft + 'px';
        }
        else if(optionWidth>70 && optionWidth<=200){
          selectElement.style.width = optionWidth+0 + 'px';
          selectElement.style.paddingLeft = paddingleft + 'px';
          }
        else{
          selectElement.style.width = optionWidth-0 + 'px';
          selectElement.style.paddingLeft = paddingleft + 'px';
          }
        // selectElement.style.textAlign = 'center'
    } else {
        console.log('No option selected.');
    }
}

  
  function getTextWidth(text) {
    // working
    console.log("getTextWidth text=");
    console.log(text);
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.whiteSpace = 'nowrap';
    span.style.font = getComputedStyle(document.body).font;
    span.innerText = text;
    document.body.appendChild(span);
    const width = span.getBoundingClientRect().width;
    document.body.removeChild(span);

    console.log("width=");
    console.log(width)
    return width;
  }
  

// orange border in search bar in nav bar header

const searchContainer = document.querySelector('.search-container');

searchContainer.addEventListener('click', () => {
  searchContainer.style.border = '3px solid orange';
  searchContainer.style.borderRadius = '9px';
  
  // document.addEventListener('click', handleClickOutside, { once: true });
});

document.addEventListener('click', function(event) {
  // alert("click");
  if (!event.target.closest('.search-container')) {
    // alert("closest");
    if (!searchContainer.contains(event.target)) {
      // alert("contains check");
      // searchContainer.classList.remove('active');
      searchContainer.style.border = '';
      searchContainer.style.borderRadius = '';
    }
  }
});

// image slider
let slideBtnLeft=document.getElementById("slide-btn-left");
let slideBtnRight=document.getElementById("slide-btn-right");
let imgItem=document.querySelectorAll(".image-item");

console.log("imgItem=");
console.log(imgItem.length);

let startSlider=0;
let endSlider=(imgItem.length)*100;

console.log("endSlider=");
console.log(endSlider);

slideBtnLeft.addEventListener("click",()=>{
// alert("left btn");
console.log("slideBtnLeft Start");
console.log("StartSlider Start="+startSlider);
if(startSlider==0)
{
  console.log("startSlider by Left when SS==0,"+startSlider);
  startSlider=-endSlider+100;
  console.log("startSlider by Left when SS==0,then SS="+startSlider);
}
else if(startSlider<0)
{
  console.log("startSlider by Left when SS<0="+startSlider);
  startSlider=startSlider+100; 
  console.log("startSlider by Left when SS<0 then SS="+startSlider);
}

  imgItem.forEach(element =>{
    // console.log("imgItem element");
    console.log("startSlider by Left forEach"+startSlider);
  element.style.transform=`translateX(${startSlider}%)`;//-100%
  })
  console.log("StartSlider End="+startSlider);
  console.log("slideBtnLeft End");
})

slideBtnRight.addEventListener("click",()=>{
  // alert("right btn");
  console.log("slideBtnRight Start");
  console.log("StartSlider Start="+startSlider);
  if(startSlider>=-endSlider)
  //0>-800, then goto startSlider+(-100)=-100
  //-100>-800, then goto startSlider+(-100)=-200
  //-200>-800, then goto startSlider+(-100)=-300
  //-300>-800, then goto startSlider+(-100)=-400
  //-400>-800, then goto startSlider+(-100)=-500
  //-500>-800, then goto startSlider+(-100)=-600
  //-600>-800, then goto startSlider+(-100)=-700
  //-700>-800, then goto startSlider+(-100)=-800
  {
    console.log("-endSlider="+(-endSlider));
    console.log("startSlider by Right when startSlider>=-endSlider,before SS="+startSlider);
    startSlider=startSlider-100;
    console.log("startSlider by Right when startSlider>=-endSlider,after SS="+startSlider);
  }
  if(startSlider==-endSlider){
    //-800==-800,
    console.log("startSlider by Right when startSlider==-endSlider,SS="+startSlider+" ,Es="+endSlider);
    startSlider=0;
    console.log("startSlider by Right when startSlider==-endSlider then SS="+startSlider);
  }
    imgItem.forEach(element =>{
      // console.log("imgItem element");
      console.log("startSlider by Right forEach ="+startSlider);
    element.style.transform=`translateX(${startSlider}%)`;//-100%
    })
    console.log("StartSlider End="+startSlider);
    console.log("slideBtnRight End");
})

// sidebar navigation
const sidebarNavigationElement= document.getElementById("sidebar-container-navigation-id");
const sidebarOpenNavigationElement=document.getElementById("all-open-nav-sidebar-id");
const sidebarCloseNavigationElement=document.getElementById("sidebar-close-btn-id");

const sidebarLeftPartElement= document.getElementById("sidebar-left-part-id");

console.log("sidebarNavigationElement="+sidebarNavigationElement);
console.log("sidebarOpenNavigationElement="+sidebarOpenNavigationElement);
console.log("sidebarCloseNavigationElement="+sidebarCloseNavigationElement);
console.log("sidebarLeftPartElement="+sidebarLeftPartElement);

sidebarOpenNavigationElement.addEventListener("click", handleClick);

function handleClick() {
  console.log("show hc");
  
  sidebarNavigationElement.classList.toggle("slidebar-show");

  sidebarLeftPartElement.classList.toggle("sidebar-left-part-transition-show");

// sidebarNavigationElement.addEventListener("transitionend",()=>{
//  sidebarLeftPartElement.classList.toggle("sidebar-left-part-transition-show");
// },{once: true});

  console.log("show hc after");
  if(sidebarNavigationElement.classList.contains("slidebar-show")) {
    console.log("slidebar-show class added");
  } 
  if(sidebarNavigationElement.classList.contains("slidebar-close")) {
   console.log("slidebar-close class removed");
  }
}

// sidebar-close-btn
sidebarCloseNavigationElement.addEventListener("click",()=>{
  // alert("alert close");
  console.log("close");
  sidebarLeftPartElement.classList.toggle("sidebar-left-part-transition-show");
  sidebarLeftPartElement.addEventListener("transitionend", () => {
    sidebarNavigationElement.classList.toggle("slidebar-show");
  }, {once: true});
})

// footer btn scroll to top

    const backToTopBtn = document.getElementById('backToTopBtn');

    backToTopBtn.addEventListener('click', () => {
        // Scroll to the top of the page smoothly
        // alert("top");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

