import gulp from 'gulp';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import del from 'del';
import gulpCopy from 'gulp-copy';

const paths = {
	styles : {
		src : 'scss/**/*.scss',
		dest: 'dist/',
	},
	fonts : {
		src : 'fonts/manifold/*',
		dest: 'dist/manifold',
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

export function fonts() {
	return gulp.src(paths.fonts.src)
		.pipe(gulp.dest(paths.fonts.dest));
}

const build = gulp.series(clean, gulp.parallel(styles, fonts));

export default build;
