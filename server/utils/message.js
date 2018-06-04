var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    }
};

var generateLocationMessage = (from, lat, lng) => {
    return {
        from,
        url: `https://www.google.de/maps?q=${lat},${lng}`,
        createdAt: new Date().getTime()
    }
};

module.exports = {
    generateMessage,
    generateLocationMessage
};