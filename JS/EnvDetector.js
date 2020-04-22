// Stwórz klasę EnvDetector, która:
// - działa tylko na podstawie elementu window i wyrzuca error, jeśli window nie istnieje
// - każde metoda tej klasy jest statyczna

// ma metody, które zwracają:
// - wymiary okna oraz wymiary strony (pamiętaj, że zmieniają się one w przypadku window.resize)
// - typ urządzenia (mobile/tablet/laptop)
// - rodzaj przeglądarki uzytkownika (ie/edge/firefox/opera/chrome)
// - system operacyjny uzytkownika (ios/android/windows/linux/macos)
// - informację czy dane urządzenie posiada ekran dotykowy
// - informację czy dane urządzenie jest offline czy online

class EnvDetector {
    getBrowserSize(){}
    getWindowSize(){}
    getDeviceType(){}
    getOS(){}
    isTouchable(){}
    isOnline(){}
}