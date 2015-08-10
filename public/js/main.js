(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/franckernewein/webgl-exp/src/fragment.glsl":[function(require,module,exports){
module.exports = function parse(params){
      var template = "uniform vec4 uColor; \n" +
" \n" +
"void main() { \n" +
"  gl_FragColor = uColor; \n" +
"} \n" +
" \n" 
      params = params || {}
      for(var key in params) {
        var matcher = new RegExp("{{"+key+"}}","g")
        template = template.replace(matcher, params[key])
      }
      return template
    };

},{}],"/Users/franckernewein/webgl-exp/src/main.js":[function(require,module,exports){
var fragment = require('./fragment.glsl');
var vertex = require('./vertex.glsl');

window.onload = function init() {
  var canvas = document.getElementById('scene');
  var gl = canvas.getContext('webgl');

  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  var vs = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vs, vertex());
  gl.compileShader(vs);

  var fs = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fs, fragment());
  gl.compileShader(fs);

  var program = gl.createProgram();

  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  var aspect = canvas.width / canvas.height;

  var vertices = new Float32Array([-0.5, 0.5 * aspect, 0.5, 0.5 * aspect, 0.5, -0.5 * aspect, -0.5, 0.5 * aspect, 0.5, -0.5 * aspect, -0.5, -0.5 * aspect]);

  var vbuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  var itemSize = 2;
  var numItems = vertices.length / itemSize;

  console.log(program);
  gl.useProgram(program);
  /*

  program.uColor = gl.getUniformLocation(program, "uColor");
  gl.uniform4fv(program.uColor, [0.0, 0.3, 0.0, 1.0]);

  program.aVertexPosition = gl.getAttribLocation(program, "aVertexPosition");
  gl.enableVertexAttribArray(program.aVertexPosition);
  gl.vertexAttribPointer(program.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);

  gl.drawArrays(gl.TRIANGLES, 0, numItems);
  */

};

},{"./fragment.glsl":"/Users/franckernewein/webgl-exp/src/fragment.glsl","./vertex.glsl":"/Users/franckernewein/webgl-exp/src/vertex.glsl"}],"/Users/franckernewein/webgl-exp/src/vertex.glsl":[function(require,module,exports){
module.exports = function parse(params){
      var template = "attribute vec2 aVertexPosition; \n" +
" \n" +
"void main() { \n" +
"  gl_Position = vec4(aVertexPosition, 0.0, 1.0); \n" +
"} \n" +
" \n" 
      params = params || {}
      for(var key in params) {
        var matcher = new RegExp("{{"+key+"}}","g")
        template = template.replace(matcher, params[key])
      }
      return template
    };

},{}]},{},["/Users/franckernewein/webgl-exp/src/main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZnJhZ21lbnQuZ2xzbCIsInNyYy9tYWluLmpzIiwic3JjL3ZlcnRleC5nbHNsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZShwYXJhbXMpe1xyXG4gICAgICB2YXIgdGVtcGxhdGUgPSBcInVuaWZvcm0gdmVjNCB1Q29sb3I7IFxcblwiICtcblwiIFxcblwiICtcblwidm9pZCBtYWluKCkgeyBcXG5cIiArXG5cIiAgZ2xfRnJhZ0NvbG9yID0gdUNvbG9yOyBcXG5cIiArXG5cIn0gXFxuXCIgK1xuXCIgXFxuXCIgXHJcbiAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fVxyXG4gICAgICBmb3IodmFyIGtleSBpbiBwYXJhbXMpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoXCJ7e1wiK2tleStcIn19XCIsXCJnXCIpXHJcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKG1hdGNoZXIsIHBhcmFtc1trZXldKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0ZW1wbGF0ZVxyXG4gICAgfTtcbiIsInZhciBmcmFnbWVudCA9IHJlcXVpcmUoJy4vZnJhZ21lbnQuZ2xzbCcpO1xudmFyIHZlcnRleCA9IHJlcXVpcmUoJy4vdmVydGV4Lmdsc2wnKTtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NlbmUnKTtcbiAgdmFyIGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJyk7XG5cbiAgZ2wudmlld3BvcnQoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAxKTtcbiAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG5cbiAgdmFyIHZzID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpO1xuICBnbC5zaGFkZXJTb3VyY2UodnMsIHZlcnRleCgpKTtcbiAgZ2wuY29tcGlsZVNoYWRlcih2cyk7XG5cbiAgdmFyIGZzID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XG4gIGdsLnNoYWRlclNvdXJjZShmcywgZnJhZ21lbnQoKSk7XG4gIGdsLmNvbXBpbGVTaGFkZXIoZnMpO1xuXG4gIHZhciBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuXG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2cyk7XG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcyk7XG4gIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gIHZhciBhc3BlY3QgPSBjYW52YXMud2lkdGggLyBjYW52YXMuaGVpZ2h0O1xuXG4gIHZhciB2ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoWy0wLjUsIDAuNSAqIGFzcGVjdCwgMC41LCAwLjUgKiBhc3BlY3QsIDAuNSwgLTAuNSAqIGFzcGVjdCwgLTAuNSwgMC41ICogYXNwZWN0LCAwLjUsIC0wLjUgKiBhc3BlY3QsIC0wLjUsIC0wLjUgKiBhc3BlY3RdKTtcblxuICB2YXIgdmJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmJ1ZmZlcik7XG4gIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0aWNlcywgZ2wuU1RBVElDX0RSQVcpO1xuXG4gIHZhciBpdGVtU2l6ZSA9IDI7XG4gIHZhciBudW1JdGVtcyA9IHZlcnRpY2VzLmxlbmd0aCAvIGl0ZW1TaXplO1xuXG4gIGNvbnNvbGUubG9nKHByb2dyYW0pO1xuICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuICAvKlxuXG4gIHByb2dyYW0udUNvbG9yID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidUNvbG9yXCIpO1xuICBnbC51bmlmb3JtNGZ2KHByb2dyYW0udUNvbG9yLCBbMC4wLCAwLjMsIDAuMCwgMS4wXSk7XG5cbiAgcHJvZ3JhbS5hVmVydGV4UG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBcImFWZXJ0ZXhQb3NpdGlvblwiKTtcbiAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocHJvZ3JhbS5hVmVydGV4UG9zaXRpb24pO1xuICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHByb2dyYW0uYVZlcnRleFBvc2l0aW9uLCBpdGVtU2l6ZSwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgbnVtSXRlbXMpO1xuICAqL1xuXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZShwYXJhbXMpe1xyXG4gICAgICB2YXIgdGVtcGxhdGUgPSBcImF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjsgXFxuXCIgK1xuXCIgXFxuXCIgK1xuXCJ2b2lkIG1haW4oKSB7IFxcblwiICtcblwiICBnbF9Qb3NpdGlvbiA9IHZlYzQoYVZlcnRleFBvc2l0aW9uLCAwLjAsIDEuMCk7IFxcblwiICtcblwifSBcXG5cIiArXG5cIiBcXG5cIiBcclxuICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9XHJcbiAgICAgIGZvcih2YXIga2V5IGluIHBhcmFtcykge1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cChcInt7XCIra2V5K1wifX1cIixcImdcIilcclxuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobWF0Y2hlciwgcGFyYW1zW2tleV0pXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRlbXBsYXRlXHJcbiAgICB9O1xuIl19
