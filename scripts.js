
$('#save-btn').on('click', function() {
addCard();
});

function addCard() {
  var $photoTitle = $('#title-input').val();
  var $photoCaption = $('#caption-input').val();
  var $photoImageBad = $('#file').val();
  var $photoImage = $photoImageBad.replace(/^.*\\/, "");
  var $cardCatalog = $('.card-container');
  console.log($photoImage)
  $cardCatalog.prepend(`<article class="photo-card"><h3>${$photoTitle}</h3><img class="card-image" src="photos/${$photoImage}"><p class="card-cap">${$photoCaption}</p>   <div class= "button-icons"><div class="delete-btn card-btns"></div><div class="favorite-btn card-btns"></div></div></article>`);
};

$('.card-container').on('click', '.delete-btn', function(){
  $(this).parent().parent().remove()
  console.log($(this).parent().parent());
})

// function checkComplete() {
//   var $photoTitle = $('#title-input').val();
//   var $photoCaption = $('#caption-input').val();
//   var $photoImage = $('#file').val();
//   var $saveBtn = $('#save-btn');
//   if ($photoTitle === "" || $photoCaption === ""  || $photoImage === "" ) {
//     $('#save-btn').prop('disabled', 'disabled')
//   } else if ($photoTitle !== "" || $photoCaption !== ""  || $photoImage !== "" ) {
//     $('#save-btn').prop('disabled', 'enable'))
//   }
// }

$('.card-container').on('click', '.favorite-btn', function(){
  var $pictureCard = $('.photo-card');
  var $favButton = $('.favorite-btn');
  $(this).parent().parent().toggleClass('favorite-background')
  $(this).parent().siblings().toggleClass('favorite-background')

  $(this).toggleClass('favorite-color')
  })



// $('body').keyup(function(){
//   checkComplete();
// })
