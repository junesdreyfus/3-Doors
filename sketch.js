//You are standing in the entrance. Three doors lead to the same room, with small variations./
//Which one will you choose/

//The entrance state/
let state = 'entrance';
//room 1 default position/
let position = '0';

let SNOW_AMMOUNT = 4000;

let touchConsole = "I can't see much..."

let room2textbox ={
  x: 100,
  y: 300,
  width: 500,
  height: 100,
  padding: 10,
  fill: 'rgb(0, 0, 0)',
}

let room2tone = 'rgb(44,46,44)';

const flavortext ={
  touchConsole:[
  "I can feel the linoleum juice dripping out from where I stand.",
  "I can barely see anything.",
  "The room lets out a little breathing noise, like a gasp",
   "I touch something spongious. I try to grab it but it crumbles under my fingers. I can feel bits of it getting in my nails.",
   "A rolled up magazine. Probably the dirty kind.",
   "Spirals of metal under my fingers. It's still warm. A stove top ?",
   "I touch wood",
   "A plastic container, no smaller than my fist. I think something's inside, but it's all clogged up.",
   "There's a wall.",
   "A clothing hanger ? It's bent in a weird shape so it's hard to tell.",
   "A cookie, I'm 99% sure it's not edible.",
   "I found an expensive looking door. It's sealed shut.",
   "I reach my hand but there's nothing there.",
   "Books lined up. A shelf ? There's a tiny gap between two of them.",
   "That's a phone.",
   "An electric plug ? Someone cut it though.",
   "A long metallic object. It's too heavy to carry.",
   "This is the bed. It's empty.",
   "A plastic bag. It's empty.",
   "Files, too bad I can't see",
   "A puddle.",
   "That's nice.",
   "I feel my legs bumping into a box. It seems to be a wooden night-stand",
   "A poster on the wall, too bad I can't see",
   "A sharp tool. Kitchen Appliance ?",
   "A carpet ? It's not very clean.",
   "A tube, I think it's the shower hose. I turn on the water to see if it still works. It does !",
   "A cold surface",
   "It's either an upside-down chair, or this person has spikes in their home.",
   "I think it's a window. It's been sealed.",
   "I don't know what that is.",
   "I'm taking this.",
   "Right now this feels like a jewel, but it's probably a tacky snowglobe",
   "A sealed door. Maybe if I come back with something sturdy ?",
   "I wonder who those people were.",
   "A picture frame. Upon closer inspection it's empty.",
   "That's a knife, not the cool kind.",
   "One time Julien told me he found 50 bucks in one of these.",
   "I don't want to stay here much longer.",
   "A sink. There are tea leaves all over it.",
   "...",]
}

//the first door./
//this one has a window so you can see what's in it/
//If you enter it you will get visual feedback/
let leftwall ={
  x:-200,
  y:-100,
}
let rightwall ={
  x: 550,
  y:-100
}
let midwall ={
  x: -8,
  y:-50,
  width: 560,
  height: 448,
}
let door1 = {
  x: 10,
  y: 10,
  width: 150,
  height: 350,
  fill: 'rgb(214,248,241)',
  floor: 'rgb(57,69,67)',
}
let door2 = {
  //The second door./
  //This one has very little light, you will have to touch (click) on the different objects to get a feel for what they are./
  //Maybe because of low light the object you observe will have to be brought closer to your eyes ?/
  //If you enter you will get textual feedback/

  x: 200,
  y: 10,
  width: 150,
  height: 350,
  fill: 'rgb(43, 45, 43)',
  floor: 'rgb(43, 42, 48)',
}
let door3 = {
  //The third door./
  //This time there is no light at all./
  //Audio feedback ?/
  //Maybe more linear/
  x: 390,
  y: 10,
  width: 150,
  height: 350,
  fill: 'rgb(20,20,0)',
  floor: 'rgb(0,0,0)',
}

let opacity = 0


  //position 1 2 3
  //each have a view for the 4 cardinals + floor
  //pos1north is default/

let leftside = undefined;
let rightside = undefined;
let midside = undefined;

let pos0 = undefined;

let pos1down = undefined;
let pos1north = undefined;
let pos1northnorth = undefined;
let pos1south = undefined;
let pos1east = undefined;
let pos1west = undefined;


let pos2down = undefined;
let pos2north = undefined;
let pos2northnorth = undefined;
let pos2east = undefined;
let pos2west = undefined;
let pos2south = undefined;

let pos3down = undefined;
let pos3east = undefined;
let pos3north = undefined;
let pos3west = undefined;
let pos3south = undefined;

let room2_2 = undefined;
let room2_1 = undefined;

function preload(){
  
  leftside = loadImage("assets/leftside.png");
  rightside = loadImage("assets/rightside.png");
  midside = loadImage("assets/midside.png");

  pos0 = loadImage("assets/pos0.png");

  pos1down = loadImage("assets/pos1down.png");
 pos1north = loadImage("assets/pos1north.png");
 pos1northnorth = loadImage("assets/pos1northnorth.png");
 pos1south = loadImage("assets/pos1south.png");
 pos1east = loadImage("assets/pos1east.png");
 pos1west = loadImage("assets/pos1west.png");

 //pos2north is default
pos2down = loadImage("assets/pos2down.png");
 pos2north = loadImage("assets/pos2north.png");
 pos2northnorth = loadImage("assets/pos2northnorth.png");
 pos2east = loadImage("assets/pos2east.png");
 pos2west = loadImage("assets/pos2west.png");
 pos2south = loadImage("assets/pos2south.png");

 //pos3east is default
pos3down = loadImage("assets/pos3down.png");
pos3east = loadImage("assets/pos3east.png");
pos3west = loadImage("assets/pos3west.png");
pos3north = loadImage("assets/pos3north.png");
pos3south = loadImage("assets/pos3south.png");

room2_2 = loadImage("assets/room2_2.png");
room2_1 = loadImage("assets/room2_1.png");
}


function setup() {
  createCanvas(600, 400);
}

function draw() {
  frameRate(8);
  background('rgb(131,121,110)');
  noStroke();
  fadein();
  chgPosition();
  
  //The view slightly adjusts to where the player is looking/
  //and it's sooo subtle/
  let eyeMovementX = map(mouseX, 0, width, 0, 40);
  let eyeMovementY = map(mouseY, 0, height, 0, 20);
  
  //drawing the doors/
  if(state === 'entrance' || state === 'entering1' || state === 'entering2' || state === 'entering3'){

  
    image(midside, midwall.x + eyeMovementX, midwall.y + eyeMovementY, midwall.width, midwall.height);
    tint(255, 225);

  push();
  fill(door1.fill);
  rect (door1.x+eyeMovementX, door1.y+eyeMovementY, door1.width, door1.height);
  fill(door1.floor);
  rect(door1.x+eyeMovementX, door1.y+(eyeMovementY/2)+door1.height/2, door1.width, (eyeMovementY/2)+door1.height/2);
  fill('rgb(45,42,42)');
  //jesus, lol/
  //overly complicated quad to create illusion of 3D geometry/
  quad(door1.x+eyeMovementX+door1.width, door1.y+eyeMovementY, door1.x+eyeMovementX+door1.width, door1.y+eyeMovementY+door1.height, door1.x+door1.width, door1.y+(eyeMovementY/2)+(door1.height/2), door1.x+door1.width, door1.y+eyeMovementY);
  pop();
  
  push();
  fill(door2.fill);
  rect (door2.x+eyeMovementX, door2.y+eyeMovementY, door2.width, door2.height);
  fill(door2.floor);
  rect(door2.x+eyeMovementX, door2.y+(eyeMovementY/2)+door2.height/2, door2.width, (eyeMovementY/2)+door2.height/2);
    fill('rgb(45,42,42)');
  //overly complicated quad to create illusion of 3D geometry/
  quad(door2.x+eyeMovementX+door2.width, door2.y+eyeMovementY, door2.x+eyeMovementX+door2.width, door2.y+eyeMovementY+door2.height, door2.x+ door2.width, door2.y+(eyeMovementY/2)+(door2.height/2), door2.x+ door2.width, door2.y+eyeMovementY);
  pop();
  
  push();
  fill(door3.fill);
  rect (door3.x+eyeMovementX, door3.y+eyeMovementY, door3.width, door3.height);
  fill(door3.floor);
  rect(door3.x+eyeMovementX, door3.y+(eyeMovementY/2)+door3.height/2, door3.width, (eyeMovementY/2)+door3.height/2);
  fill('rgb(45,42,42)');
  //overly complicated quad to create illusion of 3D geometry/
  quad(door3.x+eyeMovementX+door3.width, door3.y+eyeMovementY, door3.x+eyeMovementX+door3.width, door3.y+eyeMovementY+door3.height, door3.x+ door3.width, door3.y+(eyeMovementY/2)+(door3.height/2), door3.x+ door3.width, door3.y+eyeMovementY);
  pop();

  image(leftside, leftwall.x + eyeMovementX, leftwall.y + eyeMovementY);
  tint(255, 225);
  image(rightside, rightwall.x + eyeMovementX, rightwall.y + (eyeMovementY/3));
  tint(255, 225);
  }

  
 



if (state === "room1"){

  
  //starts pos0

  if (position === '0'){
//display view when pos0

tint(255, 255);
image(pos0, -150+eyeMovementX, -100+eyeMovementY)
text('N', 500, 350);
if (position === '0' && keyIsPressed === true && key === 'n'){
  text('N', 500, 350);
  text('+SPACE BAR', 510, 350);
}

//when user press f switch to pos1 (will change letter once it doesn't mess up the flow)
//    if (position === '0' && keyIsPressed === true && key === 'f')
//      position = '1'
  }

  //starts with north view
  if(position === '1'){
  
    tint(255, opacity);
  image(pos1north, -150+eyeMovementX, -100+eyeMovementY)
  text('N', 500, 350);
  text('S', 500, 380);
  text('W', 480, 365);
  text('E', 518, 365);

  text('D', 525, 385);

  if (keyIsPressed === true && key === 'n'){

    tint(255, opacity);
    image(pos1northnorth, -150+eyeMovementX, -100+eyeMovementY)
    text('N', 500, 350);
    text('+SPACE BAR', 510, 350);
  }
    //user presses w = west view
    if (keyIsPressed === true && key === 'w'){
      tint(255, opacity);
      image(pos1west, -150+eyeMovementX, -100+eyeMovementY)
    }
    
        //user presses s = south view
        if (keyIsPressed === true && key === 's'){
          tint(255, opacity);
          image(pos1south, -150+eyeMovementX, -100+eyeMovementY)
          text('S', 500, 350);
          text('+SPACE BAR', 510, 350);
        }

        //user presses e = east view
    if (keyIsPressed === true && key === 'e'){
      tint(255, opacity);
      image(pos1east, -150+eyeMovementX, -100+eyeMovementY)
    }
    
            //user presses d = down view
    if (keyIsPressed === true && key === 'd'){
      tint(255, opacity);
      image(pos1down, -100+eyeMovementX, -100+eyeMovementY)
    }
      
            //user presses f key = move forward north to position2
  //  if (position === '1' && keyIsPressed === true && key === 'n'){
  //    position = '2'
  //  }
  }
  
  if(position === '2'){
    tint(255, opacity);
    image(pos2north, -150+eyeMovementX, -100+eyeMovementY)

    text('N', 500, 350);
    text('S', 500, 380);
    text('W', 480, 365);
    text('E', 518, 365);

    text('D', 525, 385);
    

    //user presses d = down view
    if (keyIsPressed === true && key === 'd'){
      tint(255, opacity);
      image(pos2down, -150+eyeMovementX, -100+eyeMovementY)
    }

   //user presses n = northnorth view
    if (keyIsPressed === true && key === 'n'){
      tint(255, opacity);
    image(pos2northnorth, -150+eyeMovementX, -100+eyeMovementY)
    }

    //user presses e = east view
    if (keyIsPressed === true && key === 'e'){
      tint(255, opacity);
      image(pos2east, -100+eyeMovementX, -100+eyeMovementY)
      text('E', 500, 350);
      text('+SPACE BAR', 510, 350);
    }    

    //user presses w = west view
    if (keyIsPressed === true && key === 'w'){
      tint(255, opacity);
      image(pos2west, -100+eyeMovementX, -100+eyeMovementY)
    }

      //user presses s key = south view
    if (keyIsPressed === true && key === 's'){
      tint(255, opacity);
      image(pos2south, -150+eyeMovementX, -100+eyeMovementY)
    }
    
    }
    
            //user presses f key = move to position3 east
    //if (position === '2' && keyIsPressed === true && key === 'f'){
    //  position = '3';
   // }
  }
  
  if(position === '3'){
    tint(255, opacity);
    image(pos3east, -150+eyeMovementX, -100+eyeMovementY)

    text('N', 500, 350);
    text('S', 500, 380);
    text('W', 480, 365);
    text('E', 518, 365);

    text('D', 525, 385);
    
          //user presses s key = south view
    if (keyIsPressed === true && key === 's'){
      tint(255, opacity);
      image(pos3south, -150+eyeMovementX, -50+eyeMovementY)
    }

    //user presses e key = east view
       if (keyIsPressed === true && key === 'e'){
        tint(255, opacity);
       image(pos3east, -150+eyeMovementX, -100+eyeMovementY)
       }
    
    //user presses n key = north view
      if (keyIsPressed === true && key === 'n'){
        tint(255, opacity);
      image(pos3north, -100+eyeMovementX, -100+eyeMovementY)
      }
          
          //user presses d = down view
    if (keyIsPressed === true && key === 'd'){
      tint(255, opacity);
      image(pos3down, -150+eyeMovementX, -100+eyeMovementY)
    }
    
          //user presses w key = west view
    if (keyIsPressed === true && key === 'w'){
      tint(255, opacity);
      image(pos3west, -150+eyeMovementX, -100+eyeMovementY)
    }
  }

if (state === "room2"){

noCursor();
frameRate(5);
push();
fill (door2.fill);
rect(0, 0, width, height);
pop();

touching();



opacity = random(0,5);
tint(255, opacity);
image(room2_1, 0, 0);
tint(255, 5-opacity);
image(room2_2, 0, 0);

 // A for-loop to count from 0 up to the number of stars
 for (let i = 0; i < SNOW_AMMOUNT; i++) {
  drawSnow();

}


showTouchConsole();

}

}

function showTouchConsole(){
  push();
  stroke(255, 255, 255);
  fill(room2textbox.fill);
  rect (room2textbox.x, room2textbox.y, room2textbox.width, room2textbox.height);
  pop();

  push();
  fill(255);
  textSize(12);
  text(touchConsole, room2textbox.x + room2textbox.padding, room2textbox.y + room2textbox.padding , room2textbox.width - 2 * room2textbox.padding, room2textbox.height * room2textbox.padding);
  pop();

}

function fadein(){
  opacity += 51;
  opacity = constrain(opacity, 0, 255)
}

function fadeout(){
  opacity += 51;
  opacity = constrain(opacity, 0, 255)
}

function drawSnow() {
  push();
  const x = random(0, width);
  const y = random(0, height);
  const diameter = random(2, 10);
  fill(room2tone);
  ellipse(x, y, diameter);
  pop();
}

function chgPosition(){
  //player can press space to walk in a given direction
  if(state === "room1"){

    if (position === '0' && (keyIsDown(32) && keyIsDown(78)) && opacity>250){
      opacity = 0;
      position = '1'
      
    }
    if (position === '1' && (keyIsDown(32) && keyIsDown(78)) && opacity>250){
      opacity = 0;
      position = '2'
    }
    if (position === '1' && (keyIsDown(83) && keyIsDown(32)) && opacity>250){
      opacity = 0;
      position = '0';
      state = 'entrance';
    }
    if (position === '2' && (keyIsDown(32) && keyIsDown(69)) && opacity>250){
      opacity = 0;
      position = '3'
    }
  }

}

function mouseWheel(){
  //If mouse is scrolled while hovering on top of the left door you will be entering that one./
  if((mouseX > door1.x && mouseX < door1.x+door1.width && event.delta > 0 && state === 'entrance' )||( event.delta > 0 && state === 'entering1')){
    //The state is now set to entering1, a transitional state/
    //no turning back now/
  state = 'entering1';
    
  door1.y-=3;
  door1.x-=0.9;
  door1.width+=15;
  door1.height+=15;
  door2.y-=3;
  door2.x+= 15*1.3;
  door3.x+=30*1.3;
  door2.width+=15;
  door2.height+=15;

  leftwall.x-=15;
  rightwall.x+=30*1.3;
  midwall.x-=15;
  midwall.width+=50;
  midwall.height+=50;
    
    if (door1.x < -15 && door1.width >width+15){
      state = 'room1';
      opacity = 0;
    }
    //state changes to room1 once we've fully entered/
  }
     
    if((mouseX > door2.x && mouseX < door2.x+door2.width && event.delta > 0 && state === 'entrance' )||( event.delta > 0 && state === 'entering2')){
    //The state is now set to entering2, a transitional state/
    //no turning back now/
  state = 'entering2';

  door2.y-=3;
  door2.x-=7;
  door2.width+=15;
  door2.height+=15;
  door1.x-=15;
  door1.y-=3;
  door1.height+=15;
  door3.x+=15;
  door3.y-=3;
  door3.height+=15;

  leftwall.x-=15;
  rightwall.x+=30*1.3;
  midwall.x-=15;
  midwall.width+=50;
  midwall.height+=50;
    //    
  if (door2.x < -50 && door2.width >width+15){
  state = 'room2';
    //state changes to room2 once we fully entered/
    }
  }
  
      if((mouseX > door3.x && mouseX < door3.x+door3.width && event.delta > 0 && state === 'entrance') || (event.delta > 0 && state === 'entering3')){
    //The state is now set to entering3, a transitional state/
    //no turning back now/
  state = 'entering3';

  door3.y-=3;
  door3.x-=15/1.1;
  door3.width+=15;
  door3.height+=15;
  door1.x-=25;
  door1.y-=3;
  door1.height+=15;
  door2.x-=25;
  door2.y-=3;
  door2.height+=15;
  door2.width+=10;

  leftwall.x-=15;
  rightwall.x+=30*1.3;
  midwall.x-=15;
  midwall.width+=50;
  midwall.height+=50;
  
  //State changes to room3 once we've fully entered/
  if (door3.x < -50 && door3.width >width+15){
  state = 'room3';
    }
  }

}

function touching(){
if ( mouseIsPressed === true){
 touchConsole = random(flavortext.touchConsole)
}

}


