exports.run = async (bot, msg) => {
    try {
        const { member } = msg;
        if (member.roles.has(bot.config.supporterRole)) {
            await member.removeRole(bot.config.supporterRole);
            msg.channel.send('Removed supporter role! You won\'t be pinged anymore');
        } else {
            await member.addRole(bot.config.supporterRole);
            msg.channel.send('Added supporter role! You will now be pinged');
        }
    } catch (err) {
        throw new Error('Role could not be added!');
    }
};

exports.info = {
    name: 'supscribe',
    usage: 'supscribe',
    help: 'This command gives you the supporter role or removes it, if you already got it.',
    roles: ['Youtube Member', 'Patreon Supporter'],
};
