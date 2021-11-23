/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


$(document).ready(function(){
  var disabledForm = document.getElementById("answerDetails");
  var disabledBTN = document.getElementById("addAnother");
  var addEntity = document.getElementById("addEntityType");
  var masterSearch = document.getElementById("masterSearch");

    $('#entityType').on('change', function() {
      if ( this.value == 'person')
      {
        disabledForm.classList.remove("disabled");
        disabledBTN.classList.remove("disabled");
        masterSearch.classList.remove("disabled");
        // $("#answerDetails").show();
        // $("#answerPlaceholder").hide();
      }
      else
      {
        // $("#answerDetails").hide();
        // $("#answerPlaceholder").show();
      }
    });
});

function showOnClick() {
  var showOnClick = document.getElementById("showFilters");
  var element = document.getElementById("filtersAccordianBTN");
  if (showOnClick.style.display === "block") {
    showOnClick.style.display = "none";
    element.classList.remove("filtersAccordianExpanded");

  } else {
    showOnClick.style.display = "block";
    element.classList.add("filtersAccordianExpanded");
  }
}


$(document).ready(function() {
    $("body").children().each(function() {
        $(this).html($(this).html().replace(/&#8232;/g," "));
    });
});
