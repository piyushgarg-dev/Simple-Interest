function calculate(){
    
    
    
    var pa = document.getElementById('pa').value;
    var roi = document.getElementById('roi').value;
    var time = document.getElementById('time').value;
    
    
    var simeint = (pa*roi*time)/100;
    var sim = " Rs. " + simeint
    document.getElementById('si').value=sim;
    
    
   // var x = (1-roi/100);
   // var y = Math.pow(x,time)
    var compint = (pa*((Math.pow((1+roi/100),time))-1));
    var ans = Math.round(compint*100)/100;
    var csi = " Rs. " + ans;
    document.getElementById('ci').value=csi;
    
    
}