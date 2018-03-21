module.exports = function (grunt) {
    "use strict";

    require("jit-grunt")(grunt);

    grunt.initConfig({
        distdir: "dist",
        srcdir: "less",
        name: grunt.file.readJSON("package.json").name || "ovh-common-style", // module name

        clean: [
            "<%= distdir %>"
        ],

        less: {
            development: {
                options: {
                    paths: ["bower_components"]
                },
                files: {
                    "<%= distdir %>/<%= name %>.css": "<%= srcdir %>/<%= name %>.less"
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: "dist",
                    src: [
                        "*.css",
                        "!*.min.css"
                    ],
                    dest: "dist",
                    ext: ".min.css"
                }]
            }
        },

        bump: {
            options: {
                pushTo: "origin",
                files: [
                    "package.json",
                    "bower.json"
                ],
                updateConfigs: ["pkg", "bower"],
                commitFiles: ["-a"]
            }
        },

        watch: {
            less: {
                files: ["less/**/*.less"],
                tasks: ["less"]
            }
        }
    });

    grunt.registerTask("serve", [
        "clean",
        "less",
        "watch"
    ]);

    grunt.registerTask("test", "build");

    grunt.registerTask("build", [
        "clean",
        "less",
        "cssmin"
    ]);

    grunt.registerTask("default", "build");

    grunt.registerTask("release", "Release", function () {
        var type = grunt.option("type");

        if (type && ~["patch", "minor", "major"].indexOf(type)) {
            grunt.task.run(["bump-only:" + type]);
        } else {
            grunt.verbose.or.write("You try to release in a weird version type [" + type + "]").error();
            grunt.fail.warn("Please try with --type=patch|minor|major");
        }
    });
};
