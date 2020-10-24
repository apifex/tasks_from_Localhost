// Stwórz klasę dla struktury danych związanych z użytkowniem
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

const is = require('is_js');
const moment = require('moment');

    class User{
        constructor(name, surname, dateOfBirth, password, sex, mail, accessLevel = 'user') {
            this.name = name;
            this.surname = surname;
            this.dateOfBirth = dateOfBirth;
            this.password = password;
            this.sex = sex;
            this.mail = mail;
            this.accessLevel = accessLevel
        }

        changeMail (newMail) {
            this.mail = newMail
        }

        get name(){
            return this._name
        }

        set name(value) {
            if (is.empty(value)) {
                throw console.error("Name shoud not be empty");
            }
            this._name = value
        }
        
        get surname() {
            return this._surname
        }

        set surname(value) {
            if (is.empty(value)) {
                throw console.error("Surname shoud not be empty")
            }
            this._surname = value
        }

        get dateOfBirth() {
            return this._dateOfBirth
        }

        set dateOfBirth(value) {
            this._dateOfBirth = moment(value).format('MM/DD/YYYY');
        }

        get password() {
            return this._password
        }

        set password(value) {
            let regExp = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
            if (!regExp.test(value)) {
                throw console.error("Password shoud have at least 8 characters with 1 Capital, 1 number, and 1 special char")
            }
            this._password = value
        }

        get sex() {
            return this._sex
        }

        set sex(value) {
            if (value!=='male' && value!=='female') {
                throw console.error("Sex shoud be MALE or FEMALE")
            }
            this._sex = value
        }

        get mail() {
            return this._mail
        }

        set mail(value) {
            if (!is.email(value)) {
                throw console.error("Email is incorrect")
            }
            this._mail = value
        }

    }


// Stwórz klasę dla struktury danych związanych z administratorem
// Klasa ma dziedziczyć po klasie User wszystkie informacje i metody
// Klasa ma mieć poziom dostępu = "admin"
// Klasa ma umożliwiać: 
// - zmianę poziomu dostępu dla innego Usera
// - zmianę hasła dla innego Usera

class Administrator extends User{
    constructor(name, surname, dateOfBirth, password, sex, mail, accessLevel = 'admin') {
        super(name, surname, dateOfBirth, password, sex, mail);
        this.accessLevel = accessLevel
    }
    
    changeAccessLevel(user, accessLevel) {
        user.accessLevel = accessLevel;
        if (accessLevel === 'admin') {
            user.changePassword = this.changePassword;
            user.changeAccessLevel = this.changeAccessLevel
        };

        if (accessLevel === 'user') {
            delete user.changePassword;
            delete user.changeAccessLevel;
        }
        
    }

    changePassword(user, newPassword) {
        user.password = newPassword
    }

    
}




		