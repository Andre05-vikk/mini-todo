export default {
  default: {
    import: ['steps/**/*.js'],
    format: ['progress', 'html:cucumber-report.html'],
    publishQuiet: true
  }
};
