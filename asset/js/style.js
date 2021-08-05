var date = new Date;
var year = date.getFullYear();
console.log("year:  " + year);



var y = document.getElementById('year').innerHTML = year;
var h = document.getElementById('home');
    var d = document.getElementById('directors');
    var a = document.getElementById('allstaff');
    var ab = document.getElementById('aboutus');

function shgroupmanagement() {
    
    d.style.display = 'block';
    h.style.display = 'none';
    a.style.display = 'none';
    ab.style.display = 'none';

}
function shallstaff() {
    d.style.display = 'none';
    h.style.display = 'none';
    ab.style.display = 'none';

    a.style.display = 'block';
}

function home() {
    d.style.display = 'none';
    h.style.display = 'block';
    a.style.display = 'none';
    ab.style.display = 'none';
    if(h.style.display = 'block' ){
        document.getElementById('home').scrollIntoView({
            behavior: 'smooth'
       });
    }

}

function aboutus(){
    d.style.display = 'none';
    h.style.display = 'none';
    a.style.display = 'none';
    ab.style.display = 'block';
}



async function services(){
    d.style.display = 'none';  
    a.style.display = 'none';
    ab.style.display = 'none';
    h.style.display = 'block'; 
    if(h.style.display = 'block' ){
        document.getElementById('services').scrollIntoView({
            behavior: 'smooth'
       });
    }
   
}
   

  const secondFunction = async () => {
    const result = await services()
    // do something else here after firstFunction completes
    document.getElementById('services').scrollIntoView({
        behavior: 'smooth'
   });
}

