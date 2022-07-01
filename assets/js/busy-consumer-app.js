//
//Chart Size Section
//

function chartSize() {
  //create an array to be assigned the heights of chart row divs
  let rowHeights1 = [];
  let rowHeights2 = [];
  let rowHeights3 = [];
  let rowHeights4 = [];
  let mobileRowHeights1 = [];
  let mobileRowHeights2 = [];
  let mobileRowHeights3 = [];

  //declare array of all div objects with the class of product-card, bottom-line__wrapper, pros__wrapper, cons__wrapper
  let productCards = document.getElementsByClassName("product-card");
  let bottomLineRow = document.getElementsByClassName("bottom-line__wrapper");
  let prosLineRow = document.getElementsByClassName("pros__wrapper");
  let consLineRow = document.getElementsByClassName("cons__wrapper");

  //for each product, get the height of the product card and push it to the array

  for (let i = 0; i < productCards.length; i++) {
    rowHeights1.push(productCards[i].offsetHeight);
  }

  //for each bottom line element, get the height of the bottom line element and push it to the array unless it is less than 150px, in which case push 150 in it's place to set as a minimum height

  for (let i = 0; i < bottomLineRow.length; i++) {
    if (bottomLineRow[i].offsetHeight > 150) {
      rowHeights2.push(bottomLineRow[i].offsetHeight);
    } else {
      rowHeights2.push(150);
    }
  }

  //for each pros line element, get the height of the pros line element and push it to the array

  for (let i = 0; i < prosLineRow.length; i++) {
    rowHeights3.push(prosLineRow[i].offsetHeight);
  }

  //for each cons line element, get the height of the cons line element and push it to the array

  for (let i = 0; i < consLineRow.length; i++) {
    rowHeights4.push(consLineRow[i].offsetHeight);
  }

  // create a variable to store the tallest height
  let tallestProductCards = 0;
  let tallestBottomLine = 0;
  let tallestProsLine = 0;
  let tallestConsLine = 0;

  //loop through the array of rowHeights
  for (let i = 0; i < rowHeights1.length; i++) {
    //if the current height is greater than the tallest height, set the tallest height to the current height
    if (rowHeights1[i] > tallestProductCards) {
      tallestProductCards = rowHeights1[i];
    }
  }

  for (let i = 0; i < rowHeights2.length; i++) {
    if (rowHeights2[i] > tallestBottomLine) {
      tallestBottomLine = rowHeights2[i];
    }
  }

  for (let i = 0; i < rowHeights3.length; i++) {
    if (rowHeights3[i] > tallestProsLine) {
      tallestProsLine = rowHeights3[i];
    }
  }

  for (let i = 0; i < rowHeights4.length; i++) {
    if (rowHeights4[i] > tallestConsLine) {
      tallestConsLine = rowHeights4[i];
    }
  }

  //push the height of each mobile row's content to the array with a minimum height of 150px for the bottom line row
  for (let i = 0; i < bottomLineRow.length; i++) {
    if (bottomLineRow[i].offsetHeight > 150) {
      mobileRowHeights1.push(bottomLineRow[i].offsetHeight - 40);
    } else if (bottomLineRow[i].offsetHeight > 120) {
      mobileRowHeights1.push(bottomLineRow[i].offsetHeight - 40);
    } else {
      mobileRowHeights1.push(150);
    }
  }

  for (let i = 0; i < prosLineRow.length; i++) {
    if (prosLineRow[i].offsetHeight > 200) {
      mobileRowHeights2.push(prosLineRow[i].offsetHeight + 60);
    } else if (prosLineRow[i].offsetHeight > 120) {
      mobileRowHeights2.push(prosLineRow[i].offsetHeight + 20);
    } else {
      mobileRowHeights2.push(120);
    }
  }

  for (let i = 0; i < consLineRow.length; i++) {
    if (consLineRow[i].offsetHeight > 150) {
      mobileRowHeights3.push(consLineRow[i].offsetHeight - 60);
    } else if (150 > bottomLineRow[i].offsetHeight > 120) {
      mobileRowHeights3.push(consLineRow[i].offsetHeight - 60);
    } else {
      mobileRowHeights3.push(150);
    }
  }

  // set the grid-template-rows of all class label-column elements to the tallest height

  //decalre a variable for the Desktop and Mobile label column grid elements
  let headerCol = document.getElementById("label-column-0");
  let headerCol1 = document.getElementById("label-column-1");
  let headerCol2 = document.getElementById("label-column-2");
  let headerCol3 = document.getElementById("label-column-3");
  let headerCol4 = document.getElementById("label-column-4");
  let headerCol5 = document.getElementById("label-column-5");

  //declare a variabele for the text content grid of elements
  let textCol = document.getElementsByClassName("text-wrapper-chart");

  //set the media query breakpoint to 768px
  const mediaQueryLarge = window.matchMedia("(min-width: 768px)");

  //Condition to check if the media query is true or false, on true perform Desktop Style Changes to chart elements grid rows heights to align conjoined grids based on the tallest height among the product cards, bottom line, pros line, and cons line

  if (mediaQueryLarge.matches) {
    for (let i = 0; i < textCol.length; i++) {
      textCol[
        i
      ].style.gridTemplateRows = `${tallestBottomLine}px ${tallestProsLine}px ${tallestConsLine}px`;
    }

    headerCol.style.gridTemplateRows = `${tallestProductCards}px ${tallestBottomLine}px ${tallestProsLine}px ${tallestConsLine}px`;
  } else {
    //for mobile, set the grid-template-rows of all class label-column elements to the height of bottom line at this index, plus pros line at this index, plus cons line, at their specific index
    for (let i = 0; i < textCol.length; i++) {
      textCol[
        i
      ].style.gridTemplateRows = `${mobileRowHeights1[i]}px ${mobileRowHeights2[i]}px ${mobileRowHeights3[i]}px`;
    }
    headerCol1.style.gridTemplateRows = `${mobileRowHeights1[0]}px ${mobileRowHeights2[0]}px ${mobileRowHeights3[0]}px`;
    console.log(`Header 1 ${headerCol1.style.gridTemplateRows}`);
    headerCol2.style.gridTemplateRows = `${mobileRowHeights1[1]}px ${mobileRowHeights2[1]}px ${mobileRowHeights3[1]}px`;
    console.log(`Header 2 ${headerCol2.style.gridTemplateRows}`);
    headerCol3.style.gridTemplateRows = `${mobileRowHeights1[2]}px ${mobileRowHeights2[2]}px ${mobileRowHeights3[2]}px`;
    console.log(`Header 3 ${headerCol3.style.gridTemplateRows}`);
    headerCol4.style.gridTemplateRows = `${mobileRowHeights1[3]}px ${mobileRowHeights2[3]}px ${mobileRowHeights3[3]}px`;
    console.log(`Header 4 ${headerCol4.style.gridTemplateRows}`);
    headerCol5.style.gridTemplateRows = `${mobileRowHeights1[4]}px ${mobileRowHeights2[4]}px ${mobileRowHeights3[4]}px`;
    console.log(`Header 5 ${headerCol5.style.gridTemplateRows}`);
  }
}
//create resize observer which will listen for changes in the window size and resize the grid-template-rows of all class label-column and text-wrapper-chart elements to the tallest height
document.addEventListener(
  "DOMContentLoaded",
  function () {
    chartSize();
  },
  false
);

//
//Table Of Contents Intersection Observer Section
//

//create an array of all the a tags with class toc__link
const tocLinks = document.getElementsByClassName("toc__link");

//create a function which removes the active class from each tocLinks element
function removeActiveClass() {
  for (let i = 0; i < tocLinks.length; i++) {
    tocLinks[i].classList.remove("active");
  }
}

//create a function to toggle the active class of a variable passing in the event target
function toggleActiveClass(event) {
  removeActiveClass();
  event.target.classList.add("active");
}

//create variables for the toc__link elements
const tocLink1 = document.getElementById("toc__link-1");
const tocLink2 = document.getElementById("toc__link-2");
const tocLink3 = document.getElementById("toc__link-3");
const tocLink4 = document.getElementById("toc__link-4");
const tocLink5 = document.getElementById("toc__link-5");
const tocLink6 = document.getElementById("toc__link-6");

//create variables for the toc__content elements
const tocContent1 = document.getElementById("guide");
const tocContent2 = document.getElementById("why");
const tocContent3 = document.getElementById("features");
const tocContent4 = document.getElementById("tips");
const tocContent5 = document.getElementById("prices");
const tocContent6 = document.getElementById("faq");

//create an intersection observer for each tocContent element
const tocContentObserver1 = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        tocLink1.classList.add("active");
        console.log("Toc Link 1 is active");
      } else {
        tocLink1.classList.remove("active");
      }
    });
  },
  { threshold: [0.5] }
);
const tocContentObserver2 = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        tocLink2.classList.add("active");
        console.log("Toc Link 2 is active");
      } else {
        tocLink2.classList.remove("active");
      }
    });
  },
  { threshold: [0.5] }
);
const tocContentObserver3 = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        tocLink3.classList.add("active");
        console.log("Toc Link 3 is active");
      } else {
        tocLink3.classList.remove("active");
      }
    });
  },
  { threshold: [0.5] }
);
const tocContentObserver4 = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        tocLink4.classList.add("active");
        console.log("Toc Link 4 is active");
      } else {
        tocLink4.classList.remove("active");
      }
    });
  },
  { threshold: [0.5] }
);
const tocContentObserver5 = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        tocLink5.classList.add("active");
        console.log("Toc Link 5 is active");
      } else {
        tocLink5.classList.remove("active");
      }
    });
  },
  { threshold: [0.5] }
);
const tocContentObserver6 = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      tocLink6.classList.add("active");
      console.log("Toc Link 6 is active");
    } else {
      tocLink6.classList.remove("active");
    }
  });
});

//start observers
tocContentObserver1.observe(tocContent1);
tocContentObserver2.observe(tocContent2);
tocContentObserver3.observe(tocContent3);
tocContentObserver4.observe(tocContent4);
tocContentObserver5.observe(tocContent5);
tocContentObserver6.observe(tocContent6);

//
//Hover Effect Section
//

//declare variables for the product-col-1 through product-col-5 elements
const productCol1 = document.getElementById("product-col-1");
const productCol2 = document.getElementById("product-col-2");
const productCol3 = document.getElementById("product-col-3");
const productCol4 = document.getElementById("product-col-4");
const productCol5 = document.getElementById("product-col-5");

//declare variables for the check-price-btn-1 through check-price-btn-5 elements
const checkPriceBtn1 = document.getElementById("check-price-btn-1");
const checkPriceBtn2 = document.getElementById("check-price-btn-2");
const checkPriceBtn3 = document.getElementById("check-price-btn-3");
const checkPriceBtn4 = document.getElementById("check-price-btn-4");
const checkPriceBtn5 = document.getElementById("check-price-btn-5");

//create a mouseover event listener for the product-col-1 through product-col-5 elements and a mouseout event listener for hover effect triggers
productCol1.addEventListener("mouseover", function () {
  checkPriceBtn1.classList.add("chart-btn-hover");
});
productCol1.addEventListener("mouseout", function () {
  checkPriceBtn1.classList.remove("chart-btn-hover");
});

productCol2.addEventListener("mouseover", function () {
  checkPriceBtn2.classList.add("chart-btn-hover");
});
productCol2.addEventListener("mouseout", function () {
  checkPriceBtn2.classList.remove("chart-btn-hover");
});

productCol3.addEventListener("mouseover", function () {
  checkPriceBtn3.classList.add("chart-btn-hover");
});
productCol3.addEventListener("mouseout", function () {
  checkPriceBtn3.classList.remove("chart-btn-hover");
});

productCol4.addEventListener("mouseover", function () {
  checkPriceBtn4.classList.add("chart-btn-hover");
});
productCol4.addEventListener("mouseout", function () {
  checkPriceBtn4.classList.remove("chart-btn-hover");
});
productCol5.addEventListener("mouseover", function () {
  checkPriceBtn5.classList.add("chart-btn-hover");
});
productCol5.addEventListener("mouseout", function () {
  checkPriceBtn5.classList.remove("chart-btn-hover");
});

//declare variables for the bottom-line__wrapper-0 through bottom-line__wrapper-5 elements
const bottomLineWrapper0 = document.getElementById("bottom-line__wrapper-0");
const bottomLineWrapper1 = document.getElementById("bottom-line__wrapper-1");
const bottomLineWrapper2 = document.getElementById("bottom-line__wrapper-2");
const bottomLineWrapper3 = document.getElementById("bottom-line__wrapper-3");
const bottomLineWrapper4 = document.getElementById("bottom-line__wrapper-4");
const bottomLineWrapper5 = document.getElementById("bottom-line__wrapper-5");

//declare variables for the pros__wrapper-0 through pros__wrapper-5 elements
const prosWrapper0 = document.getElementById("pros__wrapper-0");
const prosWrapper1 = document.getElementById("pros__wrapper-1");
const prosWrapper2 = document.getElementById("pros__wrapper-2");
const prosWrapper3 = document.getElementById("pros__wrapper-3");
const prosWrapper4 = document.getElementById("pros__wrapper-4");
const prosWrapper5 = document.getElementById("pros__wrapper-5");

//declare variables for the cons__wrapper-0 through cons__wrapper-5 elements
const consWrapper0 = document.getElementById("cons__wrapper-0");
const consWrapper1 = document.getElementById("cons__wrapper-1");
const consWrapper2 = document.getElementById("cons__wrapper-2");
const consWrapper3 = document.getElementById("cons__wrapper-3");
const consWrapper4 = document.getElementById("cons__wrapper-4");
const consWrapper5 = document.getElementById("cons__wrapper-5");

//create mouseover event listeners for the bottom-line__wrapper-0 through bottom-line__wrapper-5 elements and a mouseout event listener for hover effect triggers
bottomLineWrapper1.addEventListener("mouseover", function () {
  bottomLineWrapper0.classList.add("chart-bg-hover");
  bottomLineWrapper1.classList.add("chart-bg-hover");
  bottomLineWrapper2.classList.add("chart-bg-hover");
  bottomLineWrapper3.classList.add("chart-bg-hover");
  bottomLineWrapper4.classList.add("chart-bg-hover");
  bottomLineWrapper5.classList.add("chart-bg-hover");
});
bottomLineWrapper1.addEventListener("mouseout", function () {
  bottomLineWrapper0.classList.remove("chart-bg-hover");
  bottomLineWrapper1.classList.remove("chart-bg-hover");
  bottomLineWrapper2.classList.remove("chart-bg-hover");
  bottomLineWrapper3.classList.remove("chart-bg-hover");
  bottomLineWrapper4.classList.remove("chart-bg-hover");
  bottomLineWrapper5.classList.remove("chart-bg-hover");
});
bottomLineWrapper2.addEventListener("mouseover", function () {
  bottomLineWrapper0.classList.add("chart-bg-hover");
  bottomLineWrapper1.classList.add("chart-bg-hover");
  bottomLineWrapper2.classList.add("chart-bg-hover");
  bottomLineWrapper3.classList.add("chart-bg-hover");
  bottomLineWrapper4.classList.add("chart-bg-hover");
  bottomLineWrapper5.classList.add("chart-bg-hover");
});
bottomLineWrapper2.addEventListener("mouseout", function () {
  bottomLineWrapper0.classList.remove("chart-bg-hover");
  bottomLineWrapper1.classList.remove("chart-bg-hover");
  bottomLineWrapper2.classList.remove("chart-bg-hover");
  bottomLineWrapper3.classList.remove("chart-bg-hover");
  bottomLineWrapper4.classList.remove("chart-bg-hover");
  bottomLineWrapper5.classList.remove("chart-bg-hover");
});
bottomLineWrapper3.addEventListener("mouseover", function () {
  bottomLineWrapper0.classList.add("chart-bg-hover");
  bottomLineWrapper1.classList.add("chart-bg-hover");
  bottomLineWrapper2.classList.add("chart-bg-hover");
  bottomLineWrapper3.classList.add("chart-bg-hover");
  bottomLineWrapper4.classList.add("chart-bg-hover");
  bottomLineWrapper5.classList.add("chart-bg-hover");
});
bottomLineWrapper3.addEventListener("mouseout", function () {
  bottomLineWrapper0.classList.remove("chart-bg-hover");
  bottomLineWrapper1.classList.remove("chart-bg-hover");
  bottomLineWrapper2.classList.remove("chart-bg-hover");
  bottomLineWrapper3.classList.remove("chart-bg-hover");
  bottomLineWrapper4.classList.remove("chart-bg-hover");
  bottomLineWrapper5.classList.remove("chart-bg-hover");
});
bottomLineWrapper4.addEventListener("mouseover", function () {
  bottomLineWrapper0.classList.add("chart-bg-hover");
  bottomLineWrapper1.classList.add("chart-bg-hover");
  bottomLineWrapper2.classList.add("chart-bg-hover");
  bottomLineWrapper3.classList.add("chart-bg-hover");
  bottomLineWrapper4.classList.add("chart-bg-hover");
  bottomLineWrapper5.classList.add("chart-bg-hover");
});
bottomLineWrapper4.addEventListener("mouseout", function () {
  bottomLineWrapper0.classList.remove("chart-bg-hover");
  bottomLineWrapper1.classList.remove("chart-bg-hover");
  bottomLineWrapper2.classList.remove("chart-bg-hover");
  bottomLineWrapper3.classList.remove("chart-bg-hover");
  bottomLineWrapper4.classList.remove("chart-bg-hover");
  bottomLineWrapper5.classList.remove("chart-bg-hover");
});
bottomLineWrapper5.addEventListener("mouseover", function () {
  bottomLineWrapper0.classList.add("chart-bg-hover");
  bottomLineWrapper1.classList.add("chart-bg-hover");
  bottomLineWrapper2.classList.add("chart-bg-hover");
  bottomLineWrapper3.classList.add("chart-bg-hover");
  bottomLineWrapper4.classList.add("chart-bg-hover");
  bottomLineWrapper5.classList.add("chart-bg-hover");
});
bottomLineWrapper5.addEventListener("mouseout", function () {
  bottomLineWrapper0.classList.remove("chart-bg-hover");
  bottomLineWrapper1.classList.remove("chart-bg-hover");
  bottomLineWrapper2.classList.remove("chart-bg-hover");
  bottomLineWrapper3.classList.remove("chart-bg-hover");
  bottomLineWrapper4.classList.remove("chart-bg-hover");
  bottomLineWrapper5.classList.remove("chart-bg-hover");
});

//create mouseover event listeners for the pros__wrapper-0 through pros__wrapper-5 elements and a mouseout event listener for hover effect triggers
prosWrapper1.addEventListener("mouseover", function () {
  prosWrapper0.classList.add("chart-bg-hover");
  prosWrapper1.classList.add("chart-bg-hover");
  prosWrapper2.classList.add("chart-bg-hover");
  prosWrapper3.classList.add("chart-bg-hover");
  prosWrapper4.classList.add("chart-bg-hover");
  prosWrapper5.classList.add("chart-bg-hover");
});
prosWrapper1.addEventListener("mouseout", function () {
  prosWrapper0.classList.remove("chart-bg-hover");
  prosWrapper1.classList.remove("chart-bg-hover");
  prosWrapper2.classList.remove("chart-bg-hover");
  prosWrapper3.classList.remove("chart-bg-hover");
  prosWrapper4.classList.remove("chart-bg-hover");
  prosWrapper5.classList.remove("chart-bg-hover");
});
prosWrapper2.addEventListener("mouseover", function () {
  prosWrapper0.classList.add("chart-bg-hover");
  prosWrapper1.classList.add("chart-bg-hover");
  prosWrapper2.classList.add("chart-bg-hover");
  prosWrapper3.classList.add("chart-bg-hover");
  prosWrapper4.classList.add("chart-bg-hover");
  prosWrapper5.classList.add("chart-bg-hover");
});
prosWrapper2.addEventListener("mouseout", function () {
  prosWrapper0.classList.remove("chart-bg-hover");
  prosWrapper1.classList.remove("chart-bg-hover");
  prosWrapper2.classList.remove("chart-bg-hover");
  prosWrapper3.classList.remove("chart-bg-hover");
  prosWrapper4.classList.remove("chart-bg-hover");
  prosWrapper5.classList.remove("chart-bg-hover");
});
prosWrapper3.addEventListener("mouseover", function () {
  prosWrapper0.classList.add("chart-bg-hover");
  prosWrapper1.classList.add("chart-bg-hover");
  prosWrapper2.classList.add("chart-bg-hover");
  prosWrapper3.classList.add("chart-bg-hover");
  prosWrapper4.classList.add("chart-bg-hover");
  prosWrapper5.classList.add("chart-bg-hover");
});
prosWrapper3.addEventListener("mouseout", function () {
  prosWrapper0.classList.remove("chart-bg-hover");
  prosWrapper1.classList.remove("chart-bg-hover");
  prosWrapper2.classList.remove("chart-bg-hover");
  prosWrapper3.classList.remove("chart-bg-hover");
  prosWrapper4.classList.remove("chart-bg-hover");
  prosWrapper5.classList.remove("chart-bg-hover");
});
prosWrapper4.addEventListener("mouseover", function () {
  prosWrapper0.classList.add("chart-bg-hover");
  prosWrapper1.classList.add("chart-bg-hover");
  prosWrapper2.classList.add("chart-bg-hover");
  prosWrapper3.classList.add("chart-bg-hover");
  prosWrapper4.classList.add("chart-bg-hover");
  prosWrapper5.classList.add("chart-bg-hover");
});
prosWrapper4.addEventListener("mouseout", function () {
  prosWrapper0.classList.remove("chart-bg-hover");
  prosWrapper1.classList.remove("chart-bg-hover");
  prosWrapper2.classList.remove("chart-bg-hover");
  prosWrapper3.classList.remove("chart-bg-hover");
  prosWrapper4.classList.remove("chart-bg-hover");
  prosWrapper5.classList.remove("chart-bg-hover");
});
prosWrapper5.addEventListener("mouseover", function () {
  prosWrapper0.classList.add("chart-bg-hover");
  prosWrapper1.classList.add("chart-bg-hover");
  prosWrapper2.classList.add("chart-bg-hover");
  prosWrapper3.classList.add("chart-bg-hover");
  prosWrapper4.classList.add("chart-bg-hover");
  prosWrapper5.classList.add("chart-bg-hover");
});
prosWrapper5.addEventListener("mouseout", function () {
  prosWrapper0.classList.remove("chart-bg-hover");
  prosWrapper1.classList.remove("chart-bg-hover");
  prosWrapper2.classList.remove("chart-bg-hover");
  prosWrapper3.classList.remove("chart-bg-hover");
  prosWrapper4.classList.remove("chart-bg-hover");
  prosWrapper5.classList.remove("chart-bg-hover");
});

//create mouseover event listeners for the cons__wrapper-0 through cons__wrapper-5 elements and a mouseout event listener for hover effect triggers
consWrapper1.addEventListener("mouseover", function () {
  consWrapper0.classList.add("chart-bg-hover");
  consWrapper1.classList.add("chart-bg-hover");
  consWrapper2.classList.add("chart-bg-hover");
  consWrapper3.classList.add("chart-bg-hover");
  consWrapper4.classList.add("chart-bg-hover");
  consWrapper5.classList.add("chart-bg-hover");
});
consWrapper1.addEventListener("mouseout", function () {
  consWrapper0.classList.remove("chart-bg-hover");
  consWrapper1.classList.remove("chart-bg-hover");
  consWrapper2.classList.remove("chart-bg-hover");
  consWrapper3.classList.remove("chart-bg-hover");
  consWrapper4.classList.remove("chart-bg-hover");
  consWrapper5.classList.remove("chart-bg-hover");
});
consWrapper2.addEventListener("mouseover", function () {
  consWrapper0.classList.add("chart-bg-hover");
  consWrapper1.classList.add("chart-bg-hover");
  consWrapper2.classList.add("chart-bg-hover");
  consWrapper3.classList.add("chart-bg-hover");
  consWrapper4.classList.add("chart-bg-hover");
  consWrapper5.classList.add("chart-bg-hover");
});
consWrapper2.addEventListener("mouseout", function () {
  consWrapper0.classList.remove("chart-bg-hover");
  consWrapper1.classList.remove("chart-bg-hover");
  consWrapper2.classList.remove("chart-bg-hover");
  consWrapper3.classList.remove("chart-bg-hover");
  consWrapper4.classList.remove("chart-bg-hover");
  consWrapper5.classList.remove("chart-bg-hover");
});
consWrapper3.addEventListener("mouseover", function () {
  consWrapper0.classList.add("chart-bg-hover");
  consWrapper1.classList.add("chart-bg-hover");
  consWrapper2.classList.add("chart-bg-hover");
  consWrapper3.classList.add("chart-bg-hover");
  consWrapper4.classList.add("chart-bg-hover");
  consWrapper5.classList.add("chart-bg-hover");
});
consWrapper3.addEventListener("mouseout", function () {
  consWrapper0.classList.remove("chart-bg-hover");
  consWrapper1.classList.remove("chart-bg-hover");
  consWrapper2.classList.remove("chart-bg-hover");
  consWrapper3.classList.remove("chart-bg-hover");
  consWrapper4.classList.remove("chart-bg-hover");
  consWrapper5.classList.remove("chart-bg-hover");
});
consWrapper4.addEventListener("mouseover", function () {
  consWrapper0.classList.add("chart-bg-hover");
  consWrapper1.classList.add("chart-bg-hover");
  consWrapper2.classList.add("chart-bg-hover");
  consWrapper3.classList.add("chart-bg-hover");
  consWrapper4.classList.add("chart-bg-hover");
  consWrapper5.classList.add("chart-bg-hover");
});
consWrapper4.addEventListener("mouseout", function () {
  consWrapper0.classList.remove("chart-bg-hover");
  consWrapper1.classList.remove("chart-bg-hover");
  consWrapper2.classList.remove("chart-bg-hover");
  consWrapper3.classList.remove("chart-bg-hover");
  consWrapper4.classList.remove("chart-bg-hover");
  consWrapper5.classList.remove("chart-bg-hover");
});
consWrapper5.addEventListener("mouseover", function () {
  consWrapper0.classList.add("chart-bg-hover");
  consWrapper1.classList.add("chart-bg-hover");
  consWrapper2.classList.add("chart-bg-hover");
  consWrapper3.classList.add("chart-bg-hover");
  consWrapper4.classList.add("chart-bg-hover");
  consWrapper5.classList.add("chart-bg-hover");
});
consWrapper5.addEventListener("mouseout", function () {
  consWrapper0.classList.remove("chart-bg-hover");
  consWrapper1.classList.remove("chart-bg-hover");
  consWrapper2.classList.remove("chart-bg-hover");
  consWrapper3.classList.remove("chart-bg-hover");
  consWrapper4.classList.remove("chart-bg-hover");
  consWrapper5.classList.remove("chart-bg-hover");
});
