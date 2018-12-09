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
  - Rákattintva egy órára kilistázódnak az arra járó diákok és mellettük hetekre bontva\
    a hiányzásuk jelölőnégyzetekkel, amiket ki- és bepipálva hiányzást ír be vagy töröl ki.
  - Hozzáadhat diákot vagy kitörölhet diákot egy-egy óráról.
- Saját órákhoz tartozó hiányzások kilistázása
  - Új hiányzás beírása.
  
## Használati eset diagram

![alt text](https://github.com/tomlaczik/absence-tracker-client/blob/master/usecase.png)

## Könyvtár struktúra

![alt text](https://github.com/tomlaczik/absence-tracker-client/blob/master/folder_structure.PNG)

## Felhasználói dokumentáció

### Tanárok részere
- A http://localhost:4200/ címen érhetjük el az oldalt. Ha nem voltunk még bejelentkezve, a bejelentkező
  oldalt láthatjuk, ahol felhasználónevünkkel és jelszavunkkal be tudunk lépni. A regisztrálás hallgatói
  profil-t hoz létre. A tanárokat az adminok tudják kijelölni.
- Belépés után a menüsávban kettő opció vállik elérhetővé:
  - Saját Órák:
    - A saját Órák-ra kattintva érhetjük el az általunk tanított órák listáját. Egy órára kattintva a lap alján megjelenik az adott           órára járó hallgatók listája mellettük a hetek felsorolva jelölőnégyzetekkel. Ha egy négyzetet bepipálunk, akkor az adott sorban         lévő diáknak írtunk be egy hiányzást az oszlopban feltüntetett hétre. Ha a pipát kivesszük, a hiányzást kitöröltük. A diákok             tudják követni a saját hiányzásaikat.
  - Kijelentkezés:
    - A kijelentekzés gombra kattintva a rendszer kijelentkeztet és vissza kerülünk a beléptető oldalra.
  
### Diákok részére
- A http://localhost:4200/ címen érhetjük el az oldalt. Ha nem voltunk még bejelentkezve, a bejelentkező
  oldalt láthatjuk, ahol felhasználó nevünkkel és jelszavunkkal be tudunk lépni. Illetve ha még nincsen profilunk, a kívánt
  felhasználónéc és jelszó beírása után a Register gombra kattintva betudunk regisztrálni a rendszerbe. Ezután bármikor használhatjuk     ezt a profilt.
- Belépés után a menüsávban három opció vállik elérhetővé:
  - Tanórák
    - Ebben a menüpontban lehetőségünk nyílik kilistázni az elérhető tanórákat. Három opció alapján tudjuk ezeket szűrni. Összes óra           megjelenítése, csak az általunk felvett tanórák és az általunk még fel nem vett órák. Minden tanóra mellett megjelenik egy gomb,         vagy felvesz vagy lead szöveggel. Az olyan órák mellett amiket még nem vettünk fel, a felvesz szöveg, míg a felvett tanóráknál a         lead szöveget láthatjuk. Ezek segítségével tudjuk kezelni a tanóráinkat.
  - Hiányzások
    - Ebben a menüpontban táblázatosan láthatjuk az óráinkat amik mellett hetekre bontva látjuk a hiányzásainkat. Egy sor jelent 1             tanórát, az oszlopok, az első három és az utolsó kivételével, pedig a heteket jelentik. Amelyik cellában x szerepel, abban a             sorban lévő órához az oszlopban szereplő hétre hiányzásunk van beírva. Az utolsó oszlop szummázza a sorhoz tartozó hiányzások           számát míg az első három információkat nyújt a tanóráról.
  - Kijelentkezés:
    - A kijelentekzés gombra kattintva a rendszer kijelentkeztet és vissza kerülünk a beléptető oldalra.
