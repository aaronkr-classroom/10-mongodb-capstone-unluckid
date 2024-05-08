"use strict";

// 구독자 모델 요청
const Subscriber = require("../models/Subscriber");

// 모든 구독자 가져오기
exports.getAllSubscribers = (req, res, next) => {
  Subscriber
    .find({})
    .exec()
    .then(subscribers => {
      console.log("Found subscribers!", subscribers);
      res.render(
        "subscribers", {
          subscribers: subscribers
        }
      );
    })
    .catch(error => {
      console.log(`Error: ${error.message}`);
      return next(error);
    });
};

// 구독 페이지 렌더링
exports.getSubscriptionPage = (req, res) => {
  res.render("contact");
};

// 구독자 저장
exports.saveSubscriber = (req, res) => {
  let newSubscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    newsletter: req.body.newsletter,
    profileImg: req.body.profileImg
  });

  newSubscriber
    .save()
    .then(result => {
      res.render("thanks");
    })
    .catch(error => {
      res.send(error);
    });
};

// 모든 구독자 삭제
exports.deleteAllSubscribers = (req, res, next) => {
  Subscriber
    .deleteMany({})
    .exec()
    .then(result => {
      res.render(
        "subscribers", {
          subscribers: []
        }
      );
    })
    .catch(error => {
      console.log(`Error: ${error.message}`);
      return next(error);
    });
};
