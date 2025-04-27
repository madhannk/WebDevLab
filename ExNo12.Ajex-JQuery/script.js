// script.js
$(document).ready(function () {
    $('#loadContent').click(function () {
      $.ajax({
        url: 'content.html',
        method: 'GET',
        success: function (response) {
          $('#loading').html(response);
          $('#loading').find('p').css('color', 'green');
          $('#loading').append('<p>New content updated</p>');
        },
        error: function (xhr, status, error) {
          $('#loading').html('<p>Error loading content. Please try again.</p>');
          console.error('AJAX Error:', status, error);
        }
      });
    });
  });
  