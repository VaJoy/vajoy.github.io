detectDebugger();

function detectDebugger() {
  const startTime = new Date().getTime();
  
  debugger;
  
  const endTime = new Date().getTime();

  if (endTime - startTime > 100) {
    window.location.href='https://vajoy.github.io/shader-demo/index.html?y=2025'
  }
}