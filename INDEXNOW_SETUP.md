# Configuración de IndexNow

Este proyecto ya **aloja la clave IndexNow** en la raíz del sitio para verificar la propiedad del dominio:

- Archivo raíz: `https://jestemprogramista.pl/ed0b30f902984f53a74ef2d69f77f48a.txt`
- Alias adicional: `https://jestemprogramista.pl/myIndexNowKey63638.txt` (contiene la misma clave)

Contenido del archivo: `ed0b30f902984f53a74ef2d69f77f48a`

## Envío de URLs a IndexNow

Puedes enviar URLs individualmente o en lote. Dos opciones:

1) Directo al endpoint oficial (desde tu máquina):

PowerShell (Windows):

```powershell
$body = {
  host = "jestemprogramista.pl"
  key = "ed0b30f902984f53a74ef2d69f77f48a"
  keyLocation = "https://jestemprogramista.pl/ed0b30f902984f53a74ef2d69f77f48a.txt"
  urlList = @(
    "https://jestemprogramista.pl/",
    "https://jestemprogramista.pl/blog",
    "https://jestemprogramista.pl/blog/ile-kosztuje-sklep-internetowy-2024"
  )
} | ConvertTo-Json

Invoke-RestMethod -Method Post -Uri "https://api.indexnow.org/indexnow" -ContentType "application/json; charset=utf-8" -Body $body
```

curl:

```bash
curl -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{
    "host": "jestemprogramista.pl",
    "key": "ed0b30f902984f53a74ef2d69f77f48a",
    "keyLocation": "https://jestemprogramista.pl/ed0b30f902984f53a74ef2d69f77f48a.txt",
    "urlList": [
      "https://jestemprogramista.pl/",
      "https://jestemprogramista.pl/blog",
      "https://jestemprogramista.pl/blog/ile-kosztuje-sklep-internetowy-2024"
    ]
  }'
```

2) Usar la función serverless en Vercel `POST /api/indexnow` (ideal para automatizar desde el sitio):

```bash
curl -X POST "https://jestemprogramista.pl/api/indexnow" \
  -H "Content-Type: application/json" \
  -d '{
    "urlList": [
      "https://jestemprogramista.pl/",
      "https://jestemprogramista.pl/blog",
      "https://jestemprogramista.pl/blog/ile-kosztuje-sklep-internetowy-2024"
    ]
  }'
```

La función rellena `host`, `key` y `keyLocation` automáticamente y reenvía la petición a `https://api.indexnow.org/indexnow`.

## Códigos de respuesta comunes

- `200 OK`: URLs enviadas correctamente
- `400 Bad Request`: Formato inválido
- `403 Forbidden`: Clave no válida o no encontrada en el archivo
- `422 Unprocessable Entity`: URLs no pertenecen al host o protocolo incorrecto
- `429 Too Many Requests`: Demasiadas solicitudes

## Recomendaciones

- Enviar URLs nuevas o actualizadas (p. ej. al publicar entrada del blog).
- Evitar spam; agrupar cambios en lotes razonables.
- Mantener la clave accesible públicamente en la raíz.