

import  {Strategy } from 'passport-apple';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

// import { jwtConstants } from './constants';

@Injectable()
export class AppleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }

  
  
}






/*
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const passport = require('passport');
const AppleStrategy = require('passport-apple');

app.get("/", (req, res) => {
    res.send("<a href=\"/login\">Sign in with Apple</a>");
});

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

passport.use(new AppleStrategy({
    clientID: "",
    teamID: "",
    callbackURL: "",
    keyID: "",
    privateKeyLocation: ""
}, function(req, accessToken, refreshToken, idToken, profile , cb) {
    // Here, check if the idToken exists in your database!
    cb(null, idToken);
}));

app.get("/login", passport.authenticate('apple'));
app.post("/auth", function(req, res, next) {
   passport.authenticate('apple', function(err, user, info) {
        if (err) {
            if (err == "AuthorizationError") {
                res.send("Oops! Looks like you didn't allow the app to proceed. Please sign in again! <br /> \
                <a href=\"/login\">Sign in with Apple</a>");
            } else if (err == "TokenError") {
                res.send("Oops! Couldn't get a valid token from Apple's servers! <br /> \
                <a href=\"/login\">Sign in with Apple</a>");
            }
        } else {
            res.json(user);
        }
    })(req, res, next);
});

app.listen(4000, () => {
    console.log("Server started on https://passport-apple.ananay.dev");
});*/