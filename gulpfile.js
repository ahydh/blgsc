let gulp=require('gulp'),
	sass=require('gulp-sass'),
	cssnano=require('gulp-cssnano'),
	rename=require('gulp-rename'),
	image=require('gulp-imagemin'),
	html=require('gulp-htmlmin'),
	uglify=require('gulp-uglify'),
	babel=require('gulp-babel');
	
	
function fnsass(){
	return gulp.src('./src/sass/*.scss')
		.pipe(sass())
		.pipe(cssnano())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('./dist/css'))
}

function fnimage(){
	return gulp.src('./src/img/*')
		.pipe(image())
		.pipe(gulp.dest('./dist/img'))
}

function fnuglify(){
	return gulp.src('./src/js/*.js')
		.pipe(uglify())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('./dist/js'))
}

function fnhtml(){
	return gulp.src('./src/index.html')
		.pipe(gulp.dest('./dist'))
}

function fnbabel(){
	return gulp.src('./src/js/babel/*.js')
		.pipe(babel())
		.pipe(uglify())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('./dist/js/babel'))
}

function fnwatch(){
	gulp.watch('./src/sass/*.scss',fnsass)
	gulp.watch('./src/img/*',fnimage)
	gulp.watch('./src/index.html',fnhtml)
	gulp.watch('./src/js/*.js',fnuglify)
	gulp.watch('./src/js/babel/*.js',fnbabel)
}

exports.sass=fnsass;
exports.default=fnwatch;
exports.img=fnimage;
exports.html=fnhtml;
exports.uglify=fnuglify;
exports.babel=fnbabel;
