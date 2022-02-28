let projectsController = {
    list: function(req, res) {
        res.render('./projects/list')
    },

    detail: function(req, res) {
        res.render('./projects/detail')
    }
}

module.exports = projectsController
