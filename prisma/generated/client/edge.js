
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.1.0
 * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
 */
Prisma.prismaVersion = {
  client: "6.1.0",
  engine: "11f085a2012c0f4778414c8db2651556ee0ef959"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BannerScalarFieldEnum = {
  ma_banner: 'ma_banner',
  ma_phim: 'ma_phim',
  hinh_anh: 'hinh_anh'
};

exports.Prisma.CumRapScalarFieldEnum = {
  ma_cum_rap: 'ma_cum_rap',
  ten_cum_rap: 'ten_cum_rap',
  dia_chi: 'dia_chi',
  ma_he_thong_rap: 'ma_he_thong_rap'
};

exports.Prisma.DatVeScalarFieldEnum = {
  ma_ve: 'ma_ve',
  tai_khoan: 'tai_khoan',
  ma_lich_chieu: 'ma_lich_chieu',
  ma_ghe: 'ma_ghe'
};

exports.Prisma.GheScalarFieldEnum = {
  ma_ghe: 'ma_ghe',
  ten_ghe: 'ten_ghe',
  loai_ghe: 'loai_ghe',
  ma_rap: 'ma_rap'
};

exports.Prisma.HeThongRapScalarFieldEnum = {
  ma_he_thong_rap: 'ma_he_thong_rap',
  ten_he_thong_rap: 'ten_he_thong_rap',
  logo: 'logo'
};

exports.Prisma.LichChieuScalarFieldEnum = {
  ma_lich_chieu: 'ma_lich_chieu',
  ma_rap: 'ma_rap',
  ma_phim: 'ma_phim',
  ngay_gio_chieu: 'ngay_gio_chieu',
  gia_ve: 'gia_ve'
};

exports.Prisma.NguoiDungScalarFieldEnum = {
  tai_khoan: 'tai_khoan',
  ho_ten: 'ho_ten',
  email: 'email',
  so_dt: 'so_dt',
  mat_khau: 'mat_khau',
  ma_loai_nguoi_dung: 'ma_loai_nguoi_dung'
};

exports.Prisma.PhimScalarFieldEnum = {
  ma_phim: 'ma_phim',
  ten_phim: 'ten_phim',
  trailer: 'trailer',
  hinh_anh: 'hinh_anh',
  mo_ta: 'mo_ta',
  ngay_khoi_chieu: 'ngay_khoi_chieu',
  danh_gia: 'danh_gia',
  hot: 'hot',
  dang_chieu: 'dang_chieu',
  sap_chieu: 'sap_chieu'
};

exports.Prisma.RapPhimScalarFieldEnum = {
  ma_rap: 'ma_rap',
  ten_rap: 'ten_rap',
  ma_cum_rap: 'ma_cum_rap'
};

exports.Prisma.LoaiNguoiDungScalarFieldEnum = {
  ma_loai_nguoi_dung: 'ma_loai_nguoi_dung',
  loai_nguoi_dung: 'loai_nguoi_dung'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.BannerOrderByRelevanceFieldEnum = {
  hinh_anh: 'hinh_anh'
};

exports.Prisma.CumRapOrderByRelevanceFieldEnum = {
  ten_cum_rap: 'ten_cum_rap',
  dia_chi: 'dia_chi'
};

exports.Prisma.GheOrderByRelevanceFieldEnum = {
  ten_ghe: 'ten_ghe',
  loai_ghe: 'loai_ghe'
};

exports.Prisma.HeThongRapOrderByRelevanceFieldEnum = {
  ten_he_thong_rap: 'ten_he_thong_rap',
  logo: 'logo'
};

exports.Prisma.NguoiDungOrderByRelevanceFieldEnum = {
  ho_ten: 'ho_ten',
  email: 'email',
  so_dt: 'so_dt',
  mat_khau: 'mat_khau'
};

exports.Prisma.PhimOrderByRelevanceFieldEnum = {
  ten_phim: 'ten_phim',
  trailer: 'trailer',
  hinh_anh: 'hinh_anh',
  mo_ta: 'mo_ta'
};

exports.Prisma.RapPhimOrderByRelevanceFieldEnum = {
  ten_rap: 'ten_rap'
};

exports.Prisma.LoaiNguoiDungOrderByRelevanceFieldEnum = {
  loai_nguoi_dung: 'loai_nguoi_dung'
};


exports.Prisma.ModelName = {
  Banner: 'Banner',
  CumRap: 'CumRap',
  DatVe: 'DatVe',
  Ghe: 'Ghe',
  HeThongRap: 'HeThongRap',
  LichChieu: 'LichChieu',
  NguoiDung: 'NguoiDung',
  Phim: 'Phim',
  RapPhim: 'RapPhim',
  LoaiNguoiDung: 'LoaiNguoiDung'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\Dai hoc\\Backend_Bootcamp\\Capstone_Project\\movie\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "D:\\Dai hoc\\Backend_Bootcamp\\Capstone_Project\\movie\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "6.1.0",
  "engineVersion": "11f085a2012c0f4778414c8db2651556ee0ef959",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generated/client\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Banner {\n  ma_banner Int     @id @default(autoincrement())\n  ma_phim   Int?\n  hinh_anh  String? @db.VarChar(255)\n  Phim      Phim?   @relation(fields: [ma_phim], references: [ma_phim], onDelete: NoAction, onUpdate: NoAction, map: \"Banner_ibfk_1\")\n\n  @@index([ma_phim], map: \"ma_phim\")\n}\n\nmodel CumRap {\n  ma_cum_rap      Int         @id @default(autoincrement())\n  ten_cum_rap     String?     @db.VarChar(255)\n  dia_chi         String?     @db.VarChar(255)\n  ma_he_thong_rap Int?\n  HeThongRap      HeThongRap? @relation(fields: [ma_he_thong_rap], references: [ma_he_thong_rap], onDelete: NoAction, onUpdate: NoAction, map: \"CumRap_ibfk_1\")\n  RapPhim         RapPhim[]\n\n  @@index([ma_he_thong_rap], map: \"ma_he_thong_rap\")\n}\n\nmodel DatVe {\n  ma_ve         Int        @id @default(autoincrement())\n  tai_khoan     Int?\n  ma_lich_chieu Int?\n  ma_ghe        Int?\n  NguoiDung     NguoiDung? @relation(fields: [tai_khoan], references: [tai_khoan], onDelete: NoAction, onUpdate: NoAction, map: \"DatVe_ibfk_2\")\n  LichChieu     LichChieu? @relation(fields: [ma_lich_chieu], references: [ma_lich_chieu], onDelete: NoAction, onUpdate: NoAction, map: \"DatVe_ibfk_3\")\n  Ghe           Ghe?       @relation(fields: [ma_ghe], references: [ma_ghe], onDelete: NoAction, onUpdate: NoAction, map: \"DatVe_ibfk_4\")\n\n  @@unique([tai_khoan, ma_lich_chieu, ma_ghe], map: \"tai_khoan\")\n  @@index([ma_lich_chieu], map: \"ma_lich_chieu\")\n  @@index([ma_ghe], map: \"ma_ghe\")\n}\n\nmodel Ghe {\n  ma_ghe   Int      @id @default(autoincrement())\n  ten_ghe  String?  @db.VarChar(255)\n  loai_ghe String?  @db.VarChar(255)\n  ma_rap   Int?\n  DatVe    DatVe[]\n  RapPhim  RapPhim? @relation(fields: [ma_rap], references: [ma_rap], onDelete: NoAction, onUpdate: NoAction, map: \"Ghe_ibfk_1\")\n\n  @@index([ma_rap], map: \"ma_rap\")\n}\n\nmodel HeThongRap {\n  ma_he_thong_rap  Int      @id @default(autoincrement())\n  ten_he_thong_rap String?  @db.VarChar(255)\n  logo             String?  @db.VarChar(255)\n  CumRap           CumRap[]\n}\n\nmodel LichChieu {\n  ma_lich_chieu  Int       @id @default(autoincrement())\n  ma_rap         Int?\n  ma_phim        Int?\n  ngay_gio_chieu DateTime? @db.DateTime(0)\n  gia_ve         Float?\n  DatVe          DatVe[]\n  RapPhim        RapPhim?  @relation(fields: [ma_rap], references: [ma_rap], onDelete: NoAction, onUpdate: NoAction, map: \"LichChieu_ibfk_1\")\n  Phim           Phim?     @relation(fields: [ma_phim], references: [ma_phim], onDelete: NoAction, onUpdate: NoAction, map: \"LichChieu_ibfk_2\")\n\n  @@index([ma_phim], map: \"ma_phim\")\n  @@index([ma_rap], map: \"ma_rap\")\n}\n\nmodel NguoiDung {\n  tai_khoan          Int           @id @default(autoincrement())\n  ho_ten             String?       @db.VarChar(255)\n  email              String?       @db.VarChar(255)\n  so_dt              String?       @db.VarChar(255)\n  mat_khau           String?       @db.VarChar(255)\n  ma_loai_nguoi_dung Int           @default(2)\n  DatVe              DatVe[]\n  LoaiNguoiDung      LoaiNguoiDung @relation(fields: [ma_loai_nguoi_dung], references: [ma_loai_nguoi_dung], onDelete: NoAction, onUpdate: NoAction, map: \"NguoiDung_ibfk_1\")\n\n  @@index([ma_loai_nguoi_dung], map: \"ma_loai_nguoi_dung\")\n}\n\nmodel Phim {\n  ma_phim         Int         @id @default(autoincrement())\n  ten_phim        String?     @db.VarChar(255)\n  trailer         String?     @db.VarChar(255)\n  hinh_anh        String?     @db.VarChar(255)\n  mo_ta           String?     @db.VarChar(255)\n  ngay_khoi_chieu DateTime?   @db.Date\n  danh_gia        Int?\n  hot             Boolean?\n  dang_chieu      Boolean?\n  sap_chieu       Boolean?\n  Banner          Banner[]\n  LichChieu       LichChieu[]\n}\n\nmodel RapPhim {\n  ma_rap     Int         @id @default(autoincrement())\n  ten_rap    String?     @db.VarChar(255)\n  ma_cum_rap Int?\n  Ghe        Ghe[]\n  LichChieu  LichChieu[]\n  CumRap     CumRap?     @relation(fields: [ma_cum_rap], references: [ma_cum_rap], onDelete: NoAction, onUpdate: NoAction, map: \"RapPhim_ibfk_1\")\n\n  @@index([ma_cum_rap], map: \"ma_cum_rap\")\n}\n\nmodel LoaiNguoiDung {\n  ma_loai_nguoi_dung Int         @id @default(autoincrement())\n  loai_nguoi_dung    String?     @db.VarChar(255)\n  NguoiDung          NguoiDung[]\n}\n",
  "inlineSchemaHash": "08c66507b879471275e9d6466ec276ced45ff5cf9586c75500f4701e27523376",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Banner\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ma_banner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ma_phim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hinh_anh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Phim\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Phim\",\"nativeType\":null,\"relationName\":\"BannerToPhim\",\"relationFromFields\":[\"ma_phim\"],\"relationToFields\":[\"ma_phim\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CumRap\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ma_cum_rap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ten_cum_rap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dia_chi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ma_he_thong_rap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HeThongRap\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HeThongRap\",\"nativeType\":null,\"relationName\":\"CumRapToHeThongRap\",\"relationFromFields\":[\"ma_he_thong_rap\"],\"relationToFields\":[\"ma_he_thong_rap\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RapPhim\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RapPhim\",\"nativeType\":null,\"relationName\":\"CumRapToRapPhim\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DatVe\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ma_ve\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tai_khoan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ma_lich_chieu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ma_ghe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NguoiDung\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NguoiDung\",\"nativeType\":null,\"relationName\":\"DatVeToNguoiDung\",\"relationFromFields\":[\"tai_khoan\"],\"relationToFields\":[\"tai_khoan\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LichChieu\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LichChieu\",\"nativeType\":null,\"relationName\":\"DatVeToLichChieu\",\"relationFromFields\":[\"ma_lich_chieu\"],\"relationToFields\":[\"ma_lich_chieu\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ghe\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ghe\",\"nativeType\":null,\"relationName\":\"DatVeToGhe\",\"relationFromFields\":[\"ma_ghe\"],\"relationToFields\":[\"ma_ghe\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"tai_khoan\",\"ma_lich_chieu\",\"ma_ghe\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tai_khoan\",\"ma_lich_chieu\",\"ma_ghe\"]}],\"isGenerated\":false},\"Ghe\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ma_ghe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ten_ghe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loai_ghe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ma_rap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DatVe\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DatVe\",\"nativeType\":null,\"relationName\":\"DatVeToGhe\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RapPhim\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RapPhim\",\"nativeType\":null,\"relationName\":\"GheToRapPhim\",\"relationFromFields\":[\"ma_rap\"],\"relationToFields\":[\"ma_rap\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HeThongRap\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ma_he_thong_rap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ten_he_thong_rap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CumRap\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CumRap\",\"nativeType\":null,\"relationName\":\"CumRapToHeThongRap\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LichChieu\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ma_lich_chieu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ma_rap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ma_phim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ngay_gio_chieu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gia_ve\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DatVe\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DatVe\",\"nativeType\":null,\"relationName\":\"DatVeToLichChieu\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RapPhim\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RapPhim\",\"nativeType\":null,\"relationName\":\"LichChieuToRapPhim\",\"relationFromFields\":[\"ma_rap\"],\"relationToFields\":[\"ma_rap\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Phim\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Phim\",\"nativeType\":null,\"relationName\":\"LichChieuToPhim\",\"relationFromFields\":[\"ma_phim\"],\"relationToFields\":[\"ma_phim\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NguoiDung\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tai_khoan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ho_ten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"so_dt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mat_khau\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ma_loai_nguoi_dung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":2,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DatVe\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DatVe\",\"nativeType\":null,\"relationName\":\"DatVeToNguoiDung\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LoaiNguoiDung\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LoaiNguoiDung\",\"nativeType\":null,\"relationName\":\"LoaiNguoiDungToNguoiDung\",\"relationFromFields\":[\"ma_loai_nguoi_dung\"],\"relationToFields\":[\"ma_loai_nguoi_dung\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Phim\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ma_phim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ten_phim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trailer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hinh_anh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mo_ta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ngay_khoi_chieu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"danh_gia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dang_chieu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sap_chieu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Banner\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Banner\",\"nativeType\":null,\"relationName\":\"BannerToPhim\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LichChieu\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LichChieu\",\"nativeType\":null,\"relationName\":\"LichChieuToPhim\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RapPhim\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ma_rap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ten_rap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ma_cum_rap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ghe\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ghe\",\"nativeType\":null,\"relationName\":\"GheToRapPhim\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LichChieu\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LichChieu\",\"nativeType\":null,\"relationName\":\"LichChieuToRapPhim\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CumRap\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CumRap\",\"nativeType\":null,\"relationName\":\"CumRapToRapPhim\",\"relationFromFields\":[\"ma_cum_rap\"],\"relationToFields\":[\"ma_cum_rap\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LoaiNguoiDung\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ma_loai_nguoi_dung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loai_nguoi_dung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NguoiDung\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NguoiDung\",\"nativeType\":null,\"relationName\":\"LoaiNguoiDungToNguoiDung\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

