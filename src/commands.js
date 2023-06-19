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
        const maxLength = Math.max(
            ...availableCommands.map((command) => command.length)
          );
          const commandList = availableCommands
            .map(
              (command) =>
                `${command}${' '.repeat(maxLength - command.length + 4)}- ${
                  commands[command].description
                }`
            )
            .join('\n   ');
          return `Lista de los comandos disponibles:\n   ${commandList}`;
        },
      },
    about: {
        description: 'Sobre mi',
        output: (
            <>
              <br />
              <span style={{ color: 'orange' }}>¡Bienvenido a mi mundo!</span><br /><br />
              Me llamo Miguel, soy <span style={{ color: 'red' }}>analista de ciberseguridad y pentester</span>, apasionado de la informática y nutricionista.
              <br />¿Nutricionista? ¡Sí, nutricionista! <br /><br />
              Actualmente dedicado en cuerpo y alma a la seguridad informática, sobre todo a la parte ofensiva,<br />
              aprendiendo un poco más cada día y <span className="bold">dándome cuenta de lo poco que sé a cada paso que avanzo</span>, y espero que sea así siempre.
            </>
          ),
        },
    educacion: {
        description: 'Formación, licencias y certificaciones',
        output: (
            <>
              <br />
              <span style={{ color: 'orange' }}>EDUCACIÓN</span><br />---<br />
              Máster en Ciberseguridad, seguridad informática y de sistemas<br />
              Grado en Nutrición Humana y Dietética<br />
              Técnico en Actividades Físicas y Deportivas<br /><br />
              <span style={{ color: 'orange' }}>LICENCIAS Y CERTIFICACIONES</span><br />---<br />
              Cyberops Associate<br />
              CCNA<br />
              eJPT<br />
            </>
          ),
    },
    proyectos: {
        description: 'Formación, licencias y certificaciones',
        output: (
            <>
              <br />
              <span style={{ color: 'orange' }}>PROYECTOS</span><br />---<br />
              <a style={{ color: 'white' }} href='https://youtube.com/@barricadadigital'>Barricada digital</a><br />
              <a style={{ color: 'white' }} href='https://eniit.es/hijacking-paired-ble-devices/'>TFM Hijacking paired BLE devices</a><br />
              <a style={{ color: 'white' }} href='https://mykdiet.com'>Mykdiet</a><br /><br />
            </>
          ),
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
    cabeza: {
        description: 'Muestra una animación de cabeza',
        execute: () => {
            const headAnimation = document.createElement('div');
            headAnimation.className = 'head-animation';
            const img = document.createElement('img');
            img.src = require('./cara2.png');
            img.alt = 'Cabeza animada';
            headAnimation.appendChild(img);
            document.body.appendChild(headAnimation);

            setTimeout(() => {
                document.body.removeChild(headAnimation);
              }, 10000); // Desactivar la animación después de 10 segundos
          },
      },      
  };
  
  