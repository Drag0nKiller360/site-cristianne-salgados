window.onload=check;
function check() {
    document.getElementById("todos").checked = true;
}

var tds = document.querySelectorAll('#produtos h5[data-tipo]');
document.querySelector('.btn-group').addEventListener('click', function(e) {
    var tipo = e.target.id;
    
    if(tipo != 'container-filtros'){
        for (var i = 0; i < tds.length; i++) {
        
            var tr = tds[i].closest('.col-md-4');
    
            if(tipo != 'todos'){        
                
                tr.style.display = tipo == tds[i].dataset.tipo || !tipo ? '' : 'none';
            }else{
                tr.style.display = '';
            }
        }
    }
});