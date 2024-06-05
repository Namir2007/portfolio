
setVrednost('webdesign-crta', 100);
setVrednost('photography-crta', 80);
setVrednost('coding-crta', 90);
setVrednost('copywriting-crta', 60);

    function setVrednost(id, vrednost) 
    {
    var crta = document.getElementById(id);
    crta.style.width = vrednost + '%';
}