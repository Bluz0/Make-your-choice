

let the_first = document.getElementById('one');
let second = document.getElementById('two');
let third = document.getElementById('three');
let fourth = document.getElementById('four');
let fifth = document.getElementById('five');


let can_clic = true;
let choice = 0;

the_first.addEventListener('click', function handleClick() {
    
    if (can_clic==true){
        console.log('element clicked');
        the_first.style.backgroundColor = "#FB7718";
        the_first.style.color = "white";

        choice = 1;

        second.style.backgroundColor = "#282f39";
        third.style.backgroundColor = "#282f39";
        fourth.style.backgroundColor = "#282f39";
        fifth.style.backgroundColor = "#282f39";
    }

  });

second.addEventListener('click', function handleClick() {
    
    if (can_clic==true){
        console.log('element clicked');
        second.style.backgroundColor = "#FB7718";
        second.style.color = "white";
        choice = 2;
        the_first.style.backgroundColor = "#282f39";
        third.style.backgroundColor = "#282f39";
        fourth.style.backgroundColor = "#282f39";
        fifth.style.backgroundColor = "#282f39";

    }

  });

third.addEventListener('click', function handleClick() {
    
    if (can_clic==true){
        console.log('element clicked');
        third.style.backgroundColor = "#FB7718";
        third.style.color = "white";
        choice = 3;
        the_first.style.backgroundColor = "#282f39";
        second.style.backgroundColor = "#282f39";
        fourth.style.backgroundColor = "#282f39";
        fifth.style.backgroundColor = "#282f39";

    }
    

  });

fourth.addEventListener('click', function handleClick() {
    
    if (can_clic==true){
        console.log('element clicked');
        fourth.style.backgroundColor = "#FB7718";
        fourth.style.color = "white";
        choice = 4;
        the_first.style.backgroundColor = "#282f39";
        second.style.backgroundColor = "#282f39";
        third.style.backgroundColor = "#282f39";
        fifth.style.backgroundColor = "#282f39";

    }
    

  });

fifth.addEventListener('click', function handleClick() {
    
    if (can_clic==true){
        console.log('element clicked');
        fifth.style.backgroundColor = "#FB7718";
        fifth.style.color = "white";
        choice = 5;
        the_first.style.backgroundColor = "#282f39";
        second.style.backgroundColor = "#282f39";
        fourth.style.backgroundColor = "#282f39";
        third.style.backgroundColor = "#282f39";

    }
    

  });


let sub = document.getElementById('button')

sub.addEventListener('click', function handleClick() {
    console.log("Click button");

    if (choice==1){
        window.location.href="page1.html";
    }
    else if (choice==2){
        window.location.href="page2.html";
    }
    else if (choice==3){
        window.location.href="page3.html";
    }
    else if (choice==4){
        window.location.href="page4.html";
    }
    else if(choice==5){
        window.location.href="page5.html";
    
    }


});
