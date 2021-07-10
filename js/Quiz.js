class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

   play(){
    //write code here to hide question elements


    //write code to change the background color here
     background("lightblue")
  
   
    //write code to show a heading for showing the result of Quiz

    if(question.answered === 1){
      textSize(40)
      text("Results of Quiz" , 300 , 40);
      
    }
    
    //call getContestantInfo( ) here

     Contestant.getPlayerInfo();
  
    //write condition to check if contestantInfor is not undefined

    if (allContestants !== undefined) {
     
      var x = 250;
      var y = 300;
      textSize(25);
      var index = 0;
      for (var plr in allContestants) {
       
        if(allContestants[plr].answer ==="2"){
          fill("green");
        }else{
          fill("red")
        }
        //text(plr.name, x, y )
        text(allContestants[plr].name, x, y)
        console.log("CRAZY!!!!!!!!!")
        text(allContestants[plr].answer, x + 250, y);
        y += 50;

       
      }
       //write code to add a note here
       textSize(22)
       text("Contestants who answered correctly are highlighted in green color!" , 100 , 230);
      
    }

   
  
  
    //write code to highlight contest who answered correctly
    
  }



}
