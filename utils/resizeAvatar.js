const jimp = require("jimp");

const resizeAvatar = async (avatarImgPath) => {
  const avatarImg = await jimp.read(avatarImgPath);
  avatarImg.resize(250, 250);
  avatarImg.write(avatarImgPath);
};

module.exports = resizeAvatar;
