document.getElementById('encuestaForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    var animo = document.getElementById('animo').value;
    var movilidad = document.getElementById('movilidad').value;
    var hijos = document.getElementById('hijos').value;
    var futuro = document.getElementById('futuro ').value;
    var pensar = document.getElementById('pensar').value;


    console.log('Anímico: ' + animo);
    console.log('Movilidad: ' + movilidad);
    console.log('hijos: ' + hijos);
    console.log('futuro: ' + futuro);
    console.log('pensar: ' + pensar);


    document.getElementById('encuestaForm').reset();
});