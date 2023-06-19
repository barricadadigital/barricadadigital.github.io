import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import './App.css'; // Importa el archivo de estilos CSS
import { commands } from './commands';
import handleKeyDown, { handleArrowUp, handleCtrlL, handleArrowDown, handletab } from './keyhandlers';

const App = () => {
  const contentDivClasses = classNames('content-div',)
  const outerDivClasses = classNames('outer-div',)
  const innerDivClasses = classNames('inner-div')
  const contentPClasses= classNames('output-p')
  const firstRow= classNames('firstrow')
  const contentInput= classNames('input')
  const uno= classNames ('uno')
  const dos= classNames ('dos')
  const tres= classNames ('tres')
  const cuatro= classNames ('cuatro')

  const [inputText, setInputText] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const inputRef = useRef(null);
  const contentRef = useRef(null);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  

  useEffect(() => {
    //executeCommand('banner')
    // Establecer el foco en el campo de entrada cuando se cargue la página
    inputRef.current.focus();

    // Ajustar el desplazamiento al final del contenido
    contentRef.current.scrollTop = contentRef.current.scrollHeight;
  }, []);

  const handleClick = () => {
    // Establecer el foco en el campo de entrada al hacer clic en cualquier parte de la aplicación
    inputRef.current.focus();
  };

  useEffect(() => {
    // Ajustar el desplazamiento al final del contenido después de actualizar el historial de comandos
    contentRef.current.scrollTop = contentRef.current.scrollHeight;
  }, [commandHistory]);
  

  const handleKeyDownWrapper = (e) => {
    handleKeyDown(e, executeCommand); // Llama al handleKeyDown original
    handleCtrlL(e, setCommandHistory, setCurrentCommandIndex); // Llama a handleCtrlL para Ctrl+L
    handleArrowUp(e,currentCommandIndex, setInputText,commandHistory, setCurrentCommandIndex);
    handleArrowDown(e,currentCommandIndex, setInputText,commandHistory, setCurrentCommandIndex);
    setAutocompleteOptions('');
    handletab(e, commands, inputText, setInputText, setAutocompleteOptions);
  };

  const executeCommand = (command = '') => {
    const trimmedCommand = command.trim();
    const enteredCommand = trimmedCommand || inputText.trim();
    let output = '';

    if (typeof commands[enteredCommand] === 'object' && commands[enteredCommand].execute) {
      output = commands[enteredCommand].execute();
    } else {
      output =
        commands[enteredCommand]?.output ||
        `Comando no encontrado: ${enteredCommand}. Intenta con 'help' para saber los comandos.`;
    }
    

    const newCommand = {
      command: enteredCommand,
      output,
    };
    setCommandHistory((prevHistory) => [...prevHistory, newCommand]);
    setInputText('');
    setCurrentCommandIndex(commandHistory.length + 1);
  };

  const [currentTextColor, setCurrentTextColor] = useState('red');
  const checkCommandMatch = (text) => {
    // Verificar si el texto coincide con algún comando existente
    return Object.keys(commands).includes(text) ? text : null;
  };

  const [autocompleteOptions, setAutocompleteOptions] = useState('');

  return (
    <main className={outerDivClasses} onClick={handleClick}>
      <div className={innerDivClasses} ref={contentRef}>
        <div className={contentDivClasses}>
          {commandHistory.map((command, index) => (
            <div key={index} className={contentDivClasses}>
              <div className={firstRow}>
                <span className={uno}>guest</span>
                <span className={dos}>@</span>
                <span className={tres}>BarricadaDigital</span>
                <span className={cuatro}>:$ ~ {command.command}</span>
              </div>
              <pre className={contentPClasses}>{command.output}</pre>
            </div>
          ))}
          <div className={firstRow}>
            <span className={uno}>guest</span>
            <span className={dos}>@</span>
            <span className={tres}>BarricadaDigital</span>
            <span className={cuatro}>:$ ~</span>
            <span className={contentInput}>
              <input
                type="text"
                className="customInput"
                value={inputText}
                onChange={(e) => {
                  const newText = e.target.value;
                  setInputText(newText);
              
                  // Verificar el comando coincidente de manera asíncrona
                  setTimeout(() => {
                    const matchedCommand = checkCommandMatch(newText);
                    setCurrentTextColor(matchedCommand ? 'rgb(135, 195, 138)' : 'rgb(255, 0, 0)');
                  }, 0);
                }}
                onKeyDown={handleKeyDownWrapper}
                ref={inputRef} // Asignar la referencia al campo de entrada
                style={{ color: currentTextColor }} // Aplicar el color al texto
              />
            </span>
          </div>
        </div>
        <div>
            {autocompleteOptions.length > 0 && (
                    <span className="autocomplete-options">
                      {autocompleteOptions.join(' ')}
                    </span>
                  )}
            </div>
      </div>
    </main>
  );
}

export default App;