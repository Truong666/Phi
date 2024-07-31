document.addEventListener("click", function() {
    document.querySelector(".heart").style.fontSize = "150px";
    setTimeout(function() {
      document.querySelector(".heart").style.fontSize = "100px";
    }, 2000);
  });