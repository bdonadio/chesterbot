//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/^help$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.appendMention(message, "favorite") + ": user picked favorite Cheetos flavor is stored";
        text += "\n- " + bot.appendMention(message, "facts") + ": returns nutrition facts for searched Cheetos product";
        text += "\n- " + bot.appendMention(message, "cheetosinfo") + ": provides information about cheetoes products and recipes";
        text += "\n- " + bot.appendMention(message, "color") + ": ask to pick a random color";
        text += "\n- " + bot.appendMention(message, "loop") + ": example of a menu that loops until explicitly stopped";
        text += "\n- " + bot.appendMention(message, "menu") + ": implement a menu via a conversation";
        text += "\n- " + bot.appendMention(message, "quiz") + ": multi-threaded conversation with timeout";
        text += "\n- " + bot.appendMention(message, "restricted") + ": let a user pick a color among a set of options";
        text += "\n- " + bot.appendMention(message, "storage") + ": store picked color as a user preference";
        text += "\n- " + bot.appendMention(message, "threads") + ": branch to another thread";
        text += "\n- " + bot.appendMention(message, "variables") + ": enriched user-context among threads";
        text += "\n\nI also understand:";
        text += "\n- " + bot.appendMention(message, "about") + ": shows metadata about myself";
        text += "\n- " + bot.appendMention(message, "help") + ": spreads the word about my skills";
        text += "\n- " + bot.appendMention(message, "show [skill]") + ": display the code of the specified skill";
        bot.reply(message, text);
    });
}
