$(document).ready(function() {
    // Form submission
    $('#contactForm').on('submit', function(event) {
      event.preventDefault();
      $.ajax({
        url: 'https://getform.io/f/zaxdeypa',
        method: 'POST',
        data: $(this).serialize(),
        success: function(response) {
          alert('Form submitted successfully');
          $('#contactModal').modal('hide');
        },
        error: function(error) {
          alert('Error submitting form');
        }
      });
    });
  
    // Change project image on content click
    $('.project-content').on('click', function() {
      var imgSrc = $(this).data('img');
      $('#project-image').attr('src', imgSrc);
    });
  
    // Read more button click
    $('.read-more-btn').on('click', function() {
      window.open('https://fylehq.com', '_blank');
    });
  });
  
  $(document).ready(function () {
    var images = ['img/1-2.png', 'img/2-2.png', 'img/3-2.png'];
    var currentIndex = 0;

    function updateImage(index) {
        $('#carouselImage').attr('src', images[index]);
        updateDots(index);
    }

    function updateDots(index) {
        $('.custom-indicators .dot').removeClass('active').attr('src', 'img/2.svg');
        $('.custom-indicators .dot').eq(index).addClass('active').attr('src', 'img/1.svg');
    }

    $('.custom-indicators .dot').click(function () {
        currentIndex = $(this).data('slide-to');
        updateImage(currentIndex);
    });

    $('#carouselImage').hover(function() {
        $(this).css('transform', 'scale(1.2)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });
});
