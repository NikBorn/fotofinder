$('#save-btn').on('click', function() {
addCard();
resetForm();
});

function addCard() {
  var $photoTitle = $('#title-input').val();
  var $photoCaption = $('#caption-input').val();
  var $photoImageBad = $('#file').val();
  var $photoImage = $photoImageBad.replace(/^.*\\/, "");
  var $cardCatalog = $('.card-container');
  $cardCatalog.prepend(`<article class="photo-card"><h3>${$photoTitle}</h3><img class="card-image" width="250px" height="150px" src="photos/${$photoImage}"><p class="card-cap">${$photoCaption}</p>   <div class= "button-icons"><div class="delete-btn card-btns"></div><div class="favorite-btn card-btns"></div></div></article>`);
};

function resetForm() {
$('#title-input').val("");
$('#caption-input').val("");
$('#file').val("");
$('#save-btn').prop('disabled', true)
}

$('.card-container').on('click', '.delete-btn', function(){
  $(this).parent().parent().remove();
})

function checkComplete() {
  if ($('#title-input').val().length > 0 && $('#caption-input').val().length > 0  && $('#file').val().length > 0 ) {
    $('#save-btn').prop('disabled', false);
  } else {
    $('#save-btn').prop('disabled', true);
  }
}

function toggleFavorite() {
  var $pictureCard = $('.photo-card');
  var $favButton = $('.favorite-btn');
  $(this).parent().parent().toggleClass('favorite-background');
  $(this).parent().siblings().toggleClass('favorite-background');
  $(this).toggleClass('favorite-color');
}

$('.card-container').on('click', '.favorite-btn', function(){
  toggleFavorite()
});

$('#title-input').blur(function(){
  checkComplete();
});

$('#caption-input').blur(function(){
  checkComplete();
});

$('#file').change(function(){
  checkComplete();
});
