$("#termekek-link").on("click", function() {
  const termekek = $("#termekek").position().top;

  $("html, body").animate(
    {
      scrollTop: termekek
    },
    900
  );
});
$("#elerhetoseg-link").on("click", function() {
    const elerhetoseg = $("#elerhetoseg").position().top;
  
    $("html, body").animate(
      {
        scrollTop: elerhetoseg
      },
      900
    );
  });

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
$("#myBtn").on("click", function() {
    const elerhetoseg = $("#elerhetoseg").position().top;
  
    $("html, body").animate(
      {
        scrollTop: 0
      },
      600
    );
  });