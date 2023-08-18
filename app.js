
  document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.getElementById('about');

    // Function to handle scroll event
    function handleScroll() {
      const sectionTop = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Calculate the distance from the top of the viewport to the section
      const distanceFromTop = sectionTop - windowHeight + 100;

      // If the section is in the viewport, add the 'fade-out' class to the section
      if (distanceFromTop <= 0) {
        aboutSection.classList.add('fade-out');
      } else {
        aboutSection.classList.remove('fade-out');
      }
    }

    // Attach the scroll event handler
    window.addEventListener('scroll', handleScroll);
  });

  $(document).ready(function () {
    $(window).scroll(function () {
      $(".project").each(function () {
        var elementPosition = $(this).offset().top;
        var scrollPosition = $(window).scrollTop();
        if (elementPosition - 400 < scrollPosition) {
          $(this).css("opacity", "1");
          $(this).css("transform", "translateY(0)");
        }
      });
    });
  });