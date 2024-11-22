## 1. Endpoints użytkowników
### Rejestracja, logowanie, zarządzanie użytkownikami
POST ```/api/users/register```

Opis: Rejestracja nowego użytkownika.

Payload:
```json
{
  "username": "example_user",
  "email": "example@example.com",
  "password": "example_password"
}
```
Odpowiedź:
```json
{
  "username": "example_user",
  "email": "example@example.com",
  "password": "example_password"
}
```
POST ```/api/users/login```

Opis: Logowanie użytkownika (JWT).

Payload:
```json
{
  "email": "example@example.com",
  "password": "example_password"
}
```
Odpowiedź:
```json
{
  "token": "jwt-token",
  "user": {
    "id": "uuid",
    "username": "example_user",
    "role": "user"
  }
}
```

GET ```/api/users/profile```

Opis: Pobieranie danych zalogowanego użytkownika.

Nagłówek:

```
Authorization: Bearer <jwt-token>
```
Odpowiedź:
```json
{
  "id": "uuid",
  "username": "example_user",
  "email": "example@example.com",
  "role": "user"
}
```

## 2. Endpoints tłumaczeń ```(/api/translations)```

POST ```/api/translations```

Opis: Dodawanie nowego tłumaczenia (tylko admin).

Nagłówek:

```
Authorization: Bearer <jwt-token>
```
Payload:
```json
{
  "sourceText": "Hello",
  "translatedText": "Cześć",
  "sourceLanguage": "en",
  "targetLanguage": "pl"
}
```
Odpowiedź: 
```json
{
  "sourceText": "Hello",
  "translatedText": "Cześć",
  "sourceLanguage": "en",
  "targetLanguage": "pl",
  "_id": "67410f789ee506fe7c2c899c",
  "createdAt": "2024-11-22T23:10:48.556Z",
  "__v": 0
}
```

GET ```/api/translations```

Opis: Pobieranie listy wszystkich tłumaczeń (dla administratora).

Nagłówek:

```
Authorization: Bearer <jwt-token>
```

Parametry opcjonalne:
```?sourceLanguage=pl```
```?targetLanguage=en```

Odpowiedź: 
```json
[
  {
      "_id": "67410bcb1999ce1548c9157b",
      "sourceText": "mouse",
      "translatedText": "mysz",
      "sourceLanguage": "en",
      "targetLanguage": "pl",
      "createdAt": "2024-11-22T22:55:07.270Z",
      "__v": 0
  }
]

```
GET ``/api/translations/:id``

Nagłówek:

```
Authorization: Bearer <jwt-token>
```

Opis: Pobieranie pojedynczego tłumaczenia.
Parametry:
```:id - ID tłumaczenia.```

Odpowiedź: 
```json
{
  "_id": "67410f37a93b73a8185f5677",
  "sourceText": "mouse2",
  "translatedText": "mysz2",
  "sourceLanguage": "en",
  "targetLanguage": "pl",
  "createdAt": "2024-11-22T23:09:43.180Z",
  "__v": 0
}
```

PUT ``/api/translations/:id``

Nagłówek:

```
Authorization: Bearer <jwt-token>
```

Opis: Edycja pojedynczego tłumaczenia.
Parametry:
```:id - ID tłumaczenia.```

Payload: 
```json
{
  "sourceText": "Hi",
  "translatedText": "Cześć",
  "sourceLanguage": "en",
  "targetLanguage": "pl"
}
```

Odpowiedź: 
```json
{
    "sourceText": "Hi",
    "translatedText": "Cześć",
    "sourceLanguage": "en",
    "targetLanguage": "pl",
    "_id": "67410bcb1999ce1548c9157b"
}
```

DELETE ``/api/translations/:id``

Nagłówek:

```
Authorization: Bearer <jwt-token>
```

Opis: Usunięcie pojedynczego tłumaczenia.
Parametry:
```:id - ID tłumaczenia.```

Odpowiedź: 
```json
{
    "message": "Translation deleted"
}
```

## 3. Endpoints tłumaczenia tekstu w czasie rzeczywistym ```(/api/translate)```

Tłumaczenie w obie strony (dla użytkownika)

POST ```/api/translate```
Opis: Wykonywanie tłumaczenia tekstu na wskazany język.

Payload: 
```json
{
  "sourceText": "Hello",
  "sourceLanguage": "en",
  "targetLanguage": "pl"
}
```
Odpowiedź: 
```json
{
  "sourceText": "Hello",
  "translatedText": "Cześć",
  "sourceLanguage": "en",
  "targetLanguage": "pl"
}
```

## 4. Endpoints języków ```(/api/languages)```

Zarządzanie listą języków

GET ```/api/languages```

Opis: Pobieranie dostępnych języków.

Odpowiedź: 
```json
[
  { "code": "en", "name": "English", "nativeName": "Engilsh" },
  { "code": "pl", "name": "Polish", "nativeName": "Polski" },
  { "code": "de", "name": "German", "nativeName": "Deutsch" }
]

```
POST ```/api/languages```

Opis: Dodawanie nowego języka (tylko admin).

Nagłówek:

```
Authorization: Bearer <jwt-token>
```
Payload: 
```json
{
  "code": "fr",
  "name": "French",
  "nativeName": "Français"
}
```
Odpowiedź:
```json
{
  "message": "Language added successfully"
}
```

DELETE ```/api/languages/:code```

Opis: Usuwanie języka z listy (tylko admin).

Nagłówek:

```
Authorization: Bearer <jwt-token>
```

Parametry:
```:code``` - Kod języka.

Odpowiedź:
```json
{
  "message": "Language deleted successfully"
}
```





