import multer from 'multer';
import path from 'path';
const uploadPath = path.join(__dirname, '../..', 'uploads');

const diskStorage = multer.diskStorage({
  destination: function (_, __, cb) {
    cb(null, uploadPath);
  },
  filename: function (_, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

export default multer({
  storage: diskStorage,
  fileFilter: function (_, file, callback) {
    var ext = path.extname(file.originalname);
    const allowedExt = ['.png', '.jpg', '.gif', '.jpeg'];
    if (!allowedExt.includes(ext)) {
      return callback(
        new Error(
          `Invalid extension, Please upload file with following extensions: ${allowedExt.join(
            ', '
          )}`
        )
      );
    }
    callback(null, true);
  },
  limits: {
    fileSize: 10485760, // 10 MB
  },
});

export const uploadImageWithPdf = multer({
  storage: diskStorage,
  fileFilter: function (_, file, callback) {
    var ext = path.extname(file.originalname);    
    const allowedExt = ['.png', '.jpg', '.gif', '.jpeg', '.pdf'];
    if (!allowedExt.includes(ext)) {
      return callback(
        new Error(
          `Invalid extension, Please upload file with following extensions: ${allowedExt.join(
            ', '
          )}`
        )
      );
    }
    console.log(file)
    callback(null, true);
  },
  limits: {
    fileSize: 10485760, // 10 MB
  },
});