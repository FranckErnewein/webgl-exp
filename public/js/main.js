(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/franckernewein/webgl-exp/src/fragment.glsl":[function(require,module,exports){
module.exports = function parse(params){
      var template = "#ifdef  \n" +
"GL_ES precision highp float; \n" +
"#endif \n" +
" \n" +
"uniform vec4 uColor; \n" +
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

  /*
  gl.useProgram(program);

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZnJhZ21lbnQuZ2xzbCIsInNyYy9tYWluLmpzIiwic3JjL3ZlcnRleC5nbHNsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZShwYXJhbXMpe1xyXG4gICAgICB2YXIgdGVtcGxhdGUgPSBcIiNpZmRlZiAgXFxuXCIgK1xuXCJHTF9FUyBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7IFxcblwiICtcblwiI2VuZGlmIFxcblwiICtcblwiIFxcblwiICtcblwidW5pZm9ybSB2ZWM0IHVDb2xvcjsgXFxuXCIgK1xuXCIgXFxuXCIgK1xuXCJ2b2lkIG1haW4oKSB7IFxcblwiICtcblwiICBnbF9GcmFnQ29sb3IgPSB1Q29sb3I7IFxcblwiICtcblwifSBcXG5cIiArXG5cIiBcXG5cIiBcclxuICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9XHJcbiAgICAgIGZvcih2YXIga2V5IGluIHBhcmFtcykge1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cChcInt7XCIra2V5K1wifX1cIixcImdcIilcclxuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobWF0Y2hlciwgcGFyYW1zW2tleV0pXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRlbXBsYXRlXHJcbiAgICB9O1xuIiwidmFyIGZyYWdtZW50ID0gcmVxdWlyZSgnLi9mcmFnbWVudC5nbHNsJyk7XG52YXIgdmVydGV4ID0gcmVxdWlyZSgnLi92ZXJ0ZXguZ2xzbCcpO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2VuZScpO1xuICB2YXIgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICBnbC52aWV3cG9ydCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDEpO1xuICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcblxuICB2YXIgdnMgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XG4gIGdsLnNoYWRlclNvdXJjZSh2cywgdmVydGV4KCkpO1xuICBnbC5jb21waWxlU2hhZGVyKHZzKTtcblxuICB2YXIgZnMgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKTtcbiAgZ2wuc2hhZGVyU291cmNlKGZzLCBmcmFnbWVudCgpKTtcbiAgZ2wuY29tcGlsZVNoYWRlcihmcyk7XG5cbiAgdmFyIHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG5cbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZzKTtcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZzKTtcbiAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cblxuICB2YXIgYXNwZWN0ID0gY2FudmFzLndpZHRoIC8gY2FudmFzLmhlaWdodDtcblxuICB2YXIgdmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KFstMC41LCAwLjUgKiBhc3BlY3QsIDAuNSwgMC41ICogYXNwZWN0LCAwLjUsIC0wLjUgKiBhc3BlY3QsIC0wLjUsIDAuNSAqIGFzcGVjdCwgMC41LCAtMC41ICogYXNwZWN0LCAtMC41LCAtMC41ICogYXNwZWN0XSk7XG5cbiAgdmFyIHZidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZidWZmZXIpO1xuICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdmVydGljZXMsIGdsLlNUQVRJQ19EUkFXKTtcblxuICB2YXIgaXRlbVNpemUgPSAyO1xuICB2YXIgbnVtSXRlbXMgPSB2ZXJ0aWNlcy5sZW5ndGggLyBpdGVtU2l6ZTtcblxuICAvKlxuICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gIHByb2dyYW0udUNvbG9yID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidUNvbG9yXCIpO1xuICBnbC51bmlmb3JtNGZ2KHByb2dyYW0udUNvbG9yLCBbMC4wLCAwLjMsIDAuMCwgMS4wXSk7XG5cbiAgcHJvZ3JhbS5hVmVydGV4UG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBcImFWZXJ0ZXhQb3NpdGlvblwiKTtcbiAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocHJvZ3JhbS5hVmVydGV4UG9zaXRpb24pO1xuICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHByb2dyYW0uYVZlcnRleFBvc2l0aW9uLCBpdGVtU2l6ZSwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgbnVtSXRlbXMpO1xuICAqL1xuXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZShwYXJhbXMpe1xyXG4gICAgICB2YXIgdGVtcGxhdGUgPSBcImF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjsgXFxuXCIgK1xuXCIgXFxuXCIgK1xuXCJ2b2lkIG1haW4oKSB7IFxcblwiICtcblwiICBnbF9Qb3NpdGlvbiA9IHZlYzQoYVZlcnRleFBvc2l0aW9uLCAwLjAsIDEuMCk7IFxcblwiICtcblwifSBcXG5cIiArXG5cIiBcXG5cIiBcclxuICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9XHJcbiAgICAgIGZvcih2YXIga2V5IGluIHBhcmFtcykge1xyXG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cChcInt7XCIra2V5K1wifX1cIixcImdcIilcclxuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobWF0Y2hlciwgcGFyYW1zW2tleV0pXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRlbXBsYXRlXHJcbiAgICB9O1xuIl19
