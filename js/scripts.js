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
  