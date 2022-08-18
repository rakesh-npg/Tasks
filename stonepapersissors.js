function computer(){
    let val = true 
    let score = 0
    while(val) 
    {
    let randomVal = Math.floor(Math.random() * 3) 
    let userval = prompt('Rock 0 paper 1 scirror 2 and 3 to quit')
    userval = parseInt(userval)
    switch(userval) {
        
        case 0 :
            if (randomVal == 3) {alert('win')
            score += 1} 
            else if (randomVal == 1) {alert ('lose')
            score -= 1}
            else alert('draw')
            alert('score' + score)
            break ;
        case 1: 
            if (randomVal == 0) { alert('win') 
            score+= 1}
            else if (randomVal == 2) {alert ('lose') 
            score -=1}
            else alert('draw')
            alert('score' + score)
            break ;
        case 2: 
            if (randomVal == 1) {alert('win') 
            score +=1 }
            else if (randomVal == 0) {alert ('lose')
            score -= 1}
            else alert('draw')
            alert('score' + score)
            break 
        case 3: 
            val = false; 
            break; 
        default: 
        alert('enter proper value');
    };
}

};

computer() 

