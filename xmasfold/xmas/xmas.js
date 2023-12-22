// MOVING CAT FOR BIBBLE
function moveCat() {
    var cat = document.getElementById("cat2");

    var originalTop = cat.style.top;
    var originalLeft = cat.style.left;

    cat.style.top = '450px'; 
    cat.style.left = '550px'; 

    setTimeout(function() {
        cat.style.top = originalTop;
        cat.style.left = originalLeft;
    }, 3000); 
}
document.getElementById("cat2").addEventListener("click", moveCat);

// MOVING FLOWER FOR ARESHVA
function moveFlower() {
    var flower = document.getElementById("flower");

    var originalTop = flower.style.top;
    var originalLeft = flower.style.left;

    flower.style.top = '110px'; 
    flower.style.left = '970px'; 

    setTimeout(function() {
        flower.style.top = originalTop;
        flower.style.left = originalLeft;
    }, 3000); 
}
document.getElementById("flower").addEventListener("click", moveFlower);

// MOVING POSTER FOR DABABY
function movePoster() {
    var poster = document.getElementById("poster");

    var originalTop = poster.style.top;
    var originalLeft = poster.style.left;

    poster.style.top = '120px'; 
    poster.style.left = '1100px'; 

    setTimeout(function() {
        poster.style.top = originalTop;
        poster.style.left = originalLeft;
    }, 3000); 
}
document.getElementById("poster").addEventListener("click", movePoster);

// MOVING PASTA FOR BABY
function movePasta() {
    var pasta = document.getElementById("pasta");

    var originalTop = pasta.style.top;
    var originalLeft = pasta.style.left;

    pasta.style.top = '550px'; 
    pasta.style.left = '990px'; 

    setTimeout(function() {
        pasta.style.top = originalTop;
        pasta.style.left = originalLeft;
    }, 3000); 
}
document.getElementById("pasta").addEventListener("click", movePasta);

// MOVING BOWL FOR TURTLES
function moveBowl() {
    var bowl = document.getElementById("bowl");

    var originalTop = bowl.style.top;
    var originalLeft = bowl.style.left;

    bowl.style.top = '745px'; 
    bowl.style.left = '50px'; 

    setTimeout(function() {
        bowl.style.top = originalTop;
        bowl.style.left = originalLeft;
    }, 3000); 
}
document.getElementById("bowl").addEventListener("click", moveBowl);

// MOVING BIN FOR WOODCHUCK
function moveBin() {
    var cat = document.getElementById("bin");

    var originalTop = bin.style.top;
    var originalLeft = bin.style.left;

    bin.style.top = '630px'; 
    bin.style.left = '1250px'; 

    setTimeout(function() {
        bin.style.top = originalTop;
        bin.style.left = originalLeft;
    }, 3000); 
}
document.getElementById("bin").addEventListener("click", moveBin);

// MOVING BLIND FOR MISSCARRIAGE
function moveBlind1() {
    var blind1 = document.getElementById("blind1");

    var originalTop = blind1.style.top;
    var originalLeft = blind1.style.left;

    blind1.style.top = '140px'; 
    blind1.style.left = '500px'; 


    setTimeout(function() {
        blind1.style.top = originalTop;
        blind1.style.left = originalLeft;
    }, 3000); 
}
document.getElementById("blind1").addEventListener("click", moveBlind1);

// MOVING MONITOR FOR BABOONS
function moveMonitor() {
    var monitor = document.getElementById("monitor");

    var originalTop = monitor.style.top;
    var originalLeft = monitor.style.left;

    monitor.style.top = '300px'; 
    monitor.style.left = '1250px'; 


    setTimeout(function() {
        monitor.style.top = originalTop;
        monitor.style.left = originalLeft;
    }, 3000); 
}
document.getElementById("monitor").addEventListener("click", moveMonitor);


//MOVE GOLDFISH FOR ANKELT
function moveGoldfish() {
    var goldfish = document.getElementById("goldfish");

    var originalTop = goldfish.style.top;
    var originalLeft = goldfish.style.left;

    goldfish.style.top = '450px'; 
    goldfish.style.left = '570px'; 

    setTimeout(function() {
        goldfish.style.top = originalTop;
        goldfish.style.left = originalLeft;
    }, 3000); 
}
document.getElementById("goldfish").addEventListener("click", moveGoldfish);


//MOVE SHELF FOR BOY
function moveShelf() {
    var shelf = document.getElementById("shelf");

    var originalTop = shelf.style.top;
    var originalLeft = shelf.style.left;

    shelf.style.top = '140px'; 
    shelf.style.left = '300px';

    setTimeout(function() {
        shelf.style.top = originalTop;
        shelf.style.left = originalLeft;
    }, 3000); 
}
document.getElementById("shelf").addEventListener("click", moveShelf);

//TO-DO LIST
document.getElementById("todoIcon").addEventListener("click", function() {
    var todoList = document.getElementById("todoList");
    todoList.style.display = (todoList.style.display == 'block') ? 'none' : 'block';
});

//CLICKING BIBBLE
document.querySelector('.bibble').addEventListener('click', function() {
    var audio = document.getElementById('clickSound');
    audio.play();

    var messageDiv = document.getElementById('message');
    messageDiv.style.display = 'block'; 

    setTimeout(function() {
        messageDiv.style.display = 'none';
    }, 3000); 
    console.log('Bibble clicked'); 

    // check off the 'Bibble' task 
    var bibbleCheckbox = document.getElementById("bibbleCheckbox");
    bibbleCheckbox.checked = true;
    document.getElementById("taskBibble").style.textDecoration = "line-through";
    this.style.display = 'none';
});

//CLICKING BOY
document.querySelector('.boy').addEventListener('click', function() {
    var audio = document.getElementById('clickSound');
    audio.play();

    var messageDiv = document.getElementById('message3');
    messageDiv.style.display = 'block'; 

    setTimeout(function() {
        messageDiv.style.display = 'none';
    }, 3000); 
    console.log('Boy clicked'); 

    // check off the 'Boy' task
    var boyCheckbox = document.getElementById("boyCheckbox");
    boyCheckbox.checked = true;
    document.getElementById("taskBoy").style.textDecoration = "line-through";
    this.style.display = 'none';
});

//CLICKLING TV
document.querySelector('.pole').addEventListener('click', function() {
    var audio = document.getElementById('clickSound');
    audio.play();

    var messageDiv = document.getElementById('message1');
    messageDiv.style.display = 'block'; 
    setTimeout(function() {
        messageDiv.style.display = 'none';
    }, 3000);
    console.log('TV clicked');
    
    // check off the 'TV' task 
    var tvCheckbox = document.getElementById("tvCheckbox");
    tvCheckbox.checked = true;
    document.getElementById("taskTV").style.textDecoration = "line-through";
    this.style.display = 'none';
    var tvElement = document.querySelector('.tv');
    if (tvElement) {
        tvElement.style.display = 'none';
    }
});

//CLICKING BABY
document.querySelector('.baby').addEventListener('click', function() {
    var audio = document.getElementById('clickSound');
    audio.play();

    var messageDiv = document.getElementById('message2');
    messageDiv.style.display = 'block'; // Show the message
    setTimeout(function() {
        messageDiv.style.display = 'none';
    }, 3000);
    console.log('Baby clicked');

    // Check off the 'Baby' task in the to-do list
    var babyCheckbox = document.getElementById("babyCheckbox");
    babyCheckbox.checked = true;
    document.getElementById("taskBaby").style.textDecoration = "line-through";
    this.style.display = 'none';
});


//CLICKING MISSCARRIAGE
document.querySelector('.misscarriage').addEventListener('click', function() {
    var audio = document.getElementById('clickSound');
    audio.play();

    var messageDiv = document.getElementById('message4');
    messageDiv.style.display = 'block'; 

    setTimeout(function() {
        messageDiv.style.display = 'none';
    }, 3000); 
    console.log('Misscarriage clicked'); 

    // check off the 'Bibble' task 
    var misscarriageCheckbox = document.getElementById("misscarriageCheckbox");
    misscarriageCheckbox.checked = true;
    document.getElementById("taskMisscarriage").style.textDecoration = "line-through";
    this.style.display = 'none';
});

//CLICKING ANKLET
document.querySelector('.anklet').addEventListener('click', function() {
    var audio = document.getElementById('clickSound');
    audio.play();

    var messageDiv = document.getElementById('message5');
    messageDiv.style.display = 'block'; 

    setTimeout(function() {
        messageDiv.style.display = 'none';
    }, 3000); 
    console.log('Anklet clicked'); 

    // check off the 'Anklet' task 
    var ankletCheckbox = document.getElementById("ankletCheckbox");
    ankletCheckbox.checked = true;
    document.getElementById("taskAnklet").style.textDecoration = "line-through";
    this.style.display = 'none';
});


//CLICKING BABOON
document.querySelector('.baboon1').addEventListener('click', function() {
    var audio = document.getElementById('clickSound');
    audio.play();

    var messageDiv = document.getElementById('message6');
    messageDiv.style.display = 'block'; 

    setTimeout(function() {
        messageDiv.style.display = 'none';
    }, 3000); 
    console.log('Baboon clicked'); 

    // check off the 'Baboon' task 
    var baboonCheckbox = document.getElementById("baboonCheckbox");
    baboonCheckbox.checked = true;
    document.getElementById("taskBaboon").style.textDecoration = "line-through";
    this.style.display = 'none';
    
    document.getElementById('baboon2').style.display = 'none';
    document.getElementById('baboon3').style.display = 'none';
    
});

    
//CLICKING WOODCHUCK
document.querySelector('.woodchuck').addEventListener('click', function() {
    var audio = document.getElementById('clickSound');
    audio.play();

    var messageDiv = document.getElementById('message7');
    messageDiv.style.display = 'block'; 

    setTimeout(function() {
        messageDiv.style.display = 'none';
    }, 3000); 
    console.log('woodchuck clicked'); 

    // check off the 'woodchuck' task 
    var woodchuckCheckbox = document.getElementById("woodchuckCheckbox");
    woodchuckCheckbox.checked = true;
    document.getElementById("taskWoodchuck").style.textDecoration = "line-through";
    this.style.display = 'none';
});


//CLICKING TURTLES
document.querySelector('.turtles').addEventListener('click', function() {
    var audio = document.getElementById('clickSound');
    audio.play();

    var messageDiv = document.getElementById('message8');
    messageDiv.style.display = 'block'; 

    setTimeout(function() {
        messageDiv.style.display = 'none';
    }, 3000); 
    console.log('turtles clicked'); 

    // check off the 'turtles' task 
    var turtlesCheckbox = document.getElementById("turtlesCheckbox");
    turtlesCheckbox.checked = true;
    document.getElementById("taskTurtles").style.textDecoration = "line-through";
    this.style.display = 'none';
});


//CLICKING DABABY
document.querySelector('.dababy').addEventListener('click', function() {
    var audio = document.getElementById('clickSound');
    audio.play();

    var messageDiv = document.getElementById('message9');
    messageDiv.style.display = 'block'; 

    setTimeout(function() {
        messageDiv.style.display = 'none';
    }, 3000); 
    console.log('dababy clicked'); 

    // check off the 'dababy' task 
    var dababyCheckbox = document.getElementById("dababyCheckbox");
    dababyCheckbox.checked = true;
    document.getElementById("taskDababy").style.textDecoration = "line-through";
    this.style.display = 'none';
});

//CLICKING DIRTY
document.querySelector('.dirty').addEventListener('click', function() {
    var audio = document.getElementById('clickSound');
    audio.play();

    var messageDiv = document.getElementById('message10');
    messageDiv.style.display = 'block'; 

    setTimeout(function() {
        messageDiv.style.display = 'none';
    }, 3000); 
    console.log('dirty clicked'); 

    // check off the 'dirty' task 
    var dirtyCheckbox = document.getElementById("dirtyCheckbox");
    dirtyCheckbox.checked = true;
    document.getElementById("taskDirty").style.textDecoration = "line-through";
    this.style.display = 'none';
});