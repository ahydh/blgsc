let gulp=require('gulp'),
	sass=require('gulp-sass'),
	cssnano=require('gulp-cssnano'),
	rename=require('gulp-rename'),
	image=require('gulp-imagemin'),
	html=require('gulp-htmlmin');
	
	
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

function fnhtml(){
	return gulp.src('./src/index.html')
		.pipe(gulp.dest('./dist'))
}

function fnwatch(){
	gulp.watch('./src/sass/*.scss',fnsass)
	gulp.watch('./src/img/*',fnimage)
	gulp.watch('./src/index.html',fnhtml)
}

exports.sass=fnsass;
exports.default=fnwatch;
exports.img=fnimage;
exports.html=fnhtml;
