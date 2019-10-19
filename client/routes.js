Router.route("/", function() {
	this.render("dashboard", {
		data: function() {
			return {
				slides: slideshow.find({}).fetch().reverse(),
				history: history_log.find({}, {sort: {time:-1}}),
				tagmode: tagmode.find({})
			}
		}
	})
})

Router.route("/history", function() {
	this.render("history", {
		data: function() {
			return {
				history: history_log.find({}, {sort: {time:-1}})
			}
		}
	})
})

Router.route("/slideshow", function() {
	this.render("slideshow", {
		data: function() {
			_screen = 0;
			return {
				slides: slideshow.find({})
			}
		}
	})
})

Router.route("/slideshow/:screeen", function() {
	this.render("slideshow", {
		data: function() {

			_screen = this.params.screeen;
			return {
				slides: slideshow.find({}),
				_screen: this.params.screeen
			}
		}
	})
})

Router.route("/overview", function() {
	this.render("overview", {
		data: function() {
			_screen = "0"
		}
	})
})

// Old way
Router.route("/dashboard", function() {
	Router.go("/")
})

Router.route("/login/:token", function() {
	Meteor.loginWithKth(this.params.token, function() {
		Router.go("/")
	})
})
