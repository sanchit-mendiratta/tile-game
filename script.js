var TileGame = function(iRows, iColumns, oTileContainer) {
    // Get Rows
    this.iRows = iRows;
    //Get Columns
    this.iColumns = iColumns;
    // Set Initial Score
    this.iScore = 0;
    // Calculate total tiles to render
    this.iTotalTiles = this.iRows * this.iColumns;
    // Run a loop through number of tiles to be rendered and create as many divs
    var sDiv = "";
    this.oTileContainer = oTileContainer;
    for (var iIndex = 0; iIndex < this.iTotalTiles; iIndex++) {
        sDiv += "<div id='tile" + iIndex + "' class='tile'>" + iIndex + "</div>";
    }
    // Set innerHTML of Tile Container Div
    this.oTileContainer.innerHTML = sDiv;
    // Build Scoreboard
    this.buildScoreboard();
    // Highlight a Random Tile
    this.highlightRandomTile();
    // Add Click event listener on highlighted tile
    this.oTileContainer.addEventListener("click", this.onTileClick.bind(this));
};
TileGame.prototype.highlightRandomTile = function () {
    // Generate random number between 0 and total number of tiles
    var iRandomTileNumber = Math.floor(Math.random() * this.iTotalTiles);
    // Get id of tile to highlight
    this.sTileIdToHighlight = "tile" + iRandomTileNumber;
    // get dom element/div of the tile to highlight
    this.oTileToHighlight = document.getElementById(this.sTileIdToHighlight);
    // add animate class to the tile to highlight it
    this.oTileToHighlight.classList.add("animateTile");
};
TileGame.prototype.buildScoreboard = function() {
    this.scoreBoard = document.getElementById("scoreBoard");
};
TileGame.prototype.onTileClick = function(oEvent) {
    var oTarget = oEvent.target;
    var sTargetId = oTarget.id;
    if (oTarget.className.indexOf("tile") !== -1) {
        if (sTargetId === this.sTileIdToHighlight) {
            this.oTileToHighlight.classList.remove("animateTile");
            this.highlightRandomTile();
            this.iScore++;
        } else if (sTargetId !== this.sTileIdToHighlight) {
            this.iScore--;
        }
        this.scoreBoard.innerHTML = " " + this.iScore;
    }
};
// Get the TileContainerDiv
var oTileContainer = document.getElementById("tileContainer");
// Create a new Game
var oNewGame = new TileGame(5, 5, oTileContainer);