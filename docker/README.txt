sudo docker-compose up  //in dem verzeichnis mit der docker-compose.yml
docker ps //zeigt laufende Container
docker-compose down //herunterfahren
docker-compose restart //neustarten

psql -h localhost -U yourusername -d searchgame //einloggen in DBMS
benutzer: max
passwort: max

\l -> Datenbanken anzeigen
\c *datenbankname* -> verbinden zu Datenbanken
\dt -> anzeigen aller Relationen

createdb *datenbankname* // erstellen neuer DBMS
CREATE TABLE... // erstellen neuer Relation