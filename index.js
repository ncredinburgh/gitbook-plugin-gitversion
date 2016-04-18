var gitShort = 'no version';
var gitLong = 'no version';
var gitTag = 'no tag';
var gitBranch = 'no branch';

module.exports = {

    filters: {
        gitLong: function(name) {
            return name + gitLong;
        },
        
        gitShort: function(name) {
            return name + gitShort;
        },

        gitTag: function(name) {
            return name + gitTag;
        },

        gitBranch: function(name) {
            return name + gitBranch;
        }
    },

    // Hook process during build
    hooks: {
        // This is called before the book is generated
        "init": function() {
            console.log("Reading git version info");
            var git = require('git-rev-sync');
            gitTag = git.tag();
            gitBranch = git.branch();
            gitLong = git.long();        
            gitShort = git.short();
        },

    }
};
