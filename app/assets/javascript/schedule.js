$(document).ready(function() {
  $('input[type="text"]').on('input', function() {
    var value = $(this).val();
    if (value !== '') {
      $(this).removeClass('error');
    }
  });
   $('form').submit(function(event) {
    event.preventDefault();
    var formData = $(this).serialize();
    var url = $(this).attr('action');
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      success: function(response) {
        alert('Schedule saved successfully!');
      },
      error: function(response) {
        var errors = response.responseJSON;
        $.each(errors, function(index, error) {
          var input = $('[name="'+ error.field +'"]');
          input.addClass('error');
          alert(error.message);
        });
      }
    });
  });
});
