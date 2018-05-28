
$( ".menu_but img" ).click(function() {
  $( ".login-block_popap_wrap" ).toggle( "slow", function() {
    // Animation complete.
  });
});
$( ".close" ).click(function() {
  $( ".login-block_popap_wrap" ).toggle( "slow", function() {
    // Animation complete.
  });
});


if ($(".login-block_toggle_wrap")[0]){
    // Do something if class exists
    $( ".menu_but_dropdown img" ).click(function() {
  $( ".login-block_toggle_wrap" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});
} else {
    // Do something if class does not exist

$( ".menu_but_dropdown img" ).click(function() {
  $( ".login-block" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});
}

$( ".menu_dropdown_list" ).click(function() {
  $( ".menu_toggle_wrap" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

$( ".dropdown-menu-list-button" ).click(function() {
  $(this).next().slideToggle( "slow", function() {
    // Animation complete.
  });
});

$( ".custom_label" ).click(function() {
  $( ".custom_label" ).toggleClass( "label_checked" );
  if ($('#question_checkbox').checked) {
      $('#question_checkbox').checked = true;
  } else {
      $('#question_checkbox').checked = false;
  };
});

$(document).click(function(e){
    if($(e.target).closest(".dropdown-menu-list-wrap").length===0){
        $(".dropdown-menu-list").slideUp( "slow", function() {
        // Animation complete.
      });
    };

  if($('.menu_but_dropdown').is(':visible')) {
    if($(e.target).closest(".col-xs-3").length===0){
        $(".login-block").slideUp( "slow", function() {
        // Animation complete.
      });
    };
    };
  });

  


// $( "<a href='#'><span class='string_edit'>[edit]</span></a>").insertAfter( ".my_account-edit" );