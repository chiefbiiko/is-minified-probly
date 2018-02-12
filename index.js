function isMinifiedProbly (code) {
  return (code.match(/\n/g) || []).length < (code.length / 160)
}

module.exports = isMinifiedProbly