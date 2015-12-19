var concat_tasks = {
	core: {
		src: ['src/app/app.module.js', 'src/app/app.route.js'],
		dest: 'public/js/app.js'
	},
	controllers: {
		src: ['src/app/app.controllers.js', 'src/app/components/**/*Controller.js'],
		dest: 'public/js/controllers.js'
	},
	services: {
		src: ['src/app/app.services.js', 'src/app/components/**/*Service.js'],
		dest: 'public/js/services.js'
	}
};

var copy_tasks = {
	views: {
		files: [
			{expand: true, cwd:'src/app/', src: ['**/*.html'], dest: 'public/'}
		]
	}
};

var watch_tasks = {
	scripts: {
		files: ['src/**/*.js'],
		tasks: ['concat', 'jshint:development'],
		options: {
			spawn: false,
		}
	},
	pages: {
		files: ['src/**/*.html'],
		tasks: ['copy'],
		options: {
			spawn: false,
		}
	}
};

var jshint_tasks = {
	production: {
		src: ['public/js/*.js']
	},
	development: {
		src: ['src/**/*.js']
	}
};

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: concat_tasks,
		copy: copy_tasks,
		watch: watch_tasks,
		jshint: jshint_tasks
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['concat', 'copy', 'jshint']);
};