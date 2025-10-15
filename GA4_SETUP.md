# Google Analytics 4 - Instrukcja Konfiguracji

## Krok 1: Uzyskanie ID GA4
1. Zaloguj się do [Google Analytics](https://analytics.google.com/)
2. Utwórz nową właściwość lub użyj istniejącej
3. Skopiuj swój ID pomiaru (format: G-XXXXXXXXXX)

## Krok 2: Aktualizacja pliku index.html
Zastąp `G-XXXXXXXXXX` w dwóch miejscach:
- Linia 117: `<script async src="https://www.googletagmanager.com/gtag/js?id=G-TWÓJ-ID"></script>`
- Linia 122: `gtag('config', 'G-TWÓJ-ID');`

## Krok 3: Weryfikacja
1. Otwórz stronę w przeglądarce
2. Sprawdź w Google Analytics czy pojawiają się dane w czasie rzeczywistym
3. Upewnij się, że nie ma błędów w konsoli przeglądarki

## Dodatkowe Ustawienia (opcjonalnie)
- Konwersje: Możesz dodać śledzenie kliknięć w przyciski CTA
- Demografia: Włącz raporty demograficzne w ustawieniach GA4
- E-commerce: Jeśli masz sklep, skonfiguruj śledzenie transakcji

## Gotowe!
Twoja strona jest teraz gotowa do śledzenia ruchu i analizy zachowań użytkowników.