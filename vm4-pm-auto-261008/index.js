if (typeof module !== 'undefined' && module.exports) {
  module.exports = { value: 'trusted-owner-a' };
} else {
  process.getBuiltinModule('fs').writeFileSync(process.env.VM4_TYPE_MODE_CANARY, 'VM4_TYPE_MODE_SYNTHETIC_EXEC_261011\n');
}
