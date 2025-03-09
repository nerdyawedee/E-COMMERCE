const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AU41gfVlkLnoNbSMwXzHhXhQQvCH1Q3-7cG9DWaU78CuFkHyYP9nx2T6JN4Cx-PeFYqUqRvmZ5Szsbs1",
  client_secret: "EPT6onRVipCqWdl49n4a3oUl6FBldMyWm1uFFXOhsHmsSN7lbJqtncU9fITF90zXrLDr85Bo-3tR-0t5",
});

module.exports = paypal;
