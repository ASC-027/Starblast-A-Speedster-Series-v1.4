var resetShip_button = {
  id: "resetShip",
  position: [2,50,8,14],
  clickable: true,
  shortcut: "1",
  visible: true,
  components: [
    { type:"round",position:[0,0,100,100],fill:"#456",stroke:"#CDE",width:2},
    { type: "text",position:[10,35,80,30],value:"Reset Ship",color:"#CDE"},
    { type: "text",position:[20,70,60,20],value:"[1]",color:"#CDE"}
  ]
};

var resetShip = function(ship) {
  ship.set({type:101});
};
 
this.tick = function(game) {
  if (game.step % 60 === 0) {
  {
    for (var i=0;i<game.ships.length;i++)
    {
      var ship = game.ships[i];
      if (!ship.custom.resetShip_button_installed)
        ship.custom.init = true;
        ship.setUIComponent(resetShip_button);
      }
    }
  }
} ;

this.event = function(event, game) {
  switch (event.name) {
    case "ui_component_clicked":
      var ship = event.ship;
      var component = event.id;
      if (component == "resetShip") {
        resetShip_button(ship);
      }
      break;
  }
};
