const passport =require("passport");
const LocalStrategy = require("passport-local").Strategy;

//Auth-method

passport.use("local-signup", new LocalStrategy({
    usernameField:"email",
    passwordField:"password"
}));
