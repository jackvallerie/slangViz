
setMenuHandling(markers); 

function setMenuHandling(markers) {
    var stations = document.getElementsByTagName("a");

    for (var i = 0; i < stations.length ; i++) {
        stations[i].addEventListener('click', 
            
            function() {  } //need to use binding because of closures
        , 
        false);
        };
    
}


