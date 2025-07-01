document.addEventListener('DOMContentLoaded', function() {

    var form = document.createElement('form');
    form.id = 'studentForm';

    function createInput(labelText, inputType, inputName) {
        var div = document.createElement('div');

        var label = document.createElement('label');
        label.htmlFor = inputName;
        label.textContent = labelText;

        var input = document.createElement('input');
        input.type = inputType.toLowerCase();
        input.name = inputName;
        input.id = inputName;

        div.appendChild(label);
        div.appendChild(document.createElement('br'));
        div.appendChild(input);

        return div;
    }
    });