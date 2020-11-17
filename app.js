var can;
var px = 10;
var py = 10;
height = 700;
width = 500;

eleh = document.getElementById("heightf");
elew = document.getElementById("widthf");

function loaded() {
    can = new fabric.Canvas("canvas");
    player();
}

function player() {
    fabric.Image.fromURL("https://lh6.googleusercontent.com/LpBSv--sNL2udAdPnrm1kIvFwKmRPtYEDtycgH8Jes_ppfSLvXxYzQ_Qmqjgr2_rcmCyaliE-FG_AytP7Ni2=w1366-h629-rw", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(height);
        player_object.scaleToHeight(width);
        player_object.set({
            top: py,
            left: px
        });
        can.add(player_object);

    });
}