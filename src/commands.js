export const commands = {
    banner: {
        description: 'Mi precioso Banner',
        output: `
                 ,        ,
               /(        )\`
               \\ \\___   / |
              /- _  \`-/  '
             (/\\/ \\ \\   /\\
             / /   | \`    \\
             O O   ) /    |
             \`-^--'\`<     '
            (_.)  _  )   /
             \`.___/\`    /
               \`-----' /
  <----.     __ / __   \\
  <----|====O)))==) \\) /====
  <----'    \`--' \`.__,' \\
               |        |
                \\       /
          ______( (_  / \\______
        ,'  ,-----'   |        \\
        \`--{__________)        \\/
  
  Con 'help' puedes ver los comandos disponibles.
  
  --
  🎥 Escribe 'yt' y serás redirigido al canal de youtube
  💼 Escribe 'lk' y serás redirigido a mi Linkedin
  🐤 Escribe 'tw' y serás redirigido a mi Twitter
  --
  `},
    help: {
        description: 'Este mensaje de ayuda',
        execute: () => {
        const availableCommands = Object.keys(commands).filter(
        (command) => command
        );
        const commandList = availableCommands
        .map((command) => `${command}: ${commands[command].description}`)
        .join('\n   ');
        return `Lista de los comandos disponibles:\n   ${commandList}`;
        },
    },
    command1: {
        description: 'Description for command1',
        output: 'Output for command1',
    },
    command2: {
        description: 'test',
        output: 'testout',
    },
    yt: {
        description: 'Abre mi canal de Youtube',
        execute: () => {
        window.open("https://youtube.com/@barricadadigital", "_blank");
        return `Redirigiendo......
¡No me metas prisa que no puedo ir más rápido!
Ya casi está......
Realmente te redirigí en el primer mensaje 😈`;
      },
    },
    lk: {
        description: 'Abre mi LinkedIn',
        execute: () => {
        window.open("https://www.linkedin.com/in/miguel-gonz%C3%A1lez-lara/", "_blank");
        return `Redirigiendo......
¡No me metas prisa que no puedo ir más rápido!
Ya casi está......
Realmente te redirigí en el primer mensaje 😈`;
      },
    },
    tw: {
        description: 'Abre mi Twitter',
        execute: () => {
        window.open("https://twitter.com/BarricadaD", "_blank");
        return `Redirigiendo......
¡No me metas prisa que no puedo ir más rápido!
Ya casi está......
Realmente te redirigí en el primer mensaje 😈`;
      },
    },
  };
  
  