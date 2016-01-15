module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            },
            dev: {
                src: ['Scripts/compiled/guidelines.module.js', 'Scripts/compiled/guidelines.config.js', 'Scripts/compiled/**/*.js'],
                dest: 'Scripts/build/guidelines.js',
            },
            build: {
                src: ['Scripts/compiled/guidelines.module.js', 'Scripts/compiled/guidelines.config.js', 'Scripts/compiled/**/*.js'],
                dest: 'Dist/js/guidelines.js',
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true,
            },
            files: {
                'Scripts/build/guidelines.js': ['Scripts/build/guidelines.js']
            },
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'Styles/CSS/main.css': 'Styles/SASS/main.scss'
                }
            },
            build: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'Dist/css/main.css': 'Styles/SASS/main.scss'
                }
            }
        },
        typescript: {
            dev: {
                src: ['Scripts/Modules/**/*.ts'],
                dest: 'Scripts/compiled',
                options: {
                    module: 'amd',
                    target: 'es5',
                    sourceMap: false
                }
            }
        },
        watch: {
            scripts: {
                files: ['Scripts/Modules/**/*.ts', 'Styles/SASS/**/*.scss'],
                tasks: ['typescript', 'concat', 'ngAnnotate', 'sass', ],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['typescript', 'concat:dev', 'ngAnnotate', 'sass:dev', 'watch']);
    grunt.registerTask('build', ['typescript', 'concat:build', 'ngAnnotate', 'sass:build']);
};