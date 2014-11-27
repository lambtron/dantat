Golden Gate Bakery API
===========

Light-weight API to check if the [Golden Gate Bakery](http://goldengatebakery.com/) is open. Famous for their buttery, flaky and creamy egg custard tarts (oh, I wish I could have one right now!), the Golden Gate Bakery, too, has their vacation days.

## Endpoint:

http://dantat.herokuapp.com/api/isopen/

## Request:
```bash
curl -X POST
     -H "Content-type: application/json"
     http://dantat.herokuapp.com/api/isopen
```

## Response:
```javascript
false
```

or

```javascript
true
```