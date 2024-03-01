function executeCommand() {
    var commandInput = document.getElementById('commandInput');
    var outputWindow = document.getElementById('outputWindow');
    
    var command = commandInput.value.trim();

    fetch('command.json')
        .then(response => response.json())
        .then(data => {
            var commands = data.commands;

            var foundCommand = commands.find(cmd => cmd.name === command);

            if (foundCommand) {
                outputWindow.innerHTML += `<strong>${foundCommand.name}:</strong> ${foundCommand.description}<br>`;
            } else {
                outputWindow.innerHTML += 'Команда не распознана. Введите help для списка команд.<br>';
            }

            commandInput.value = '';
            outputWindow.scrollTop = outputWindow.scrollHeight;
        })
        .catch(error => {
            console.error('Ошибка при загрузке команд: ', error);
        });

        document.getElementById('commandInput').addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault(); 
                executeCommand();
            }
        });
}