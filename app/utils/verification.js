function testFileNameImg(name) {
  const regExp = /\.(jpg|jpeg|png)$/;
  return regExp.test(name.toLowerCase());
}
function testFileName(name) {
  const regExp = /\.(jpg|jpeg|png|bmp)$/;
  return regExp.test(name.toLowerCase());
}

function testFileNameMark(name) {
  const regExp = /\.(jpg|jpeg|png|gif)$/;
  return regExp.test(name.toLowerCase());
}

function testFileNamePaster(name) {
  const regExp = /\.(jpg|jpeg|png|gif|bmp)$/;
  return regExp.test(name.toLowerCase());
}

function testFileNameAudio(name) {
  const regExp = /\.(mp3)$/;
  return regExp.test(name.toLowerCase());
}

function testFileMp4(name) {
  const regExp = /\.(mp4)$/;
  return regExp.test(name.toLowerCase());
}

function testFileNameVideo(name) {
  return /\.(3g2|3gp|a64|amr|apng|asf|avi|cavsvideo|dv|flv|hds|mjpeg|mpegts|ts|rawvideo|vc1|wav|webm|oma|mj2|vivo|xmv|wmvhd|wmv|vob|dat|mp4|mkv|rm|rmvb|mov|ogg|ogv|oga|mod|mpeg|mts|m4v|mpg)$/.test(
    name.toLowerCase()
  );
}

function testUrl(url) {
  const exp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;// eslint-disable-line
  return exp.test(url);
}

function testPhoneNumber(phone) {
  const reg = /^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/;
  return reg.test(phone);
}

// 身份证
function testID(ID) {
  const re = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
  return re.test(ID);
}

// 数字
function testNumber(number) {
  const re = /^\d+$/;
  return re.test(number);
}

// console.log(testFileNameVideo("1.avi"));
export {
  testUrl,
  testFileNameImg,
  testFileNameVideo,
  testFileNameMark,
  testFileNameAudio,
  testFileNamePaster,
  testPhoneNumber,
  testID,
  testFileName,
  testNumber,
  testFileMp4,
};
