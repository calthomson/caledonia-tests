const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var Analytics = require('analytics-node');
var analytics = new Analytics('6EfkfQri8SKBDpCD8KGETFB6RWi3k1yB');

analytics.track({
  userId:'abc',
  event: 'Homepage Visited',
  properties: {
    email: "iheartsf@segment.com",
    favorite_color: "green"
  }
});

analytics.track({
  userId:'abc',
  event: 'Site Visited',
  properties: {
    name: "secret"
  }
});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
