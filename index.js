module.exports = function(content) {
  this.value = content;
  return `module.exports = ${JSON.stringify(content)}`;
}
