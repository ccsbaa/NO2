//* Add PayPal Email
simpleCart({
  checkout: {
    type: "PayPal",
    email: "ccsbaa@gmail.com"
  }
});

//* Add shopping cart dropdown in header
jQuery(document).ready(function () {
  $('.showCart').on('click', function () {
    $('#cartPopover').slideToggle('fast');
    $('.showCart span.dropdown').toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
  })
});

//* Define spreadsheet URL (make sure you add the #gid=0 for the sheet you want to use)
//* var googleSheetURI = 'https://docs.google.com/spreadsheets/d/11BNDZeQ4nqwVA-BYViMeM1QfWBtqJT-hqKpc6hh22aM/edit#gid=0';
var googleSheetURI = 'https://docs.google.com/spreadsheets/d/1Tl70IF6NJkT1LHSz_1rvJyioYQA1Mlr7pkmN9pqFn7Q/edit#gid=1348553966';
//* Compile the Handlebars template for HR leaders
var HRTemplate = Handlebars.compile($('#hr-template').html());

//* Load products from spreadsheet
$('#products').sheetrock({
  url: googleSheetURI,
  query: "select A,B,C,D,E",
  rowTemplate: HRTemplate
});
