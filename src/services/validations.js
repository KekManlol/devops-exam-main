// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const checkGamerTag = (tag) => {
    if (tag=="" || tag.length < 8) return false;
    return true;
};

exports.isEmpty = isEmpty;
exports.checkGamerTag = checkGamerTag;
