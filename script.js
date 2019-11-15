let imageListWrapper = document.getElementById("thumbnails")
let allImages = imageListWrapper.getElementsByTagName('img');
let currentlySelectedImage = document.getElementById('currentlydisplayedimage');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let counter = 0;

next.addEventListener('click',nextSlide, false);
prev.addEventListener('click',prevSlide, false);

for (let i = 0; i < allImages.length; i++) {
       let index = i;
       let singleImage = allImages[i];     
       selectImage(singleImage, index);
       //singleImage.setAttribute('data-index', index);       
  }

  function goToSlide(n) {
    counter = (n + allImages.length) % allImages.length;
    setBigImage(allImages[counter], n);
    console.log(counter)
}

  function nextSlide() {
    goToSlide(counter + 1);    
  }
  
  function prevSlide() {
    goToSlide(counter - 1);
  }

  function removeOtherActive(){
        var getOtherActives = document.querySelector(".activeThumb");
        if(getOtherActives !==null){
            getOtherActives.classList.remove("activeThumb");
        }
  }
  function setBigImage(singleImage, index) { 
    removeOtherActive();    
    singleImage.classList.add("activeThumb"); 
    let path = singleImage.getAttribute('src');
    currentlySelectedImage.setAttribute('src', path);
  }

  function selectImage(singleImage, index) {
      singleImage.addEventListener('click', function(event){
      event.preventDefault();    
      setBigImage(singleImage, index); 
      goToSlide(index);
     });     
  }