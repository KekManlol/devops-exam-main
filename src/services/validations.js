// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const checkGamerTag = (tag) => {
    const regex = '[$&+,:;=?@#|\'<>.^*()%!-]';
    const matches = tag.match(regex);

    if (tag=="" || tag.length < 8 || !matches) return false;
    return true;
};

exports.isEmpty = isEmpty;
exports.checkGamerTag = checkGamerTag;
