function openMenu() {
  var menu = document.getElementById('mobile-menu-section')
    if (menu.style.height === '0px') {
        menu.style.height = '150px';
        menu.style.opacity = '1';
    } else {
        menu.style.height = '0px';
        menu.style.opacity = '0';
    }
};

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(':focus')) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

var modal = document.getElementById('form-modal');
var background = document.getElementById('grey-background');

function toggleModal() {
modal.className.includes('custom-hide')? modal.className = modal.className.replace('custom-hide','') : modal.className += 'custom-hide ';
background.className.includes('custom-hide')? background.className = background.className.replace('custom-hide','') : background.className += 'custom-hide ';
// background.className.includes("hide")? modal.className -= 'hide' : modal.className += 'hide';
  }

