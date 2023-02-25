module.exports = {
    name: "hi",
    alias: ["hello"],
    desc: "Say hello to bot.",
    react: "🧣",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:`Привет *${pushName}* пупсик, Я *${botName}* бот. Нажми *${prefix}помощь* для того что-бы узнать все мои комманды.`},{quoted:m})
    }
}
