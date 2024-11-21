# Temat projektu: Translator
## Skład grupy:
- Maciej Sawicki
- Przemysław Żero
- Mateusz Pruszyński

## Nazwy klas:
**1. Translation**
```
class Translation {
    id: number – unikalny identyfikator tłumaczenia.
    sourceText: string – tekst źródłowy do przetłumaczenia.
    translatedText: string – przetłumaczony tekst.
    sourceLanguage: string – język tekstu źródłowego.
    targetLanguage: string – język docelowy.
    createdAt: Date – data utworzenia/modyfikacji tłumaczenia.
}
```
**2. User**
```
class User {
    id: string - Unikalny identyfikator
    username: string - Nazwa użytkownika
    email: string - Adres e-mail
    passwordHash: string - Zahasłowane hasło 
    role: 'user' | 'admin' - Rola użytkownika: 'user' lub 'admin'
    createdDate: Date; - Data utworzenia konta
}
```
**3. Language**
```
class Language {
  code: string - Kod języka (np. 'en', 'pl')
  name: string - Nazwa języka            
 ```
 
## Funkcjonalności do zaimplementowania:
### 1. Funkcjonalności użytkownika (User)
Tłumaczenie tekstu:
- Użytkownik może wprowadzić tekst w polu wejściowym i wybrać język źródłowy oraz język docelowy, aby przetłumaczyć tekst.
- Obsługa tłumaczenia w obie strony (np. z angielskiego na polski i z polskiego na angielski).
- Dropdowny z listą dostępnych języków do wyboru jako język źródłowy i docelowy. Wybór kilku popularnych     języków do tłumaczenia (np. angielski, hiszpański, niemiecki).
- Użytkownik po zalogowaniu ma dostęp do historii swoich tłumaczeń

### 2. Funkcjonalności administratora (Admin)
Zarządzanie tłumaczeniami:

 - Administrator po zalogowaniu się ma dostęp do zakładki, gdzie może edytować, dodawać lub usuwać istniejące tłumaczenia.
 - Ochrona tras, które pozwalają na dostęp do panelu administracyjnego tylko dla zalogowanych administratorów.

Funkcja edycji pozwala na modyfikację błędnych lub nieaktualnych tłumaczeń.

# Komunikacja z backendem
Operacje CRUD na tłumaczeniach:

- **Create:** Dodawanie nowych tłumaczeń do bazy danych.
- **Read:** Pobieranie listy tłumaczeń do wyświetlenia użytkownikom i administratorom.
- **Update:** Edytowanie istniejących tłumaczeń przez administratora.
- **Delete:** Usuwanie tłumaczeń z bazy danych.

# Technologie:
**Frontend:** Angular 18, TypeScript, RxJs do zapytań z api, SCSS, Angular Material  
**Backend:** Node.js + Express, MongoDB
