$(document).ready(function() {
    'use strict';
    
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

    $('.project-content').on('click', function() {
        $('.project-content').removeClass('active');
        $(this).addClass('active');
        var imgSrc = $(this).data('img');
        $('#project-image').attr('src', imgSrc);
    });

    $('.read-more-btn').on('click', function() {
        window.open('https://fylehq.com', '_blank');
    });

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

    $('.custom-indicators .dot').on('click', function() {
        currentIndex = $(this).data('slide-to');
        updateImage(currentIndex);
    });

    $('#carouselImage').hover(function() {
        $(this).css('transform', 'scale(1.2)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });

    $('.text-container').on('click', function() {
        $('.text-container').removeClass('selected');
        $(this).addClass('selected');
    });
});
