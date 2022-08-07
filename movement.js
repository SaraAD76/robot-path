//this script will record the robot path
//the path is an array that saves the angles the robot took in degrees
let path=[];
//function for the main four directions
function record(angle){
    path.push(angle);
    if(path.length>0){ //prevent null data
        submitPath();
    }
}
//function to calculate angle from dragging button
function getAngle(e){
    e.preventDefault();//to allow drag
    //to get coordinates
    area= document.getElementById('angleArea'); 
    areaCenterX=area.offsetLeft + area.offsetWidth / 2;
    areaCenterY=area.offsetTop + area.offsetHeight / 2;
    mouseX= e.clientX;
    mouseY=e.clientY;
    deltaX=mouseX-areaCenterX;
    deltaY=areaCenterY-mouseY;
    //to calculate angle
    rad=Math.atan2(deltaY,deltaX);
    deg=Math.round(rad*(180/Math.PI))
    if (deg<0){
        deg=(deg+360)%360;
    }
    //submit path before it's too big
    path.push(deg);
    if(path.length>5){
        submitPath();
    }
}
function submitPath(){
    //adding the calculated values to the form inputs
    form=document.getElementById('form');
    document.getElementById('path').value=path;
    //adding date and time for convenience
    d=new Date();
    document.getElementById('time').value=d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();;
    document.getElementById('date').value=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();;
    //submitting
    form.submit();
}

