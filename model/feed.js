const mongoose = require('mongoose');



var Feed = mongoose.model("feeds", {
    title: String,
    link: String
})