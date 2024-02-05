function spinalCase(str) {
  return str
    .replace(/( |_)+/g, '-') 
    .replace(/([a-z])(?=[A-Z])/g, '$1-') 
    .toLowerCase();
}

spinalCase('This Is Spinal Tap');