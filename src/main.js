var fragment = require('./fragment.glsl');
var vertex = require('./vertex.glsl');

function loadShader(gl, shaderSource, shaderType) {
  var shader = gl.createShader(shaderType);

  // Load the shader source
  gl.shaderSource(shader, shaderSource);

  // Compile the shader
  gl.compileShader(shader);

  // Check the compile status
  var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!compiled) {
    // Something went wrong during compilation; get the error
    lastError = gl.getShaderInfoLog(shader);
    console.error("*** Error compiling shader '" + shader + "':" + lastError);
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}


window.onload = function init() {
  var canvas = document.getElementById("scene");
  var gl = getWebGLContext(canvas);
  if (!gl) {
    return;
  }

  // setup GLSL program
  vertexShader = loadShader(gl, vertex(), gl.VERTEX_SHADER);
  fragmentShader = loadShader(gl, fragment(), gl.FRAGMENT_SHADER);
  program = createProgram(gl, [vertexShader, fragmentShader]);
  gl.useProgram(program);

  // look up where the vertex data needs to go.
  var positionLocation = gl.getAttribLocation(program, "a_position");

  // set the resolution
  var resolutionLocation = gl.getUniformLocation(program, "u_resolution");
  gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

  // Create a buffer and put a single clipspace rectangle in
  // it (2 triangles)
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    10, 20,
    80, 20,
    10, 30,
    10, 30,
    80, 20,
    80, 30
  ]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  // draw
  gl.drawArrays(gl.TRIANGLES, 0, 6);
};
