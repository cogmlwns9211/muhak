// homeController.js
"use strict";

/**
 * Listing 12.5 (p. 178)
 * 홈 컨트롤러로의 라우팅
 */
module.exports = {
  showHome: (req, res) => {
    res.render("index", {
      page: "home",
      title: "Home",
    });
  },
  showAbout: (req, res) => {
    res.render("_pages/about", {
      page: "about",
      title: "About",
    });
  },
  showAddress: (req, res) => {
    res.render("_pages/address", {
      page: "address",
      title: "address",
    });
  },
  showDrinkOneTime: (req, res) => {
    res.render("_pages/drinkonetime", {
      page: "drinkonetime",
      title: "drinkonetime",
    });
  },
  showGame: (req, res) => {
    res.render("_pages/game", {
      page: "game",
      title: "game",
    });
  },
  showOneDayClass: (req, res) => {
    res.render("_pages/onedayclass", {
      page: "onedayclass",
      title: "onedayclass",
    });
  },
  showTransportation: (req, res) => {
    res.render("_pages/transportation", {
      page: "transportation",
      title: "Transportation",
    });
  },
};
