import { diskStorage } from 'multer';

import * as path from 'path';

import * as fs from 'fs';

fs.mkdirSync('images/', { recursive: true });

const storageLocal = diskStorage({
  destination: function (eq, file, cb) {
    cb(null, 'images/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extFile = path.extname(file.originalname);
    // console.log(extFile);
    cb(null, 'local' + '-' + uniqueSuffix + extFile);
    console.log({ file: file.fieldname });
  },
});

export default storageLocal;
