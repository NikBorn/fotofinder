
$('#save-btn').on('click', function() {
addCard();
});

function addCard() {
  var $photoTitle = $('#title-input').val();
  var $photoCaption = $('#caption-input').val();
  var $photoImage = $('#file').val();
  var $cardCatalog = $('.card-container');

  $cardCatalog.prepend(`<article class="photo-card"><h3>${$photoTitle}</h3><div class="card-image"></div><p>${$photoCaption}</p>`);
};

function checkComplete() {
  var $photoTitle = $('#title-input').val();
  var $photoCaption = $('#caption-input').val();
  var $photoImage = $('#file').val();
  var $saveBtn = $('#save-btn');
  if ($photoTitle === "" || $photoCaption === ""  || $photoImage === "" ) {
    $('#save-btn').prop('disabled', true)
  } else {
    $(this).prop('disabled', false)
  }
}

$('.card-container').on('click', '.favorite-btn', function(){
  var $pictureCard = $('.photo-card');
  var $favButton = $('.favorite-btn');
  this.$pictureCard.css({
    backgroundColor: 'blue'
  })
  $favButton.toggleClass('favorite-color')
})

$('.card-container').on('click', '.delete-btn', function(){
  $(this).parents('.photocard').remove()
  console.log(this);
})

$('body').keyup(function(){
  checkComplete();
})
