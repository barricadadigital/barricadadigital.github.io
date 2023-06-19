const handleKeyDown = (e, executeCommand) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand();
    }
  };
  
  export default handleKeyDown;
  

  export const handleCtrlL = (e, setCommandHistory, setCurrentCommandIndex) => {
    if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      setCommandHistory([]);
      setCurrentCommandIndex(0)
    }
  };

  export const handleArrowUp = (e,currentCommandIndex, setInputText,commandHistory, setCurrentCommandIndex) => {
    if (e.key === 'ArrowUp') {
        e.preventDefault();
    if (currentCommandIndex > 0) {
        const previousCommand = commandHistory[currentCommandIndex - 1].command;
        setInputText(previousCommand)
        setCurrentCommandIndex(currentCommandIndex - 1)
        }
    }
  };

  export const handleArrowDown = (e,currentCommandIndex, setInputText,commandHistory, setCurrentCommandIndex) => {
    if (e.key === 'ArrowDown') {
        e.preventDefault();
    if (currentCommandIndex < commandHistory.length) {
        if (currentCommandIndex == commandHistory.length - 1) {
            const previousCommand = "";
            setCurrentCommandIndex(currentCommandIndex + 1);
            setInputText(previousCommand);
        }
        else {
            const previousCommand = commandHistory[currentCommandIndex + 1].command;
            setCurrentCommandIndex(currentCommandIndex + 1);
            setInputText(previousCommand)
            }
        }
    }
  };

  export const handletab = (e, commands, inputText, setInputText, setAutocompleteOptions) => {
    if (e.key === 'Tab') {
      e.preventDefault();
  
      const matchedCommands = Object.keys(commands).filter((command) =>
        command.startsWith(inputText.trim())
      );
  
      if (matchedCommands.length === 1) {
        // Autocompletar el comando
        setInputText(matchedCommands[0]);
      } else if (matchedCommands.length > 1) {
        // Mostrar las opciones de autocompletado
        console.log('Opciones de autocompletado:', matchedCommands);
        setAutocompleteOptions(matchedCommands);
        // Aquí puedes guardar las opciones de autocompletado en el estado y mostrarlas debajo del campo de entrada
      }
    }
  };