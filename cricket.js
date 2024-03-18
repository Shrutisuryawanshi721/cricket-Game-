let compChoice;
let scoreStr = localStorage.getItem('score');
let score;

 resetScore (scoreStr);

 function resetScore (scoreStr){
score= scoreStr ? JSON.parse(scoreStr):{

  win :0,
  lost :0,
  tie : 0,

};

score.displayScore = function(){
  return`Score :won: ${score.win},
  Lost : ${score.lost},
  tie : ${score.tie}
  `
};
showResult();
}
function generateCompChoice(){
  let randomNo=Math.random()*3;
  if(randomNo>0 && randomNo<=1){
    return 'Bat';
  }
  else if(randomNo >1 && randomNo<=2){
    return 'Ball';

  }
  else{
    return 'Stump';
  }
} 
  function getResult(userMove,compMove){
    if(userMove==='Bat'){
      if(compMove==='Ball'){
        score.win++;
        return 'user Win... 😄 ';
      }
      else if(compMove==='Bat'){
        score.tie++;
        return 'its tie... 😐';
      }
      else if(compMove==='Stump'){
        score.lost++;
        return'computer win.. 😥'
      }
    }
      else if(userMove==='Ball'){
        if(compMove==='Ball'){
          score.tie++;
          return 'its tie ...😐';
        }
        else if(compMove==='Bat'){
          score.lost++;
          return 'computer win.. 😥'
        }
        else if(compMove='Stump'){
          score.win++;
          return 'User Win.. 😄'
        }
      }
        else if(userMove=='Stump'){
          if(compMove==='Ball'){
            score.lost++;
            return 'computer win... 😥';
          }
          else if(compMove==='Bat'){
            score.win++;
            return 'user win... 😄';
        
          }
          else if(compMove==='Stump'){
            score.tie++;
            return 'its a tie ... 😐';
          }
          

        }
      }
    
   
  function showResult(userMove,compMove,result){
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('#userMove').innerText=userMove  ? `You Have Chosen ${userMove}`:'';
    document.querySelector(`#compMove`).innerText= compMove ?`Computer Choise is ${compMove}`:'';
    document.querySelector(`#result`).innerText=result ||  '';
    document.querySelector(`#score`).innerText=score.displayScore();
     }