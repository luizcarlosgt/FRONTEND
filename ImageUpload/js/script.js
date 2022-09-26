var input    = document.getElementById('selecao-arquivo');
var fileName = document.getElementById('file-name');

input.addEventListener('change', function(event){
    var value = event.target.value;
    fileName.textContent = `${value}`;

    if(value == ''){
        fileName.textContent = 'Drag and drop to upload you image.';
    }
});