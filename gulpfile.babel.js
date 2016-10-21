import gulp from 'gulp';
import sourceMaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import path from 'path';

const paths = {
  es6: [ './src/**/*.js' ],
  es5: './dist',
  // Must be absolute or relative to source map
  sourceRoot: path.join( __dirname, 'src' )
};
gulp.task( 'build', () => {
  return gulp.src( paths.es6 )
    .pipe( sourceMaps.init() )
    .pipe( babel( {
      presets: [ 'es2015' ]
    } ) )
    .pipe( sourceMaps.write( '.', { sourceRoot: paths.sourceRoot } ) )
    .pipe( gulp.dest( paths.es5 ) );
} );
gulp.task( 'watch', [ 'build' ], () => {
  gulp.watch( paths.es6, [ 'build' ] );
} );

gulp.task( 'default', [ 'watch' ] );
