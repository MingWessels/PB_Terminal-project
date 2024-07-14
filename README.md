# Programing Basics Project

## Babysitter Game

* Interaktives Spiel, das über die Eingabe im VS Code Terminal gespielt wird.
* Ziel ist es, das ausgewählte Baby zum lachen zu bringen.
* Es kann zwischen 3 Babys mit unterschiedlichen Anfangswerten ausgewählt werden.
* Jedes Baby hat eine bestimmte Anzahl an Energie-, Spaß-, Müdigkeits- und Windelpunkten.
* Es gibt verschieden Aktionen (füttern, schlafen legen, spielen, Windel wechseln) mit denen die Punkte gesteigert oder gesenkt werden können.

* Um zu gewinnen müssen bestimmte Vorraussetzungen erfüllt werden:
    - Energiepunkte: >= 50
    - Spaßpunkte: >= 50
    - Müdigkeitspunkte: <= 50
    - Windelpunkte: <= 50

* Das Spiel ist verloren, wenn mindestens einer der folgenden Fälle eintritt:
    - Energiepunkte: <= 0
    - Spaßpunkte: <= 0
    - Müdigkeitspunkte: > 50
    - Windelpunkte: > 50

* Das Spiel hat keine feste Rundenanzahl, es wird beendet, wenn der Spieler gewinnt oder verliert.


## Technologien

* JavaScript
* Node.js
* Readline-Sync (https://www.npmjs.com/package/readline-sync)
* Chalk (https://www.npmjs.com/package/chalk)


