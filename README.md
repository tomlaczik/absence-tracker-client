# AbsenceTrackerClient

## Fejlesztői környezet

- A projekt [Angular CLI](https://github.com/angular/angular-cli) 7.1.0-ás verzióval volt generálva.
- További technológiák:
  - Node.js v10.11.0, Typescript, Css, Material UI
  - IDEs: NetBeans, Visual Studio Code
- A kliens a `http://localhost:4200/`-on fut.

## Kliensoldali szolgáltatások

### Diák
- regisztrálás és belépés
- Összes tanóra kilistázása
  - A listát a felhasználó tudja szűrni 3 szempont alapján:
    - Összes óra
    - Felvett órák
    - Nem felvett órák
  - A listában minden tanóra mellett van egy gomb felvesz vagy lead szöveggel
    - felvesz: Saját órái közé felveszi az órát, amihez így a tanárok hiányzást írhatnak be és a diák láthatja ezeket.
    - lead: Kitörli a saját órái közül.
- Saját hiányzások kilistázása
  - A listában táblázatosan láthatja a felvett óráihoz beírt hiányzásokat.
### Tanár
- belépés
- Tanított órák kilistázása
  - Rákattintva egy órára kilistázódnak az arra járó diákok.
  - Hozzáadhat diákot vagy kitörölhet diákot egy-egy óráról.
- Saját órákhoz tartozó hiányzások kilistázása
  - Új hiányzás beírása.
  
## Használati eset diagram

![alt text](https://github.com/tomlaczik/absence-tracker-client/blob/master/usecase.png)
