// Zrób apkę tylko na urządzenia z geolokalizacją z mapą google lub inną:

// TakeEDogForWalkApp

// Wstaw w nią 2 markery:
// - jeden to Ty
// - drugi to Twój pies/kot

// Potrzebujesz w tej aplikacji 2 widoki, które
// mogą być zmieniane np poprzez standardowe menu typu hamburger + dropdown

// Widok mapy:
// - widok pokazuje mapę z 2 markerami oraz scieżką która pokazuje którędy przeszedłeś od czasu włączenia apki
// - pies powienien chodzić w promieniu 200 metrów od Ciebie
// - pies każdy kolejny przystanek spaceru ma wyznaczyć sobie na krawędzi okręgu o promieniu 200 m gdzie Ty jesteś środkiem
// - ruch psa to ruch prostoliniowy w tempie 2 metry na sekundę 
// - pies chodzi losowego punktu X na krawędzi okręgu do Ciebie (środek okręgu) do innego losowego punktu Y na krawędzi okręgu
// - miej przycisk "rozpocznij" i "skończ spacer", aby wiedzieć ile zrobiłeś metrów od początku spaceru
// - ma być przycisk "zawołaj psa", który po wciśnięciu tego przycisku biegnie do Ciebie w tempie 6 metrów na sekundę
// - pies po zawołaniu i dotarciu do Ciebie wyznacza sobie kolejny punkt na okręgu 200m od Ciebie i zmierza w jego stronę

// Widok podsumowania
// - drugi widok to podsumowanie spaceru - ile km zrobiłeś Ty, na jakim obszarze spacerowałeś, ile km zrobił pies
