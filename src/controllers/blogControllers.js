let blogController = {
    glauser: function(req, res) {
        res.render('./blog/glauser')
    },

    gambo: function(req, res) {
        res.render('./blog/gambo')
    },

    itjobs: function(req, res) {
        res.render('./blog/itjobs')
    }
}

module.exports = blogController
