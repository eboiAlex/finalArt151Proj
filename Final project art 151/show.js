var slideimages=new Array()
var slidelinks=new Array()
//fucntion to rotate images for slideshow
function slideshowimages(){
for (i=0;i<slideshowimages.arguments.length;i++){
    slideimages[i]=new Image()
    slideimages[i].src=slideshowimages.arguments[i]
    }
}

//gets the images
function gotoshow(){
    if (!window.winslide||winslide.closed)
        winslide=window.open(slidelinks[whichlink])
    else
        winslide.location=slidelinks[whichlink]
        winslide.focus()
}