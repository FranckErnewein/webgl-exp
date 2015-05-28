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
