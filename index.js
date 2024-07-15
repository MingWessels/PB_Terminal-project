import readlineSync from 'readline-sync';
import chalk from 'chalk';

function divider() {
    console.log(`${'-'.repeat(50)}\n`);
}

// Erstelle die Klasse Baby:
class Baby {
    constructor(name, energy, fun, tiredness, diaperLevel) {
        this.name = name;
        this.energy = energy;
        this.fun = fun;
        this.tiredness = tiredness;
        this.diaperLevel = diaperLevel;
    }

    feed() {
        this.energy += 10;
        this.fun += 5;
        this.tiredness += 5;
        this.diaperLevel += 10;
    }

    play() {
        this.energy -= 5;
        this.fun += 10;
        this.tiredness += 5;
        this.diaperLevel += 5;
    }

    sleep() {
        this.energy -= 5;
        this.fun -= 5;
        this.tiredness -= 10;
        this.diaperLevel += 5;
    }

    changeDiaper() {
        this.energy -= 5;
        this.fun -= 5;
        this.tiredness += 5;
        this.diaperLevel = 0;
    }

    getStatus() {
        let status;
        if (
            this.energy >= 50 &&
            this.fun >= 50 &&
            this.tiredness <= 50 &&
            this.diaperLevel <= 50
        ) {
            console.log(`
      __\\|/__
     /       \\
    /  o   o  \\
  (|   __^__   |)
    \\  \\___/  /
     \\_______/
`);
            console.log(
                chalk.green(`Du hast gewonnen! ${this.name} ist glücklich und lacht!\n`)
            );
            status = 'gewonnen';
        } else if (
            this.energy <= 0 ||
            this.fun <= 0 ||
            this.tiredness > 50 ||
            this.diaperLevel > 50
        ) {
            console.log(`
      __\\|/__
     /       \\
    /  >   <  \\
  (|   '_^_    |)
    \\  \/___\\  /
     \\_______/
`);
            console.log(chalk.red(`Oh nein, leider verloren! ${this.name} weint!\n`));
            status = 'verloren';
        } else {
            console.log(`
      __\\|/__
     /       \\
    /  o   o  \\
  (|     ^     |)
    \\  \ ---   /
     \\_______/
`);
            console.log(
                chalk.yellow(
                    `${this.name} ist noch nicht glücklich. Versuche es weiter!\n`
                )
            );
            status = 'weitermachen';
        }
        return status;
    }

    showStatus() {
        console.log(
            `${this.name} hat ${this.energy} Energiepunkte, ${this.fun} Spaßpunkte, ${this.tiredness} Müdigkeitspunkte und ${this.diaperLevel} Windelpunkte.\n`
        );
        console.log(
            chalk.green(
                `Du brauchst mindestens 50 Energiepunkte und 50 Spaßpunkte, um ${this.name} zum lachen zu bringen.`
            )
        );
        console.log(
            chalk.red(
                `Aber Vorsicht, die Müdigkeits- und Windelpunkte von ${this.name} dürfen 50 nicht überschreiten!\n`
            )
        );
    }
}

// Erstelle 3 Instanzen der Klasse Babys:
const mia = new Baby('Mia', 20, 20, 20, 5);
const emma = new Baby('Emma', 30, 20, 10, 15);
const paul = new Baby('Paul', 30, 30, 40, 40);

// Starte das Spiel:
while (true) {
    console.clear();
    console.log('*** Du spielst das Spiel BABYSITTER ***\n');
    divider();
    console.log(chalk.green('Bringe dein Baby zum lachen und du gewinnst!\n'));
    console.log(chalk.red('Weint es, dann hast du leider verloren...\n'));
    console.log('VIEL SPASS!\n');
    divider();
    console.log('Um welches Baby möchtest du dich kümmern?');

    // Wähle das Baby aus:
    const babys = ['Mia', 'Emma', 'Paul'];
    const index = readlineSync.keyInSelect(babys, 'Wähle eines aus der Liste', {
        cancel: false
    });

    console.clear();
    divider();
    console.log(`Du hast ${babys[index]} gewählt.\n`);

    let selectedBaby;
    if (index === 0) {
        selectedBaby = mia;
    } else if (index === 1) {
        selectedBaby = emma;
    } else if (index === 2) {
        selectedBaby = paul;
    } else {
        console.log('Your baby is not defined');
    }
    selectedBaby.showStatus();

    // Starte Aktion:
    let step = 1;
    while (true) {
        divider();
        console.log(chalk.blue(`Runde ${step}:\n`));
        console.log('Was möchtest du tun?');
        const actions = ['füttern', 'spielen', 'schlafen legen', 'Windel wechseln'];
        const indexActions = readlineSync.keyInSelect(
            actions,
            'Wähle aus der Liste',
            { cancel: 'abbrechen' }
        );
        console.clear();

        if (indexActions === 0) {
            selectedBaby.feed();
        } else if (indexActions === 1) {
            selectedBaby.play();
        } else if (indexActions === 2) {
            selectedBaby.sleep();
        } else if (indexActions === 3) {
            selectedBaby.changeDiaper();
        } else {
            console.log('Du hast das Spiel abgebrochen.');
            break;
        }
        divider();
        console.log(`Du hast '${actions[indexActions]}' gewählt.\n`);
        selectedBaby.showStatus();
        step++;

        // Abbruch des Spiels bei Gewinn oder Verlust:
        let status = selectedBaby.getStatus();
        if (status === 'gewonnen' || status === 'verloren') {
            break;
        } else {
            continue;
        }
    }

    // Abfrage weiteres Spiel:
    const choiceSelection = readlineSync.keyInYN(
        'Möchtest du noch ein Spiel spielen?'
    );
    if (choiceSelection === false) {
        break;
    }
}
