function results(){
    var name = document.getElementById('name').value;
    var about = document.getElementById('about').value;
    var address = document.getElementById('address').value;
    var phoneno = document.getElementById('phoneno').value;
    var college = document.getElementById("college").value;
    
    var fname = name;
    document.getElementById('demoname').textContent = fname;
    var fabout = about;
    document.getElementById('demoabout').textContent = fabout;
    var faddress = address;
    document.getElementById('demoaddress').textContent = faddress;
    var fphoneno = phoneno;
    document.getElementById('demophone').textContent = fphoneno;
    var fcollege = college;
    document.getElementById('democollege').textContent = fcollege;
}