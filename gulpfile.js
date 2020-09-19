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


function fnhtml(){
	return gulp.src('./src/index.html')
		.pipe(gulp.dest('./dist'))
}

function fnnhtml(){
	return gulp.src('./src/pages/*.html')
		.pipe(gulp.dest('./dist/pages'))
}

function fnJs(){
    return gulp.src('./src/js/*.js')
           .pipe(babel({
            presets: ['@babel/env']
        }))
            .pipe(uglify())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('./dist/js'))
}

function fnjson(){
	return gulp.src('./src/json/*.json')
		.pipe(gulp.dest('./dist/json'))
}

function fnwatch(){
	gulp.watch('./src/sass/*.scss',fnsass)
	gulp.watch('./src/img/*',fnimage)
	gulp.watch('./src/index.html',fnhtml)
	gulp.watch('./src/pages/*.html',fnnhtml)
	gulp.watch('./src/js/*.js',fnJs)
	gulp.watch('./src/json/*.json',fnjson)
}

exports.sass=fnsass;
exports.default=fnwatch;
exports.img=fnimage;
exports.html=fnhtml;
exports.nhtml=fnnhtml;
exports.js=fnJs;
exports.json=fnjson;
