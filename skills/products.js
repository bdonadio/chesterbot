//
// Product menu that loops until explicitly stopped
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
            question += "<br/> `9)` Crunchy XXTRA Flamin Hot";
            question += "<br/> `10)` Crunchy Cheddar Jalapeno Cheese";
            question += "<br/> `11)` Puffs Flamin Hot";
            question += "<br/> `12)` Crunchy Flamin HOT & DORITOS DINAMITA Chile Limon Flavored Rolled Tortilla Chips";
            question += "<br/> `13)` Simply Puffs White Cheddar Cheese";
            question += "<br/> `14)` Simply Puffs White Cheddar Jalapeno";
            question += "<br/> `15)` Simply Crunchy White Cheddar Cheese";
            question += "<br/> `16)` Baked Crunchy Cheese";
            question += "<br/> `17)` Baked Crunchy Flamin Hot";
            question += "<br/> `18)` Fantastix Chili Cheese Baked Corn";
            question += "<br/> `19)` Fantastix Flamin Hot Baked Corn";

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
                    pattern: "9|Crunchy XXTRA Flamin Hot",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_9');
                    },
                }
                , {
                    pattern: "10|Crunchy Cheddar Jalapeno Cheese",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_10');
                    },
                }
                , {
                    pattern: "11|Puffs Flamin Hot",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_11');
                    },
                }
                , {
                    pattern: "12|Crunchy Flamin HOT & DORITOS DINAMITA Chile Limon Flavored Rolled Tortilla Chips",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_12');
                    },
                }
                , {
                    pattern: "13|Simply Puffs White Cheddar Cheese",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_13');
                    },
                }
                , {
                    pattern: "14|Simply Puffs White Cheddar Jalapeno",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_14');
                    },
                }
                , {
                    pattern: "15|Simply Crunchy White Cheddar Cheese",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_15');
                    },
                }
                , {
                    pattern: "16|Baked Crunchy Cheese",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_16');
                    },
                }
                , {
                    pattern: "17|Baked Crunchy Flamin Hot",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_17');
                    },
                }
                , {
                  pattern: "18|Fantastix Chili Cheese Baked Corn",
                  callback: function (response, convo) {
                      convo.gotoThread('menu_18');
                    },
                }
                , {
                  pattern: "19|Fantastix Flamin Hot Baked Corn",
                  callback: function (response, convo) {
                      convo.gotoThread('menu_19');
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
                text: "[Click here to learn more about Flavor White Cheddar Bites](https://www.cheetos.com/products/cheetos-white-cheddar-bites-cheese-flavored-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-02/Cheetos%20White%20Cheddar%20Bites_0.png',
                action: 'default'
            }, 'menu_1');

            // Menu option 2)
            convo.addMessage({
                text: "[Click here to learn more about Flavor Shots Flamin Hot](https://www.cheetos.com/products/cheetos-flavor-shots-flamin-hot-asteroids-flavored-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-02/Cheetos%20Flavor%20Shots%20Flamin%27%20Hot%20Asteroids_0.png',
                action: 'default'
            }, 'menu_2');

            // Menu option 3)
            convo.addMessage({
                text: "[Click here to learn more about Crunchy Cheetos](https://www.cheetos.com/products/cheetos-crunchy-cheese-flavored-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-03/Cheetos%20Crunchy_v2_0.png',
                action: 'default'
            }, 'menu_3');

            // Menu option 4)
            convo.addMessage({
                text: "[Click here to learn more about Flamin Hot Crunchy Cheetos](https://www.cheetos.com/products/cheetos-crunchy-flamin-hot-cheese-flavored-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-02/Cheetos%20Crunchy%20Flamin%27%20Hot_1.png',
                action: 'default'
            }, 'menu_4');

            // Menu option 5)
            convo.addMessage({
                text: "[Click here to learn more about Puffs](https://www.cheetos.com/products/cheetos-puffs-cheese-flavored-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-02/Cheetos%20Puffs_0.png',
                action: 'default'
            }, 'menu_5');

            // Menu option 6)
            convo.addMessage({
                text: "[Click here to learn more about Paws](https://www.cheetos.com/products/cheetos-paws-cheese-flavored-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-02/Cheetos%20Paws_0.png',
                action: 'default'
            }, 'menu_6');

            // Menu option 7)
            convo.addMessage({
                text: "[Click here to learn more about Crunchy Flamin Hot Chipotle Ranch](https://www.cheetos.com/products/cheetos-crunchy-flamin-hot-chipotle-ranch-cheese-flavored-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-03/FH%20Chipotle%20Ranch_v2_0.png',
                action: 'default'
            }, 'menu_7');

            // Menu option 8)
            convo.addMessage({
                text: "[Click here to learn more about Crunchy Flamin Hot Limon](https://www.cheetos.com/products/cheetos-crunchy-flamin-hot-lim-n-cheese-flavored-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-02/Cheetos%20Crunchy%20Flamin%27%20Hot%20Limon_0.png',
                action: 'default'
            }, 'menu_8');

            // Menu option 9)
            convo.addMessage({
                text: "[Click here to learn more about Crunchy XXTRA Flamin Hot](https://www.cheetos.com/products/cheetos-crunchy-xxtra-flamin-hot-cheese-flavored-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-03/XXXtra%20Flamin%20Hot%20Crunchy_v2.png',
                action: 'default'
            }, 'menu_9');

            // Menu option 10)
            convo.addMessage({
                text: "[Click here to learn more about Crunchy Cheddar Jalapeno Cheese](https://www.cheetos.com/products/cheetos-crunchy-cheddar-jalapeno-cheese-flavored-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-02/Cheetos%20Crunchy%20Cheddar%20Jalapeno_0.png',
                action: 'default'
            }, 'menu_10');

            // Menu option 11)
            convo.addMessage({
                text: "[Click here to learn more about Puffs Flamin Hot](https://www.cheetos.com/products/cheetos-puffs-flamin-hot-cheese-flavored-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-02/Cheetos%20Puffs%20Flamin%27%20Hot_0.png',
                action: 'default'
            }, 'menu_11');

            // Menu option 12)
            convo.addMessage({
                text: "[Click here to learn more about Crunchy Flamin HOT & DORITOS DINAMITA Chile Limon Flavored Rolled Tortilla Chips](https://www.cheetos.com/products/cheetos-crunchy-flamin-hot-cheese-flavored-snacks-doritos-dinamita-chile-lim-n-flavored)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-02/Cheetos%20Crunchy%20Flamin%27%20Hot%20%26%20Doritos_0.png',
                action: 'default'
            }, 'menu_12');

            // Menu option 13)
            convo.addMessage({
                text: "[Click here to learn more about Simply Puffs White Cheddar Cheese](https://www.cheetos.com/products/cheetos-simply-puffs-white-cheddar-cheese-flavored-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-03/SimpleCheetosWhiteCheddar_v2.png',
                action: 'default'
            }, 'menu_13');

            // Menu option 14)
            convo.addMessage({
                text: "[Click here to learn more about Simply Puffs White Cheddar Jalapeno](https://www.cheetos.com/products/cheetos-simply-puffs-white-cheddar-jalapeno-cheese-flavored-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-02/Cheetos%20Simply%20Puffs%20White%20Cheddar%20Jalapeno.png',
                action: 'default'
            }, 'menu_14');

            // Menu option 15)
            convo.addMessage({
                text: "[Click here to learn more about Simply Crunchy White Cheddar Cheese](https://www.cheetos.com/products/cheetos-simply-crunchy-white-cheddar-cheese-flavored-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-02/Cheetos%20Simply%20Crunchy%20White%20Cheddar.png',
                action: 'default'
            }, 'menu_15');

            // Menu option 16)
            convo.addMessage({
                text: "[Click here to learn more about Baked Crunchy Cheese](https://www.cheetos.com/products/cheetos-baked-crunchy-cheese-flavored-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-02/Cheetos%20Oven%20Baked%20Crunchy_0.png',
                action: 'default'
            }, 'menu_16');

            // Menu option 17)
            convo.addMessage({
                text: "[Click here to learn more about Baked Crunchy Flamin Hot](https://www.cheetos.com/products/cheetos-baked-crunchy-flamin-hot-cheese-flavored-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-02/Cheetos%20Oven%20Baked%20Crunchy%20Flamin%27_1.png',
                action: 'default'
            }, 'menu_17');

            // Menu option 18)
            convo.addMessage({
                text: "[Click here to learn more about Fantastix Chili Cheese Baked Corn](https://www.cheetos.com/products/cheetos-fantastix-chili-cheese-flavored-baked-corn-potato-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-02/Cheetos%20Fantastix%20Chili%20Cheese_1.png',
                action: 'default'
            }, 'menu_18');

            // Menu option 19)
            convo.addMessage({
                text: "[Click here to learn more about Fantastix Flamin Hot Baked Corn](https://www.cheetos.com/products/cheetos-fantastix-flamin-hot-flavored-baked-corn-potato-snacks)",
                file: 'https://www.cheetos.com/sites/cheetos.com/files/2019-02/Cheetos%20Fantastix%20Flamin%27%20Hot_1.png',
                action: 'default'
            }, 'menu_19');

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
