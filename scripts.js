
$('#save-btn').on('click', function() {
  var $photoTitle = $('#title-input').val();
  var $photoCaption = $('#caption-input').val();
  var $photoImage = $('#file').val();
  var $cardCatalog = $('.card-container');

  $cardCatalog.prepend(`<article class="photo-card">
    <h3>` + $photoTitle + `</h3>
    <div class="card-image"></div>
    <p>` + $photoCaption +`</p>`);
});
