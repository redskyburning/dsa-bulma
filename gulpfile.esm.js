import gulp from 'gulp';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import del from 'del';

const paths = {
	styles : {
		src : 'scss/**/*.scss',
		dest: 'dist/',
	},
};

export const clean = () => del(['dist/*']);

export function styles() {
	return gulp.src('scss/bundle.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(gulp.dest(paths.styles.dest));
}

const build = gulp.series(clean, gulp.parallel(styles));

export default build;
