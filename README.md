# Projekt-WWW

Dieses Projekt soll die Technik HTML und JavaScript benutzen, um eine Webseite zu entwickeln. 
Es sollen HTTP-Abfragen, SVG, URL-Weiterleitung und CSS benutzt werden.

Aufbau:
Home-Webseite soll Button enthalten, die weiterleiten zu Unterseiten
Unterseiten sollen verschiedene Applikationen enthalten: Game, Suchspiel, Quiz
Im Backend sollen Daten in einer Datenbank gespeichert werden. --> Auswahl eines Frameworks fürs Backend (z.B. Node.js)
mit Node.js: Web-Server aufsetzten

--------------------------------------------------------------------------------------------------------------------------------------

Jeder Projektteilnehmer hat gleichermaßen Anteilrecht am Code und jeder ist zu jeder Zeit gestattet Merge Requests eines anderens zu bearbeiten. 

Arbeit mit Git: 
Feature-Branch: -für jedes Ticket wird es einen dedizierten Feature branch geben
                -genannt wird dieser [#TickedId][Ticketname] Leerzeichen werden durch "_" ersetzt 
                -Subbranch vom develeop Branch

Merging: -ist ein feature Branch vollständig und wurde von einer weiteren Person abgenommen/überprüft kann dieser mit dem develop Branch gemerged werden


--------------------------------------------------------------------------------------------------------------------------------------

"There are only two hard thins in Computer Science: cache invalidation und naming things." --Phil Karlton

Code Konvetionen:   -Variablen, Funktionen und Klassen werden in Englisch benannt 
                    -Trennung von Wörtern innerhalb eines Names mit Camel Case (Bsp CheckCollision)
                    -Klassen fangen mit Großbuchstaben an und 
                    -Funktionen und Variablen fangen mit Kleinbuchstaben am
                    -Namen möglichst präzise und deskriptiv
                    -Einfache Art zum benennen [what Does the function][on what does the function][optional extra] bsp CheckCollision, GetDamage 
                    -Kommentare und commit Nachrichten ausschließlich in deutsch und deskriptiv
                    -Kommentare sollen kurz beschreiben was die Funktion/Klasse macht damit dritte es einfach verstehen können
                    -Kommentare müssen nicht parallel zur individuellen Bearbeitung geschrieben werden, sollten aber vor jedem commit verfasst werden
                    -Commit Nachrichten sollen kurz zusammenfassen was gemacht wurde
                    -am ende jeder Zeil steht ein Semikolon
                    -Variablen werden am Anfang des Codes deklariert
                    -if else Funktionen werden wie folgt geschrieben:
                    if
                    {

                    }
                    else
                    {

                    }
                    -Dateien werden in Englisch bennant und sind deutlich



--------------------------------------------------------------------------------------------------------------------------------------

Definition of ready:Ein Ticket gilt als bereit zur Bearbeitung wenn:
        -eine ausführliche Beschreibung vorliegt 
        -sich das Ticket nicht weiter sinnvoll aufspalten lässt 
        -jeder weiß was er machen müsste anhand der Beschreibung alleine 

Definition of Done: Ticket gilt als fertig wenn: 
        -alle Ticket Anforderungen erfüllt wurden 
        -ein zweiter Developer über den Code drübergeguckt und abgenommen hat                    
   



--------------------------------------------------------------------------------------------------------------------------------------

Hochfahren des Servers lokal: in Terminal: node server.js
