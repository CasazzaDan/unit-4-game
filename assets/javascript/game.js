$( document ).ready(function(){
    // Generate the number the player needs to guess
    var Random=Math.floor(Math.random()*120)
    console.log(Random)
    $('#randomNumber').text(Random);

    // generating the values for the gems
    var num1= Math.floor(Math.random()*12)
    console.log('gem 1: ' + num1)
    var num2= Math.floor(Math.random()*12)
    console.log('gem 2: ' + num2)
    var num3= Math.floor(Math.random()*12)
    console.log('gem 3: ' + num3)
    var num4= Math.floor(Math.random()*12)
    console.log('gem 4: ' + num4)
   
    //  Decaring variables for tallies
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  $('#wins').text('Wins: ' + wins);
  $('#losses').text('Losses: ' + losses);
  
  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*120);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*12);
        console.log('gem 1: ' + num1)
        num2= Math.floor(Math.random()*12);
        console.log('gem 2: ' + num2)
        num3= Math.floor(Math.random()*12);
        console.log('gem 3: ' + num3)
        num4= Math.floor(Math.random()*12);
        console.log('gem 4: ' + num4)
        userTotal= 0;
        $('#userNumber').text(userTotal);
        } 

   //add the wins 
  function win(){
  alert("You won!");
    wins++; 
    $('#wins').text('Wins: ' + wins);
    reset();
  }

  //add the losses 
  function loser(){
  alert ("You lose!");
    losses++;
    $('#losses').text('Losses: ' + losses);
    reset()
  }

  //sets up click for jewels
    $('#ruby').on ('click', function(){
      userTotal = userTotal + num1;
      $('#userNumber').text(userTotal); 
            
      //sets win/lose conditions
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  

    $('#opal').on ('click', function(){
      userTotal = userTotal + num2;
      $('#userNumber').text(userTotal); 

          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          } 
    }) 

    $('#sapphire').on ('click', function(){
      userTotal = userTotal + num3;
      $('#userNumber').text(userTotal);

  //sets win/lose conditions
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#diamond').on ('click', function(){
      userTotal = userTotal + num4;
      $('#userNumber').text(userTotal); 
        
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 