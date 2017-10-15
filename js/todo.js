$(document).ready(function(){
  // call functions here
  submitForm()
});

// define functions here
function submitForm() {
  $('form').on('submit', function(e){
    let input = $('input#item').val()
    $('ol').append(`<li>${input}</li>`)
    e.preventDefault()
  })
}
