var allPlayers;
var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(750,1050);
  database = firebase.database();
  form = new Form();
  form.display();
  player=new Player();
}


function draw(){
}
