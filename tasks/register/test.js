// module.exports = function (grunt) {
//   grunt.registerTask('test', [
//       'mochaTest'
//     ]
//   );
// };

module.exports = function (grunt) {
  grunt.registerTask('test', [
    'mocha_istanbul:coverage'
  ]);
};
