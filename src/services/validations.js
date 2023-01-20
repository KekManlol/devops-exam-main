// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const checkGamerTag = (tag) => {
    const regex1 = '[$&+,:;=?@#|\'<>.^*()%!-]';
    const regex2 = '[0-9]';
    const matches1 = tag.match(regex1);
    const matches2 = tag.match(regex2);

    if (tag=="" || tag.length < 8 || !matches1 || !matches2) return false;
    return true;
};

exports.isEmpty = isEmpty;
exports.checkGamerTag = checkGamerTag;
