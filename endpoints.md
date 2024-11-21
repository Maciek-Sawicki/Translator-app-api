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
  "message": "Translation added successfully",
  "translationId": "uuid"
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
    "id": "uuid",
    "sourceText": "Hello",
    "translatedText": "Cześć",
    "sourceLanguage": "en",
    "targetLanguage": "pl",
    "createdDate": "2024-11-13T10:00:00Z",
    "modifiedDate": null
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
  "id": "uuid",
  "sourceText": "Hello",
  "translatedText": "Cześć",
  "sourceLanguage": "en",
  "targetLanguage": "pl",
  "createdDate": "2024-11-13T10:00:00Z",
  "modifiedDate": null
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
  "message": "Translation updated successfully"
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
  "message": "Translation deleted successfully"
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
  { "code": "en", "name": "English" },
  { "code": "pl", "name": "Polish" },
  { "code": "de", "name": "German" }
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
  "name": "French"
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





