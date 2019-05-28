

//
// Threaded conversation that searches for Cheetos food product based on entered search term in USDA Database
//
module.exports = function (controller) {

    controller.hears([/^facts$/], "direct_message,direct_mention", function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            convo.ask("Enter Cheetos product name to lookup nutrition information", [
                {
                //    pattern: "^blue|green|pink|red|yellow$",
                    default: true,
                    callback: function (response, convo) {
                        convo.gotoThread("confirm_choice");
                    },
                },
        //        {
          //          default: true,
          //          callback: function (response, convo) {
            //            convo.gotoThread('bad_response');
              //      }
          //      }
            ], { key: "answer" });


            // Bad response
            //convo.addMessage({
              //  text: "Sorry, I don't know this color.<br/>_Tip: try blue, green, pink, red or yellow!_",
                //action: 'default',
            //}, 'bad_response');

            // Confirmation thread
            convo.addMessage(
                "You picked '{{responses.answer}}'",
                "confirm_choice");

            convo.addQuestion("Please, confirm your choice ? (yes|no)", [
                {
                    pattern: "^yes|hey|oui|si|da$",
                    callback: function (response, convo) {
                        var pickedFlavor = convo.extractResponse('answer');
                        convo.setVar("flavor", pickedFlavor);
                        convo.gotoThread("productSearch");
                    },
                },
                {
                    default: true,
                    callback: function (response, convo) {
                        convo.transitionTo("default", "Got it, let's try again...");
                    }
                }
            ], {}, "confirm_choice");


            //Product Search Thread
            convo.addMessage(
                "I'm searching for '{{vars.flavor}}'",


                //Rest API Search Request to USDA Food Database
                var request = require("request");

                var options = { method: 'GET',
                  url: 'https://api.nal.usda.gov/ndb/search/',
                  qs:
                   { format: 'json',
                     q: 'pickedFlavor',
                     sort: 'n',
                     max: '25',
                     offset: '0',
                     api_key: 'wFqUmW1ckj0MTlwYUxmgx5XsOlboTvwJceKcCzIf' },
                  headers:
                   { 'Postman-Token': '106ade00-4e99-4323-9cee-af37535fb3bc',
                     'cache-control': 'no-cache' } };

                request(options, function (error, response, body) {
                  if (error) throw new Error(error);

                  console.log(body);
                });
                "productSearch");


            // Success thread
            convo.addMessage(
                "Cool, I love '{{vars.flavor}}' too",
                "success");
        });
    });
};
