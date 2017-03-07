
var win_array = [

  //horizontal
  [$('#1').text(), $('#2').text(), $('#3').text()],
  [$('#4').text(), $('#5').text(), $('#6').text()],
  [$('#7').text(), $('#8').text(), $('#9').text()],

  //vertical
  [$('#1').text(), $('#4').text(), $('#7').text()],
  [$('#2').text(), $('#5').text(), $('#8').text()],
  [$('#3').text(), $('#6').text(), $('#9').text()],

  [$('#1').text(), $('#5').text(), $('#9').text()],
  [$('#3').text(), $('#5').text(), $('#7').text()]
];


function playerWon(winner) {

  if ($('#1').text() && $('#2').text() && $('#3').text()){
    return true;
  }
  else if ($('#4').text() && $('#5').text() && $('#6').text()){
    return true;
  }

  else if ($('#7').text() && $('#8').text() && $('#9').text()){
    return true;
  }

  else if ($('#1').text() && $('#4').text() && $('#7').text()){
    return true;
  }

  else if ($('#2').text() && $('#5').text() && $('#8').text()){
    return true;
  }

  else if ($('#3').text() && $('#6').text() && $('#9').text()){
    return true;
  }
  else if ($('#1').text() && $('#5').text() && $('#9').text()){
    return true;
  }

  else if ($('#3').text() && $('#5').text() && $('#7').text()){
    return true;
  }
  else {
    return false;
  }

}

if (playerWon === true) {
  alert('player has won!');
}

// var one = $('#1').text();
// var two = $('#2').text();
// var three = $('#3').text();
// var four = $('#4').text();
// var five = $('#5').text();
// var six = $('#6').text();
// var seven = $('#7').text();
// var eight = $('#8').text();
// var nine = $('#9').text();




// $('tr').map(function()
//  { return $(this).text();
//  });


// var Turn = "X";
// $("#turns").html(Turn);
//
// $(".tile").click(function(){
//
//   $(this).html(Turn);
//   if(Turn === "X"){
//     Turn = "O";
//   }
//   else {
//     Turn = "X";
//    }
//
//
//
//   }
//
// $("#turns").html(Turn)
//  });
//
//
// $("tr, td").click(function(){
//   $(".tile").html("");
// });
