// Stwórz klasę dla struktury danych związanych z użytkowniem
class User{

}
// Klasa przyjmować w konstruktorze: 
// Imię, Nazwisko, datę urodzenia, hasło, 
// płeć, adres email, poziom dostepu = "user"

// Klasa ma umożliwiać zmianę adresu email


// Dodatkowo User ma mieć walidacje wykonaną za pomocą is.js oraz datę obsługiwaną przez bibliotekę moment.js				
// jeśli któraś z walidacji się nie powiedzie instancja ma nie być tworzona, tylko ma zwracać error z odpowiednimi komunikatami o niepowiedzionej walidacji		

// Podczas walidacji upewnij się, że:
// - email jest poprawnym emailem				
// - hasło ma mieć min 8 znaków, co najmniej jedną wielką literę i co najmniej jedną cyfrę oraz co najmniej 1 znak specjalny				
// - płeć musi być ze zbioru [male, female]				
// - data (nieważne jaka wejdzie) do konstruktora musi wejść w formacie MM/DD/YYYY				
// - imię i nazwisko musi być niepuste				


// Stwórz klasę dla struktury danych związanych z administratorem
// Klasa ma dziedziczyć po klasie User wszystkie informacje i metody
class Administrator{

}

// Klasa ma mieć poziom dostępu = "admin"
// Klasa ma umożliwiać: 
// - zmianę poziomu dostępu dla innego Usera
// - zmianę hasła dla innego Usera

		