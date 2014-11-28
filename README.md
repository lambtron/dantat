Dantat
===========

A simple API to determine if the [Golden Gate Bakery](http://goldengatebakery.com/) is open. Famous for their buttery, flaky and creamy egg custard tarts, the Golden Gate Bakery, too, has their vacation days.

## Endpoint:

http://dantat.herokuapp.com/api/isopen/

## Request:
```bash
curl http://dantat.herokuapp.com/api/isopen
```

## Response:
```javascript
{
  "message": true,
  "status": 200
}
```

or

```javascript
{
  "message": false,
  "status": 200
}
```