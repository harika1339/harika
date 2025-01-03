document.createEvent(function(){
    const weburl = document.getElementById(url);
    const rating = document.getElementById(rating);
    const txt = document.getElementById(txt);
    const terms = document.getElementById(terms);
    if(!weburl || !rating || !txt || !terms){
        alert("fill the form completely");
    }
    alert("successfully completed");

})