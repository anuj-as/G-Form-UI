$(document).ready(() => {
  $(".input-field").focusout(() => {
    let inputValue = $(this).val();
    if (inputValue === "") {
      $(this).removeClass("has-value");
    } else {
      $(this).addClass("has-value");
    }
  });
});