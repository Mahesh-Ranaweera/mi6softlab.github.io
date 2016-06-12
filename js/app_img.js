var slideIndex = 1;
showDivs(slideIndex);
showDivs2(slideIndex);

function img_index(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide_img");
    if (n > x.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

function img_index2(n) {
    showDivs2(slideIndex += n);
}

function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("slide_img2");
    if (n > x.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}