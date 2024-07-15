# Programing Basics Project

---

## Babysitter Game

### Beschreibung

* Interaktives Spiel, das über die Eingabe im VS Code Terminal gespielt wird.
* Ziel ist es, das ausgewählte Baby zum Lachen zu bringen.
* Es kann zwischen 3 Babys mit unterschiedlichen Anfangswerten ausgewählt werden.
* Jedes Baby hat eine bestimmte Anzahl an Energie-, Spaß-, Müdigkeits- und Windelpunkten.
* Das Spiel hat keine feste Rundenanzahl. Es wird beendet, wenn der Spieler gewinnt oder verliert.

### Aktionen

* Es gibt verschiedene Aktionen, mit denen die Punkte gesteigert oder gesenkt werden können:

    - **füttern**:
        - Energiepunkte: +10
        - Spaßpunkte: +5
        - Müdigkeitspunkte: +5
        - Windelpunkte: +10

    - **spielen**:          
        - Energiepunkte: -5
        - Spaßpunkte: +10
        - Müdigkeitspunkte: +5
        - Windelpunkte: +5
    
    - **schlafen legen**:   
        - Energiepunkte: -5
        - Spaßpunkte: -5
        - Müdigkeitspunkte: -10
        - Windelpunkte: +5

    - **Windel wechseln**:  
        - Energiepunkte: -5
        - Spaßpunkte: -5
        - Müdigkeitspunkte: +5
        - Windelpunkte: 0

### Gewinn- und Verlustbedingungen:

* Um zu gewinnen, müssen bestimmte Voraussetzungen erfüllt werden:
    - Energiepunkte: >= 50
    - Spaßpunkte: >= 50
    - Müdigkeitspunkte: <= 50
    - Windelpunkte: <= 50

* Das Spiel ist verloren, wenn mindestens einer der folgenden Fälle eintritt:
    - Energiepunkte: <= 0
    - Spaßpunkte: <= 0
    - Müdigkeitspunkte: > 50
    - Windelpunkte: > 50


## Technologien


* JavaScript
* Node.js
* Readline-Sync (https://www.npmjs.com/package/readline-sync)
* Chalk (https://www.npmjs.com/package/chalk)


## Installation
1) Klone die Datei aus GitHub: https://github.com/MingWessels/PB_Terminal-project
2) Öffne die Datei index.js in VS Code
3) Öffne das Terminal in VS Code
4) Installiere readline-sync mit dem Befehl npm install readline-sync
5) Installiere chalk mit dem Befehl npm install chalk
6) Starte das Spiel mit dem Befehl node index.js