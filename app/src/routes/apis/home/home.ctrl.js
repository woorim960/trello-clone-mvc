"use strict";

const ListStorage = require("../../../models/ListStorage");
const CardStorage = require("../../../models/CardStorage");

const home = {
  readAll: async (req, res) => {
    const lists = await ListStorage.findAll();
    const cards = await CardStorage.findAll();

    const sortedCards = cards.reduce((newCards, card) => {
      if (card.listNo in newCards)
        newCards[card.listNo].push({ no: card.no, content: card.content });
      else newCards[card.listNo] = [{ no: card.no, content: card.content }];
      return newCards;
    }, {});

    const newLists = lists.map((list) => {
      list.cards = sortedCards[list.no];
      return list;
    });

    res.status(200).json({ lists: newLists });
  },
};

module.exports = { home };
