//
// Example of a conversation with a menu that loops until explicitly stopped
//
module.exports = function (controller) {

    controller.hears([/^products$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            var question = "Choose a Cheetos product to recieve more information:";
            question += "<br/> `1)` White Cheddar Bites";
            question += "<br/> `2)` Flavor Shots Flamin Hot";
            question += "<br/> `3)` Crunchy";
            question += "<br/> `4)` Flamin Hot Crunchy";
            question += "<br/> `5)` Puffs";
            question += "<br/> `6)` Paws";
            question += "<br/> `7)` Crunchy Flamin Hot Chipotle Ranch";
            question += "<br/> `8)` Crunchy Flamin Hot Limon";

            question += "\n\nWhat do you want to check?<br/>_(type a number, a **bold keyword** or `stop`)_";
            convo.ask(question, [
                {
                    pattern: "1|White Cheddar Bites",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_1');
                    },
                }
                , {
                    pattern: "2|Flavor Shots Flamin Hot",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_2');
                    },
                }
                , {
                    pattern: "3|Crunchy",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_3');
                    },
                }
                , {
                    pattern: "4|Flamin Hot Crunchy",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_4');
                    },
                }
                , {
                    pattern: "5|Puffs",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_5');
                    },
                }
                , {
                    pattern: "6|Paws",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_6');
                    },
                }
                , {
                    pattern: "7|Crunchy Flamin Hot Chipotle Ranch",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_7');
                    },
                }
                , {
                    pattern: "8|Crunchy Flamin Hot Limon",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_8');
                    },
                }
                , {
                    pattern: "cancel|stop",
                    callback: function (response, convo) {
                        convo.gotoThread('action_cancel');
                    },
                }
                , {
                    default: true,
                    callback: function (response, convo) {
                        convo.gotoThread('bad_response');
                    }
                }
            ]);

            // Menu option 1)
            convo.addMessage({
                text: "Click here to learn more about White Cheddar Bites (https://www.cheetos.com/products/cheetos-white-cheddar-bites-cheese-flavored-snacks)",
                action: 'default'
            }, 'menu_1');

            // Menu option 2)
            convo.addMessage({
                text: "Click here to learn more about Flavor Shots Flamin Hot (https://www.cheetos.com/products/cheetos-flavor-shots-flamin-hot-asteroids-flavored-snacks)",
                action: 'default'
            }, 'menu_2');

            // Menu option 3)
            convo.addMessage({
                text: "Click here to learn more about Crunchy Cheetos (https://www.cheetos.com/products/cheetos-crunchy-cheese-flavored-snacks)",
                action: 'default'
            }, 'menu_3');

            // Menu option 4)
            convo.addMessage({
                text: "Click here to learn more about Flamin Hot Crunchy Cheetos (https://www.cheetos.com/products/cheetos-crunchy-flamin-hot-cheese-flavored-snacks)",
                action: 'default'
            }, 'menu_4');

            // Menu option 5)
            convo.addMessage({
                text: "Click here to learn more about Puffs (https://www.cheetos.com/products/cheetos-puffs-cheese-flavored-snacks)",
                action: 'default'
            }, 'menu_5');

            // Menu option 6)
            convo.addMessage({
                text: "Click here to learn more about Paws (https://www.cheetos.com/products/cheetos-paws-cheese-flavored-snacks)",
                action: 'default'
            }, 'menu_6');

            // Menu option 7)
            convo.addMessage({
                text: "Click here to learn more about Crunchy Flamin Hot Chipotle Ranch (https://www.cheetos.com/products/cheetos-crunchy-flamin-hot-chipotle-ranch-cheese-flavored-snacks)",
                action: 'default'
            }, 'menu_7');

            // Menu option 8)
            convo.addMessage({
                text: "Click here to learn more about Crunchy Flamin Hot Limon (https://www.cheetos.com/products/cheetos-crunchy-flamin-hot-lim-n-cheese-flavored-snacks)",
                action: 'default'
            }, 'menu_8');

            // Cancel
            convo.addMessage({
                text: "Got it, cancelling...",
                action: 'stop', // this marks the converation as unsuccessful
            }, 'action_cancel');

            // Bad response
            convo.addMessage({
                text: "Sorry, I did not understand.",
                action: 'default',
            }, 'bad_response');

        });
    });
};
