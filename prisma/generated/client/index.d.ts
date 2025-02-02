
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Banner
 * 
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>
/**
 * Model CumRap
 * 
 */
export type CumRap = $Result.DefaultSelection<Prisma.$CumRapPayload>
/**
 * Model DatVe
 * 
 */
export type DatVe = $Result.DefaultSelection<Prisma.$DatVePayload>
/**
 * Model Ghe
 * 
 */
export type Ghe = $Result.DefaultSelection<Prisma.$GhePayload>
/**
 * Model HeThongRap
 * 
 */
export type HeThongRap = $Result.DefaultSelection<Prisma.$HeThongRapPayload>
/**
 * Model LichChieu
 * 
 */
export type LichChieu = $Result.DefaultSelection<Prisma.$LichChieuPayload>
/**
 * Model NguoiDung
 * 
 */
export type NguoiDung = $Result.DefaultSelection<Prisma.$NguoiDungPayload>
/**
 * Model Phim
 * 
 */
export type Phim = $Result.DefaultSelection<Prisma.$PhimPayload>
/**
 * Model RapPhim
 * 
 */
export type RapPhim = $Result.DefaultSelection<Prisma.$RapPhimPayload>
/**
 * Model LoaiNguoiDung
 * 
 */
export type LoaiNguoiDung = $Result.DefaultSelection<Prisma.$LoaiNguoiDungPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Banners
 * const banners = await prisma.banner.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Banners
   * const banners = await prisma.banner.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<ExtArgs>;

  /**
   * `prisma.cumRap`: Exposes CRUD operations for the **CumRap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CumRaps
    * const cumRaps = await prisma.cumRap.findMany()
    * ```
    */
  get cumRap(): Prisma.CumRapDelegate<ExtArgs>;

  /**
   * `prisma.datVe`: Exposes CRUD operations for the **DatVe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatVes
    * const datVes = await prisma.datVe.findMany()
    * ```
    */
  get datVe(): Prisma.DatVeDelegate<ExtArgs>;

  /**
   * `prisma.ghe`: Exposes CRUD operations for the **Ghe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ghes
    * const ghes = await prisma.ghe.findMany()
    * ```
    */
  get ghe(): Prisma.GheDelegate<ExtArgs>;

  /**
   * `prisma.heThongRap`: Exposes CRUD operations for the **HeThongRap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeThongRaps
    * const heThongRaps = await prisma.heThongRap.findMany()
    * ```
    */
  get heThongRap(): Prisma.HeThongRapDelegate<ExtArgs>;

  /**
   * `prisma.lichChieu`: Exposes CRUD operations for the **LichChieu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LichChieus
    * const lichChieus = await prisma.lichChieu.findMany()
    * ```
    */
  get lichChieu(): Prisma.LichChieuDelegate<ExtArgs>;

  /**
   * `prisma.nguoiDung`: Exposes CRUD operations for the **NguoiDung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NguoiDungs
    * const nguoiDungs = await prisma.nguoiDung.findMany()
    * ```
    */
  get nguoiDung(): Prisma.NguoiDungDelegate<ExtArgs>;

  /**
   * `prisma.phim`: Exposes CRUD operations for the **Phim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phims
    * const phims = await prisma.phim.findMany()
    * ```
    */
  get phim(): Prisma.PhimDelegate<ExtArgs>;

  /**
   * `prisma.rapPhim`: Exposes CRUD operations for the **RapPhim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RapPhims
    * const rapPhims = await prisma.rapPhim.findMany()
    * ```
    */
  get rapPhim(): Prisma.RapPhimDelegate<ExtArgs>;

  /**
   * `prisma.loaiNguoiDung`: Exposes CRUD operations for the **LoaiNguoiDung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoaiNguoiDungs
    * const loaiNguoiDungs = await prisma.loaiNguoiDung.findMany()
    * ```
    */
  get loaiNguoiDung(): Prisma.LoaiNguoiDungDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "banner" | "cumRap" | "datVe" | "ghe" | "heThongRap" | "lichChieu" | "nguoiDung" | "phim" | "rapPhim" | "loaiNguoiDung"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>
        fields: Prisma.BannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      CumRap: {
        payload: Prisma.$CumRapPayload<ExtArgs>
        fields: Prisma.CumRapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CumRapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CumRapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload>
          }
          findFirst: {
            args: Prisma.CumRapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CumRapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload>
          }
          findMany: {
            args: Prisma.CumRapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload>[]
          }
          create: {
            args: Prisma.CumRapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload>
          }
          createMany: {
            args: Prisma.CumRapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CumRapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload>
          }
          update: {
            args: Prisma.CumRapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload>
          }
          deleteMany: {
            args: Prisma.CumRapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CumRapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CumRapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload>
          }
          aggregate: {
            args: Prisma.CumRapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCumRap>
          }
          groupBy: {
            args: Prisma.CumRapGroupByArgs<ExtArgs>
            result: $Utils.Optional<CumRapGroupByOutputType>[]
          }
          count: {
            args: Prisma.CumRapCountArgs<ExtArgs>
            result: $Utils.Optional<CumRapCountAggregateOutputType> | number
          }
        }
      }
      DatVe: {
        payload: Prisma.$DatVePayload<ExtArgs>
        fields: Prisma.DatVeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatVeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatVeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload>
          }
          findFirst: {
            args: Prisma.DatVeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatVeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload>
          }
          findMany: {
            args: Prisma.DatVeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload>[]
          }
          create: {
            args: Prisma.DatVeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload>
          }
          createMany: {
            args: Prisma.DatVeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DatVeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload>
          }
          update: {
            args: Prisma.DatVeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload>
          }
          deleteMany: {
            args: Prisma.DatVeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatVeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DatVeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload>
          }
          aggregate: {
            args: Prisma.DatVeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatVe>
          }
          groupBy: {
            args: Prisma.DatVeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatVeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatVeCountArgs<ExtArgs>
            result: $Utils.Optional<DatVeCountAggregateOutputType> | number
          }
        }
      }
      Ghe: {
        payload: Prisma.$GhePayload<ExtArgs>
        fields: Prisma.GheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload>
          }
          findFirst: {
            args: Prisma.GheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload>
          }
          findMany: {
            args: Prisma.GheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload>[]
          }
          create: {
            args: Prisma.GheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload>
          }
          createMany: {
            args: Prisma.GheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload>
          }
          update: {
            args: Prisma.GheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload>
          }
          deleteMany: {
            args: Prisma.GheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload>
          }
          aggregate: {
            args: Prisma.GheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGhe>
          }
          groupBy: {
            args: Prisma.GheGroupByArgs<ExtArgs>
            result: $Utils.Optional<GheGroupByOutputType>[]
          }
          count: {
            args: Prisma.GheCountArgs<ExtArgs>
            result: $Utils.Optional<GheCountAggregateOutputType> | number
          }
        }
      }
      HeThongRap: {
        payload: Prisma.$HeThongRapPayload<ExtArgs>
        fields: Prisma.HeThongRapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeThongRapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeThongRapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload>
          }
          findFirst: {
            args: Prisma.HeThongRapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeThongRapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload>
          }
          findMany: {
            args: Prisma.HeThongRapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload>[]
          }
          create: {
            args: Prisma.HeThongRapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload>
          }
          createMany: {
            args: Prisma.HeThongRapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HeThongRapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload>
          }
          update: {
            args: Prisma.HeThongRapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload>
          }
          deleteMany: {
            args: Prisma.HeThongRapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeThongRapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HeThongRapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload>
          }
          aggregate: {
            args: Prisma.HeThongRapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeThongRap>
          }
          groupBy: {
            args: Prisma.HeThongRapGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeThongRapGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeThongRapCountArgs<ExtArgs>
            result: $Utils.Optional<HeThongRapCountAggregateOutputType> | number
          }
        }
      }
      LichChieu: {
        payload: Prisma.$LichChieuPayload<ExtArgs>
        fields: Prisma.LichChieuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LichChieuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LichChieuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload>
          }
          findFirst: {
            args: Prisma.LichChieuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LichChieuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload>
          }
          findMany: {
            args: Prisma.LichChieuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload>[]
          }
          create: {
            args: Prisma.LichChieuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload>
          }
          createMany: {
            args: Prisma.LichChieuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LichChieuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload>
          }
          update: {
            args: Prisma.LichChieuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload>
          }
          deleteMany: {
            args: Prisma.LichChieuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LichChieuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LichChieuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload>
          }
          aggregate: {
            args: Prisma.LichChieuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLichChieu>
          }
          groupBy: {
            args: Prisma.LichChieuGroupByArgs<ExtArgs>
            result: $Utils.Optional<LichChieuGroupByOutputType>[]
          }
          count: {
            args: Prisma.LichChieuCountArgs<ExtArgs>
            result: $Utils.Optional<LichChieuCountAggregateOutputType> | number
          }
        }
      }
      NguoiDung: {
        payload: Prisma.$NguoiDungPayload<ExtArgs>
        fields: Prisma.NguoiDungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NguoiDungFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NguoiDungFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          findFirst: {
            args: Prisma.NguoiDungFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NguoiDungFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          findMany: {
            args: Prisma.NguoiDungFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>[]
          }
          create: {
            args: Prisma.NguoiDungCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          createMany: {
            args: Prisma.NguoiDungCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NguoiDungDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          update: {
            args: Prisma.NguoiDungUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          deleteMany: {
            args: Prisma.NguoiDungDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NguoiDungUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NguoiDungUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          aggregate: {
            args: Prisma.NguoiDungAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNguoiDung>
          }
          groupBy: {
            args: Prisma.NguoiDungGroupByArgs<ExtArgs>
            result: $Utils.Optional<NguoiDungGroupByOutputType>[]
          }
          count: {
            args: Prisma.NguoiDungCountArgs<ExtArgs>
            result: $Utils.Optional<NguoiDungCountAggregateOutputType> | number
          }
        }
      }
      Phim: {
        payload: Prisma.$PhimPayload<ExtArgs>
        fields: Prisma.PhimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload>
          }
          findFirst: {
            args: Prisma.PhimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload>
          }
          findMany: {
            args: Prisma.PhimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload>[]
          }
          create: {
            args: Prisma.PhimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload>
          }
          createMany: {
            args: Prisma.PhimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PhimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload>
          }
          update: {
            args: Prisma.PhimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload>
          }
          deleteMany: {
            args: Prisma.PhimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload>
          }
          aggregate: {
            args: Prisma.PhimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhim>
          }
          groupBy: {
            args: Prisma.PhimGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhimGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhimCountArgs<ExtArgs>
            result: $Utils.Optional<PhimCountAggregateOutputType> | number
          }
        }
      }
      RapPhim: {
        payload: Prisma.$RapPhimPayload<ExtArgs>
        fields: Prisma.RapPhimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RapPhimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RapPhimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload>
          }
          findFirst: {
            args: Prisma.RapPhimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RapPhimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload>
          }
          findMany: {
            args: Prisma.RapPhimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload>[]
          }
          create: {
            args: Prisma.RapPhimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload>
          }
          createMany: {
            args: Prisma.RapPhimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RapPhimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload>
          }
          update: {
            args: Prisma.RapPhimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload>
          }
          deleteMany: {
            args: Prisma.RapPhimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RapPhimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RapPhimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload>
          }
          aggregate: {
            args: Prisma.RapPhimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRapPhim>
          }
          groupBy: {
            args: Prisma.RapPhimGroupByArgs<ExtArgs>
            result: $Utils.Optional<RapPhimGroupByOutputType>[]
          }
          count: {
            args: Prisma.RapPhimCountArgs<ExtArgs>
            result: $Utils.Optional<RapPhimCountAggregateOutputType> | number
          }
        }
      }
      LoaiNguoiDung: {
        payload: Prisma.$LoaiNguoiDungPayload<ExtArgs>
        fields: Prisma.LoaiNguoiDungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoaiNguoiDungFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiNguoiDungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoaiNguoiDungFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiNguoiDungPayload>
          }
          findFirst: {
            args: Prisma.LoaiNguoiDungFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiNguoiDungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoaiNguoiDungFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiNguoiDungPayload>
          }
          findMany: {
            args: Prisma.LoaiNguoiDungFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiNguoiDungPayload>[]
          }
          create: {
            args: Prisma.LoaiNguoiDungCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiNguoiDungPayload>
          }
          createMany: {
            args: Prisma.LoaiNguoiDungCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LoaiNguoiDungDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiNguoiDungPayload>
          }
          update: {
            args: Prisma.LoaiNguoiDungUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiNguoiDungPayload>
          }
          deleteMany: {
            args: Prisma.LoaiNguoiDungDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoaiNguoiDungUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoaiNguoiDungUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiNguoiDungPayload>
          }
          aggregate: {
            args: Prisma.LoaiNguoiDungAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoaiNguoiDung>
          }
          groupBy: {
            args: Prisma.LoaiNguoiDungGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoaiNguoiDungGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoaiNguoiDungCountArgs<ExtArgs>
            result: $Utils.Optional<LoaiNguoiDungCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CumRapCountOutputType
   */

  export type CumRapCountOutputType = {
    RapPhim: number
  }

  export type CumRapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RapPhim?: boolean | CumRapCountOutputTypeCountRapPhimArgs
  }

  // Custom InputTypes
  /**
   * CumRapCountOutputType without action
   */
  export type CumRapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRapCountOutputType
     */
    select?: CumRapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CumRapCountOutputType without action
   */
  export type CumRapCountOutputTypeCountRapPhimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RapPhimWhereInput
  }


  /**
   * Count Type GheCountOutputType
   */

  export type GheCountOutputType = {
    DatVe: number
  }

  export type GheCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DatVe?: boolean | GheCountOutputTypeCountDatVeArgs
  }

  // Custom InputTypes
  /**
   * GheCountOutputType without action
   */
  export type GheCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GheCountOutputType
     */
    select?: GheCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GheCountOutputType without action
   */
  export type GheCountOutputTypeCountDatVeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatVeWhereInput
  }


  /**
   * Count Type HeThongRapCountOutputType
   */

  export type HeThongRapCountOutputType = {
    CumRap: number
  }

  export type HeThongRapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CumRap?: boolean | HeThongRapCountOutputTypeCountCumRapArgs
  }

  // Custom InputTypes
  /**
   * HeThongRapCountOutputType without action
   */
  export type HeThongRapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRapCountOutputType
     */
    select?: HeThongRapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HeThongRapCountOutputType without action
   */
  export type HeThongRapCountOutputTypeCountCumRapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CumRapWhereInput
  }


  /**
   * Count Type LichChieuCountOutputType
   */

  export type LichChieuCountOutputType = {
    DatVe: number
  }

  export type LichChieuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DatVe?: boolean | LichChieuCountOutputTypeCountDatVeArgs
  }

  // Custom InputTypes
  /**
   * LichChieuCountOutputType without action
   */
  export type LichChieuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieuCountOutputType
     */
    select?: LichChieuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LichChieuCountOutputType without action
   */
  export type LichChieuCountOutputTypeCountDatVeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatVeWhereInput
  }


  /**
   * Count Type NguoiDungCountOutputType
   */

  export type NguoiDungCountOutputType = {
    DatVe: number
  }

  export type NguoiDungCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DatVe?: boolean | NguoiDungCountOutputTypeCountDatVeArgs
  }

  // Custom InputTypes
  /**
   * NguoiDungCountOutputType without action
   */
  export type NguoiDungCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDungCountOutputType
     */
    select?: NguoiDungCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NguoiDungCountOutputType without action
   */
  export type NguoiDungCountOutputTypeCountDatVeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatVeWhereInput
  }


  /**
   * Count Type PhimCountOutputType
   */

  export type PhimCountOutputType = {
    Banner: number
    LichChieu: number
  }

  export type PhimCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Banner?: boolean | PhimCountOutputTypeCountBannerArgs
    LichChieu?: boolean | PhimCountOutputTypeCountLichChieuArgs
  }

  // Custom InputTypes
  /**
   * PhimCountOutputType without action
   */
  export type PhimCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhimCountOutputType
     */
    select?: PhimCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhimCountOutputType without action
   */
  export type PhimCountOutputTypeCountBannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
  }

  /**
   * PhimCountOutputType without action
   */
  export type PhimCountOutputTypeCountLichChieuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LichChieuWhereInput
  }


  /**
   * Count Type RapPhimCountOutputType
   */

  export type RapPhimCountOutputType = {
    Ghe: number
    LichChieu: number
  }

  export type RapPhimCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ghe?: boolean | RapPhimCountOutputTypeCountGheArgs
    LichChieu?: boolean | RapPhimCountOutputTypeCountLichChieuArgs
  }

  // Custom InputTypes
  /**
   * RapPhimCountOutputType without action
   */
  export type RapPhimCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhimCountOutputType
     */
    select?: RapPhimCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RapPhimCountOutputType without action
   */
  export type RapPhimCountOutputTypeCountGheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GheWhereInput
  }

  /**
   * RapPhimCountOutputType without action
   */
  export type RapPhimCountOutputTypeCountLichChieuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LichChieuWhereInput
  }


  /**
   * Count Type LoaiNguoiDungCountOutputType
   */

  export type LoaiNguoiDungCountOutputType = {
    NguoiDung: number
  }

  export type LoaiNguoiDungCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NguoiDung?: boolean | LoaiNguoiDungCountOutputTypeCountNguoiDungArgs
  }

  // Custom InputTypes
  /**
   * LoaiNguoiDungCountOutputType without action
   */
  export type LoaiNguoiDungCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiNguoiDungCountOutputType
     */
    select?: LoaiNguoiDungCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoaiNguoiDungCountOutputType without action
   */
  export type LoaiNguoiDungCountOutputTypeCountNguoiDungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NguoiDungWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerAvgAggregateOutputType = {
    ma_banner: number | null
    ma_phim: number | null
  }

  export type BannerSumAggregateOutputType = {
    ma_banner: number | null
    ma_phim: number | null
  }

  export type BannerMinAggregateOutputType = {
    ma_banner: number | null
    ma_phim: number | null
    hinh_anh: string | null
  }

  export type BannerMaxAggregateOutputType = {
    ma_banner: number | null
    ma_phim: number | null
    hinh_anh: string | null
  }

  export type BannerCountAggregateOutputType = {
    ma_banner: number
    ma_phim: number
    hinh_anh: number
    _all: number
  }


  export type BannerAvgAggregateInputType = {
    ma_banner?: true
    ma_phim?: true
  }

  export type BannerSumAggregateInputType = {
    ma_banner?: true
    ma_phim?: true
  }

  export type BannerMinAggregateInputType = {
    ma_banner?: true
    ma_phim?: true
    hinh_anh?: true
  }

  export type BannerMaxAggregateInputType = {
    ma_banner?: true
    ma_phim?: true
    hinh_anh?: true
  }

  export type BannerCountAggregateInputType = {
    ma_banner?: true
    ma_phim?: true
    hinh_anh?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithAggregationInput | BannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _avg?: BannerAvgAggregateInputType
    _sum?: BannerSumAggregateInputType
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    ma_banner: number
    ma_phim: number | null
    hinh_anh: string | null
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_banner?: boolean
    ma_phim?: boolean
    hinh_anh?: boolean
    Phim?: boolean | Banner$PhimArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>


  export type BannerSelectScalar = {
    ma_banner?: boolean
    ma_phim?: boolean
    hinh_anh?: boolean
  }

  export type BannerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Phim?: boolean | Banner$PhimArgs<ExtArgs>
  }

  export type $BannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banner"
    objects: {
      Phim: Prisma.$PhimPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_banner: number
      ma_phim: number | null
      hinh_anh: string | null
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type BannerGetPayload<S extends boolean | null | undefined | BannerDefaultArgs> = $Result.GetResult<Prisma.$BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerFindUniqueArgs>(args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerFindFirstArgs>(args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `ma_banner`
     * const bannerWithMa_bannerOnly = await prisma.banner.findMany({ select: { ma_banner: true } })
     * 
     */
    findMany<T extends BannerFindManyArgs>(args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends BannerCreateArgs>(args: SelectSubset<T, BannerCreateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Banners.
     * @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerCreateManyArgs>(args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends BannerDeleteArgs>(args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerUpdateArgs>(args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerDeleteManyArgs>(args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerUpdateManyArgs>(args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends BannerUpsertArgs>(args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banner model
   */
  readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Phim<T extends Banner$PhimArgs<ExtArgs> = {}>(args?: Subset<T, Banner$PhimArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Banner model
   */ 
  interface BannerFieldRefs {
    readonly ma_banner: FieldRef<"Banner", 'Int'>
    readonly ma_phim: FieldRef<"Banner", 'Int'>
    readonly hinh_anh: FieldRef<"Banner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data?: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }

  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
  }

  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }

  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
  }

  /**
   * Banner.Phim
   */
  export type Banner$PhimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    where?: PhimWhereInput
  }

  /**
   * Banner without action
   */
  export type BannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
  }


  /**
   * Model CumRap
   */

  export type AggregateCumRap = {
    _count: CumRapCountAggregateOutputType | null
    _avg: CumRapAvgAggregateOutputType | null
    _sum: CumRapSumAggregateOutputType | null
    _min: CumRapMinAggregateOutputType | null
    _max: CumRapMaxAggregateOutputType | null
  }

  export type CumRapAvgAggregateOutputType = {
    ma_cum_rap: number | null
    ma_he_thong_rap: number | null
  }

  export type CumRapSumAggregateOutputType = {
    ma_cum_rap: number | null
    ma_he_thong_rap: number | null
  }

  export type CumRapMinAggregateOutputType = {
    ma_cum_rap: number | null
    ten_cum_rap: string | null
    dia_chi: string | null
    ma_he_thong_rap: number | null
  }

  export type CumRapMaxAggregateOutputType = {
    ma_cum_rap: number | null
    ten_cum_rap: string | null
    dia_chi: string | null
    ma_he_thong_rap: number | null
  }

  export type CumRapCountAggregateOutputType = {
    ma_cum_rap: number
    ten_cum_rap: number
    dia_chi: number
    ma_he_thong_rap: number
    _all: number
  }


  export type CumRapAvgAggregateInputType = {
    ma_cum_rap?: true
    ma_he_thong_rap?: true
  }

  export type CumRapSumAggregateInputType = {
    ma_cum_rap?: true
    ma_he_thong_rap?: true
  }

  export type CumRapMinAggregateInputType = {
    ma_cum_rap?: true
    ten_cum_rap?: true
    dia_chi?: true
    ma_he_thong_rap?: true
  }

  export type CumRapMaxAggregateInputType = {
    ma_cum_rap?: true
    ten_cum_rap?: true
    dia_chi?: true
    ma_he_thong_rap?: true
  }

  export type CumRapCountAggregateInputType = {
    ma_cum_rap?: true
    ten_cum_rap?: true
    dia_chi?: true
    ma_he_thong_rap?: true
    _all?: true
  }

  export type CumRapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CumRap to aggregate.
     */
    where?: CumRapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CumRaps to fetch.
     */
    orderBy?: CumRapOrderByWithRelationInput | CumRapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CumRapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CumRaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CumRaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CumRaps
    **/
    _count?: true | CumRapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CumRapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CumRapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CumRapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CumRapMaxAggregateInputType
  }

  export type GetCumRapAggregateType<T extends CumRapAggregateArgs> = {
        [P in keyof T & keyof AggregateCumRap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCumRap[P]>
      : GetScalarType<T[P], AggregateCumRap[P]>
  }




  export type CumRapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CumRapWhereInput
    orderBy?: CumRapOrderByWithAggregationInput | CumRapOrderByWithAggregationInput[]
    by: CumRapScalarFieldEnum[] | CumRapScalarFieldEnum
    having?: CumRapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CumRapCountAggregateInputType | true
    _avg?: CumRapAvgAggregateInputType
    _sum?: CumRapSumAggregateInputType
    _min?: CumRapMinAggregateInputType
    _max?: CumRapMaxAggregateInputType
  }

  export type CumRapGroupByOutputType = {
    ma_cum_rap: number
    ten_cum_rap: string | null
    dia_chi: string | null
    ma_he_thong_rap: number | null
    _count: CumRapCountAggregateOutputType | null
    _avg: CumRapAvgAggregateOutputType | null
    _sum: CumRapSumAggregateOutputType | null
    _min: CumRapMinAggregateOutputType | null
    _max: CumRapMaxAggregateOutputType | null
  }

  type GetCumRapGroupByPayload<T extends CumRapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CumRapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CumRapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CumRapGroupByOutputType[P]>
            : GetScalarType<T[P], CumRapGroupByOutputType[P]>
        }
      >
    >


  export type CumRapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_cum_rap?: boolean
    ten_cum_rap?: boolean
    dia_chi?: boolean
    ma_he_thong_rap?: boolean
    HeThongRap?: boolean | CumRap$HeThongRapArgs<ExtArgs>
    RapPhim?: boolean | CumRap$RapPhimArgs<ExtArgs>
    _count?: boolean | CumRapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cumRap"]>


  export type CumRapSelectScalar = {
    ma_cum_rap?: boolean
    ten_cum_rap?: boolean
    dia_chi?: boolean
    ma_he_thong_rap?: boolean
  }

  export type CumRapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    HeThongRap?: boolean | CumRap$HeThongRapArgs<ExtArgs>
    RapPhim?: boolean | CumRap$RapPhimArgs<ExtArgs>
    _count?: boolean | CumRapCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CumRapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CumRap"
    objects: {
      HeThongRap: Prisma.$HeThongRapPayload<ExtArgs> | null
      RapPhim: Prisma.$RapPhimPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_cum_rap: number
      ten_cum_rap: string | null
      dia_chi: string | null
      ma_he_thong_rap: number | null
    }, ExtArgs["result"]["cumRap"]>
    composites: {}
  }

  type CumRapGetPayload<S extends boolean | null | undefined | CumRapDefaultArgs> = $Result.GetResult<Prisma.$CumRapPayload, S>

  type CumRapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CumRapFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CumRapCountAggregateInputType | true
    }

  export interface CumRapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CumRap'], meta: { name: 'CumRap' } }
    /**
     * Find zero or one CumRap that matches the filter.
     * @param {CumRapFindUniqueArgs} args - Arguments to find a CumRap
     * @example
     * // Get one CumRap
     * const cumRap = await prisma.cumRap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CumRapFindUniqueArgs>(args: SelectSubset<T, CumRapFindUniqueArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CumRap that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CumRapFindUniqueOrThrowArgs} args - Arguments to find a CumRap
     * @example
     * // Get one CumRap
     * const cumRap = await prisma.cumRap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CumRapFindUniqueOrThrowArgs>(args: SelectSubset<T, CumRapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CumRap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CumRapFindFirstArgs} args - Arguments to find a CumRap
     * @example
     * // Get one CumRap
     * const cumRap = await prisma.cumRap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CumRapFindFirstArgs>(args?: SelectSubset<T, CumRapFindFirstArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CumRap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CumRapFindFirstOrThrowArgs} args - Arguments to find a CumRap
     * @example
     * // Get one CumRap
     * const cumRap = await prisma.cumRap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CumRapFindFirstOrThrowArgs>(args?: SelectSubset<T, CumRapFindFirstOrThrowArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CumRaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CumRapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CumRaps
     * const cumRaps = await prisma.cumRap.findMany()
     * 
     * // Get first 10 CumRaps
     * const cumRaps = await prisma.cumRap.findMany({ take: 10 })
     * 
     * // Only select the `ma_cum_rap`
     * const cumRapWithMa_cum_rapOnly = await prisma.cumRap.findMany({ select: { ma_cum_rap: true } })
     * 
     */
    findMany<T extends CumRapFindManyArgs>(args?: SelectSubset<T, CumRapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CumRap.
     * @param {CumRapCreateArgs} args - Arguments to create a CumRap.
     * @example
     * // Create one CumRap
     * const CumRap = await prisma.cumRap.create({
     *   data: {
     *     // ... data to create a CumRap
     *   }
     * })
     * 
     */
    create<T extends CumRapCreateArgs>(args: SelectSubset<T, CumRapCreateArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CumRaps.
     * @param {CumRapCreateManyArgs} args - Arguments to create many CumRaps.
     * @example
     * // Create many CumRaps
     * const cumRap = await prisma.cumRap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CumRapCreateManyArgs>(args?: SelectSubset<T, CumRapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CumRap.
     * @param {CumRapDeleteArgs} args - Arguments to delete one CumRap.
     * @example
     * // Delete one CumRap
     * const CumRap = await prisma.cumRap.delete({
     *   where: {
     *     // ... filter to delete one CumRap
     *   }
     * })
     * 
     */
    delete<T extends CumRapDeleteArgs>(args: SelectSubset<T, CumRapDeleteArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CumRap.
     * @param {CumRapUpdateArgs} args - Arguments to update one CumRap.
     * @example
     * // Update one CumRap
     * const cumRap = await prisma.cumRap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CumRapUpdateArgs>(args: SelectSubset<T, CumRapUpdateArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CumRaps.
     * @param {CumRapDeleteManyArgs} args - Arguments to filter CumRaps to delete.
     * @example
     * // Delete a few CumRaps
     * const { count } = await prisma.cumRap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CumRapDeleteManyArgs>(args?: SelectSubset<T, CumRapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CumRaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CumRapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CumRaps
     * const cumRap = await prisma.cumRap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CumRapUpdateManyArgs>(args: SelectSubset<T, CumRapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CumRap.
     * @param {CumRapUpsertArgs} args - Arguments to update or create a CumRap.
     * @example
     * // Update or create a CumRap
     * const cumRap = await prisma.cumRap.upsert({
     *   create: {
     *     // ... data to create a CumRap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CumRap we want to update
     *   }
     * })
     */
    upsert<T extends CumRapUpsertArgs>(args: SelectSubset<T, CumRapUpsertArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CumRaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CumRapCountArgs} args - Arguments to filter CumRaps to count.
     * @example
     * // Count the number of CumRaps
     * const count = await prisma.cumRap.count({
     *   where: {
     *     // ... the filter for the CumRaps we want to count
     *   }
     * })
    **/
    count<T extends CumRapCountArgs>(
      args?: Subset<T, CumRapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CumRapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CumRap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CumRapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CumRapAggregateArgs>(args: Subset<T, CumRapAggregateArgs>): Prisma.PrismaPromise<GetCumRapAggregateType<T>>

    /**
     * Group by CumRap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CumRapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CumRapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CumRapGroupByArgs['orderBy'] }
        : { orderBy?: CumRapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CumRapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCumRapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CumRap model
   */
  readonly fields: CumRapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CumRap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CumRapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    HeThongRap<T extends CumRap$HeThongRapArgs<ExtArgs> = {}>(args?: Subset<T, CumRap$HeThongRapArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    RapPhim<T extends CumRap$RapPhimArgs<ExtArgs> = {}>(args?: Subset<T, CumRap$RapPhimArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CumRap model
   */ 
  interface CumRapFieldRefs {
    readonly ma_cum_rap: FieldRef<"CumRap", 'Int'>
    readonly ten_cum_rap: FieldRef<"CumRap", 'String'>
    readonly dia_chi: FieldRef<"CumRap", 'String'>
    readonly ma_he_thong_rap: FieldRef<"CumRap", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CumRap findUnique
   */
  export type CumRapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * Filter, which CumRap to fetch.
     */
    where: CumRapWhereUniqueInput
  }

  /**
   * CumRap findUniqueOrThrow
   */
  export type CumRapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * Filter, which CumRap to fetch.
     */
    where: CumRapWhereUniqueInput
  }

  /**
   * CumRap findFirst
   */
  export type CumRapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * Filter, which CumRap to fetch.
     */
    where?: CumRapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CumRaps to fetch.
     */
    orderBy?: CumRapOrderByWithRelationInput | CumRapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CumRaps.
     */
    cursor?: CumRapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CumRaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CumRaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CumRaps.
     */
    distinct?: CumRapScalarFieldEnum | CumRapScalarFieldEnum[]
  }

  /**
   * CumRap findFirstOrThrow
   */
  export type CumRapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * Filter, which CumRap to fetch.
     */
    where?: CumRapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CumRaps to fetch.
     */
    orderBy?: CumRapOrderByWithRelationInput | CumRapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CumRaps.
     */
    cursor?: CumRapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CumRaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CumRaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CumRaps.
     */
    distinct?: CumRapScalarFieldEnum | CumRapScalarFieldEnum[]
  }

  /**
   * CumRap findMany
   */
  export type CumRapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * Filter, which CumRaps to fetch.
     */
    where?: CumRapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CumRaps to fetch.
     */
    orderBy?: CumRapOrderByWithRelationInput | CumRapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CumRaps.
     */
    cursor?: CumRapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CumRaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CumRaps.
     */
    skip?: number
    distinct?: CumRapScalarFieldEnum | CumRapScalarFieldEnum[]
  }

  /**
   * CumRap create
   */
  export type CumRapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * The data needed to create a CumRap.
     */
    data?: XOR<CumRapCreateInput, CumRapUncheckedCreateInput>
  }

  /**
   * CumRap createMany
   */
  export type CumRapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CumRaps.
     */
    data: CumRapCreateManyInput | CumRapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CumRap update
   */
  export type CumRapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * The data needed to update a CumRap.
     */
    data: XOR<CumRapUpdateInput, CumRapUncheckedUpdateInput>
    /**
     * Choose, which CumRap to update.
     */
    where: CumRapWhereUniqueInput
  }

  /**
   * CumRap updateMany
   */
  export type CumRapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CumRaps.
     */
    data: XOR<CumRapUpdateManyMutationInput, CumRapUncheckedUpdateManyInput>
    /**
     * Filter which CumRaps to update
     */
    where?: CumRapWhereInput
  }

  /**
   * CumRap upsert
   */
  export type CumRapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * The filter to search for the CumRap to update in case it exists.
     */
    where: CumRapWhereUniqueInput
    /**
     * In case the CumRap found by the `where` argument doesn't exist, create a new CumRap with this data.
     */
    create: XOR<CumRapCreateInput, CumRapUncheckedCreateInput>
    /**
     * In case the CumRap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CumRapUpdateInput, CumRapUncheckedUpdateInput>
  }

  /**
   * CumRap delete
   */
  export type CumRapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * Filter which CumRap to delete.
     */
    where: CumRapWhereUniqueInput
  }

  /**
   * CumRap deleteMany
   */
  export type CumRapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CumRaps to delete
     */
    where?: CumRapWhereInput
  }

  /**
   * CumRap.HeThongRap
   */
  export type CumRap$HeThongRapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    where?: HeThongRapWhereInput
  }

  /**
   * CumRap.RapPhim
   */
  export type CumRap$RapPhimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    where?: RapPhimWhereInput
    orderBy?: RapPhimOrderByWithRelationInput | RapPhimOrderByWithRelationInput[]
    cursor?: RapPhimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RapPhimScalarFieldEnum | RapPhimScalarFieldEnum[]
  }

  /**
   * CumRap without action
   */
  export type CumRapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
  }


  /**
   * Model DatVe
   */

  export type AggregateDatVe = {
    _count: DatVeCountAggregateOutputType | null
    _avg: DatVeAvgAggregateOutputType | null
    _sum: DatVeSumAggregateOutputType | null
    _min: DatVeMinAggregateOutputType | null
    _max: DatVeMaxAggregateOutputType | null
  }

  export type DatVeAvgAggregateOutputType = {
    ma_ve: number | null
    tai_khoan: number | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
  }

  export type DatVeSumAggregateOutputType = {
    ma_ve: number | null
    tai_khoan: number | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
  }

  export type DatVeMinAggregateOutputType = {
    ma_ve: number | null
    tai_khoan: number | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
  }

  export type DatVeMaxAggregateOutputType = {
    ma_ve: number | null
    tai_khoan: number | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
  }

  export type DatVeCountAggregateOutputType = {
    ma_ve: number
    tai_khoan: number
    ma_lich_chieu: number
    ma_ghe: number
    _all: number
  }


  export type DatVeAvgAggregateInputType = {
    ma_ve?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
  }

  export type DatVeSumAggregateInputType = {
    ma_ve?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
  }

  export type DatVeMinAggregateInputType = {
    ma_ve?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
  }

  export type DatVeMaxAggregateInputType = {
    ma_ve?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
  }

  export type DatVeCountAggregateInputType = {
    ma_ve?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
    _all?: true
  }

  export type DatVeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatVe to aggregate.
     */
    where?: DatVeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatVes to fetch.
     */
    orderBy?: DatVeOrderByWithRelationInput | DatVeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatVeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatVes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatVes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatVes
    **/
    _count?: true | DatVeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatVeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatVeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatVeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatVeMaxAggregateInputType
  }

  export type GetDatVeAggregateType<T extends DatVeAggregateArgs> = {
        [P in keyof T & keyof AggregateDatVe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatVe[P]>
      : GetScalarType<T[P], AggregateDatVe[P]>
  }




  export type DatVeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatVeWhereInput
    orderBy?: DatVeOrderByWithAggregationInput | DatVeOrderByWithAggregationInput[]
    by: DatVeScalarFieldEnum[] | DatVeScalarFieldEnum
    having?: DatVeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatVeCountAggregateInputType | true
    _avg?: DatVeAvgAggregateInputType
    _sum?: DatVeSumAggregateInputType
    _min?: DatVeMinAggregateInputType
    _max?: DatVeMaxAggregateInputType
  }

  export type DatVeGroupByOutputType = {
    ma_ve: number
    tai_khoan: number | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
    _count: DatVeCountAggregateOutputType | null
    _avg: DatVeAvgAggregateOutputType | null
    _sum: DatVeSumAggregateOutputType | null
    _min: DatVeMinAggregateOutputType | null
    _max: DatVeMaxAggregateOutputType | null
  }

  type GetDatVeGroupByPayload<T extends DatVeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatVeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatVeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatVeGroupByOutputType[P]>
            : GetScalarType<T[P], DatVeGroupByOutputType[P]>
        }
      >
    >


  export type DatVeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_ve?: boolean
    tai_khoan?: boolean
    ma_lich_chieu?: boolean
    ma_ghe?: boolean
    NguoiDung?: boolean | DatVe$NguoiDungArgs<ExtArgs>
    LichChieu?: boolean | DatVe$LichChieuArgs<ExtArgs>
    Ghe?: boolean | DatVe$GheArgs<ExtArgs>
  }, ExtArgs["result"]["datVe"]>


  export type DatVeSelectScalar = {
    ma_ve?: boolean
    tai_khoan?: boolean
    ma_lich_chieu?: boolean
    ma_ghe?: boolean
  }

  export type DatVeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NguoiDung?: boolean | DatVe$NguoiDungArgs<ExtArgs>
    LichChieu?: boolean | DatVe$LichChieuArgs<ExtArgs>
    Ghe?: boolean | DatVe$GheArgs<ExtArgs>
  }

  export type $DatVePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DatVe"
    objects: {
      NguoiDung: Prisma.$NguoiDungPayload<ExtArgs> | null
      LichChieu: Prisma.$LichChieuPayload<ExtArgs> | null
      Ghe: Prisma.$GhePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_ve: number
      tai_khoan: number | null
      ma_lich_chieu: number | null
      ma_ghe: number | null
    }, ExtArgs["result"]["datVe"]>
    composites: {}
  }

  type DatVeGetPayload<S extends boolean | null | undefined | DatVeDefaultArgs> = $Result.GetResult<Prisma.$DatVePayload, S>

  type DatVeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DatVeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DatVeCountAggregateInputType | true
    }

  export interface DatVeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DatVe'], meta: { name: 'DatVe' } }
    /**
     * Find zero or one DatVe that matches the filter.
     * @param {DatVeFindUniqueArgs} args - Arguments to find a DatVe
     * @example
     * // Get one DatVe
     * const datVe = await prisma.datVe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatVeFindUniqueArgs>(args: SelectSubset<T, DatVeFindUniqueArgs<ExtArgs>>): Prisma__DatVeClient<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DatVe that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DatVeFindUniqueOrThrowArgs} args - Arguments to find a DatVe
     * @example
     * // Get one DatVe
     * const datVe = await prisma.datVe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatVeFindUniqueOrThrowArgs>(args: SelectSubset<T, DatVeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatVeClient<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DatVe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatVeFindFirstArgs} args - Arguments to find a DatVe
     * @example
     * // Get one DatVe
     * const datVe = await prisma.datVe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatVeFindFirstArgs>(args?: SelectSubset<T, DatVeFindFirstArgs<ExtArgs>>): Prisma__DatVeClient<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DatVe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatVeFindFirstOrThrowArgs} args - Arguments to find a DatVe
     * @example
     * // Get one DatVe
     * const datVe = await prisma.datVe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatVeFindFirstOrThrowArgs>(args?: SelectSubset<T, DatVeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatVeClient<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DatVes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatVeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatVes
     * const datVes = await prisma.datVe.findMany()
     * 
     * // Get first 10 DatVes
     * const datVes = await prisma.datVe.findMany({ take: 10 })
     * 
     * // Only select the `ma_ve`
     * const datVeWithMa_veOnly = await prisma.datVe.findMany({ select: { ma_ve: true } })
     * 
     */
    findMany<T extends DatVeFindManyArgs>(args?: SelectSubset<T, DatVeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DatVe.
     * @param {DatVeCreateArgs} args - Arguments to create a DatVe.
     * @example
     * // Create one DatVe
     * const DatVe = await prisma.datVe.create({
     *   data: {
     *     // ... data to create a DatVe
     *   }
     * })
     * 
     */
    create<T extends DatVeCreateArgs>(args: SelectSubset<T, DatVeCreateArgs<ExtArgs>>): Prisma__DatVeClient<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DatVes.
     * @param {DatVeCreateManyArgs} args - Arguments to create many DatVes.
     * @example
     * // Create many DatVes
     * const datVe = await prisma.datVe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatVeCreateManyArgs>(args?: SelectSubset<T, DatVeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DatVe.
     * @param {DatVeDeleteArgs} args - Arguments to delete one DatVe.
     * @example
     * // Delete one DatVe
     * const DatVe = await prisma.datVe.delete({
     *   where: {
     *     // ... filter to delete one DatVe
     *   }
     * })
     * 
     */
    delete<T extends DatVeDeleteArgs>(args: SelectSubset<T, DatVeDeleteArgs<ExtArgs>>): Prisma__DatVeClient<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DatVe.
     * @param {DatVeUpdateArgs} args - Arguments to update one DatVe.
     * @example
     * // Update one DatVe
     * const datVe = await prisma.datVe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatVeUpdateArgs>(args: SelectSubset<T, DatVeUpdateArgs<ExtArgs>>): Prisma__DatVeClient<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DatVes.
     * @param {DatVeDeleteManyArgs} args - Arguments to filter DatVes to delete.
     * @example
     * // Delete a few DatVes
     * const { count } = await prisma.datVe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatVeDeleteManyArgs>(args?: SelectSubset<T, DatVeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatVes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatVeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatVes
     * const datVe = await prisma.datVe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatVeUpdateManyArgs>(args: SelectSubset<T, DatVeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DatVe.
     * @param {DatVeUpsertArgs} args - Arguments to update or create a DatVe.
     * @example
     * // Update or create a DatVe
     * const datVe = await prisma.datVe.upsert({
     *   create: {
     *     // ... data to create a DatVe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatVe we want to update
     *   }
     * })
     */
    upsert<T extends DatVeUpsertArgs>(args: SelectSubset<T, DatVeUpsertArgs<ExtArgs>>): Prisma__DatVeClient<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DatVes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatVeCountArgs} args - Arguments to filter DatVes to count.
     * @example
     * // Count the number of DatVes
     * const count = await prisma.datVe.count({
     *   where: {
     *     // ... the filter for the DatVes we want to count
     *   }
     * })
    **/
    count<T extends DatVeCountArgs>(
      args?: Subset<T, DatVeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatVeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatVe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatVeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatVeAggregateArgs>(args: Subset<T, DatVeAggregateArgs>): Prisma.PrismaPromise<GetDatVeAggregateType<T>>

    /**
     * Group by DatVe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatVeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatVeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatVeGroupByArgs['orderBy'] }
        : { orderBy?: DatVeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatVeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatVeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DatVe model
   */
  readonly fields: DatVeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatVe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatVeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    NguoiDung<T extends DatVe$NguoiDungArgs<ExtArgs> = {}>(args?: Subset<T, DatVe$NguoiDungArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    LichChieu<T extends DatVe$LichChieuArgs<ExtArgs> = {}>(args?: Subset<T, DatVe$LichChieuArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Ghe<T extends DatVe$GheArgs<ExtArgs> = {}>(args?: Subset<T, DatVe$GheArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DatVe model
   */ 
  interface DatVeFieldRefs {
    readonly ma_ve: FieldRef<"DatVe", 'Int'>
    readonly tai_khoan: FieldRef<"DatVe", 'Int'>
    readonly ma_lich_chieu: FieldRef<"DatVe", 'Int'>
    readonly ma_ghe: FieldRef<"DatVe", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DatVe findUnique
   */
  export type DatVeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * Filter, which DatVe to fetch.
     */
    where: DatVeWhereUniqueInput
  }

  /**
   * DatVe findUniqueOrThrow
   */
  export type DatVeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * Filter, which DatVe to fetch.
     */
    where: DatVeWhereUniqueInput
  }

  /**
   * DatVe findFirst
   */
  export type DatVeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * Filter, which DatVe to fetch.
     */
    where?: DatVeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatVes to fetch.
     */
    orderBy?: DatVeOrderByWithRelationInput | DatVeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatVes.
     */
    cursor?: DatVeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatVes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatVes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatVes.
     */
    distinct?: DatVeScalarFieldEnum | DatVeScalarFieldEnum[]
  }

  /**
   * DatVe findFirstOrThrow
   */
  export type DatVeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * Filter, which DatVe to fetch.
     */
    where?: DatVeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatVes to fetch.
     */
    orderBy?: DatVeOrderByWithRelationInput | DatVeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatVes.
     */
    cursor?: DatVeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatVes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatVes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatVes.
     */
    distinct?: DatVeScalarFieldEnum | DatVeScalarFieldEnum[]
  }

  /**
   * DatVe findMany
   */
  export type DatVeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * Filter, which DatVes to fetch.
     */
    where?: DatVeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatVes to fetch.
     */
    orderBy?: DatVeOrderByWithRelationInput | DatVeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatVes.
     */
    cursor?: DatVeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatVes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatVes.
     */
    skip?: number
    distinct?: DatVeScalarFieldEnum | DatVeScalarFieldEnum[]
  }

  /**
   * DatVe create
   */
  export type DatVeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * The data needed to create a DatVe.
     */
    data?: XOR<DatVeCreateInput, DatVeUncheckedCreateInput>
  }

  /**
   * DatVe createMany
   */
  export type DatVeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DatVes.
     */
    data: DatVeCreateManyInput | DatVeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DatVe update
   */
  export type DatVeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * The data needed to update a DatVe.
     */
    data: XOR<DatVeUpdateInput, DatVeUncheckedUpdateInput>
    /**
     * Choose, which DatVe to update.
     */
    where: DatVeWhereUniqueInput
  }

  /**
   * DatVe updateMany
   */
  export type DatVeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DatVes.
     */
    data: XOR<DatVeUpdateManyMutationInput, DatVeUncheckedUpdateManyInput>
    /**
     * Filter which DatVes to update
     */
    where?: DatVeWhereInput
  }

  /**
   * DatVe upsert
   */
  export type DatVeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * The filter to search for the DatVe to update in case it exists.
     */
    where: DatVeWhereUniqueInput
    /**
     * In case the DatVe found by the `where` argument doesn't exist, create a new DatVe with this data.
     */
    create: XOR<DatVeCreateInput, DatVeUncheckedCreateInput>
    /**
     * In case the DatVe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatVeUpdateInput, DatVeUncheckedUpdateInput>
  }

  /**
   * DatVe delete
   */
  export type DatVeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * Filter which DatVe to delete.
     */
    where: DatVeWhereUniqueInput
  }

  /**
   * DatVe deleteMany
   */
  export type DatVeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatVes to delete
     */
    where?: DatVeWhereInput
  }

  /**
   * DatVe.NguoiDung
   */
  export type DatVe$NguoiDungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    where?: NguoiDungWhereInput
  }

  /**
   * DatVe.LichChieu
   */
  export type DatVe$LichChieuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    where?: LichChieuWhereInput
  }

  /**
   * DatVe.Ghe
   */
  export type DatVe$GheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    where?: GheWhereInput
  }

  /**
   * DatVe without action
   */
  export type DatVeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
  }


  /**
   * Model Ghe
   */

  export type AggregateGhe = {
    _count: GheCountAggregateOutputType | null
    _avg: GheAvgAggregateOutputType | null
    _sum: GheSumAggregateOutputType | null
    _min: GheMinAggregateOutputType | null
    _max: GheMaxAggregateOutputType | null
  }

  export type GheAvgAggregateOutputType = {
    ma_ghe: number | null
    ma_rap: number | null
  }

  export type GheSumAggregateOutputType = {
    ma_ghe: number | null
    ma_rap: number | null
  }

  export type GheMinAggregateOutputType = {
    ma_ghe: number | null
    ten_ghe: string | null
    loai_ghe: string | null
    ma_rap: number | null
  }

  export type GheMaxAggregateOutputType = {
    ma_ghe: number | null
    ten_ghe: string | null
    loai_ghe: string | null
    ma_rap: number | null
  }

  export type GheCountAggregateOutputType = {
    ma_ghe: number
    ten_ghe: number
    loai_ghe: number
    ma_rap: number
    _all: number
  }


  export type GheAvgAggregateInputType = {
    ma_ghe?: true
    ma_rap?: true
  }

  export type GheSumAggregateInputType = {
    ma_ghe?: true
    ma_rap?: true
  }

  export type GheMinAggregateInputType = {
    ma_ghe?: true
    ten_ghe?: true
    loai_ghe?: true
    ma_rap?: true
  }

  export type GheMaxAggregateInputType = {
    ma_ghe?: true
    ten_ghe?: true
    loai_ghe?: true
    ma_rap?: true
  }

  export type GheCountAggregateInputType = {
    ma_ghe?: true
    ten_ghe?: true
    loai_ghe?: true
    ma_rap?: true
    _all?: true
  }

  export type GheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ghe to aggregate.
     */
    where?: GheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ghes to fetch.
     */
    orderBy?: GheOrderByWithRelationInput | GheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ghes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ghes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ghes
    **/
    _count?: true | GheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GheMaxAggregateInputType
  }

  export type GetGheAggregateType<T extends GheAggregateArgs> = {
        [P in keyof T & keyof AggregateGhe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGhe[P]>
      : GetScalarType<T[P], AggregateGhe[P]>
  }




  export type GheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GheWhereInput
    orderBy?: GheOrderByWithAggregationInput | GheOrderByWithAggregationInput[]
    by: GheScalarFieldEnum[] | GheScalarFieldEnum
    having?: GheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GheCountAggregateInputType | true
    _avg?: GheAvgAggregateInputType
    _sum?: GheSumAggregateInputType
    _min?: GheMinAggregateInputType
    _max?: GheMaxAggregateInputType
  }

  export type GheGroupByOutputType = {
    ma_ghe: number
    ten_ghe: string | null
    loai_ghe: string | null
    ma_rap: number | null
    _count: GheCountAggregateOutputType | null
    _avg: GheAvgAggregateOutputType | null
    _sum: GheSumAggregateOutputType | null
    _min: GheMinAggregateOutputType | null
    _max: GheMaxAggregateOutputType | null
  }

  type GetGheGroupByPayload<T extends GheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GheGroupByOutputType[P]>
            : GetScalarType<T[P], GheGroupByOutputType[P]>
        }
      >
    >


  export type GheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_ghe?: boolean
    ten_ghe?: boolean
    loai_ghe?: boolean
    ma_rap?: boolean
    DatVe?: boolean | Ghe$DatVeArgs<ExtArgs>
    RapPhim?: boolean | Ghe$RapPhimArgs<ExtArgs>
    _count?: boolean | GheCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ghe"]>


  export type GheSelectScalar = {
    ma_ghe?: boolean
    ten_ghe?: boolean
    loai_ghe?: boolean
    ma_rap?: boolean
  }

  export type GheInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DatVe?: boolean | Ghe$DatVeArgs<ExtArgs>
    RapPhim?: boolean | Ghe$RapPhimArgs<ExtArgs>
    _count?: boolean | GheCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GhePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ghe"
    objects: {
      DatVe: Prisma.$DatVePayload<ExtArgs>[]
      RapPhim: Prisma.$RapPhimPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_ghe: number
      ten_ghe: string | null
      loai_ghe: string | null
      ma_rap: number | null
    }, ExtArgs["result"]["ghe"]>
    composites: {}
  }

  type GheGetPayload<S extends boolean | null | undefined | GheDefaultArgs> = $Result.GetResult<Prisma.$GhePayload, S>

  type GheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GheFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GheCountAggregateInputType | true
    }

  export interface GheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ghe'], meta: { name: 'Ghe' } }
    /**
     * Find zero or one Ghe that matches the filter.
     * @param {GheFindUniqueArgs} args - Arguments to find a Ghe
     * @example
     * // Get one Ghe
     * const ghe = await prisma.ghe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GheFindUniqueArgs>(args: SelectSubset<T, GheFindUniqueArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ghe that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GheFindUniqueOrThrowArgs} args - Arguments to find a Ghe
     * @example
     * // Get one Ghe
     * const ghe = await prisma.ghe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GheFindUniqueOrThrowArgs>(args: SelectSubset<T, GheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ghe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GheFindFirstArgs} args - Arguments to find a Ghe
     * @example
     * // Get one Ghe
     * const ghe = await prisma.ghe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GheFindFirstArgs>(args?: SelectSubset<T, GheFindFirstArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ghe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GheFindFirstOrThrowArgs} args - Arguments to find a Ghe
     * @example
     * // Get one Ghe
     * const ghe = await prisma.ghe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GheFindFirstOrThrowArgs>(args?: SelectSubset<T, GheFindFirstOrThrowArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ghes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ghes
     * const ghes = await prisma.ghe.findMany()
     * 
     * // Get first 10 Ghes
     * const ghes = await prisma.ghe.findMany({ take: 10 })
     * 
     * // Only select the `ma_ghe`
     * const gheWithMa_gheOnly = await prisma.ghe.findMany({ select: { ma_ghe: true } })
     * 
     */
    findMany<T extends GheFindManyArgs>(args?: SelectSubset<T, GheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ghe.
     * @param {GheCreateArgs} args - Arguments to create a Ghe.
     * @example
     * // Create one Ghe
     * const Ghe = await prisma.ghe.create({
     *   data: {
     *     // ... data to create a Ghe
     *   }
     * })
     * 
     */
    create<T extends GheCreateArgs>(args: SelectSubset<T, GheCreateArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ghes.
     * @param {GheCreateManyArgs} args - Arguments to create many Ghes.
     * @example
     * // Create many Ghes
     * const ghe = await prisma.ghe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GheCreateManyArgs>(args?: SelectSubset<T, GheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ghe.
     * @param {GheDeleteArgs} args - Arguments to delete one Ghe.
     * @example
     * // Delete one Ghe
     * const Ghe = await prisma.ghe.delete({
     *   where: {
     *     // ... filter to delete one Ghe
     *   }
     * })
     * 
     */
    delete<T extends GheDeleteArgs>(args: SelectSubset<T, GheDeleteArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ghe.
     * @param {GheUpdateArgs} args - Arguments to update one Ghe.
     * @example
     * // Update one Ghe
     * const ghe = await prisma.ghe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GheUpdateArgs>(args: SelectSubset<T, GheUpdateArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ghes.
     * @param {GheDeleteManyArgs} args - Arguments to filter Ghes to delete.
     * @example
     * // Delete a few Ghes
     * const { count } = await prisma.ghe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GheDeleteManyArgs>(args?: SelectSubset<T, GheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ghes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ghes
     * const ghe = await prisma.ghe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GheUpdateManyArgs>(args: SelectSubset<T, GheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ghe.
     * @param {GheUpsertArgs} args - Arguments to update or create a Ghe.
     * @example
     * // Update or create a Ghe
     * const ghe = await prisma.ghe.upsert({
     *   create: {
     *     // ... data to create a Ghe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ghe we want to update
     *   }
     * })
     */
    upsert<T extends GheUpsertArgs>(args: SelectSubset<T, GheUpsertArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ghes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GheCountArgs} args - Arguments to filter Ghes to count.
     * @example
     * // Count the number of Ghes
     * const count = await prisma.ghe.count({
     *   where: {
     *     // ... the filter for the Ghes we want to count
     *   }
     * })
    **/
    count<T extends GheCountArgs>(
      args?: Subset<T, GheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ghe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GheAggregateArgs>(args: Subset<T, GheAggregateArgs>): Prisma.PrismaPromise<GetGheAggregateType<T>>

    /**
     * Group by Ghe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GheGroupByArgs['orderBy'] }
        : { orderBy?: GheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ghe model
   */
  readonly fields: GheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ghe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DatVe<T extends Ghe$DatVeArgs<ExtArgs> = {}>(args?: Subset<T, Ghe$DatVeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findMany"> | Null>
    RapPhim<T extends Ghe$RapPhimArgs<ExtArgs> = {}>(args?: Subset<T, Ghe$RapPhimArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ghe model
   */ 
  interface GheFieldRefs {
    readonly ma_ghe: FieldRef<"Ghe", 'Int'>
    readonly ten_ghe: FieldRef<"Ghe", 'String'>
    readonly loai_ghe: FieldRef<"Ghe", 'String'>
    readonly ma_rap: FieldRef<"Ghe", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ghe findUnique
   */
  export type GheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * Filter, which Ghe to fetch.
     */
    where: GheWhereUniqueInput
  }

  /**
   * Ghe findUniqueOrThrow
   */
  export type GheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * Filter, which Ghe to fetch.
     */
    where: GheWhereUniqueInput
  }

  /**
   * Ghe findFirst
   */
  export type GheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * Filter, which Ghe to fetch.
     */
    where?: GheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ghes to fetch.
     */
    orderBy?: GheOrderByWithRelationInput | GheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ghes.
     */
    cursor?: GheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ghes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ghes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ghes.
     */
    distinct?: GheScalarFieldEnum | GheScalarFieldEnum[]
  }

  /**
   * Ghe findFirstOrThrow
   */
  export type GheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * Filter, which Ghe to fetch.
     */
    where?: GheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ghes to fetch.
     */
    orderBy?: GheOrderByWithRelationInput | GheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ghes.
     */
    cursor?: GheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ghes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ghes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ghes.
     */
    distinct?: GheScalarFieldEnum | GheScalarFieldEnum[]
  }

  /**
   * Ghe findMany
   */
  export type GheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * Filter, which Ghes to fetch.
     */
    where?: GheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ghes to fetch.
     */
    orderBy?: GheOrderByWithRelationInput | GheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ghes.
     */
    cursor?: GheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ghes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ghes.
     */
    skip?: number
    distinct?: GheScalarFieldEnum | GheScalarFieldEnum[]
  }

  /**
   * Ghe create
   */
  export type GheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * The data needed to create a Ghe.
     */
    data?: XOR<GheCreateInput, GheUncheckedCreateInput>
  }

  /**
   * Ghe createMany
   */
  export type GheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ghes.
     */
    data: GheCreateManyInput | GheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ghe update
   */
  export type GheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * The data needed to update a Ghe.
     */
    data: XOR<GheUpdateInput, GheUncheckedUpdateInput>
    /**
     * Choose, which Ghe to update.
     */
    where: GheWhereUniqueInput
  }

  /**
   * Ghe updateMany
   */
  export type GheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ghes.
     */
    data: XOR<GheUpdateManyMutationInput, GheUncheckedUpdateManyInput>
    /**
     * Filter which Ghes to update
     */
    where?: GheWhereInput
  }

  /**
   * Ghe upsert
   */
  export type GheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * The filter to search for the Ghe to update in case it exists.
     */
    where: GheWhereUniqueInput
    /**
     * In case the Ghe found by the `where` argument doesn't exist, create a new Ghe with this data.
     */
    create: XOR<GheCreateInput, GheUncheckedCreateInput>
    /**
     * In case the Ghe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GheUpdateInput, GheUncheckedUpdateInput>
  }

  /**
   * Ghe delete
   */
  export type GheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * Filter which Ghe to delete.
     */
    where: GheWhereUniqueInput
  }

  /**
   * Ghe deleteMany
   */
  export type GheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ghes to delete
     */
    where?: GheWhereInput
  }

  /**
   * Ghe.DatVe
   */
  export type Ghe$DatVeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    where?: DatVeWhereInput
    orderBy?: DatVeOrderByWithRelationInput | DatVeOrderByWithRelationInput[]
    cursor?: DatVeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatVeScalarFieldEnum | DatVeScalarFieldEnum[]
  }

  /**
   * Ghe.RapPhim
   */
  export type Ghe$RapPhimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    where?: RapPhimWhereInput
  }

  /**
   * Ghe without action
   */
  export type GheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
  }


  /**
   * Model HeThongRap
   */

  export type AggregateHeThongRap = {
    _count: HeThongRapCountAggregateOutputType | null
    _avg: HeThongRapAvgAggregateOutputType | null
    _sum: HeThongRapSumAggregateOutputType | null
    _min: HeThongRapMinAggregateOutputType | null
    _max: HeThongRapMaxAggregateOutputType | null
  }

  export type HeThongRapAvgAggregateOutputType = {
    ma_he_thong_rap: number | null
  }

  export type HeThongRapSumAggregateOutputType = {
    ma_he_thong_rap: number | null
  }

  export type HeThongRapMinAggregateOutputType = {
    ma_he_thong_rap: number | null
    ten_he_thong_rap: string | null
    logo: string | null
  }

  export type HeThongRapMaxAggregateOutputType = {
    ma_he_thong_rap: number | null
    ten_he_thong_rap: string | null
    logo: string | null
  }

  export type HeThongRapCountAggregateOutputType = {
    ma_he_thong_rap: number
    ten_he_thong_rap: number
    logo: number
    _all: number
  }


  export type HeThongRapAvgAggregateInputType = {
    ma_he_thong_rap?: true
  }

  export type HeThongRapSumAggregateInputType = {
    ma_he_thong_rap?: true
  }

  export type HeThongRapMinAggregateInputType = {
    ma_he_thong_rap?: true
    ten_he_thong_rap?: true
    logo?: true
  }

  export type HeThongRapMaxAggregateInputType = {
    ma_he_thong_rap?: true
    ten_he_thong_rap?: true
    logo?: true
  }

  export type HeThongRapCountAggregateInputType = {
    ma_he_thong_rap?: true
    ten_he_thong_rap?: true
    logo?: true
    _all?: true
  }

  export type HeThongRapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeThongRap to aggregate.
     */
    where?: HeThongRapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeThongRaps to fetch.
     */
    orderBy?: HeThongRapOrderByWithRelationInput | HeThongRapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeThongRapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeThongRaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeThongRaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeThongRaps
    **/
    _count?: true | HeThongRapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeThongRapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeThongRapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeThongRapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeThongRapMaxAggregateInputType
  }

  export type GetHeThongRapAggregateType<T extends HeThongRapAggregateArgs> = {
        [P in keyof T & keyof AggregateHeThongRap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeThongRap[P]>
      : GetScalarType<T[P], AggregateHeThongRap[P]>
  }




  export type HeThongRapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeThongRapWhereInput
    orderBy?: HeThongRapOrderByWithAggregationInput | HeThongRapOrderByWithAggregationInput[]
    by: HeThongRapScalarFieldEnum[] | HeThongRapScalarFieldEnum
    having?: HeThongRapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeThongRapCountAggregateInputType | true
    _avg?: HeThongRapAvgAggregateInputType
    _sum?: HeThongRapSumAggregateInputType
    _min?: HeThongRapMinAggregateInputType
    _max?: HeThongRapMaxAggregateInputType
  }

  export type HeThongRapGroupByOutputType = {
    ma_he_thong_rap: number
    ten_he_thong_rap: string | null
    logo: string | null
    _count: HeThongRapCountAggregateOutputType | null
    _avg: HeThongRapAvgAggregateOutputType | null
    _sum: HeThongRapSumAggregateOutputType | null
    _min: HeThongRapMinAggregateOutputType | null
    _max: HeThongRapMaxAggregateOutputType | null
  }

  type GetHeThongRapGroupByPayload<T extends HeThongRapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeThongRapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeThongRapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeThongRapGroupByOutputType[P]>
            : GetScalarType<T[P], HeThongRapGroupByOutputType[P]>
        }
      >
    >


  export type HeThongRapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_he_thong_rap?: boolean
    ten_he_thong_rap?: boolean
    logo?: boolean
    CumRap?: boolean | HeThongRap$CumRapArgs<ExtArgs>
    _count?: boolean | HeThongRapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["heThongRap"]>


  export type HeThongRapSelectScalar = {
    ma_he_thong_rap?: boolean
    ten_he_thong_rap?: boolean
    logo?: boolean
  }

  export type HeThongRapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CumRap?: boolean | HeThongRap$CumRapArgs<ExtArgs>
    _count?: boolean | HeThongRapCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HeThongRapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HeThongRap"
    objects: {
      CumRap: Prisma.$CumRapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_he_thong_rap: number
      ten_he_thong_rap: string | null
      logo: string | null
    }, ExtArgs["result"]["heThongRap"]>
    composites: {}
  }

  type HeThongRapGetPayload<S extends boolean | null | undefined | HeThongRapDefaultArgs> = $Result.GetResult<Prisma.$HeThongRapPayload, S>

  type HeThongRapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HeThongRapFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HeThongRapCountAggregateInputType | true
    }

  export interface HeThongRapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HeThongRap'], meta: { name: 'HeThongRap' } }
    /**
     * Find zero or one HeThongRap that matches the filter.
     * @param {HeThongRapFindUniqueArgs} args - Arguments to find a HeThongRap
     * @example
     * // Get one HeThongRap
     * const heThongRap = await prisma.heThongRap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeThongRapFindUniqueArgs>(args: SelectSubset<T, HeThongRapFindUniqueArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one HeThongRap that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HeThongRapFindUniqueOrThrowArgs} args - Arguments to find a HeThongRap
     * @example
     * // Get one HeThongRap
     * const heThongRap = await prisma.heThongRap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeThongRapFindUniqueOrThrowArgs>(args: SelectSubset<T, HeThongRapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first HeThongRap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeThongRapFindFirstArgs} args - Arguments to find a HeThongRap
     * @example
     * // Get one HeThongRap
     * const heThongRap = await prisma.heThongRap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeThongRapFindFirstArgs>(args?: SelectSubset<T, HeThongRapFindFirstArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first HeThongRap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeThongRapFindFirstOrThrowArgs} args - Arguments to find a HeThongRap
     * @example
     * // Get one HeThongRap
     * const heThongRap = await prisma.heThongRap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeThongRapFindFirstOrThrowArgs>(args?: SelectSubset<T, HeThongRapFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more HeThongRaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeThongRapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeThongRaps
     * const heThongRaps = await prisma.heThongRap.findMany()
     * 
     * // Get first 10 HeThongRaps
     * const heThongRaps = await prisma.heThongRap.findMany({ take: 10 })
     * 
     * // Only select the `ma_he_thong_rap`
     * const heThongRapWithMa_he_thong_rapOnly = await prisma.heThongRap.findMany({ select: { ma_he_thong_rap: true } })
     * 
     */
    findMany<T extends HeThongRapFindManyArgs>(args?: SelectSubset<T, HeThongRapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a HeThongRap.
     * @param {HeThongRapCreateArgs} args - Arguments to create a HeThongRap.
     * @example
     * // Create one HeThongRap
     * const HeThongRap = await prisma.heThongRap.create({
     *   data: {
     *     // ... data to create a HeThongRap
     *   }
     * })
     * 
     */
    create<T extends HeThongRapCreateArgs>(args: SelectSubset<T, HeThongRapCreateArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many HeThongRaps.
     * @param {HeThongRapCreateManyArgs} args - Arguments to create many HeThongRaps.
     * @example
     * // Create many HeThongRaps
     * const heThongRap = await prisma.heThongRap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeThongRapCreateManyArgs>(args?: SelectSubset<T, HeThongRapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HeThongRap.
     * @param {HeThongRapDeleteArgs} args - Arguments to delete one HeThongRap.
     * @example
     * // Delete one HeThongRap
     * const HeThongRap = await prisma.heThongRap.delete({
     *   where: {
     *     // ... filter to delete one HeThongRap
     *   }
     * })
     * 
     */
    delete<T extends HeThongRapDeleteArgs>(args: SelectSubset<T, HeThongRapDeleteArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one HeThongRap.
     * @param {HeThongRapUpdateArgs} args - Arguments to update one HeThongRap.
     * @example
     * // Update one HeThongRap
     * const heThongRap = await prisma.heThongRap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeThongRapUpdateArgs>(args: SelectSubset<T, HeThongRapUpdateArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more HeThongRaps.
     * @param {HeThongRapDeleteManyArgs} args - Arguments to filter HeThongRaps to delete.
     * @example
     * // Delete a few HeThongRaps
     * const { count } = await prisma.heThongRap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeThongRapDeleteManyArgs>(args?: SelectSubset<T, HeThongRapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeThongRaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeThongRapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeThongRaps
     * const heThongRap = await prisma.heThongRap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeThongRapUpdateManyArgs>(args: SelectSubset<T, HeThongRapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HeThongRap.
     * @param {HeThongRapUpsertArgs} args - Arguments to update or create a HeThongRap.
     * @example
     * // Update or create a HeThongRap
     * const heThongRap = await prisma.heThongRap.upsert({
     *   create: {
     *     // ... data to create a HeThongRap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeThongRap we want to update
     *   }
     * })
     */
    upsert<T extends HeThongRapUpsertArgs>(args: SelectSubset<T, HeThongRapUpsertArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of HeThongRaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeThongRapCountArgs} args - Arguments to filter HeThongRaps to count.
     * @example
     * // Count the number of HeThongRaps
     * const count = await prisma.heThongRap.count({
     *   where: {
     *     // ... the filter for the HeThongRaps we want to count
     *   }
     * })
    **/
    count<T extends HeThongRapCountArgs>(
      args?: Subset<T, HeThongRapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeThongRapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeThongRap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeThongRapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HeThongRapAggregateArgs>(args: Subset<T, HeThongRapAggregateArgs>): Prisma.PrismaPromise<GetHeThongRapAggregateType<T>>

    /**
     * Group by HeThongRap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeThongRapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HeThongRapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeThongRapGroupByArgs['orderBy'] }
        : { orderBy?: HeThongRapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HeThongRapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeThongRapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HeThongRap model
   */
  readonly fields: HeThongRapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HeThongRap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeThongRapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CumRap<T extends HeThongRap$CumRapArgs<ExtArgs> = {}>(args?: Subset<T, HeThongRap$CumRapArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HeThongRap model
   */ 
  interface HeThongRapFieldRefs {
    readonly ma_he_thong_rap: FieldRef<"HeThongRap", 'Int'>
    readonly ten_he_thong_rap: FieldRef<"HeThongRap", 'String'>
    readonly logo: FieldRef<"HeThongRap", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HeThongRap findUnique
   */
  export type HeThongRapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * Filter, which HeThongRap to fetch.
     */
    where: HeThongRapWhereUniqueInput
  }

  /**
   * HeThongRap findUniqueOrThrow
   */
  export type HeThongRapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * Filter, which HeThongRap to fetch.
     */
    where: HeThongRapWhereUniqueInput
  }

  /**
   * HeThongRap findFirst
   */
  export type HeThongRapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * Filter, which HeThongRap to fetch.
     */
    where?: HeThongRapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeThongRaps to fetch.
     */
    orderBy?: HeThongRapOrderByWithRelationInput | HeThongRapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeThongRaps.
     */
    cursor?: HeThongRapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeThongRaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeThongRaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeThongRaps.
     */
    distinct?: HeThongRapScalarFieldEnum | HeThongRapScalarFieldEnum[]
  }

  /**
   * HeThongRap findFirstOrThrow
   */
  export type HeThongRapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * Filter, which HeThongRap to fetch.
     */
    where?: HeThongRapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeThongRaps to fetch.
     */
    orderBy?: HeThongRapOrderByWithRelationInput | HeThongRapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeThongRaps.
     */
    cursor?: HeThongRapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeThongRaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeThongRaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeThongRaps.
     */
    distinct?: HeThongRapScalarFieldEnum | HeThongRapScalarFieldEnum[]
  }

  /**
   * HeThongRap findMany
   */
  export type HeThongRapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * Filter, which HeThongRaps to fetch.
     */
    where?: HeThongRapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeThongRaps to fetch.
     */
    orderBy?: HeThongRapOrderByWithRelationInput | HeThongRapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeThongRaps.
     */
    cursor?: HeThongRapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeThongRaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeThongRaps.
     */
    skip?: number
    distinct?: HeThongRapScalarFieldEnum | HeThongRapScalarFieldEnum[]
  }

  /**
   * HeThongRap create
   */
  export type HeThongRapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * The data needed to create a HeThongRap.
     */
    data?: XOR<HeThongRapCreateInput, HeThongRapUncheckedCreateInput>
  }

  /**
   * HeThongRap createMany
   */
  export type HeThongRapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HeThongRaps.
     */
    data: HeThongRapCreateManyInput | HeThongRapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HeThongRap update
   */
  export type HeThongRapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * The data needed to update a HeThongRap.
     */
    data: XOR<HeThongRapUpdateInput, HeThongRapUncheckedUpdateInput>
    /**
     * Choose, which HeThongRap to update.
     */
    where: HeThongRapWhereUniqueInput
  }

  /**
   * HeThongRap updateMany
   */
  export type HeThongRapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HeThongRaps.
     */
    data: XOR<HeThongRapUpdateManyMutationInput, HeThongRapUncheckedUpdateManyInput>
    /**
     * Filter which HeThongRaps to update
     */
    where?: HeThongRapWhereInput
  }

  /**
   * HeThongRap upsert
   */
  export type HeThongRapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * The filter to search for the HeThongRap to update in case it exists.
     */
    where: HeThongRapWhereUniqueInput
    /**
     * In case the HeThongRap found by the `where` argument doesn't exist, create a new HeThongRap with this data.
     */
    create: XOR<HeThongRapCreateInput, HeThongRapUncheckedCreateInput>
    /**
     * In case the HeThongRap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeThongRapUpdateInput, HeThongRapUncheckedUpdateInput>
  }

  /**
   * HeThongRap delete
   */
  export type HeThongRapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * Filter which HeThongRap to delete.
     */
    where: HeThongRapWhereUniqueInput
  }

  /**
   * HeThongRap deleteMany
   */
  export type HeThongRapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeThongRaps to delete
     */
    where?: HeThongRapWhereInput
  }

  /**
   * HeThongRap.CumRap
   */
  export type HeThongRap$CumRapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    where?: CumRapWhereInput
    orderBy?: CumRapOrderByWithRelationInput | CumRapOrderByWithRelationInput[]
    cursor?: CumRapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CumRapScalarFieldEnum | CumRapScalarFieldEnum[]
  }

  /**
   * HeThongRap without action
   */
  export type HeThongRapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
  }


  /**
   * Model LichChieu
   */

  export type AggregateLichChieu = {
    _count: LichChieuCountAggregateOutputType | null
    _avg: LichChieuAvgAggregateOutputType | null
    _sum: LichChieuSumAggregateOutputType | null
    _min: LichChieuMinAggregateOutputType | null
    _max: LichChieuMaxAggregateOutputType | null
  }

  export type LichChieuAvgAggregateOutputType = {
    ma_lich_chieu: number | null
    ma_rap: number | null
    ma_phim: number | null
    gia_ve: number | null
  }

  export type LichChieuSumAggregateOutputType = {
    ma_lich_chieu: number | null
    ma_rap: number | null
    ma_phim: number | null
    gia_ve: number | null
  }

  export type LichChieuMinAggregateOutputType = {
    ma_lich_chieu: number | null
    ma_rap: number | null
    ma_phim: number | null
    ngay_gio_chieu: Date | null
    gia_ve: number | null
  }

  export type LichChieuMaxAggregateOutputType = {
    ma_lich_chieu: number | null
    ma_rap: number | null
    ma_phim: number | null
    ngay_gio_chieu: Date | null
    gia_ve: number | null
  }

  export type LichChieuCountAggregateOutputType = {
    ma_lich_chieu: number
    ma_rap: number
    ma_phim: number
    ngay_gio_chieu: number
    gia_ve: number
    _all: number
  }


  export type LichChieuAvgAggregateInputType = {
    ma_lich_chieu?: true
    ma_rap?: true
    ma_phim?: true
    gia_ve?: true
  }

  export type LichChieuSumAggregateInputType = {
    ma_lich_chieu?: true
    ma_rap?: true
    ma_phim?: true
    gia_ve?: true
  }

  export type LichChieuMinAggregateInputType = {
    ma_lich_chieu?: true
    ma_rap?: true
    ma_phim?: true
    ngay_gio_chieu?: true
    gia_ve?: true
  }

  export type LichChieuMaxAggregateInputType = {
    ma_lich_chieu?: true
    ma_rap?: true
    ma_phim?: true
    ngay_gio_chieu?: true
    gia_ve?: true
  }

  export type LichChieuCountAggregateInputType = {
    ma_lich_chieu?: true
    ma_rap?: true
    ma_phim?: true
    ngay_gio_chieu?: true
    gia_ve?: true
    _all?: true
  }

  export type LichChieuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LichChieu to aggregate.
     */
    where?: LichChieuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LichChieus to fetch.
     */
    orderBy?: LichChieuOrderByWithRelationInput | LichChieuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LichChieuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LichChieus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LichChieus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LichChieus
    **/
    _count?: true | LichChieuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LichChieuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LichChieuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LichChieuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LichChieuMaxAggregateInputType
  }

  export type GetLichChieuAggregateType<T extends LichChieuAggregateArgs> = {
        [P in keyof T & keyof AggregateLichChieu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLichChieu[P]>
      : GetScalarType<T[P], AggregateLichChieu[P]>
  }




  export type LichChieuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LichChieuWhereInput
    orderBy?: LichChieuOrderByWithAggregationInput | LichChieuOrderByWithAggregationInput[]
    by: LichChieuScalarFieldEnum[] | LichChieuScalarFieldEnum
    having?: LichChieuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LichChieuCountAggregateInputType | true
    _avg?: LichChieuAvgAggregateInputType
    _sum?: LichChieuSumAggregateInputType
    _min?: LichChieuMinAggregateInputType
    _max?: LichChieuMaxAggregateInputType
  }

  export type LichChieuGroupByOutputType = {
    ma_lich_chieu: number
    ma_rap: number | null
    ma_phim: number | null
    ngay_gio_chieu: Date | null
    gia_ve: number | null
    _count: LichChieuCountAggregateOutputType | null
    _avg: LichChieuAvgAggregateOutputType | null
    _sum: LichChieuSumAggregateOutputType | null
    _min: LichChieuMinAggregateOutputType | null
    _max: LichChieuMaxAggregateOutputType | null
  }

  type GetLichChieuGroupByPayload<T extends LichChieuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LichChieuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LichChieuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LichChieuGroupByOutputType[P]>
            : GetScalarType<T[P], LichChieuGroupByOutputType[P]>
        }
      >
    >


  export type LichChieuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_lich_chieu?: boolean
    ma_rap?: boolean
    ma_phim?: boolean
    ngay_gio_chieu?: boolean
    gia_ve?: boolean
    DatVe?: boolean | LichChieu$DatVeArgs<ExtArgs>
    RapPhim?: boolean | LichChieu$RapPhimArgs<ExtArgs>
    Phim?: boolean | LichChieu$PhimArgs<ExtArgs>
    _count?: boolean | LichChieuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lichChieu"]>


  export type LichChieuSelectScalar = {
    ma_lich_chieu?: boolean
    ma_rap?: boolean
    ma_phim?: boolean
    ngay_gio_chieu?: boolean
    gia_ve?: boolean
  }

  export type LichChieuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DatVe?: boolean | LichChieu$DatVeArgs<ExtArgs>
    RapPhim?: boolean | LichChieu$RapPhimArgs<ExtArgs>
    Phim?: boolean | LichChieu$PhimArgs<ExtArgs>
    _count?: boolean | LichChieuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LichChieuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LichChieu"
    objects: {
      DatVe: Prisma.$DatVePayload<ExtArgs>[]
      RapPhim: Prisma.$RapPhimPayload<ExtArgs> | null
      Phim: Prisma.$PhimPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_lich_chieu: number
      ma_rap: number | null
      ma_phim: number | null
      ngay_gio_chieu: Date | null
      gia_ve: number | null
    }, ExtArgs["result"]["lichChieu"]>
    composites: {}
  }

  type LichChieuGetPayload<S extends boolean | null | undefined | LichChieuDefaultArgs> = $Result.GetResult<Prisma.$LichChieuPayload, S>

  type LichChieuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LichChieuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LichChieuCountAggregateInputType | true
    }

  export interface LichChieuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LichChieu'], meta: { name: 'LichChieu' } }
    /**
     * Find zero or one LichChieu that matches the filter.
     * @param {LichChieuFindUniqueArgs} args - Arguments to find a LichChieu
     * @example
     * // Get one LichChieu
     * const lichChieu = await prisma.lichChieu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LichChieuFindUniqueArgs>(args: SelectSubset<T, LichChieuFindUniqueArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LichChieu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LichChieuFindUniqueOrThrowArgs} args - Arguments to find a LichChieu
     * @example
     * // Get one LichChieu
     * const lichChieu = await prisma.lichChieu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LichChieuFindUniqueOrThrowArgs>(args: SelectSubset<T, LichChieuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LichChieu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichChieuFindFirstArgs} args - Arguments to find a LichChieu
     * @example
     * // Get one LichChieu
     * const lichChieu = await prisma.lichChieu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LichChieuFindFirstArgs>(args?: SelectSubset<T, LichChieuFindFirstArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LichChieu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichChieuFindFirstOrThrowArgs} args - Arguments to find a LichChieu
     * @example
     * // Get one LichChieu
     * const lichChieu = await prisma.lichChieu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LichChieuFindFirstOrThrowArgs>(args?: SelectSubset<T, LichChieuFindFirstOrThrowArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LichChieus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichChieuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LichChieus
     * const lichChieus = await prisma.lichChieu.findMany()
     * 
     * // Get first 10 LichChieus
     * const lichChieus = await prisma.lichChieu.findMany({ take: 10 })
     * 
     * // Only select the `ma_lich_chieu`
     * const lichChieuWithMa_lich_chieuOnly = await prisma.lichChieu.findMany({ select: { ma_lich_chieu: true } })
     * 
     */
    findMany<T extends LichChieuFindManyArgs>(args?: SelectSubset<T, LichChieuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LichChieu.
     * @param {LichChieuCreateArgs} args - Arguments to create a LichChieu.
     * @example
     * // Create one LichChieu
     * const LichChieu = await prisma.lichChieu.create({
     *   data: {
     *     // ... data to create a LichChieu
     *   }
     * })
     * 
     */
    create<T extends LichChieuCreateArgs>(args: SelectSubset<T, LichChieuCreateArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LichChieus.
     * @param {LichChieuCreateManyArgs} args - Arguments to create many LichChieus.
     * @example
     * // Create many LichChieus
     * const lichChieu = await prisma.lichChieu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LichChieuCreateManyArgs>(args?: SelectSubset<T, LichChieuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LichChieu.
     * @param {LichChieuDeleteArgs} args - Arguments to delete one LichChieu.
     * @example
     * // Delete one LichChieu
     * const LichChieu = await prisma.lichChieu.delete({
     *   where: {
     *     // ... filter to delete one LichChieu
     *   }
     * })
     * 
     */
    delete<T extends LichChieuDeleteArgs>(args: SelectSubset<T, LichChieuDeleteArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LichChieu.
     * @param {LichChieuUpdateArgs} args - Arguments to update one LichChieu.
     * @example
     * // Update one LichChieu
     * const lichChieu = await prisma.lichChieu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LichChieuUpdateArgs>(args: SelectSubset<T, LichChieuUpdateArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LichChieus.
     * @param {LichChieuDeleteManyArgs} args - Arguments to filter LichChieus to delete.
     * @example
     * // Delete a few LichChieus
     * const { count } = await prisma.lichChieu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LichChieuDeleteManyArgs>(args?: SelectSubset<T, LichChieuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LichChieus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichChieuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LichChieus
     * const lichChieu = await prisma.lichChieu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LichChieuUpdateManyArgs>(args: SelectSubset<T, LichChieuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LichChieu.
     * @param {LichChieuUpsertArgs} args - Arguments to update or create a LichChieu.
     * @example
     * // Update or create a LichChieu
     * const lichChieu = await prisma.lichChieu.upsert({
     *   create: {
     *     // ... data to create a LichChieu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LichChieu we want to update
     *   }
     * })
     */
    upsert<T extends LichChieuUpsertArgs>(args: SelectSubset<T, LichChieuUpsertArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LichChieus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichChieuCountArgs} args - Arguments to filter LichChieus to count.
     * @example
     * // Count the number of LichChieus
     * const count = await prisma.lichChieu.count({
     *   where: {
     *     // ... the filter for the LichChieus we want to count
     *   }
     * })
    **/
    count<T extends LichChieuCountArgs>(
      args?: Subset<T, LichChieuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LichChieuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LichChieu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichChieuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LichChieuAggregateArgs>(args: Subset<T, LichChieuAggregateArgs>): Prisma.PrismaPromise<GetLichChieuAggregateType<T>>

    /**
     * Group by LichChieu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichChieuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LichChieuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LichChieuGroupByArgs['orderBy'] }
        : { orderBy?: LichChieuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LichChieuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLichChieuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LichChieu model
   */
  readonly fields: LichChieuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LichChieu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LichChieuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DatVe<T extends LichChieu$DatVeArgs<ExtArgs> = {}>(args?: Subset<T, LichChieu$DatVeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findMany"> | Null>
    RapPhim<T extends LichChieu$RapPhimArgs<ExtArgs> = {}>(args?: Subset<T, LichChieu$RapPhimArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Phim<T extends LichChieu$PhimArgs<ExtArgs> = {}>(args?: Subset<T, LichChieu$PhimArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LichChieu model
   */ 
  interface LichChieuFieldRefs {
    readonly ma_lich_chieu: FieldRef<"LichChieu", 'Int'>
    readonly ma_rap: FieldRef<"LichChieu", 'Int'>
    readonly ma_phim: FieldRef<"LichChieu", 'Int'>
    readonly ngay_gio_chieu: FieldRef<"LichChieu", 'DateTime'>
    readonly gia_ve: FieldRef<"LichChieu", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * LichChieu findUnique
   */
  export type LichChieuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * Filter, which LichChieu to fetch.
     */
    where: LichChieuWhereUniqueInput
  }

  /**
   * LichChieu findUniqueOrThrow
   */
  export type LichChieuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * Filter, which LichChieu to fetch.
     */
    where: LichChieuWhereUniqueInput
  }

  /**
   * LichChieu findFirst
   */
  export type LichChieuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * Filter, which LichChieu to fetch.
     */
    where?: LichChieuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LichChieus to fetch.
     */
    orderBy?: LichChieuOrderByWithRelationInput | LichChieuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LichChieus.
     */
    cursor?: LichChieuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LichChieus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LichChieus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LichChieus.
     */
    distinct?: LichChieuScalarFieldEnum | LichChieuScalarFieldEnum[]
  }

  /**
   * LichChieu findFirstOrThrow
   */
  export type LichChieuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * Filter, which LichChieu to fetch.
     */
    where?: LichChieuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LichChieus to fetch.
     */
    orderBy?: LichChieuOrderByWithRelationInput | LichChieuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LichChieus.
     */
    cursor?: LichChieuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LichChieus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LichChieus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LichChieus.
     */
    distinct?: LichChieuScalarFieldEnum | LichChieuScalarFieldEnum[]
  }

  /**
   * LichChieu findMany
   */
  export type LichChieuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * Filter, which LichChieus to fetch.
     */
    where?: LichChieuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LichChieus to fetch.
     */
    orderBy?: LichChieuOrderByWithRelationInput | LichChieuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LichChieus.
     */
    cursor?: LichChieuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LichChieus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LichChieus.
     */
    skip?: number
    distinct?: LichChieuScalarFieldEnum | LichChieuScalarFieldEnum[]
  }

  /**
   * LichChieu create
   */
  export type LichChieuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * The data needed to create a LichChieu.
     */
    data?: XOR<LichChieuCreateInput, LichChieuUncheckedCreateInput>
  }

  /**
   * LichChieu createMany
   */
  export type LichChieuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LichChieus.
     */
    data: LichChieuCreateManyInput | LichChieuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LichChieu update
   */
  export type LichChieuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * The data needed to update a LichChieu.
     */
    data: XOR<LichChieuUpdateInput, LichChieuUncheckedUpdateInput>
    /**
     * Choose, which LichChieu to update.
     */
    where: LichChieuWhereUniqueInput
  }

  /**
   * LichChieu updateMany
   */
  export type LichChieuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LichChieus.
     */
    data: XOR<LichChieuUpdateManyMutationInput, LichChieuUncheckedUpdateManyInput>
    /**
     * Filter which LichChieus to update
     */
    where?: LichChieuWhereInput
  }

  /**
   * LichChieu upsert
   */
  export type LichChieuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * The filter to search for the LichChieu to update in case it exists.
     */
    where: LichChieuWhereUniqueInput
    /**
     * In case the LichChieu found by the `where` argument doesn't exist, create a new LichChieu with this data.
     */
    create: XOR<LichChieuCreateInput, LichChieuUncheckedCreateInput>
    /**
     * In case the LichChieu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LichChieuUpdateInput, LichChieuUncheckedUpdateInput>
  }

  /**
   * LichChieu delete
   */
  export type LichChieuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * Filter which LichChieu to delete.
     */
    where: LichChieuWhereUniqueInput
  }

  /**
   * LichChieu deleteMany
   */
  export type LichChieuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LichChieus to delete
     */
    where?: LichChieuWhereInput
  }

  /**
   * LichChieu.DatVe
   */
  export type LichChieu$DatVeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    where?: DatVeWhereInput
    orderBy?: DatVeOrderByWithRelationInput | DatVeOrderByWithRelationInput[]
    cursor?: DatVeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatVeScalarFieldEnum | DatVeScalarFieldEnum[]
  }

  /**
   * LichChieu.RapPhim
   */
  export type LichChieu$RapPhimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    where?: RapPhimWhereInput
  }

  /**
   * LichChieu.Phim
   */
  export type LichChieu$PhimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    where?: PhimWhereInput
  }

  /**
   * LichChieu without action
   */
  export type LichChieuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
  }


  /**
   * Model NguoiDung
   */

  export type AggregateNguoiDung = {
    _count: NguoiDungCountAggregateOutputType | null
    _avg: NguoiDungAvgAggregateOutputType | null
    _sum: NguoiDungSumAggregateOutputType | null
    _min: NguoiDungMinAggregateOutputType | null
    _max: NguoiDungMaxAggregateOutputType | null
  }

  export type NguoiDungAvgAggregateOutputType = {
    tai_khoan: number | null
    ma_loai_nguoi_dung: number | null
  }

  export type NguoiDungSumAggregateOutputType = {
    tai_khoan: number | null
    ma_loai_nguoi_dung: number | null
  }

  export type NguoiDungMinAggregateOutputType = {
    tai_khoan: number | null
    ho_ten: string | null
    email: string | null
    so_dt: string | null
    mat_khau: string | null
    ma_loai_nguoi_dung: number | null
  }

  export type NguoiDungMaxAggregateOutputType = {
    tai_khoan: number | null
    ho_ten: string | null
    email: string | null
    so_dt: string | null
    mat_khau: string | null
    ma_loai_nguoi_dung: number | null
  }

  export type NguoiDungCountAggregateOutputType = {
    tai_khoan: number
    ho_ten: number
    email: number
    so_dt: number
    mat_khau: number
    ma_loai_nguoi_dung: number
    _all: number
  }


  export type NguoiDungAvgAggregateInputType = {
    tai_khoan?: true
    ma_loai_nguoi_dung?: true
  }

  export type NguoiDungSumAggregateInputType = {
    tai_khoan?: true
    ma_loai_nguoi_dung?: true
  }

  export type NguoiDungMinAggregateInputType = {
    tai_khoan?: true
    ho_ten?: true
    email?: true
    so_dt?: true
    mat_khau?: true
    ma_loai_nguoi_dung?: true
  }

  export type NguoiDungMaxAggregateInputType = {
    tai_khoan?: true
    ho_ten?: true
    email?: true
    so_dt?: true
    mat_khau?: true
    ma_loai_nguoi_dung?: true
  }

  export type NguoiDungCountAggregateInputType = {
    tai_khoan?: true
    ho_ten?: true
    email?: true
    so_dt?: true
    mat_khau?: true
    ma_loai_nguoi_dung?: true
    _all?: true
  }

  export type NguoiDungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NguoiDung to aggregate.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NguoiDungs
    **/
    _count?: true | NguoiDungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NguoiDungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NguoiDungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NguoiDungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NguoiDungMaxAggregateInputType
  }

  export type GetNguoiDungAggregateType<T extends NguoiDungAggregateArgs> = {
        [P in keyof T & keyof AggregateNguoiDung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNguoiDung[P]>
      : GetScalarType<T[P], AggregateNguoiDung[P]>
  }




  export type NguoiDungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NguoiDungWhereInput
    orderBy?: NguoiDungOrderByWithAggregationInput | NguoiDungOrderByWithAggregationInput[]
    by: NguoiDungScalarFieldEnum[] | NguoiDungScalarFieldEnum
    having?: NguoiDungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NguoiDungCountAggregateInputType | true
    _avg?: NguoiDungAvgAggregateInputType
    _sum?: NguoiDungSumAggregateInputType
    _min?: NguoiDungMinAggregateInputType
    _max?: NguoiDungMaxAggregateInputType
  }

  export type NguoiDungGroupByOutputType = {
    tai_khoan: number
    ho_ten: string | null
    email: string | null
    so_dt: string | null
    mat_khau: string | null
    ma_loai_nguoi_dung: number
    _count: NguoiDungCountAggregateOutputType | null
    _avg: NguoiDungAvgAggregateOutputType | null
    _sum: NguoiDungSumAggregateOutputType | null
    _min: NguoiDungMinAggregateOutputType | null
    _max: NguoiDungMaxAggregateOutputType | null
  }

  type GetNguoiDungGroupByPayload<T extends NguoiDungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NguoiDungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NguoiDungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NguoiDungGroupByOutputType[P]>
            : GetScalarType<T[P], NguoiDungGroupByOutputType[P]>
        }
      >
    >


  export type NguoiDungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tai_khoan?: boolean
    ho_ten?: boolean
    email?: boolean
    so_dt?: boolean
    mat_khau?: boolean
    ma_loai_nguoi_dung?: boolean
    DatVe?: boolean | NguoiDung$DatVeArgs<ExtArgs>
    LoaiNguoiDung?: boolean | LoaiNguoiDungDefaultArgs<ExtArgs>
    _count?: boolean | NguoiDungCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nguoiDung"]>


  export type NguoiDungSelectScalar = {
    tai_khoan?: boolean
    ho_ten?: boolean
    email?: boolean
    so_dt?: boolean
    mat_khau?: boolean
    ma_loai_nguoi_dung?: boolean
  }

  export type NguoiDungInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DatVe?: boolean | NguoiDung$DatVeArgs<ExtArgs>
    LoaiNguoiDung?: boolean | LoaiNguoiDungDefaultArgs<ExtArgs>
    _count?: boolean | NguoiDungCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $NguoiDungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NguoiDung"
    objects: {
      DatVe: Prisma.$DatVePayload<ExtArgs>[]
      LoaiNguoiDung: Prisma.$LoaiNguoiDungPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tai_khoan: number
      ho_ten: string | null
      email: string | null
      so_dt: string | null
      mat_khau: string | null
      ma_loai_nguoi_dung: number
    }, ExtArgs["result"]["nguoiDung"]>
    composites: {}
  }

  type NguoiDungGetPayload<S extends boolean | null | undefined | NguoiDungDefaultArgs> = $Result.GetResult<Prisma.$NguoiDungPayload, S>

  type NguoiDungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NguoiDungFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NguoiDungCountAggregateInputType | true
    }

  export interface NguoiDungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NguoiDung'], meta: { name: 'NguoiDung' } }
    /**
     * Find zero or one NguoiDung that matches the filter.
     * @param {NguoiDungFindUniqueArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NguoiDungFindUniqueArgs>(args: SelectSubset<T, NguoiDungFindUniqueArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NguoiDung that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NguoiDungFindUniqueOrThrowArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NguoiDungFindUniqueOrThrowArgs>(args: SelectSubset<T, NguoiDungFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NguoiDung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungFindFirstArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NguoiDungFindFirstArgs>(args?: SelectSubset<T, NguoiDungFindFirstArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NguoiDung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungFindFirstOrThrowArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NguoiDungFindFirstOrThrowArgs>(args?: SelectSubset<T, NguoiDungFindFirstOrThrowArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NguoiDungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NguoiDungs
     * const nguoiDungs = await prisma.nguoiDung.findMany()
     * 
     * // Get first 10 NguoiDungs
     * const nguoiDungs = await prisma.nguoiDung.findMany({ take: 10 })
     * 
     * // Only select the `tai_khoan`
     * const nguoiDungWithTai_khoanOnly = await prisma.nguoiDung.findMany({ select: { tai_khoan: true } })
     * 
     */
    findMany<T extends NguoiDungFindManyArgs>(args?: SelectSubset<T, NguoiDungFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NguoiDung.
     * @param {NguoiDungCreateArgs} args - Arguments to create a NguoiDung.
     * @example
     * // Create one NguoiDung
     * const NguoiDung = await prisma.nguoiDung.create({
     *   data: {
     *     // ... data to create a NguoiDung
     *   }
     * })
     * 
     */
    create<T extends NguoiDungCreateArgs>(args: SelectSubset<T, NguoiDungCreateArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NguoiDungs.
     * @param {NguoiDungCreateManyArgs} args - Arguments to create many NguoiDungs.
     * @example
     * // Create many NguoiDungs
     * const nguoiDung = await prisma.nguoiDung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NguoiDungCreateManyArgs>(args?: SelectSubset<T, NguoiDungCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NguoiDung.
     * @param {NguoiDungDeleteArgs} args - Arguments to delete one NguoiDung.
     * @example
     * // Delete one NguoiDung
     * const NguoiDung = await prisma.nguoiDung.delete({
     *   where: {
     *     // ... filter to delete one NguoiDung
     *   }
     * })
     * 
     */
    delete<T extends NguoiDungDeleteArgs>(args: SelectSubset<T, NguoiDungDeleteArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NguoiDung.
     * @param {NguoiDungUpdateArgs} args - Arguments to update one NguoiDung.
     * @example
     * // Update one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NguoiDungUpdateArgs>(args: SelectSubset<T, NguoiDungUpdateArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NguoiDungs.
     * @param {NguoiDungDeleteManyArgs} args - Arguments to filter NguoiDungs to delete.
     * @example
     * // Delete a few NguoiDungs
     * const { count } = await prisma.nguoiDung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NguoiDungDeleteManyArgs>(args?: SelectSubset<T, NguoiDungDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NguoiDungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NguoiDungs
     * const nguoiDung = await prisma.nguoiDung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NguoiDungUpdateManyArgs>(args: SelectSubset<T, NguoiDungUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NguoiDung.
     * @param {NguoiDungUpsertArgs} args - Arguments to update or create a NguoiDung.
     * @example
     * // Update or create a NguoiDung
     * const nguoiDung = await prisma.nguoiDung.upsert({
     *   create: {
     *     // ... data to create a NguoiDung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NguoiDung we want to update
     *   }
     * })
     */
    upsert<T extends NguoiDungUpsertArgs>(args: SelectSubset<T, NguoiDungUpsertArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NguoiDungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungCountArgs} args - Arguments to filter NguoiDungs to count.
     * @example
     * // Count the number of NguoiDungs
     * const count = await prisma.nguoiDung.count({
     *   where: {
     *     // ... the filter for the NguoiDungs we want to count
     *   }
     * })
    **/
    count<T extends NguoiDungCountArgs>(
      args?: Subset<T, NguoiDungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NguoiDungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NguoiDung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NguoiDungAggregateArgs>(args: Subset<T, NguoiDungAggregateArgs>): Prisma.PrismaPromise<GetNguoiDungAggregateType<T>>

    /**
     * Group by NguoiDung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NguoiDungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NguoiDungGroupByArgs['orderBy'] }
        : { orderBy?: NguoiDungGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NguoiDungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNguoiDungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NguoiDung model
   */
  readonly fields: NguoiDungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NguoiDung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NguoiDungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DatVe<T extends NguoiDung$DatVeArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDung$DatVeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findMany"> | Null>
    LoaiNguoiDung<T extends LoaiNguoiDungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoaiNguoiDungDefaultArgs<ExtArgs>>): Prisma__LoaiNguoiDungClient<$Result.GetResult<Prisma.$LoaiNguoiDungPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NguoiDung model
   */ 
  interface NguoiDungFieldRefs {
    readonly tai_khoan: FieldRef<"NguoiDung", 'Int'>
    readonly ho_ten: FieldRef<"NguoiDung", 'String'>
    readonly email: FieldRef<"NguoiDung", 'String'>
    readonly so_dt: FieldRef<"NguoiDung", 'String'>
    readonly mat_khau: FieldRef<"NguoiDung", 'String'>
    readonly ma_loai_nguoi_dung: FieldRef<"NguoiDung", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NguoiDung findUnique
   */
  export type NguoiDungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where: NguoiDungWhereUniqueInput
  }

  /**
   * NguoiDung findUniqueOrThrow
   */
  export type NguoiDungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where: NguoiDungWhereUniqueInput
  }

  /**
   * NguoiDung findFirst
   */
  export type NguoiDungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NguoiDungs.
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NguoiDungs.
     */
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }

  /**
   * NguoiDung findFirstOrThrow
   */
  export type NguoiDungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NguoiDungs.
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NguoiDungs.
     */
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }

  /**
   * NguoiDung findMany
   */
  export type NguoiDungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDungs to fetch.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NguoiDungs.
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }

  /**
   * NguoiDung create
   */
  export type NguoiDungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * The data needed to create a NguoiDung.
     */
    data: XOR<NguoiDungCreateInput, NguoiDungUncheckedCreateInput>
  }

  /**
   * NguoiDung createMany
   */
  export type NguoiDungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NguoiDungs.
     */
    data: NguoiDungCreateManyInput | NguoiDungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NguoiDung update
   */
  export type NguoiDungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * The data needed to update a NguoiDung.
     */
    data: XOR<NguoiDungUpdateInput, NguoiDungUncheckedUpdateInput>
    /**
     * Choose, which NguoiDung to update.
     */
    where: NguoiDungWhereUniqueInput
  }

  /**
   * NguoiDung updateMany
   */
  export type NguoiDungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NguoiDungs.
     */
    data: XOR<NguoiDungUpdateManyMutationInput, NguoiDungUncheckedUpdateManyInput>
    /**
     * Filter which NguoiDungs to update
     */
    where?: NguoiDungWhereInput
  }

  /**
   * NguoiDung upsert
   */
  export type NguoiDungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * The filter to search for the NguoiDung to update in case it exists.
     */
    where: NguoiDungWhereUniqueInput
    /**
     * In case the NguoiDung found by the `where` argument doesn't exist, create a new NguoiDung with this data.
     */
    create: XOR<NguoiDungCreateInput, NguoiDungUncheckedCreateInput>
    /**
     * In case the NguoiDung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NguoiDungUpdateInput, NguoiDungUncheckedUpdateInput>
  }

  /**
   * NguoiDung delete
   */
  export type NguoiDungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter which NguoiDung to delete.
     */
    where: NguoiDungWhereUniqueInput
  }

  /**
   * NguoiDung deleteMany
   */
  export type NguoiDungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NguoiDungs to delete
     */
    where?: NguoiDungWhereInput
  }

  /**
   * NguoiDung.DatVe
   */
  export type NguoiDung$DatVeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    where?: DatVeWhereInput
    orderBy?: DatVeOrderByWithRelationInput | DatVeOrderByWithRelationInput[]
    cursor?: DatVeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatVeScalarFieldEnum | DatVeScalarFieldEnum[]
  }

  /**
   * NguoiDung without action
   */
  export type NguoiDungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
  }


  /**
   * Model Phim
   */

  export type AggregatePhim = {
    _count: PhimCountAggregateOutputType | null
    _avg: PhimAvgAggregateOutputType | null
    _sum: PhimSumAggregateOutputType | null
    _min: PhimMinAggregateOutputType | null
    _max: PhimMaxAggregateOutputType | null
  }

  export type PhimAvgAggregateOutputType = {
    ma_phim: number | null
    danh_gia: number | null
  }

  export type PhimSumAggregateOutputType = {
    ma_phim: number | null
    danh_gia: number | null
  }

  export type PhimMinAggregateOutputType = {
    ma_phim: number | null
    ten_phim: string | null
    trailer: string | null
    hinh_anh: string | null
    mo_ta: string | null
    ngay_khoi_chieu: Date | null
    danh_gia: number | null
    hot: boolean | null
    dang_chieu: boolean | null
    sap_chieu: boolean | null
  }

  export type PhimMaxAggregateOutputType = {
    ma_phim: number | null
    ten_phim: string | null
    trailer: string | null
    hinh_anh: string | null
    mo_ta: string | null
    ngay_khoi_chieu: Date | null
    danh_gia: number | null
    hot: boolean | null
    dang_chieu: boolean | null
    sap_chieu: boolean | null
  }

  export type PhimCountAggregateOutputType = {
    ma_phim: number
    ten_phim: number
    trailer: number
    hinh_anh: number
    mo_ta: number
    ngay_khoi_chieu: number
    danh_gia: number
    hot: number
    dang_chieu: number
    sap_chieu: number
    _all: number
  }


  export type PhimAvgAggregateInputType = {
    ma_phim?: true
    danh_gia?: true
  }

  export type PhimSumAggregateInputType = {
    ma_phim?: true
    danh_gia?: true
  }

  export type PhimMinAggregateInputType = {
    ma_phim?: true
    ten_phim?: true
    trailer?: true
    hinh_anh?: true
    mo_ta?: true
    ngay_khoi_chieu?: true
    danh_gia?: true
    hot?: true
    dang_chieu?: true
    sap_chieu?: true
  }

  export type PhimMaxAggregateInputType = {
    ma_phim?: true
    ten_phim?: true
    trailer?: true
    hinh_anh?: true
    mo_ta?: true
    ngay_khoi_chieu?: true
    danh_gia?: true
    hot?: true
    dang_chieu?: true
    sap_chieu?: true
  }

  export type PhimCountAggregateInputType = {
    ma_phim?: true
    ten_phim?: true
    trailer?: true
    hinh_anh?: true
    mo_ta?: true
    ngay_khoi_chieu?: true
    danh_gia?: true
    hot?: true
    dang_chieu?: true
    sap_chieu?: true
    _all?: true
  }

  export type PhimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phim to aggregate.
     */
    where?: PhimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phims to fetch.
     */
    orderBy?: PhimOrderByWithRelationInput | PhimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Phims
    **/
    _count?: true | PhimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhimMaxAggregateInputType
  }

  export type GetPhimAggregateType<T extends PhimAggregateArgs> = {
        [P in keyof T & keyof AggregatePhim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhim[P]>
      : GetScalarType<T[P], AggregatePhim[P]>
  }




  export type PhimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhimWhereInput
    orderBy?: PhimOrderByWithAggregationInput | PhimOrderByWithAggregationInput[]
    by: PhimScalarFieldEnum[] | PhimScalarFieldEnum
    having?: PhimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhimCountAggregateInputType | true
    _avg?: PhimAvgAggregateInputType
    _sum?: PhimSumAggregateInputType
    _min?: PhimMinAggregateInputType
    _max?: PhimMaxAggregateInputType
  }

  export type PhimGroupByOutputType = {
    ma_phim: number
    ten_phim: string | null
    trailer: string | null
    hinh_anh: string | null
    mo_ta: string | null
    ngay_khoi_chieu: Date | null
    danh_gia: number | null
    hot: boolean | null
    dang_chieu: boolean | null
    sap_chieu: boolean | null
    _count: PhimCountAggregateOutputType | null
    _avg: PhimAvgAggregateOutputType | null
    _sum: PhimSumAggregateOutputType | null
    _min: PhimMinAggregateOutputType | null
    _max: PhimMaxAggregateOutputType | null
  }

  type GetPhimGroupByPayload<T extends PhimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhimGroupByOutputType[P]>
            : GetScalarType<T[P], PhimGroupByOutputType[P]>
        }
      >
    >


  export type PhimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_phim?: boolean
    ten_phim?: boolean
    trailer?: boolean
    hinh_anh?: boolean
    mo_ta?: boolean
    ngay_khoi_chieu?: boolean
    danh_gia?: boolean
    hot?: boolean
    dang_chieu?: boolean
    sap_chieu?: boolean
    Banner?: boolean | Phim$BannerArgs<ExtArgs>
    LichChieu?: boolean | Phim$LichChieuArgs<ExtArgs>
    _count?: boolean | PhimCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phim"]>


  export type PhimSelectScalar = {
    ma_phim?: boolean
    ten_phim?: boolean
    trailer?: boolean
    hinh_anh?: boolean
    mo_ta?: boolean
    ngay_khoi_chieu?: boolean
    danh_gia?: boolean
    hot?: boolean
    dang_chieu?: boolean
    sap_chieu?: boolean
  }

  export type PhimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Banner?: boolean | Phim$BannerArgs<ExtArgs>
    LichChieu?: boolean | Phim$LichChieuArgs<ExtArgs>
    _count?: boolean | PhimCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PhimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Phim"
    objects: {
      Banner: Prisma.$BannerPayload<ExtArgs>[]
      LichChieu: Prisma.$LichChieuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_phim: number
      ten_phim: string | null
      trailer: string | null
      hinh_anh: string | null
      mo_ta: string | null
      ngay_khoi_chieu: Date | null
      danh_gia: number | null
      hot: boolean | null
      dang_chieu: boolean | null
      sap_chieu: boolean | null
    }, ExtArgs["result"]["phim"]>
    composites: {}
  }

  type PhimGetPayload<S extends boolean | null | undefined | PhimDefaultArgs> = $Result.GetResult<Prisma.$PhimPayload, S>

  type PhimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhimFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhimCountAggregateInputType | true
    }

  export interface PhimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Phim'], meta: { name: 'Phim' } }
    /**
     * Find zero or one Phim that matches the filter.
     * @param {PhimFindUniqueArgs} args - Arguments to find a Phim
     * @example
     * // Get one Phim
     * const phim = await prisma.phim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhimFindUniqueArgs>(args: SelectSubset<T, PhimFindUniqueArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Phim that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PhimFindUniqueOrThrowArgs} args - Arguments to find a Phim
     * @example
     * // Get one Phim
     * const phim = await prisma.phim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhimFindUniqueOrThrowArgs>(args: SelectSubset<T, PhimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Phim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhimFindFirstArgs} args - Arguments to find a Phim
     * @example
     * // Get one Phim
     * const phim = await prisma.phim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhimFindFirstArgs>(args?: SelectSubset<T, PhimFindFirstArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Phim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhimFindFirstOrThrowArgs} args - Arguments to find a Phim
     * @example
     * // Get one Phim
     * const phim = await prisma.phim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhimFindFirstOrThrowArgs>(args?: SelectSubset<T, PhimFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Phims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phims
     * const phims = await prisma.phim.findMany()
     * 
     * // Get first 10 Phims
     * const phims = await prisma.phim.findMany({ take: 10 })
     * 
     * // Only select the `ma_phim`
     * const phimWithMa_phimOnly = await prisma.phim.findMany({ select: { ma_phim: true } })
     * 
     */
    findMany<T extends PhimFindManyArgs>(args?: SelectSubset<T, PhimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Phim.
     * @param {PhimCreateArgs} args - Arguments to create a Phim.
     * @example
     * // Create one Phim
     * const Phim = await prisma.phim.create({
     *   data: {
     *     // ... data to create a Phim
     *   }
     * })
     * 
     */
    create<T extends PhimCreateArgs>(args: SelectSubset<T, PhimCreateArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Phims.
     * @param {PhimCreateManyArgs} args - Arguments to create many Phims.
     * @example
     * // Create many Phims
     * const phim = await prisma.phim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhimCreateManyArgs>(args?: SelectSubset<T, PhimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Phim.
     * @param {PhimDeleteArgs} args - Arguments to delete one Phim.
     * @example
     * // Delete one Phim
     * const Phim = await prisma.phim.delete({
     *   where: {
     *     // ... filter to delete one Phim
     *   }
     * })
     * 
     */
    delete<T extends PhimDeleteArgs>(args: SelectSubset<T, PhimDeleteArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Phim.
     * @param {PhimUpdateArgs} args - Arguments to update one Phim.
     * @example
     * // Update one Phim
     * const phim = await prisma.phim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhimUpdateArgs>(args: SelectSubset<T, PhimUpdateArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Phims.
     * @param {PhimDeleteManyArgs} args - Arguments to filter Phims to delete.
     * @example
     * // Delete a few Phims
     * const { count } = await prisma.phim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhimDeleteManyArgs>(args?: SelectSubset<T, PhimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phims
     * const phim = await prisma.phim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhimUpdateManyArgs>(args: SelectSubset<T, PhimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Phim.
     * @param {PhimUpsertArgs} args - Arguments to update or create a Phim.
     * @example
     * // Update or create a Phim
     * const phim = await prisma.phim.upsert({
     *   create: {
     *     // ... data to create a Phim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phim we want to update
     *   }
     * })
     */
    upsert<T extends PhimUpsertArgs>(args: SelectSubset<T, PhimUpsertArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Phims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhimCountArgs} args - Arguments to filter Phims to count.
     * @example
     * // Count the number of Phims
     * const count = await prisma.phim.count({
     *   where: {
     *     // ... the filter for the Phims we want to count
     *   }
     * })
    **/
    count<T extends PhimCountArgs>(
      args?: Subset<T, PhimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhimAggregateArgs>(args: Subset<T, PhimAggregateArgs>): Prisma.PrismaPromise<GetPhimAggregateType<T>>

    /**
     * Group by Phim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhimGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhimGroupByArgs['orderBy'] }
        : { orderBy?: PhimGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Phim model
   */
  readonly fields: PhimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Phim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Banner<T extends Phim$BannerArgs<ExtArgs> = {}>(args?: Subset<T, Phim$BannerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany"> | Null>
    LichChieu<T extends Phim$LichChieuArgs<ExtArgs> = {}>(args?: Subset<T, Phim$LichChieuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Phim model
   */ 
  interface PhimFieldRefs {
    readonly ma_phim: FieldRef<"Phim", 'Int'>
    readonly ten_phim: FieldRef<"Phim", 'String'>
    readonly trailer: FieldRef<"Phim", 'String'>
    readonly hinh_anh: FieldRef<"Phim", 'String'>
    readonly mo_ta: FieldRef<"Phim", 'String'>
    readonly ngay_khoi_chieu: FieldRef<"Phim", 'DateTime'>
    readonly danh_gia: FieldRef<"Phim", 'Int'>
    readonly hot: FieldRef<"Phim", 'Boolean'>
    readonly dang_chieu: FieldRef<"Phim", 'Boolean'>
    readonly sap_chieu: FieldRef<"Phim", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Phim findUnique
   */
  export type PhimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * Filter, which Phim to fetch.
     */
    where: PhimWhereUniqueInput
  }

  /**
   * Phim findUniqueOrThrow
   */
  export type PhimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * Filter, which Phim to fetch.
     */
    where: PhimWhereUniqueInput
  }

  /**
   * Phim findFirst
   */
  export type PhimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * Filter, which Phim to fetch.
     */
    where?: PhimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phims to fetch.
     */
    orderBy?: PhimOrderByWithRelationInput | PhimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phims.
     */
    cursor?: PhimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phims.
     */
    distinct?: PhimScalarFieldEnum | PhimScalarFieldEnum[]
  }

  /**
   * Phim findFirstOrThrow
   */
  export type PhimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * Filter, which Phim to fetch.
     */
    where?: PhimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phims to fetch.
     */
    orderBy?: PhimOrderByWithRelationInput | PhimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phims.
     */
    cursor?: PhimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phims.
     */
    distinct?: PhimScalarFieldEnum | PhimScalarFieldEnum[]
  }

  /**
   * Phim findMany
   */
  export type PhimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * Filter, which Phims to fetch.
     */
    where?: PhimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phims to fetch.
     */
    orderBy?: PhimOrderByWithRelationInput | PhimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Phims.
     */
    cursor?: PhimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phims.
     */
    skip?: number
    distinct?: PhimScalarFieldEnum | PhimScalarFieldEnum[]
  }

  /**
   * Phim create
   */
  export type PhimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * The data needed to create a Phim.
     */
    data?: XOR<PhimCreateInput, PhimUncheckedCreateInput>
  }

  /**
   * Phim createMany
   */
  export type PhimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Phims.
     */
    data: PhimCreateManyInput | PhimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Phim update
   */
  export type PhimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * The data needed to update a Phim.
     */
    data: XOR<PhimUpdateInput, PhimUncheckedUpdateInput>
    /**
     * Choose, which Phim to update.
     */
    where: PhimWhereUniqueInput
  }

  /**
   * Phim updateMany
   */
  export type PhimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Phims.
     */
    data: XOR<PhimUpdateManyMutationInput, PhimUncheckedUpdateManyInput>
    /**
     * Filter which Phims to update
     */
    where?: PhimWhereInput
  }

  /**
   * Phim upsert
   */
  export type PhimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * The filter to search for the Phim to update in case it exists.
     */
    where: PhimWhereUniqueInput
    /**
     * In case the Phim found by the `where` argument doesn't exist, create a new Phim with this data.
     */
    create: XOR<PhimCreateInput, PhimUncheckedCreateInput>
    /**
     * In case the Phim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhimUpdateInput, PhimUncheckedUpdateInput>
  }

  /**
   * Phim delete
   */
  export type PhimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * Filter which Phim to delete.
     */
    where: PhimWhereUniqueInput
  }

  /**
   * Phim deleteMany
   */
  export type PhimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phims to delete
     */
    where?: PhimWhereInput
  }

  /**
   * Phim.Banner
   */
  export type Phim$BannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    cursor?: BannerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Phim.LichChieu
   */
  export type Phim$LichChieuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    where?: LichChieuWhereInput
    orderBy?: LichChieuOrderByWithRelationInput | LichChieuOrderByWithRelationInput[]
    cursor?: LichChieuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LichChieuScalarFieldEnum | LichChieuScalarFieldEnum[]
  }

  /**
   * Phim without action
   */
  export type PhimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
  }


  /**
   * Model RapPhim
   */

  export type AggregateRapPhim = {
    _count: RapPhimCountAggregateOutputType | null
    _avg: RapPhimAvgAggregateOutputType | null
    _sum: RapPhimSumAggregateOutputType | null
    _min: RapPhimMinAggregateOutputType | null
    _max: RapPhimMaxAggregateOutputType | null
  }

  export type RapPhimAvgAggregateOutputType = {
    ma_rap: number | null
    ma_cum_rap: number | null
  }

  export type RapPhimSumAggregateOutputType = {
    ma_rap: number | null
    ma_cum_rap: number | null
  }

  export type RapPhimMinAggregateOutputType = {
    ma_rap: number | null
    ten_rap: string | null
    ma_cum_rap: number | null
  }

  export type RapPhimMaxAggregateOutputType = {
    ma_rap: number | null
    ten_rap: string | null
    ma_cum_rap: number | null
  }

  export type RapPhimCountAggregateOutputType = {
    ma_rap: number
    ten_rap: number
    ma_cum_rap: number
    _all: number
  }


  export type RapPhimAvgAggregateInputType = {
    ma_rap?: true
    ma_cum_rap?: true
  }

  export type RapPhimSumAggregateInputType = {
    ma_rap?: true
    ma_cum_rap?: true
  }

  export type RapPhimMinAggregateInputType = {
    ma_rap?: true
    ten_rap?: true
    ma_cum_rap?: true
  }

  export type RapPhimMaxAggregateInputType = {
    ma_rap?: true
    ten_rap?: true
    ma_cum_rap?: true
  }

  export type RapPhimCountAggregateInputType = {
    ma_rap?: true
    ten_rap?: true
    ma_cum_rap?: true
    _all?: true
  }

  export type RapPhimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RapPhim to aggregate.
     */
    where?: RapPhimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RapPhims to fetch.
     */
    orderBy?: RapPhimOrderByWithRelationInput | RapPhimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RapPhimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RapPhims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RapPhims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RapPhims
    **/
    _count?: true | RapPhimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RapPhimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RapPhimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RapPhimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RapPhimMaxAggregateInputType
  }

  export type GetRapPhimAggregateType<T extends RapPhimAggregateArgs> = {
        [P in keyof T & keyof AggregateRapPhim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRapPhim[P]>
      : GetScalarType<T[P], AggregateRapPhim[P]>
  }




  export type RapPhimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RapPhimWhereInput
    orderBy?: RapPhimOrderByWithAggregationInput | RapPhimOrderByWithAggregationInput[]
    by: RapPhimScalarFieldEnum[] | RapPhimScalarFieldEnum
    having?: RapPhimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RapPhimCountAggregateInputType | true
    _avg?: RapPhimAvgAggregateInputType
    _sum?: RapPhimSumAggregateInputType
    _min?: RapPhimMinAggregateInputType
    _max?: RapPhimMaxAggregateInputType
  }

  export type RapPhimGroupByOutputType = {
    ma_rap: number
    ten_rap: string | null
    ma_cum_rap: number | null
    _count: RapPhimCountAggregateOutputType | null
    _avg: RapPhimAvgAggregateOutputType | null
    _sum: RapPhimSumAggregateOutputType | null
    _min: RapPhimMinAggregateOutputType | null
    _max: RapPhimMaxAggregateOutputType | null
  }

  type GetRapPhimGroupByPayload<T extends RapPhimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RapPhimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RapPhimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RapPhimGroupByOutputType[P]>
            : GetScalarType<T[P], RapPhimGroupByOutputType[P]>
        }
      >
    >


  export type RapPhimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_rap?: boolean
    ten_rap?: boolean
    ma_cum_rap?: boolean
    Ghe?: boolean | RapPhim$GheArgs<ExtArgs>
    LichChieu?: boolean | RapPhim$LichChieuArgs<ExtArgs>
    CumRap?: boolean | RapPhim$CumRapArgs<ExtArgs>
    _count?: boolean | RapPhimCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rapPhim"]>


  export type RapPhimSelectScalar = {
    ma_rap?: boolean
    ten_rap?: boolean
    ma_cum_rap?: boolean
  }

  export type RapPhimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ghe?: boolean | RapPhim$GheArgs<ExtArgs>
    LichChieu?: boolean | RapPhim$LichChieuArgs<ExtArgs>
    CumRap?: boolean | RapPhim$CumRapArgs<ExtArgs>
    _count?: boolean | RapPhimCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RapPhimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RapPhim"
    objects: {
      Ghe: Prisma.$GhePayload<ExtArgs>[]
      LichChieu: Prisma.$LichChieuPayload<ExtArgs>[]
      CumRap: Prisma.$CumRapPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_rap: number
      ten_rap: string | null
      ma_cum_rap: number | null
    }, ExtArgs["result"]["rapPhim"]>
    composites: {}
  }

  type RapPhimGetPayload<S extends boolean | null | undefined | RapPhimDefaultArgs> = $Result.GetResult<Prisma.$RapPhimPayload, S>

  type RapPhimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RapPhimFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RapPhimCountAggregateInputType | true
    }

  export interface RapPhimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RapPhim'], meta: { name: 'RapPhim' } }
    /**
     * Find zero or one RapPhim that matches the filter.
     * @param {RapPhimFindUniqueArgs} args - Arguments to find a RapPhim
     * @example
     * // Get one RapPhim
     * const rapPhim = await prisma.rapPhim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RapPhimFindUniqueArgs>(args: SelectSubset<T, RapPhimFindUniqueArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RapPhim that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RapPhimFindUniqueOrThrowArgs} args - Arguments to find a RapPhim
     * @example
     * // Get one RapPhim
     * const rapPhim = await prisma.rapPhim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RapPhimFindUniqueOrThrowArgs>(args: SelectSubset<T, RapPhimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RapPhim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapPhimFindFirstArgs} args - Arguments to find a RapPhim
     * @example
     * // Get one RapPhim
     * const rapPhim = await prisma.rapPhim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RapPhimFindFirstArgs>(args?: SelectSubset<T, RapPhimFindFirstArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RapPhim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapPhimFindFirstOrThrowArgs} args - Arguments to find a RapPhim
     * @example
     * // Get one RapPhim
     * const rapPhim = await prisma.rapPhim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RapPhimFindFirstOrThrowArgs>(args?: SelectSubset<T, RapPhimFindFirstOrThrowArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RapPhims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapPhimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RapPhims
     * const rapPhims = await prisma.rapPhim.findMany()
     * 
     * // Get first 10 RapPhims
     * const rapPhims = await prisma.rapPhim.findMany({ take: 10 })
     * 
     * // Only select the `ma_rap`
     * const rapPhimWithMa_rapOnly = await prisma.rapPhim.findMany({ select: { ma_rap: true } })
     * 
     */
    findMany<T extends RapPhimFindManyArgs>(args?: SelectSubset<T, RapPhimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RapPhim.
     * @param {RapPhimCreateArgs} args - Arguments to create a RapPhim.
     * @example
     * // Create one RapPhim
     * const RapPhim = await prisma.rapPhim.create({
     *   data: {
     *     // ... data to create a RapPhim
     *   }
     * })
     * 
     */
    create<T extends RapPhimCreateArgs>(args: SelectSubset<T, RapPhimCreateArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RapPhims.
     * @param {RapPhimCreateManyArgs} args - Arguments to create many RapPhims.
     * @example
     * // Create many RapPhims
     * const rapPhim = await prisma.rapPhim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RapPhimCreateManyArgs>(args?: SelectSubset<T, RapPhimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RapPhim.
     * @param {RapPhimDeleteArgs} args - Arguments to delete one RapPhim.
     * @example
     * // Delete one RapPhim
     * const RapPhim = await prisma.rapPhim.delete({
     *   where: {
     *     // ... filter to delete one RapPhim
     *   }
     * })
     * 
     */
    delete<T extends RapPhimDeleteArgs>(args: SelectSubset<T, RapPhimDeleteArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RapPhim.
     * @param {RapPhimUpdateArgs} args - Arguments to update one RapPhim.
     * @example
     * // Update one RapPhim
     * const rapPhim = await prisma.rapPhim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RapPhimUpdateArgs>(args: SelectSubset<T, RapPhimUpdateArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RapPhims.
     * @param {RapPhimDeleteManyArgs} args - Arguments to filter RapPhims to delete.
     * @example
     * // Delete a few RapPhims
     * const { count } = await prisma.rapPhim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RapPhimDeleteManyArgs>(args?: SelectSubset<T, RapPhimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RapPhims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapPhimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RapPhims
     * const rapPhim = await prisma.rapPhim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RapPhimUpdateManyArgs>(args: SelectSubset<T, RapPhimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RapPhim.
     * @param {RapPhimUpsertArgs} args - Arguments to update or create a RapPhim.
     * @example
     * // Update or create a RapPhim
     * const rapPhim = await prisma.rapPhim.upsert({
     *   create: {
     *     // ... data to create a RapPhim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RapPhim we want to update
     *   }
     * })
     */
    upsert<T extends RapPhimUpsertArgs>(args: SelectSubset<T, RapPhimUpsertArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RapPhims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapPhimCountArgs} args - Arguments to filter RapPhims to count.
     * @example
     * // Count the number of RapPhims
     * const count = await prisma.rapPhim.count({
     *   where: {
     *     // ... the filter for the RapPhims we want to count
     *   }
     * })
    **/
    count<T extends RapPhimCountArgs>(
      args?: Subset<T, RapPhimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RapPhimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RapPhim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapPhimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RapPhimAggregateArgs>(args: Subset<T, RapPhimAggregateArgs>): Prisma.PrismaPromise<GetRapPhimAggregateType<T>>

    /**
     * Group by RapPhim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapPhimGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RapPhimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RapPhimGroupByArgs['orderBy'] }
        : { orderBy?: RapPhimGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RapPhimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRapPhimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RapPhim model
   */
  readonly fields: RapPhimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RapPhim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RapPhimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ghe<T extends RapPhim$GheArgs<ExtArgs> = {}>(args?: Subset<T, RapPhim$GheArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "findMany"> | Null>
    LichChieu<T extends RapPhim$LichChieuArgs<ExtArgs> = {}>(args?: Subset<T, RapPhim$LichChieuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findMany"> | Null>
    CumRap<T extends RapPhim$CumRapArgs<ExtArgs> = {}>(args?: Subset<T, RapPhim$CumRapArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RapPhim model
   */ 
  interface RapPhimFieldRefs {
    readonly ma_rap: FieldRef<"RapPhim", 'Int'>
    readonly ten_rap: FieldRef<"RapPhim", 'String'>
    readonly ma_cum_rap: FieldRef<"RapPhim", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RapPhim findUnique
   */
  export type RapPhimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * Filter, which RapPhim to fetch.
     */
    where: RapPhimWhereUniqueInput
  }

  /**
   * RapPhim findUniqueOrThrow
   */
  export type RapPhimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * Filter, which RapPhim to fetch.
     */
    where: RapPhimWhereUniqueInput
  }

  /**
   * RapPhim findFirst
   */
  export type RapPhimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * Filter, which RapPhim to fetch.
     */
    where?: RapPhimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RapPhims to fetch.
     */
    orderBy?: RapPhimOrderByWithRelationInput | RapPhimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RapPhims.
     */
    cursor?: RapPhimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RapPhims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RapPhims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RapPhims.
     */
    distinct?: RapPhimScalarFieldEnum | RapPhimScalarFieldEnum[]
  }

  /**
   * RapPhim findFirstOrThrow
   */
  export type RapPhimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * Filter, which RapPhim to fetch.
     */
    where?: RapPhimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RapPhims to fetch.
     */
    orderBy?: RapPhimOrderByWithRelationInput | RapPhimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RapPhims.
     */
    cursor?: RapPhimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RapPhims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RapPhims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RapPhims.
     */
    distinct?: RapPhimScalarFieldEnum | RapPhimScalarFieldEnum[]
  }

  /**
   * RapPhim findMany
   */
  export type RapPhimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * Filter, which RapPhims to fetch.
     */
    where?: RapPhimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RapPhims to fetch.
     */
    orderBy?: RapPhimOrderByWithRelationInput | RapPhimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RapPhims.
     */
    cursor?: RapPhimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RapPhims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RapPhims.
     */
    skip?: number
    distinct?: RapPhimScalarFieldEnum | RapPhimScalarFieldEnum[]
  }

  /**
   * RapPhim create
   */
  export type RapPhimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * The data needed to create a RapPhim.
     */
    data?: XOR<RapPhimCreateInput, RapPhimUncheckedCreateInput>
  }

  /**
   * RapPhim createMany
   */
  export type RapPhimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RapPhims.
     */
    data: RapPhimCreateManyInput | RapPhimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RapPhim update
   */
  export type RapPhimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * The data needed to update a RapPhim.
     */
    data: XOR<RapPhimUpdateInput, RapPhimUncheckedUpdateInput>
    /**
     * Choose, which RapPhim to update.
     */
    where: RapPhimWhereUniqueInput
  }

  /**
   * RapPhim updateMany
   */
  export type RapPhimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RapPhims.
     */
    data: XOR<RapPhimUpdateManyMutationInput, RapPhimUncheckedUpdateManyInput>
    /**
     * Filter which RapPhims to update
     */
    where?: RapPhimWhereInput
  }

  /**
   * RapPhim upsert
   */
  export type RapPhimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * The filter to search for the RapPhim to update in case it exists.
     */
    where: RapPhimWhereUniqueInput
    /**
     * In case the RapPhim found by the `where` argument doesn't exist, create a new RapPhim with this data.
     */
    create: XOR<RapPhimCreateInput, RapPhimUncheckedCreateInput>
    /**
     * In case the RapPhim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RapPhimUpdateInput, RapPhimUncheckedUpdateInput>
  }

  /**
   * RapPhim delete
   */
  export type RapPhimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * Filter which RapPhim to delete.
     */
    where: RapPhimWhereUniqueInput
  }

  /**
   * RapPhim deleteMany
   */
  export type RapPhimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RapPhims to delete
     */
    where?: RapPhimWhereInput
  }

  /**
   * RapPhim.Ghe
   */
  export type RapPhim$GheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    where?: GheWhereInput
    orderBy?: GheOrderByWithRelationInput | GheOrderByWithRelationInput[]
    cursor?: GheWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GheScalarFieldEnum | GheScalarFieldEnum[]
  }

  /**
   * RapPhim.LichChieu
   */
  export type RapPhim$LichChieuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    where?: LichChieuWhereInput
    orderBy?: LichChieuOrderByWithRelationInput | LichChieuOrderByWithRelationInput[]
    cursor?: LichChieuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LichChieuScalarFieldEnum | LichChieuScalarFieldEnum[]
  }

  /**
   * RapPhim.CumRap
   */
  export type RapPhim$CumRapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    where?: CumRapWhereInput
  }

  /**
   * RapPhim without action
   */
  export type RapPhimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
  }


  /**
   * Model LoaiNguoiDung
   */

  export type AggregateLoaiNguoiDung = {
    _count: LoaiNguoiDungCountAggregateOutputType | null
    _avg: LoaiNguoiDungAvgAggregateOutputType | null
    _sum: LoaiNguoiDungSumAggregateOutputType | null
    _min: LoaiNguoiDungMinAggregateOutputType | null
    _max: LoaiNguoiDungMaxAggregateOutputType | null
  }

  export type LoaiNguoiDungAvgAggregateOutputType = {
    ma_loai_nguoi_dung: number | null
  }

  export type LoaiNguoiDungSumAggregateOutputType = {
    ma_loai_nguoi_dung: number | null
  }

  export type LoaiNguoiDungMinAggregateOutputType = {
    ma_loai_nguoi_dung: number | null
    loai_nguoi_dung: string | null
  }

  export type LoaiNguoiDungMaxAggregateOutputType = {
    ma_loai_nguoi_dung: number | null
    loai_nguoi_dung: string | null
  }

  export type LoaiNguoiDungCountAggregateOutputType = {
    ma_loai_nguoi_dung: number
    loai_nguoi_dung: number
    _all: number
  }


  export type LoaiNguoiDungAvgAggregateInputType = {
    ma_loai_nguoi_dung?: true
  }

  export type LoaiNguoiDungSumAggregateInputType = {
    ma_loai_nguoi_dung?: true
  }

  export type LoaiNguoiDungMinAggregateInputType = {
    ma_loai_nguoi_dung?: true
    loai_nguoi_dung?: true
  }

  export type LoaiNguoiDungMaxAggregateInputType = {
    ma_loai_nguoi_dung?: true
    loai_nguoi_dung?: true
  }

  export type LoaiNguoiDungCountAggregateInputType = {
    ma_loai_nguoi_dung?: true
    loai_nguoi_dung?: true
    _all?: true
  }

  export type LoaiNguoiDungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoaiNguoiDung to aggregate.
     */
    where?: LoaiNguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoaiNguoiDungs to fetch.
     */
    orderBy?: LoaiNguoiDungOrderByWithRelationInput | LoaiNguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoaiNguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoaiNguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoaiNguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoaiNguoiDungs
    **/
    _count?: true | LoaiNguoiDungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoaiNguoiDungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoaiNguoiDungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoaiNguoiDungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoaiNguoiDungMaxAggregateInputType
  }

  export type GetLoaiNguoiDungAggregateType<T extends LoaiNguoiDungAggregateArgs> = {
        [P in keyof T & keyof AggregateLoaiNguoiDung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoaiNguoiDung[P]>
      : GetScalarType<T[P], AggregateLoaiNguoiDung[P]>
  }




  export type LoaiNguoiDungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoaiNguoiDungWhereInput
    orderBy?: LoaiNguoiDungOrderByWithAggregationInput | LoaiNguoiDungOrderByWithAggregationInput[]
    by: LoaiNguoiDungScalarFieldEnum[] | LoaiNguoiDungScalarFieldEnum
    having?: LoaiNguoiDungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoaiNguoiDungCountAggregateInputType | true
    _avg?: LoaiNguoiDungAvgAggregateInputType
    _sum?: LoaiNguoiDungSumAggregateInputType
    _min?: LoaiNguoiDungMinAggregateInputType
    _max?: LoaiNguoiDungMaxAggregateInputType
  }

  export type LoaiNguoiDungGroupByOutputType = {
    ma_loai_nguoi_dung: number
    loai_nguoi_dung: string | null
    _count: LoaiNguoiDungCountAggregateOutputType | null
    _avg: LoaiNguoiDungAvgAggregateOutputType | null
    _sum: LoaiNguoiDungSumAggregateOutputType | null
    _min: LoaiNguoiDungMinAggregateOutputType | null
    _max: LoaiNguoiDungMaxAggregateOutputType | null
  }

  type GetLoaiNguoiDungGroupByPayload<T extends LoaiNguoiDungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoaiNguoiDungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoaiNguoiDungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoaiNguoiDungGroupByOutputType[P]>
            : GetScalarType<T[P], LoaiNguoiDungGroupByOutputType[P]>
        }
      >
    >


  export type LoaiNguoiDungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_loai_nguoi_dung?: boolean
    loai_nguoi_dung?: boolean
    NguoiDung?: boolean | LoaiNguoiDung$NguoiDungArgs<ExtArgs>
    _count?: boolean | LoaiNguoiDungCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loaiNguoiDung"]>


  export type LoaiNguoiDungSelectScalar = {
    ma_loai_nguoi_dung?: boolean
    loai_nguoi_dung?: boolean
  }

  export type LoaiNguoiDungInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NguoiDung?: boolean | LoaiNguoiDung$NguoiDungArgs<ExtArgs>
    _count?: boolean | LoaiNguoiDungCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LoaiNguoiDungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoaiNguoiDung"
    objects: {
      NguoiDung: Prisma.$NguoiDungPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_loai_nguoi_dung: number
      loai_nguoi_dung: string | null
    }, ExtArgs["result"]["loaiNguoiDung"]>
    composites: {}
  }

  type LoaiNguoiDungGetPayload<S extends boolean | null | undefined | LoaiNguoiDungDefaultArgs> = $Result.GetResult<Prisma.$LoaiNguoiDungPayload, S>

  type LoaiNguoiDungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LoaiNguoiDungFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LoaiNguoiDungCountAggregateInputType | true
    }

  export interface LoaiNguoiDungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoaiNguoiDung'], meta: { name: 'LoaiNguoiDung' } }
    /**
     * Find zero or one LoaiNguoiDung that matches the filter.
     * @param {LoaiNguoiDungFindUniqueArgs} args - Arguments to find a LoaiNguoiDung
     * @example
     * // Get one LoaiNguoiDung
     * const loaiNguoiDung = await prisma.loaiNguoiDung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoaiNguoiDungFindUniqueArgs>(args: SelectSubset<T, LoaiNguoiDungFindUniqueArgs<ExtArgs>>): Prisma__LoaiNguoiDungClient<$Result.GetResult<Prisma.$LoaiNguoiDungPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LoaiNguoiDung that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LoaiNguoiDungFindUniqueOrThrowArgs} args - Arguments to find a LoaiNguoiDung
     * @example
     * // Get one LoaiNguoiDung
     * const loaiNguoiDung = await prisma.loaiNguoiDung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoaiNguoiDungFindUniqueOrThrowArgs>(args: SelectSubset<T, LoaiNguoiDungFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoaiNguoiDungClient<$Result.GetResult<Prisma.$LoaiNguoiDungPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LoaiNguoiDung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiNguoiDungFindFirstArgs} args - Arguments to find a LoaiNguoiDung
     * @example
     * // Get one LoaiNguoiDung
     * const loaiNguoiDung = await prisma.loaiNguoiDung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoaiNguoiDungFindFirstArgs>(args?: SelectSubset<T, LoaiNguoiDungFindFirstArgs<ExtArgs>>): Prisma__LoaiNguoiDungClient<$Result.GetResult<Prisma.$LoaiNguoiDungPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LoaiNguoiDung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiNguoiDungFindFirstOrThrowArgs} args - Arguments to find a LoaiNguoiDung
     * @example
     * // Get one LoaiNguoiDung
     * const loaiNguoiDung = await prisma.loaiNguoiDung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoaiNguoiDungFindFirstOrThrowArgs>(args?: SelectSubset<T, LoaiNguoiDungFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoaiNguoiDungClient<$Result.GetResult<Prisma.$LoaiNguoiDungPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LoaiNguoiDungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiNguoiDungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoaiNguoiDungs
     * const loaiNguoiDungs = await prisma.loaiNguoiDung.findMany()
     * 
     * // Get first 10 LoaiNguoiDungs
     * const loaiNguoiDungs = await prisma.loaiNguoiDung.findMany({ take: 10 })
     * 
     * // Only select the `ma_loai_nguoi_dung`
     * const loaiNguoiDungWithMa_loai_nguoi_dungOnly = await prisma.loaiNguoiDung.findMany({ select: { ma_loai_nguoi_dung: true } })
     * 
     */
    findMany<T extends LoaiNguoiDungFindManyArgs>(args?: SelectSubset<T, LoaiNguoiDungFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoaiNguoiDungPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LoaiNguoiDung.
     * @param {LoaiNguoiDungCreateArgs} args - Arguments to create a LoaiNguoiDung.
     * @example
     * // Create one LoaiNguoiDung
     * const LoaiNguoiDung = await prisma.loaiNguoiDung.create({
     *   data: {
     *     // ... data to create a LoaiNguoiDung
     *   }
     * })
     * 
     */
    create<T extends LoaiNguoiDungCreateArgs>(args: SelectSubset<T, LoaiNguoiDungCreateArgs<ExtArgs>>): Prisma__LoaiNguoiDungClient<$Result.GetResult<Prisma.$LoaiNguoiDungPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LoaiNguoiDungs.
     * @param {LoaiNguoiDungCreateManyArgs} args - Arguments to create many LoaiNguoiDungs.
     * @example
     * // Create many LoaiNguoiDungs
     * const loaiNguoiDung = await prisma.loaiNguoiDung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoaiNguoiDungCreateManyArgs>(args?: SelectSubset<T, LoaiNguoiDungCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LoaiNguoiDung.
     * @param {LoaiNguoiDungDeleteArgs} args - Arguments to delete one LoaiNguoiDung.
     * @example
     * // Delete one LoaiNguoiDung
     * const LoaiNguoiDung = await prisma.loaiNguoiDung.delete({
     *   where: {
     *     // ... filter to delete one LoaiNguoiDung
     *   }
     * })
     * 
     */
    delete<T extends LoaiNguoiDungDeleteArgs>(args: SelectSubset<T, LoaiNguoiDungDeleteArgs<ExtArgs>>): Prisma__LoaiNguoiDungClient<$Result.GetResult<Prisma.$LoaiNguoiDungPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LoaiNguoiDung.
     * @param {LoaiNguoiDungUpdateArgs} args - Arguments to update one LoaiNguoiDung.
     * @example
     * // Update one LoaiNguoiDung
     * const loaiNguoiDung = await prisma.loaiNguoiDung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoaiNguoiDungUpdateArgs>(args: SelectSubset<T, LoaiNguoiDungUpdateArgs<ExtArgs>>): Prisma__LoaiNguoiDungClient<$Result.GetResult<Prisma.$LoaiNguoiDungPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LoaiNguoiDungs.
     * @param {LoaiNguoiDungDeleteManyArgs} args - Arguments to filter LoaiNguoiDungs to delete.
     * @example
     * // Delete a few LoaiNguoiDungs
     * const { count } = await prisma.loaiNguoiDung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoaiNguoiDungDeleteManyArgs>(args?: SelectSubset<T, LoaiNguoiDungDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoaiNguoiDungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiNguoiDungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoaiNguoiDungs
     * const loaiNguoiDung = await prisma.loaiNguoiDung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoaiNguoiDungUpdateManyArgs>(args: SelectSubset<T, LoaiNguoiDungUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LoaiNguoiDung.
     * @param {LoaiNguoiDungUpsertArgs} args - Arguments to update or create a LoaiNguoiDung.
     * @example
     * // Update or create a LoaiNguoiDung
     * const loaiNguoiDung = await prisma.loaiNguoiDung.upsert({
     *   create: {
     *     // ... data to create a LoaiNguoiDung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoaiNguoiDung we want to update
     *   }
     * })
     */
    upsert<T extends LoaiNguoiDungUpsertArgs>(args: SelectSubset<T, LoaiNguoiDungUpsertArgs<ExtArgs>>): Prisma__LoaiNguoiDungClient<$Result.GetResult<Prisma.$LoaiNguoiDungPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LoaiNguoiDungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiNguoiDungCountArgs} args - Arguments to filter LoaiNguoiDungs to count.
     * @example
     * // Count the number of LoaiNguoiDungs
     * const count = await prisma.loaiNguoiDung.count({
     *   where: {
     *     // ... the filter for the LoaiNguoiDungs we want to count
     *   }
     * })
    **/
    count<T extends LoaiNguoiDungCountArgs>(
      args?: Subset<T, LoaiNguoiDungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoaiNguoiDungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoaiNguoiDung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiNguoiDungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoaiNguoiDungAggregateArgs>(args: Subset<T, LoaiNguoiDungAggregateArgs>): Prisma.PrismaPromise<GetLoaiNguoiDungAggregateType<T>>

    /**
     * Group by LoaiNguoiDung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiNguoiDungGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoaiNguoiDungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoaiNguoiDungGroupByArgs['orderBy'] }
        : { orderBy?: LoaiNguoiDungGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoaiNguoiDungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoaiNguoiDungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoaiNguoiDung model
   */
  readonly fields: LoaiNguoiDungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoaiNguoiDung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoaiNguoiDungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    NguoiDung<T extends LoaiNguoiDung$NguoiDungArgs<ExtArgs> = {}>(args?: Subset<T, LoaiNguoiDung$NguoiDungArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoaiNguoiDung model
   */ 
  interface LoaiNguoiDungFieldRefs {
    readonly ma_loai_nguoi_dung: FieldRef<"LoaiNguoiDung", 'Int'>
    readonly loai_nguoi_dung: FieldRef<"LoaiNguoiDung", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LoaiNguoiDung findUnique
   */
  export type LoaiNguoiDungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiNguoiDung
     */
    select?: LoaiNguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiNguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which LoaiNguoiDung to fetch.
     */
    where: LoaiNguoiDungWhereUniqueInput
  }

  /**
   * LoaiNguoiDung findUniqueOrThrow
   */
  export type LoaiNguoiDungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiNguoiDung
     */
    select?: LoaiNguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiNguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which LoaiNguoiDung to fetch.
     */
    where: LoaiNguoiDungWhereUniqueInput
  }

  /**
   * LoaiNguoiDung findFirst
   */
  export type LoaiNguoiDungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiNguoiDung
     */
    select?: LoaiNguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiNguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which LoaiNguoiDung to fetch.
     */
    where?: LoaiNguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoaiNguoiDungs to fetch.
     */
    orderBy?: LoaiNguoiDungOrderByWithRelationInput | LoaiNguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoaiNguoiDungs.
     */
    cursor?: LoaiNguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoaiNguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoaiNguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoaiNguoiDungs.
     */
    distinct?: LoaiNguoiDungScalarFieldEnum | LoaiNguoiDungScalarFieldEnum[]
  }

  /**
   * LoaiNguoiDung findFirstOrThrow
   */
  export type LoaiNguoiDungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiNguoiDung
     */
    select?: LoaiNguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiNguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which LoaiNguoiDung to fetch.
     */
    where?: LoaiNguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoaiNguoiDungs to fetch.
     */
    orderBy?: LoaiNguoiDungOrderByWithRelationInput | LoaiNguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoaiNguoiDungs.
     */
    cursor?: LoaiNguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoaiNguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoaiNguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoaiNguoiDungs.
     */
    distinct?: LoaiNguoiDungScalarFieldEnum | LoaiNguoiDungScalarFieldEnum[]
  }

  /**
   * LoaiNguoiDung findMany
   */
  export type LoaiNguoiDungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiNguoiDung
     */
    select?: LoaiNguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiNguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which LoaiNguoiDungs to fetch.
     */
    where?: LoaiNguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoaiNguoiDungs to fetch.
     */
    orderBy?: LoaiNguoiDungOrderByWithRelationInput | LoaiNguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoaiNguoiDungs.
     */
    cursor?: LoaiNguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoaiNguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoaiNguoiDungs.
     */
    skip?: number
    distinct?: LoaiNguoiDungScalarFieldEnum | LoaiNguoiDungScalarFieldEnum[]
  }

  /**
   * LoaiNguoiDung create
   */
  export type LoaiNguoiDungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiNguoiDung
     */
    select?: LoaiNguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiNguoiDungInclude<ExtArgs> | null
    /**
     * The data needed to create a LoaiNguoiDung.
     */
    data?: XOR<LoaiNguoiDungCreateInput, LoaiNguoiDungUncheckedCreateInput>
  }

  /**
   * LoaiNguoiDung createMany
   */
  export type LoaiNguoiDungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoaiNguoiDungs.
     */
    data: LoaiNguoiDungCreateManyInput | LoaiNguoiDungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoaiNguoiDung update
   */
  export type LoaiNguoiDungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiNguoiDung
     */
    select?: LoaiNguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiNguoiDungInclude<ExtArgs> | null
    /**
     * The data needed to update a LoaiNguoiDung.
     */
    data: XOR<LoaiNguoiDungUpdateInput, LoaiNguoiDungUncheckedUpdateInput>
    /**
     * Choose, which LoaiNguoiDung to update.
     */
    where: LoaiNguoiDungWhereUniqueInput
  }

  /**
   * LoaiNguoiDung updateMany
   */
  export type LoaiNguoiDungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoaiNguoiDungs.
     */
    data: XOR<LoaiNguoiDungUpdateManyMutationInput, LoaiNguoiDungUncheckedUpdateManyInput>
    /**
     * Filter which LoaiNguoiDungs to update
     */
    where?: LoaiNguoiDungWhereInput
  }

  /**
   * LoaiNguoiDung upsert
   */
  export type LoaiNguoiDungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiNguoiDung
     */
    select?: LoaiNguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiNguoiDungInclude<ExtArgs> | null
    /**
     * The filter to search for the LoaiNguoiDung to update in case it exists.
     */
    where: LoaiNguoiDungWhereUniqueInput
    /**
     * In case the LoaiNguoiDung found by the `where` argument doesn't exist, create a new LoaiNguoiDung with this data.
     */
    create: XOR<LoaiNguoiDungCreateInput, LoaiNguoiDungUncheckedCreateInput>
    /**
     * In case the LoaiNguoiDung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoaiNguoiDungUpdateInput, LoaiNguoiDungUncheckedUpdateInput>
  }

  /**
   * LoaiNguoiDung delete
   */
  export type LoaiNguoiDungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiNguoiDung
     */
    select?: LoaiNguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiNguoiDungInclude<ExtArgs> | null
    /**
     * Filter which LoaiNguoiDung to delete.
     */
    where: LoaiNguoiDungWhereUniqueInput
  }

  /**
   * LoaiNguoiDung deleteMany
   */
  export type LoaiNguoiDungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoaiNguoiDungs to delete
     */
    where?: LoaiNguoiDungWhereInput
  }

  /**
   * LoaiNguoiDung.NguoiDung
   */
  export type LoaiNguoiDung$NguoiDungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    where?: NguoiDungWhereInput
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    cursor?: NguoiDungWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }

  /**
   * LoaiNguoiDung without action
   */
  export type LoaiNguoiDungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiNguoiDung
     */
    select?: LoaiNguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiNguoiDungInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BannerScalarFieldEnum: {
    ma_banner: 'ma_banner',
    ma_phim: 'ma_phim',
    hinh_anh: 'hinh_anh'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const CumRapScalarFieldEnum: {
    ma_cum_rap: 'ma_cum_rap',
    ten_cum_rap: 'ten_cum_rap',
    dia_chi: 'dia_chi',
    ma_he_thong_rap: 'ma_he_thong_rap'
  };

  export type CumRapScalarFieldEnum = (typeof CumRapScalarFieldEnum)[keyof typeof CumRapScalarFieldEnum]


  export const DatVeScalarFieldEnum: {
    ma_ve: 'ma_ve',
    tai_khoan: 'tai_khoan',
    ma_lich_chieu: 'ma_lich_chieu',
    ma_ghe: 'ma_ghe'
  };

  export type DatVeScalarFieldEnum = (typeof DatVeScalarFieldEnum)[keyof typeof DatVeScalarFieldEnum]


  export const GheScalarFieldEnum: {
    ma_ghe: 'ma_ghe',
    ten_ghe: 'ten_ghe',
    loai_ghe: 'loai_ghe',
    ma_rap: 'ma_rap'
  };

  export type GheScalarFieldEnum = (typeof GheScalarFieldEnum)[keyof typeof GheScalarFieldEnum]


  export const HeThongRapScalarFieldEnum: {
    ma_he_thong_rap: 'ma_he_thong_rap',
    ten_he_thong_rap: 'ten_he_thong_rap',
    logo: 'logo'
  };

  export type HeThongRapScalarFieldEnum = (typeof HeThongRapScalarFieldEnum)[keyof typeof HeThongRapScalarFieldEnum]


  export const LichChieuScalarFieldEnum: {
    ma_lich_chieu: 'ma_lich_chieu',
    ma_rap: 'ma_rap',
    ma_phim: 'ma_phim',
    ngay_gio_chieu: 'ngay_gio_chieu',
    gia_ve: 'gia_ve'
  };

  export type LichChieuScalarFieldEnum = (typeof LichChieuScalarFieldEnum)[keyof typeof LichChieuScalarFieldEnum]


  export const NguoiDungScalarFieldEnum: {
    tai_khoan: 'tai_khoan',
    ho_ten: 'ho_ten',
    email: 'email',
    so_dt: 'so_dt',
    mat_khau: 'mat_khau',
    ma_loai_nguoi_dung: 'ma_loai_nguoi_dung'
  };

  export type NguoiDungScalarFieldEnum = (typeof NguoiDungScalarFieldEnum)[keyof typeof NguoiDungScalarFieldEnum]


  export const PhimScalarFieldEnum: {
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

  export type PhimScalarFieldEnum = (typeof PhimScalarFieldEnum)[keyof typeof PhimScalarFieldEnum]


  export const RapPhimScalarFieldEnum: {
    ma_rap: 'ma_rap',
    ten_rap: 'ten_rap',
    ma_cum_rap: 'ma_cum_rap'
  };

  export type RapPhimScalarFieldEnum = (typeof RapPhimScalarFieldEnum)[keyof typeof RapPhimScalarFieldEnum]


  export const LoaiNguoiDungScalarFieldEnum: {
    ma_loai_nguoi_dung: 'ma_loai_nguoi_dung',
    loai_nguoi_dung: 'loai_nguoi_dung'
  };

  export type LoaiNguoiDungScalarFieldEnum = (typeof LoaiNguoiDungScalarFieldEnum)[keyof typeof LoaiNguoiDungScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const BannerOrderByRelevanceFieldEnum: {
    hinh_anh: 'hinh_anh'
  };

  export type BannerOrderByRelevanceFieldEnum = (typeof BannerOrderByRelevanceFieldEnum)[keyof typeof BannerOrderByRelevanceFieldEnum]


  export const CumRapOrderByRelevanceFieldEnum: {
    ten_cum_rap: 'ten_cum_rap',
    dia_chi: 'dia_chi'
  };

  export type CumRapOrderByRelevanceFieldEnum = (typeof CumRapOrderByRelevanceFieldEnum)[keyof typeof CumRapOrderByRelevanceFieldEnum]


  export const GheOrderByRelevanceFieldEnum: {
    ten_ghe: 'ten_ghe',
    loai_ghe: 'loai_ghe'
  };

  export type GheOrderByRelevanceFieldEnum = (typeof GheOrderByRelevanceFieldEnum)[keyof typeof GheOrderByRelevanceFieldEnum]


  export const HeThongRapOrderByRelevanceFieldEnum: {
    ten_he_thong_rap: 'ten_he_thong_rap',
    logo: 'logo'
  };

  export type HeThongRapOrderByRelevanceFieldEnum = (typeof HeThongRapOrderByRelevanceFieldEnum)[keyof typeof HeThongRapOrderByRelevanceFieldEnum]


  export const NguoiDungOrderByRelevanceFieldEnum: {
    ho_ten: 'ho_ten',
    email: 'email',
    so_dt: 'so_dt',
    mat_khau: 'mat_khau'
  };

  export type NguoiDungOrderByRelevanceFieldEnum = (typeof NguoiDungOrderByRelevanceFieldEnum)[keyof typeof NguoiDungOrderByRelevanceFieldEnum]


  export const PhimOrderByRelevanceFieldEnum: {
    ten_phim: 'ten_phim',
    trailer: 'trailer',
    hinh_anh: 'hinh_anh',
    mo_ta: 'mo_ta'
  };

  export type PhimOrderByRelevanceFieldEnum = (typeof PhimOrderByRelevanceFieldEnum)[keyof typeof PhimOrderByRelevanceFieldEnum]


  export const RapPhimOrderByRelevanceFieldEnum: {
    ten_rap: 'ten_rap'
  };

  export type RapPhimOrderByRelevanceFieldEnum = (typeof RapPhimOrderByRelevanceFieldEnum)[keyof typeof RapPhimOrderByRelevanceFieldEnum]


  export const LoaiNguoiDungOrderByRelevanceFieldEnum: {
    loai_nguoi_dung: 'loai_nguoi_dung'
  };

  export type LoaiNguoiDungOrderByRelevanceFieldEnum = (typeof LoaiNguoiDungOrderByRelevanceFieldEnum)[keyof typeof LoaiNguoiDungOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    ma_banner?: IntFilter<"Banner"> | number
    ma_phim?: IntNullableFilter<"Banner"> | number | null
    hinh_anh?: StringNullableFilter<"Banner"> | string | null
    Phim?: XOR<PhimNullableScalarRelationFilter, PhimWhereInput> | null
  }

  export type BannerOrderByWithRelationInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrderInput | SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    Phim?: PhimOrderByWithRelationInput
    _relevance?: BannerOrderByRelevanceInput
  }

  export type BannerWhereUniqueInput = Prisma.AtLeast<{
    ma_banner?: number
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    ma_phim?: IntNullableFilter<"Banner"> | number | null
    hinh_anh?: StringNullableFilter<"Banner"> | string | null
    Phim?: XOR<PhimNullableScalarRelationFilter, PhimWhereInput> | null
  }, "ma_banner">

  export type BannerOrderByWithAggregationInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrderInput | SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    _count?: BannerCountOrderByAggregateInput
    _avg?: BannerAvgOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
    _sum?: BannerSumOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    OR?: BannerScalarWhereWithAggregatesInput[]
    NOT?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    ma_banner?: IntWithAggregatesFilter<"Banner"> | number
    ma_phim?: IntNullableWithAggregatesFilter<"Banner"> | number | null
    hinh_anh?: StringNullableWithAggregatesFilter<"Banner"> | string | null
  }

  export type CumRapWhereInput = {
    AND?: CumRapWhereInput | CumRapWhereInput[]
    OR?: CumRapWhereInput[]
    NOT?: CumRapWhereInput | CumRapWhereInput[]
    ma_cum_rap?: IntFilter<"CumRap"> | number
    ten_cum_rap?: StringNullableFilter<"CumRap"> | string | null
    dia_chi?: StringNullableFilter<"CumRap"> | string | null
    ma_he_thong_rap?: IntNullableFilter<"CumRap"> | number | null
    HeThongRap?: XOR<HeThongRapNullableScalarRelationFilter, HeThongRapWhereInput> | null
    RapPhim?: RapPhimListRelationFilter
  }

  export type CumRapOrderByWithRelationInput = {
    ma_cum_rap?: SortOrder
    ten_cum_rap?: SortOrderInput | SortOrder
    dia_chi?: SortOrderInput | SortOrder
    ma_he_thong_rap?: SortOrderInput | SortOrder
    HeThongRap?: HeThongRapOrderByWithRelationInput
    RapPhim?: RapPhimOrderByRelationAggregateInput
    _relevance?: CumRapOrderByRelevanceInput
  }

  export type CumRapWhereUniqueInput = Prisma.AtLeast<{
    ma_cum_rap?: number
    AND?: CumRapWhereInput | CumRapWhereInput[]
    OR?: CumRapWhereInput[]
    NOT?: CumRapWhereInput | CumRapWhereInput[]
    ten_cum_rap?: StringNullableFilter<"CumRap"> | string | null
    dia_chi?: StringNullableFilter<"CumRap"> | string | null
    ma_he_thong_rap?: IntNullableFilter<"CumRap"> | number | null
    HeThongRap?: XOR<HeThongRapNullableScalarRelationFilter, HeThongRapWhereInput> | null
    RapPhim?: RapPhimListRelationFilter
  }, "ma_cum_rap">

  export type CumRapOrderByWithAggregationInput = {
    ma_cum_rap?: SortOrder
    ten_cum_rap?: SortOrderInput | SortOrder
    dia_chi?: SortOrderInput | SortOrder
    ma_he_thong_rap?: SortOrderInput | SortOrder
    _count?: CumRapCountOrderByAggregateInput
    _avg?: CumRapAvgOrderByAggregateInput
    _max?: CumRapMaxOrderByAggregateInput
    _min?: CumRapMinOrderByAggregateInput
    _sum?: CumRapSumOrderByAggregateInput
  }

  export type CumRapScalarWhereWithAggregatesInput = {
    AND?: CumRapScalarWhereWithAggregatesInput | CumRapScalarWhereWithAggregatesInput[]
    OR?: CumRapScalarWhereWithAggregatesInput[]
    NOT?: CumRapScalarWhereWithAggregatesInput | CumRapScalarWhereWithAggregatesInput[]
    ma_cum_rap?: IntWithAggregatesFilter<"CumRap"> | number
    ten_cum_rap?: StringNullableWithAggregatesFilter<"CumRap"> | string | null
    dia_chi?: StringNullableWithAggregatesFilter<"CumRap"> | string | null
    ma_he_thong_rap?: IntNullableWithAggregatesFilter<"CumRap"> | number | null
  }

  export type DatVeWhereInput = {
    AND?: DatVeWhereInput | DatVeWhereInput[]
    OR?: DatVeWhereInput[]
    NOT?: DatVeWhereInput | DatVeWhereInput[]
    ma_ve?: IntFilter<"DatVe"> | number
    tai_khoan?: IntNullableFilter<"DatVe"> | number | null
    ma_lich_chieu?: IntNullableFilter<"DatVe"> | number | null
    ma_ghe?: IntNullableFilter<"DatVe"> | number | null
    NguoiDung?: XOR<NguoiDungNullableScalarRelationFilter, NguoiDungWhereInput> | null
    LichChieu?: XOR<LichChieuNullableScalarRelationFilter, LichChieuWhereInput> | null
    Ghe?: XOR<GheNullableScalarRelationFilter, GheWhereInput> | null
  }

  export type DatVeOrderByWithRelationInput = {
    ma_ve?: SortOrder
    tai_khoan?: SortOrderInput | SortOrder
    ma_lich_chieu?: SortOrderInput | SortOrder
    ma_ghe?: SortOrderInput | SortOrder
    NguoiDung?: NguoiDungOrderByWithRelationInput
    LichChieu?: LichChieuOrderByWithRelationInput
    Ghe?: GheOrderByWithRelationInput
  }

  export type DatVeWhereUniqueInput = Prisma.AtLeast<{
    ma_ve?: number
    tai_khoan_ma_lich_chieu_ma_ghe?: DatVeTai_khoanMa_lich_chieuMa_gheCompoundUniqueInput
    AND?: DatVeWhereInput | DatVeWhereInput[]
    OR?: DatVeWhereInput[]
    NOT?: DatVeWhereInput | DatVeWhereInput[]
    tai_khoan?: IntNullableFilter<"DatVe"> | number | null
    ma_lich_chieu?: IntNullableFilter<"DatVe"> | number | null
    ma_ghe?: IntNullableFilter<"DatVe"> | number | null
    NguoiDung?: XOR<NguoiDungNullableScalarRelationFilter, NguoiDungWhereInput> | null
    LichChieu?: XOR<LichChieuNullableScalarRelationFilter, LichChieuWhereInput> | null
    Ghe?: XOR<GheNullableScalarRelationFilter, GheWhereInput> | null
  }, "ma_ve" | "tai_khoan_ma_lich_chieu_ma_ghe">

  export type DatVeOrderByWithAggregationInput = {
    ma_ve?: SortOrder
    tai_khoan?: SortOrderInput | SortOrder
    ma_lich_chieu?: SortOrderInput | SortOrder
    ma_ghe?: SortOrderInput | SortOrder
    _count?: DatVeCountOrderByAggregateInput
    _avg?: DatVeAvgOrderByAggregateInput
    _max?: DatVeMaxOrderByAggregateInput
    _min?: DatVeMinOrderByAggregateInput
    _sum?: DatVeSumOrderByAggregateInput
  }

  export type DatVeScalarWhereWithAggregatesInput = {
    AND?: DatVeScalarWhereWithAggregatesInput | DatVeScalarWhereWithAggregatesInput[]
    OR?: DatVeScalarWhereWithAggregatesInput[]
    NOT?: DatVeScalarWhereWithAggregatesInput | DatVeScalarWhereWithAggregatesInput[]
    ma_ve?: IntWithAggregatesFilter<"DatVe"> | number
    tai_khoan?: IntNullableWithAggregatesFilter<"DatVe"> | number | null
    ma_lich_chieu?: IntNullableWithAggregatesFilter<"DatVe"> | number | null
    ma_ghe?: IntNullableWithAggregatesFilter<"DatVe"> | number | null
  }

  export type GheWhereInput = {
    AND?: GheWhereInput | GheWhereInput[]
    OR?: GheWhereInput[]
    NOT?: GheWhereInput | GheWhereInput[]
    ma_ghe?: IntFilter<"Ghe"> | number
    ten_ghe?: StringNullableFilter<"Ghe"> | string | null
    loai_ghe?: StringNullableFilter<"Ghe"> | string | null
    ma_rap?: IntNullableFilter<"Ghe"> | number | null
    DatVe?: DatVeListRelationFilter
    RapPhim?: XOR<RapPhimNullableScalarRelationFilter, RapPhimWhereInput> | null
  }

  export type GheOrderByWithRelationInput = {
    ma_ghe?: SortOrder
    ten_ghe?: SortOrderInput | SortOrder
    loai_ghe?: SortOrderInput | SortOrder
    ma_rap?: SortOrderInput | SortOrder
    DatVe?: DatVeOrderByRelationAggregateInput
    RapPhim?: RapPhimOrderByWithRelationInput
    _relevance?: GheOrderByRelevanceInput
  }

  export type GheWhereUniqueInput = Prisma.AtLeast<{
    ma_ghe?: number
    AND?: GheWhereInput | GheWhereInput[]
    OR?: GheWhereInput[]
    NOT?: GheWhereInput | GheWhereInput[]
    ten_ghe?: StringNullableFilter<"Ghe"> | string | null
    loai_ghe?: StringNullableFilter<"Ghe"> | string | null
    ma_rap?: IntNullableFilter<"Ghe"> | number | null
    DatVe?: DatVeListRelationFilter
    RapPhim?: XOR<RapPhimNullableScalarRelationFilter, RapPhimWhereInput> | null
  }, "ma_ghe">

  export type GheOrderByWithAggregationInput = {
    ma_ghe?: SortOrder
    ten_ghe?: SortOrderInput | SortOrder
    loai_ghe?: SortOrderInput | SortOrder
    ma_rap?: SortOrderInput | SortOrder
    _count?: GheCountOrderByAggregateInput
    _avg?: GheAvgOrderByAggregateInput
    _max?: GheMaxOrderByAggregateInput
    _min?: GheMinOrderByAggregateInput
    _sum?: GheSumOrderByAggregateInput
  }

  export type GheScalarWhereWithAggregatesInput = {
    AND?: GheScalarWhereWithAggregatesInput | GheScalarWhereWithAggregatesInput[]
    OR?: GheScalarWhereWithAggregatesInput[]
    NOT?: GheScalarWhereWithAggregatesInput | GheScalarWhereWithAggregatesInput[]
    ma_ghe?: IntWithAggregatesFilter<"Ghe"> | number
    ten_ghe?: StringNullableWithAggregatesFilter<"Ghe"> | string | null
    loai_ghe?: StringNullableWithAggregatesFilter<"Ghe"> | string | null
    ma_rap?: IntNullableWithAggregatesFilter<"Ghe"> | number | null
  }

  export type HeThongRapWhereInput = {
    AND?: HeThongRapWhereInput | HeThongRapWhereInput[]
    OR?: HeThongRapWhereInput[]
    NOT?: HeThongRapWhereInput | HeThongRapWhereInput[]
    ma_he_thong_rap?: IntFilter<"HeThongRap"> | number
    ten_he_thong_rap?: StringNullableFilter<"HeThongRap"> | string | null
    logo?: StringNullableFilter<"HeThongRap"> | string | null
    CumRap?: CumRapListRelationFilter
  }

  export type HeThongRapOrderByWithRelationInput = {
    ma_he_thong_rap?: SortOrder
    ten_he_thong_rap?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    CumRap?: CumRapOrderByRelationAggregateInput
    _relevance?: HeThongRapOrderByRelevanceInput
  }

  export type HeThongRapWhereUniqueInput = Prisma.AtLeast<{
    ma_he_thong_rap?: number
    AND?: HeThongRapWhereInput | HeThongRapWhereInput[]
    OR?: HeThongRapWhereInput[]
    NOT?: HeThongRapWhereInput | HeThongRapWhereInput[]
    ten_he_thong_rap?: StringNullableFilter<"HeThongRap"> | string | null
    logo?: StringNullableFilter<"HeThongRap"> | string | null
    CumRap?: CumRapListRelationFilter
  }, "ma_he_thong_rap">

  export type HeThongRapOrderByWithAggregationInput = {
    ma_he_thong_rap?: SortOrder
    ten_he_thong_rap?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    _count?: HeThongRapCountOrderByAggregateInput
    _avg?: HeThongRapAvgOrderByAggregateInput
    _max?: HeThongRapMaxOrderByAggregateInput
    _min?: HeThongRapMinOrderByAggregateInput
    _sum?: HeThongRapSumOrderByAggregateInput
  }

  export type HeThongRapScalarWhereWithAggregatesInput = {
    AND?: HeThongRapScalarWhereWithAggregatesInput | HeThongRapScalarWhereWithAggregatesInput[]
    OR?: HeThongRapScalarWhereWithAggregatesInput[]
    NOT?: HeThongRapScalarWhereWithAggregatesInput | HeThongRapScalarWhereWithAggregatesInput[]
    ma_he_thong_rap?: IntWithAggregatesFilter<"HeThongRap"> | number
    ten_he_thong_rap?: StringNullableWithAggregatesFilter<"HeThongRap"> | string | null
    logo?: StringNullableWithAggregatesFilter<"HeThongRap"> | string | null
  }

  export type LichChieuWhereInput = {
    AND?: LichChieuWhereInput | LichChieuWhereInput[]
    OR?: LichChieuWhereInput[]
    NOT?: LichChieuWhereInput | LichChieuWhereInput[]
    ma_lich_chieu?: IntFilter<"LichChieu"> | number
    ma_rap?: IntNullableFilter<"LichChieu"> | number | null
    ma_phim?: IntNullableFilter<"LichChieu"> | number | null
    ngay_gio_chieu?: DateTimeNullableFilter<"LichChieu"> | Date | string | null
    gia_ve?: FloatNullableFilter<"LichChieu"> | number | null
    DatVe?: DatVeListRelationFilter
    RapPhim?: XOR<RapPhimNullableScalarRelationFilter, RapPhimWhereInput> | null
    Phim?: XOR<PhimNullableScalarRelationFilter, PhimWhereInput> | null
  }

  export type LichChieuOrderByWithRelationInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrderInput | SortOrder
    ma_phim?: SortOrderInput | SortOrder
    ngay_gio_chieu?: SortOrderInput | SortOrder
    gia_ve?: SortOrderInput | SortOrder
    DatVe?: DatVeOrderByRelationAggregateInput
    RapPhim?: RapPhimOrderByWithRelationInput
    Phim?: PhimOrderByWithRelationInput
  }

  export type LichChieuWhereUniqueInput = Prisma.AtLeast<{
    ma_lich_chieu?: number
    AND?: LichChieuWhereInput | LichChieuWhereInput[]
    OR?: LichChieuWhereInput[]
    NOT?: LichChieuWhereInput | LichChieuWhereInput[]
    ma_rap?: IntNullableFilter<"LichChieu"> | number | null
    ma_phim?: IntNullableFilter<"LichChieu"> | number | null
    ngay_gio_chieu?: DateTimeNullableFilter<"LichChieu"> | Date | string | null
    gia_ve?: FloatNullableFilter<"LichChieu"> | number | null
    DatVe?: DatVeListRelationFilter
    RapPhim?: XOR<RapPhimNullableScalarRelationFilter, RapPhimWhereInput> | null
    Phim?: XOR<PhimNullableScalarRelationFilter, PhimWhereInput> | null
  }, "ma_lich_chieu">

  export type LichChieuOrderByWithAggregationInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrderInput | SortOrder
    ma_phim?: SortOrderInput | SortOrder
    ngay_gio_chieu?: SortOrderInput | SortOrder
    gia_ve?: SortOrderInput | SortOrder
    _count?: LichChieuCountOrderByAggregateInput
    _avg?: LichChieuAvgOrderByAggregateInput
    _max?: LichChieuMaxOrderByAggregateInput
    _min?: LichChieuMinOrderByAggregateInput
    _sum?: LichChieuSumOrderByAggregateInput
  }

  export type LichChieuScalarWhereWithAggregatesInput = {
    AND?: LichChieuScalarWhereWithAggregatesInput | LichChieuScalarWhereWithAggregatesInput[]
    OR?: LichChieuScalarWhereWithAggregatesInput[]
    NOT?: LichChieuScalarWhereWithAggregatesInput | LichChieuScalarWhereWithAggregatesInput[]
    ma_lich_chieu?: IntWithAggregatesFilter<"LichChieu"> | number
    ma_rap?: IntNullableWithAggregatesFilter<"LichChieu"> | number | null
    ma_phim?: IntNullableWithAggregatesFilter<"LichChieu"> | number | null
    ngay_gio_chieu?: DateTimeNullableWithAggregatesFilter<"LichChieu"> | Date | string | null
    gia_ve?: FloatNullableWithAggregatesFilter<"LichChieu"> | number | null
  }

  export type NguoiDungWhereInput = {
    AND?: NguoiDungWhereInput | NguoiDungWhereInput[]
    OR?: NguoiDungWhereInput[]
    NOT?: NguoiDungWhereInput | NguoiDungWhereInput[]
    tai_khoan?: IntFilter<"NguoiDung"> | number
    ho_ten?: StringNullableFilter<"NguoiDung"> | string | null
    email?: StringNullableFilter<"NguoiDung"> | string | null
    so_dt?: StringNullableFilter<"NguoiDung"> | string | null
    mat_khau?: StringNullableFilter<"NguoiDung"> | string | null
    ma_loai_nguoi_dung?: IntFilter<"NguoiDung"> | number
    DatVe?: DatVeListRelationFilter
    LoaiNguoiDung?: XOR<LoaiNguoiDungScalarRelationFilter, LoaiNguoiDungWhereInput>
  }

  export type NguoiDungOrderByWithRelationInput = {
    tai_khoan?: SortOrder
    ho_ten?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    so_dt?: SortOrderInput | SortOrder
    mat_khau?: SortOrderInput | SortOrder
    ma_loai_nguoi_dung?: SortOrder
    DatVe?: DatVeOrderByRelationAggregateInput
    LoaiNguoiDung?: LoaiNguoiDungOrderByWithRelationInput
    _relevance?: NguoiDungOrderByRelevanceInput
  }

  export type NguoiDungWhereUniqueInput = Prisma.AtLeast<{
    tai_khoan?: number
    AND?: NguoiDungWhereInput | NguoiDungWhereInput[]
    OR?: NguoiDungWhereInput[]
    NOT?: NguoiDungWhereInput | NguoiDungWhereInput[]
    ho_ten?: StringNullableFilter<"NguoiDung"> | string | null
    email?: StringNullableFilter<"NguoiDung"> | string | null
    so_dt?: StringNullableFilter<"NguoiDung"> | string | null
    mat_khau?: StringNullableFilter<"NguoiDung"> | string | null
    ma_loai_nguoi_dung?: IntFilter<"NguoiDung"> | number
    DatVe?: DatVeListRelationFilter
    LoaiNguoiDung?: XOR<LoaiNguoiDungScalarRelationFilter, LoaiNguoiDungWhereInput>
  }, "tai_khoan">

  export type NguoiDungOrderByWithAggregationInput = {
    tai_khoan?: SortOrder
    ho_ten?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    so_dt?: SortOrderInput | SortOrder
    mat_khau?: SortOrderInput | SortOrder
    ma_loai_nguoi_dung?: SortOrder
    _count?: NguoiDungCountOrderByAggregateInput
    _avg?: NguoiDungAvgOrderByAggregateInput
    _max?: NguoiDungMaxOrderByAggregateInput
    _min?: NguoiDungMinOrderByAggregateInput
    _sum?: NguoiDungSumOrderByAggregateInput
  }

  export type NguoiDungScalarWhereWithAggregatesInput = {
    AND?: NguoiDungScalarWhereWithAggregatesInput | NguoiDungScalarWhereWithAggregatesInput[]
    OR?: NguoiDungScalarWhereWithAggregatesInput[]
    NOT?: NguoiDungScalarWhereWithAggregatesInput | NguoiDungScalarWhereWithAggregatesInput[]
    tai_khoan?: IntWithAggregatesFilter<"NguoiDung"> | number
    ho_ten?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    email?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    so_dt?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    mat_khau?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    ma_loai_nguoi_dung?: IntWithAggregatesFilter<"NguoiDung"> | number
  }

  export type PhimWhereInput = {
    AND?: PhimWhereInput | PhimWhereInput[]
    OR?: PhimWhereInput[]
    NOT?: PhimWhereInput | PhimWhereInput[]
    ma_phim?: IntFilter<"Phim"> | number
    ten_phim?: StringNullableFilter<"Phim"> | string | null
    trailer?: StringNullableFilter<"Phim"> | string | null
    hinh_anh?: StringNullableFilter<"Phim"> | string | null
    mo_ta?: StringNullableFilter<"Phim"> | string | null
    ngay_khoi_chieu?: DateTimeNullableFilter<"Phim"> | Date | string | null
    danh_gia?: IntNullableFilter<"Phim"> | number | null
    hot?: BoolNullableFilter<"Phim"> | boolean | null
    dang_chieu?: BoolNullableFilter<"Phim"> | boolean | null
    sap_chieu?: BoolNullableFilter<"Phim"> | boolean | null
    Banner?: BannerListRelationFilter
    LichChieu?: LichChieuListRelationFilter
  }

  export type PhimOrderByWithRelationInput = {
    ma_phim?: SortOrder
    ten_phim?: SortOrderInput | SortOrder
    trailer?: SortOrderInput | SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    mo_ta?: SortOrderInput | SortOrder
    ngay_khoi_chieu?: SortOrderInput | SortOrder
    danh_gia?: SortOrderInput | SortOrder
    hot?: SortOrderInput | SortOrder
    dang_chieu?: SortOrderInput | SortOrder
    sap_chieu?: SortOrderInput | SortOrder
    Banner?: BannerOrderByRelationAggregateInput
    LichChieu?: LichChieuOrderByRelationAggregateInput
    _relevance?: PhimOrderByRelevanceInput
  }

  export type PhimWhereUniqueInput = Prisma.AtLeast<{
    ma_phim?: number
    AND?: PhimWhereInput | PhimWhereInput[]
    OR?: PhimWhereInput[]
    NOT?: PhimWhereInput | PhimWhereInput[]
    ten_phim?: StringNullableFilter<"Phim"> | string | null
    trailer?: StringNullableFilter<"Phim"> | string | null
    hinh_anh?: StringNullableFilter<"Phim"> | string | null
    mo_ta?: StringNullableFilter<"Phim"> | string | null
    ngay_khoi_chieu?: DateTimeNullableFilter<"Phim"> | Date | string | null
    danh_gia?: IntNullableFilter<"Phim"> | number | null
    hot?: BoolNullableFilter<"Phim"> | boolean | null
    dang_chieu?: BoolNullableFilter<"Phim"> | boolean | null
    sap_chieu?: BoolNullableFilter<"Phim"> | boolean | null
    Banner?: BannerListRelationFilter
    LichChieu?: LichChieuListRelationFilter
  }, "ma_phim">

  export type PhimOrderByWithAggregationInput = {
    ma_phim?: SortOrder
    ten_phim?: SortOrderInput | SortOrder
    trailer?: SortOrderInput | SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    mo_ta?: SortOrderInput | SortOrder
    ngay_khoi_chieu?: SortOrderInput | SortOrder
    danh_gia?: SortOrderInput | SortOrder
    hot?: SortOrderInput | SortOrder
    dang_chieu?: SortOrderInput | SortOrder
    sap_chieu?: SortOrderInput | SortOrder
    _count?: PhimCountOrderByAggregateInput
    _avg?: PhimAvgOrderByAggregateInput
    _max?: PhimMaxOrderByAggregateInput
    _min?: PhimMinOrderByAggregateInput
    _sum?: PhimSumOrderByAggregateInput
  }

  export type PhimScalarWhereWithAggregatesInput = {
    AND?: PhimScalarWhereWithAggregatesInput | PhimScalarWhereWithAggregatesInput[]
    OR?: PhimScalarWhereWithAggregatesInput[]
    NOT?: PhimScalarWhereWithAggregatesInput | PhimScalarWhereWithAggregatesInput[]
    ma_phim?: IntWithAggregatesFilter<"Phim"> | number
    ten_phim?: StringNullableWithAggregatesFilter<"Phim"> | string | null
    trailer?: StringNullableWithAggregatesFilter<"Phim"> | string | null
    hinh_anh?: StringNullableWithAggregatesFilter<"Phim"> | string | null
    mo_ta?: StringNullableWithAggregatesFilter<"Phim"> | string | null
    ngay_khoi_chieu?: DateTimeNullableWithAggregatesFilter<"Phim"> | Date | string | null
    danh_gia?: IntNullableWithAggregatesFilter<"Phim"> | number | null
    hot?: BoolNullableWithAggregatesFilter<"Phim"> | boolean | null
    dang_chieu?: BoolNullableWithAggregatesFilter<"Phim"> | boolean | null
    sap_chieu?: BoolNullableWithAggregatesFilter<"Phim"> | boolean | null
  }

  export type RapPhimWhereInput = {
    AND?: RapPhimWhereInput | RapPhimWhereInput[]
    OR?: RapPhimWhereInput[]
    NOT?: RapPhimWhereInput | RapPhimWhereInput[]
    ma_rap?: IntFilter<"RapPhim"> | number
    ten_rap?: StringNullableFilter<"RapPhim"> | string | null
    ma_cum_rap?: IntNullableFilter<"RapPhim"> | number | null
    Ghe?: GheListRelationFilter
    LichChieu?: LichChieuListRelationFilter
    CumRap?: XOR<CumRapNullableScalarRelationFilter, CumRapWhereInput> | null
  }

  export type RapPhimOrderByWithRelationInput = {
    ma_rap?: SortOrder
    ten_rap?: SortOrderInput | SortOrder
    ma_cum_rap?: SortOrderInput | SortOrder
    Ghe?: GheOrderByRelationAggregateInput
    LichChieu?: LichChieuOrderByRelationAggregateInput
    CumRap?: CumRapOrderByWithRelationInput
    _relevance?: RapPhimOrderByRelevanceInput
  }

  export type RapPhimWhereUniqueInput = Prisma.AtLeast<{
    ma_rap?: number
    AND?: RapPhimWhereInput | RapPhimWhereInput[]
    OR?: RapPhimWhereInput[]
    NOT?: RapPhimWhereInput | RapPhimWhereInput[]
    ten_rap?: StringNullableFilter<"RapPhim"> | string | null
    ma_cum_rap?: IntNullableFilter<"RapPhim"> | number | null
    Ghe?: GheListRelationFilter
    LichChieu?: LichChieuListRelationFilter
    CumRap?: XOR<CumRapNullableScalarRelationFilter, CumRapWhereInput> | null
  }, "ma_rap">

  export type RapPhimOrderByWithAggregationInput = {
    ma_rap?: SortOrder
    ten_rap?: SortOrderInput | SortOrder
    ma_cum_rap?: SortOrderInput | SortOrder
    _count?: RapPhimCountOrderByAggregateInput
    _avg?: RapPhimAvgOrderByAggregateInput
    _max?: RapPhimMaxOrderByAggregateInput
    _min?: RapPhimMinOrderByAggregateInput
    _sum?: RapPhimSumOrderByAggregateInput
  }

  export type RapPhimScalarWhereWithAggregatesInput = {
    AND?: RapPhimScalarWhereWithAggregatesInput | RapPhimScalarWhereWithAggregatesInput[]
    OR?: RapPhimScalarWhereWithAggregatesInput[]
    NOT?: RapPhimScalarWhereWithAggregatesInput | RapPhimScalarWhereWithAggregatesInput[]
    ma_rap?: IntWithAggregatesFilter<"RapPhim"> | number
    ten_rap?: StringNullableWithAggregatesFilter<"RapPhim"> | string | null
    ma_cum_rap?: IntNullableWithAggregatesFilter<"RapPhim"> | number | null
  }

  export type LoaiNguoiDungWhereInput = {
    AND?: LoaiNguoiDungWhereInput | LoaiNguoiDungWhereInput[]
    OR?: LoaiNguoiDungWhereInput[]
    NOT?: LoaiNguoiDungWhereInput | LoaiNguoiDungWhereInput[]
    ma_loai_nguoi_dung?: IntFilter<"LoaiNguoiDung"> | number
    loai_nguoi_dung?: StringNullableFilter<"LoaiNguoiDung"> | string | null
    NguoiDung?: NguoiDungListRelationFilter
  }

  export type LoaiNguoiDungOrderByWithRelationInput = {
    ma_loai_nguoi_dung?: SortOrder
    loai_nguoi_dung?: SortOrderInput | SortOrder
    NguoiDung?: NguoiDungOrderByRelationAggregateInput
    _relevance?: LoaiNguoiDungOrderByRelevanceInput
  }

  export type LoaiNguoiDungWhereUniqueInput = Prisma.AtLeast<{
    ma_loai_nguoi_dung?: number
    AND?: LoaiNguoiDungWhereInput | LoaiNguoiDungWhereInput[]
    OR?: LoaiNguoiDungWhereInput[]
    NOT?: LoaiNguoiDungWhereInput | LoaiNguoiDungWhereInput[]
    loai_nguoi_dung?: StringNullableFilter<"LoaiNguoiDung"> | string | null
    NguoiDung?: NguoiDungListRelationFilter
  }, "ma_loai_nguoi_dung">

  export type LoaiNguoiDungOrderByWithAggregationInput = {
    ma_loai_nguoi_dung?: SortOrder
    loai_nguoi_dung?: SortOrderInput | SortOrder
    _count?: LoaiNguoiDungCountOrderByAggregateInput
    _avg?: LoaiNguoiDungAvgOrderByAggregateInput
    _max?: LoaiNguoiDungMaxOrderByAggregateInput
    _min?: LoaiNguoiDungMinOrderByAggregateInput
    _sum?: LoaiNguoiDungSumOrderByAggregateInput
  }

  export type LoaiNguoiDungScalarWhereWithAggregatesInput = {
    AND?: LoaiNguoiDungScalarWhereWithAggregatesInput | LoaiNguoiDungScalarWhereWithAggregatesInput[]
    OR?: LoaiNguoiDungScalarWhereWithAggregatesInput[]
    NOT?: LoaiNguoiDungScalarWhereWithAggregatesInput | LoaiNguoiDungScalarWhereWithAggregatesInput[]
    ma_loai_nguoi_dung?: IntWithAggregatesFilter<"LoaiNguoiDung"> | number
    loai_nguoi_dung?: StringNullableWithAggregatesFilter<"LoaiNguoiDung"> | string | null
  }

  export type BannerCreateInput = {
    hinh_anh?: string | null
    Phim?: PhimCreateNestedOneWithoutBannerInput
  }

  export type BannerUncheckedCreateInput = {
    ma_banner?: number
    ma_phim?: number | null
    hinh_anh?: string | null
  }

  export type BannerUpdateInput = {
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    Phim?: PhimUpdateOneWithoutBannerNestedInput
  }

  export type BannerUncheckedUpdateInput = {
    ma_banner?: IntFieldUpdateOperationsInput | number
    ma_phim?: NullableIntFieldUpdateOperationsInput | number | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BannerCreateManyInput = {
    ma_banner?: number
    ma_phim?: number | null
    hinh_anh?: string | null
  }

  export type BannerUpdateManyMutationInput = {
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BannerUncheckedUpdateManyInput = {
    ma_banner?: IntFieldUpdateOperationsInput | number
    ma_phim?: NullableIntFieldUpdateOperationsInput | number | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CumRapCreateInput = {
    ten_cum_rap?: string | null
    dia_chi?: string | null
    HeThongRap?: HeThongRapCreateNestedOneWithoutCumRapInput
    RapPhim?: RapPhimCreateNestedManyWithoutCumRapInput
  }

  export type CumRapUncheckedCreateInput = {
    ma_cum_rap?: number
    ten_cum_rap?: string | null
    dia_chi?: string | null
    ma_he_thong_rap?: number | null
    RapPhim?: RapPhimUncheckedCreateNestedManyWithoutCumRapInput
  }

  export type CumRapUpdateInput = {
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    HeThongRap?: HeThongRapUpdateOneWithoutCumRapNestedInput
    RapPhim?: RapPhimUpdateManyWithoutCumRapNestedInput
  }

  export type CumRapUncheckedUpdateInput = {
    ma_cum_rap?: IntFieldUpdateOperationsInput | number
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    ma_he_thong_rap?: NullableIntFieldUpdateOperationsInput | number | null
    RapPhim?: RapPhimUncheckedUpdateManyWithoutCumRapNestedInput
  }

  export type CumRapCreateManyInput = {
    ma_cum_rap?: number
    ten_cum_rap?: string | null
    dia_chi?: string | null
    ma_he_thong_rap?: number | null
  }

  export type CumRapUpdateManyMutationInput = {
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CumRapUncheckedUpdateManyInput = {
    ma_cum_rap?: IntFieldUpdateOperationsInput | number
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    ma_he_thong_rap?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DatVeCreateInput = {
    NguoiDung?: NguoiDungCreateNestedOneWithoutDatVeInput
    LichChieu?: LichChieuCreateNestedOneWithoutDatVeInput
    Ghe?: GheCreateNestedOneWithoutDatVeInput
  }

  export type DatVeUncheckedCreateInput = {
    ma_ve?: number
    tai_khoan?: number | null
    ma_lich_chieu?: number | null
    ma_ghe?: number | null
  }

  export type DatVeUpdateInput = {
    NguoiDung?: NguoiDungUpdateOneWithoutDatVeNestedInput
    LichChieu?: LichChieuUpdateOneWithoutDatVeNestedInput
    Ghe?: GheUpdateOneWithoutDatVeNestedInput
  }

  export type DatVeUncheckedUpdateInput = {
    ma_ve?: IntFieldUpdateOperationsInput | number
    tai_khoan?: NullableIntFieldUpdateOperationsInput | number | null
    ma_lich_chieu?: NullableIntFieldUpdateOperationsInput | number | null
    ma_ghe?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DatVeCreateManyInput = {
    ma_ve?: number
    tai_khoan?: number | null
    ma_lich_chieu?: number | null
    ma_ghe?: number | null
  }

  export type DatVeUpdateManyMutationInput = {

  }

  export type DatVeUncheckedUpdateManyInput = {
    ma_ve?: IntFieldUpdateOperationsInput | number
    tai_khoan?: NullableIntFieldUpdateOperationsInput | number | null
    ma_lich_chieu?: NullableIntFieldUpdateOperationsInput | number | null
    ma_ghe?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GheCreateInput = {
    ten_ghe?: string | null
    loai_ghe?: string | null
    DatVe?: DatVeCreateNestedManyWithoutGheInput
    RapPhim?: RapPhimCreateNestedOneWithoutGheInput
  }

  export type GheUncheckedCreateInput = {
    ma_ghe?: number
    ten_ghe?: string | null
    loai_ghe?: string | null
    ma_rap?: number | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutGheInput
  }

  export type GheUpdateInput = {
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    DatVe?: DatVeUpdateManyWithoutGheNestedInput
    RapPhim?: RapPhimUpdateOneWithoutGheNestedInput
  }

  export type GheUncheckedUpdateInput = {
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUncheckedUpdateManyWithoutGheNestedInput
  }

  export type GheCreateManyInput = {
    ma_ghe?: number
    ten_ghe?: string | null
    loai_ghe?: string | null
    ma_rap?: number | null
  }

  export type GheUpdateManyMutationInput = {
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GheUncheckedUpdateManyInput = {
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HeThongRapCreateInput = {
    ten_he_thong_rap?: string | null
    logo?: string | null
    CumRap?: CumRapCreateNestedManyWithoutHeThongRapInput
  }

  export type HeThongRapUncheckedCreateInput = {
    ma_he_thong_rap?: number
    ten_he_thong_rap?: string | null
    logo?: string | null
    CumRap?: CumRapUncheckedCreateNestedManyWithoutHeThongRapInput
  }

  export type HeThongRapUpdateInput = {
    ten_he_thong_rap?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    CumRap?: CumRapUpdateManyWithoutHeThongRapNestedInput
  }

  export type HeThongRapUncheckedUpdateInput = {
    ma_he_thong_rap?: IntFieldUpdateOperationsInput | number
    ten_he_thong_rap?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    CumRap?: CumRapUncheckedUpdateManyWithoutHeThongRapNestedInput
  }

  export type HeThongRapCreateManyInput = {
    ma_he_thong_rap?: number
    ten_he_thong_rap?: string | null
    logo?: string | null
  }

  export type HeThongRapUpdateManyMutationInput = {
    ten_he_thong_rap?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HeThongRapUncheckedUpdateManyInput = {
    ma_he_thong_rap?: IntFieldUpdateOperationsInput | number
    ten_he_thong_rap?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LichChieuCreateInput = {
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    DatVe?: DatVeCreateNestedManyWithoutLichChieuInput
    RapPhim?: RapPhimCreateNestedOneWithoutLichChieuInput
    Phim?: PhimCreateNestedOneWithoutLichChieuInput
  }

  export type LichChieuUncheckedCreateInput = {
    ma_lich_chieu?: number
    ma_rap?: number | null
    ma_phim?: number | null
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutLichChieuInput
  }

  export type LichChieuUpdateInput = {
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableFloatFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUpdateManyWithoutLichChieuNestedInput
    RapPhim?: RapPhimUpdateOneWithoutLichChieuNestedInput
    Phim?: PhimUpdateOneWithoutLichChieuNestedInput
  }

  export type LichChieuUncheckedUpdateInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
    ma_phim?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableFloatFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUncheckedUpdateManyWithoutLichChieuNestedInput
  }

  export type LichChieuCreateManyInput = {
    ma_lich_chieu?: number
    ma_rap?: number | null
    ma_phim?: number | null
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
  }

  export type LichChieuUpdateManyMutationInput = {
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type LichChieuUncheckedUpdateManyInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
    ma_phim?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type NguoiDungCreateInput = {
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    DatVe?: DatVeCreateNestedManyWithoutNguoiDungInput
    LoaiNguoiDung?: LoaiNguoiDungCreateNestedOneWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateInput = {
    tai_khoan?: number
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    ma_loai_nguoi_dung?: number
    DatVe?: DatVeUncheckedCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungUpdateInput = {
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    DatVe?: DatVeUpdateManyWithoutNguoiDungNestedInput
    LoaiNguoiDung?: LoaiNguoiDungUpdateOneRequiredWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    ma_loai_nguoi_dung?: IntFieldUpdateOperationsInput | number
    DatVe?: DatVeUncheckedUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungCreateManyInput = {
    tai_khoan?: number
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    ma_loai_nguoi_dung?: number
  }

  export type NguoiDungUpdateManyMutationInput = {
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NguoiDungUncheckedUpdateManyInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    ma_loai_nguoi_dung?: IntFieldUpdateOperationsInput | number
  }

  export type PhimCreateInput = {
    ten_phim?: string | null
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number | null
    hot?: boolean | null
    dang_chieu?: boolean | null
    sap_chieu?: boolean | null
    Banner?: BannerCreateNestedManyWithoutPhimInput
    LichChieu?: LichChieuCreateNestedManyWithoutPhimInput
  }

  export type PhimUncheckedCreateInput = {
    ma_phim?: number
    ten_phim?: string | null
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number | null
    hot?: boolean | null
    dang_chieu?: boolean | null
    sap_chieu?: boolean | null
    Banner?: BannerUncheckedCreateNestedManyWithoutPhimInput
    LichChieu?: LichChieuUncheckedCreateNestedManyWithoutPhimInput
  }

  export type PhimUpdateInput = {
    ten_phim?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: NullableIntFieldUpdateOperationsInput | number | null
    hot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dang_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sap_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Banner?: BannerUpdateManyWithoutPhimNestedInput
    LichChieu?: LichChieuUpdateManyWithoutPhimNestedInput
  }

  export type PhimUncheckedUpdateInput = {
    ma_phim?: IntFieldUpdateOperationsInput | number
    ten_phim?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: NullableIntFieldUpdateOperationsInput | number | null
    hot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dang_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sap_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Banner?: BannerUncheckedUpdateManyWithoutPhimNestedInput
    LichChieu?: LichChieuUncheckedUpdateManyWithoutPhimNestedInput
  }

  export type PhimCreateManyInput = {
    ma_phim?: number
    ten_phim?: string | null
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number | null
    hot?: boolean | null
    dang_chieu?: boolean | null
    sap_chieu?: boolean | null
  }

  export type PhimUpdateManyMutationInput = {
    ten_phim?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: NullableIntFieldUpdateOperationsInput | number | null
    hot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dang_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sap_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PhimUncheckedUpdateManyInput = {
    ma_phim?: IntFieldUpdateOperationsInput | number
    ten_phim?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: NullableIntFieldUpdateOperationsInput | number | null
    hot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dang_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sap_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RapPhimCreateInput = {
    ten_rap?: string | null
    Ghe?: GheCreateNestedManyWithoutRapPhimInput
    LichChieu?: LichChieuCreateNestedManyWithoutRapPhimInput
    CumRap?: CumRapCreateNestedOneWithoutRapPhimInput
  }

  export type RapPhimUncheckedCreateInput = {
    ma_rap?: number
    ten_rap?: string | null
    ma_cum_rap?: number | null
    Ghe?: GheUncheckedCreateNestedManyWithoutRapPhimInput
    LichChieu?: LichChieuUncheckedCreateNestedManyWithoutRapPhimInput
  }

  export type RapPhimUpdateInput = {
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    Ghe?: GheUpdateManyWithoutRapPhimNestedInput
    LichChieu?: LichChieuUpdateManyWithoutRapPhimNestedInput
    CumRap?: CumRapUpdateOneWithoutRapPhimNestedInput
  }

  export type RapPhimUncheckedUpdateInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    ma_cum_rap?: NullableIntFieldUpdateOperationsInput | number | null
    Ghe?: GheUncheckedUpdateManyWithoutRapPhimNestedInput
    LichChieu?: LichChieuUncheckedUpdateManyWithoutRapPhimNestedInput
  }

  export type RapPhimCreateManyInput = {
    ma_rap?: number
    ten_rap?: string | null
    ma_cum_rap?: number | null
  }

  export type RapPhimUpdateManyMutationInput = {
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RapPhimUncheckedUpdateManyInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    ma_cum_rap?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LoaiNguoiDungCreateInput = {
    loai_nguoi_dung?: string | null
    NguoiDung?: NguoiDungCreateNestedManyWithoutLoaiNguoiDungInput
  }

  export type LoaiNguoiDungUncheckedCreateInput = {
    ma_loai_nguoi_dung?: number
    loai_nguoi_dung?: string | null
    NguoiDung?: NguoiDungUncheckedCreateNestedManyWithoutLoaiNguoiDungInput
  }

  export type LoaiNguoiDungUpdateInput = {
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    NguoiDung?: NguoiDungUpdateManyWithoutLoaiNguoiDungNestedInput
  }

  export type LoaiNguoiDungUncheckedUpdateInput = {
    ma_loai_nguoi_dung?: IntFieldUpdateOperationsInput | number
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    NguoiDung?: NguoiDungUncheckedUpdateManyWithoutLoaiNguoiDungNestedInput
  }

  export type LoaiNguoiDungCreateManyInput = {
    ma_loai_nguoi_dung?: number
    loai_nguoi_dung?: string | null
  }

  export type LoaiNguoiDungUpdateManyMutationInput = {
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoaiNguoiDungUncheckedUpdateManyInput = {
    ma_loai_nguoi_dung?: IntFieldUpdateOperationsInput | number
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PhimNullableScalarRelationFilter = {
    is?: PhimWhereInput | null
    isNot?: PhimWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BannerOrderByRelevanceInput = {
    fields: BannerOrderByRelevanceFieldEnum | BannerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BannerCountOrderByAggregateInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
    hinh_anh?: SortOrder
  }

  export type BannerAvgOrderByAggregateInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
    hinh_anh?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
    hinh_anh?: SortOrder
  }

  export type BannerSumOrderByAggregateInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type HeThongRapNullableScalarRelationFilter = {
    is?: HeThongRapWhereInput | null
    isNot?: HeThongRapWhereInput | null
  }

  export type RapPhimListRelationFilter = {
    every?: RapPhimWhereInput
    some?: RapPhimWhereInput
    none?: RapPhimWhereInput
  }

  export type RapPhimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CumRapOrderByRelevanceInput = {
    fields: CumRapOrderByRelevanceFieldEnum | CumRapOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CumRapCountOrderByAggregateInput = {
    ma_cum_rap?: SortOrder
    ten_cum_rap?: SortOrder
    dia_chi?: SortOrder
    ma_he_thong_rap?: SortOrder
  }

  export type CumRapAvgOrderByAggregateInput = {
    ma_cum_rap?: SortOrder
    ma_he_thong_rap?: SortOrder
  }

  export type CumRapMaxOrderByAggregateInput = {
    ma_cum_rap?: SortOrder
    ten_cum_rap?: SortOrder
    dia_chi?: SortOrder
    ma_he_thong_rap?: SortOrder
  }

  export type CumRapMinOrderByAggregateInput = {
    ma_cum_rap?: SortOrder
    ten_cum_rap?: SortOrder
    dia_chi?: SortOrder
    ma_he_thong_rap?: SortOrder
  }

  export type CumRapSumOrderByAggregateInput = {
    ma_cum_rap?: SortOrder
    ma_he_thong_rap?: SortOrder
  }

  export type NguoiDungNullableScalarRelationFilter = {
    is?: NguoiDungWhereInput | null
    isNot?: NguoiDungWhereInput | null
  }

  export type LichChieuNullableScalarRelationFilter = {
    is?: LichChieuWhereInput | null
    isNot?: LichChieuWhereInput | null
  }

  export type GheNullableScalarRelationFilter = {
    is?: GheWhereInput | null
    isNot?: GheWhereInput | null
  }

  export type DatVeTai_khoanMa_lich_chieuMa_gheCompoundUniqueInput = {
    tai_khoan: number
    ma_lich_chieu: number
    ma_ghe: number
  }

  export type DatVeCountOrderByAggregateInput = {
    ma_ve?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
  }

  export type DatVeAvgOrderByAggregateInput = {
    ma_ve?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
  }

  export type DatVeMaxOrderByAggregateInput = {
    ma_ve?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
  }

  export type DatVeMinOrderByAggregateInput = {
    ma_ve?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
  }

  export type DatVeSumOrderByAggregateInput = {
    ma_ve?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
  }

  export type DatVeListRelationFilter = {
    every?: DatVeWhereInput
    some?: DatVeWhereInput
    none?: DatVeWhereInput
  }

  export type RapPhimNullableScalarRelationFilter = {
    is?: RapPhimWhereInput | null
    isNot?: RapPhimWhereInput | null
  }

  export type DatVeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GheOrderByRelevanceInput = {
    fields: GheOrderByRelevanceFieldEnum | GheOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GheCountOrderByAggregateInput = {
    ma_ghe?: SortOrder
    ten_ghe?: SortOrder
    loai_ghe?: SortOrder
    ma_rap?: SortOrder
  }

  export type GheAvgOrderByAggregateInput = {
    ma_ghe?: SortOrder
    ma_rap?: SortOrder
  }

  export type GheMaxOrderByAggregateInput = {
    ma_ghe?: SortOrder
    ten_ghe?: SortOrder
    loai_ghe?: SortOrder
    ma_rap?: SortOrder
  }

  export type GheMinOrderByAggregateInput = {
    ma_ghe?: SortOrder
    ten_ghe?: SortOrder
    loai_ghe?: SortOrder
    ma_rap?: SortOrder
  }

  export type GheSumOrderByAggregateInput = {
    ma_ghe?: SortOrder
    ma_rap?: SortOrder
  }

  export type CumRapListRelationFilter = {
    every?: CumRapWhereInput
    some?: CumRapWhereInput
    none?: CumRapWhereInput
  }

  export type CumRapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HeThongRapOrderByRelevanceInput = {
    fields: HeThongRapOrderByRelevanceFieldEnum | HeThongRapOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HeThongRapCountOrderByAggregateInput = {
    ma_he_thong_rap?: SortOrder
    ten_he_thong_rap?: SortOrder
    logo?: SortOrder
  }

  export type HeThongRapAvgOrderByAggregateInput = {
    ma_he_thong_rap?: SortOrder
  }

  export type HeThongRapMaxOrderByAggregateInput = {
    ma_he_thong_rap?: SortOrder
    ten_he_thong_rap?: SortOrder
    logo?: SortOrder
  }

  export type HeThongRapMinOrderByAggregateInput = {
    ma_he_thong_rap?: SortOrder
    ten_he_thong_rap?: SortOrder
    logo?: SortOrder
  }

  export type HeThongRapSumOrderByAggregateInput = {
    ma_he_thong_rap?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type LichChieuCountOrderByAggregateInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    ngay_gio_chieu?: SortOrder
    gia_ve?: SortOrder
  }

  export type LichChieuAvgOrderByAggregateInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    gia_ve?: SortOrder
  }

  export type LichChieuMaxOrderByAggregateInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    ngay_gio_chieu?: SortOrder
    gia_ve?: SortOrder
  }

  export type LichChieuMinOrderByAggregateInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    ngay_gio_chieu?: SortOrder
    gia_ve?: SortOrder
  }

  export type LichChieuSumOrderByAggregateInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    gia_ve?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type LoaiNguoiDungScalarRelationFilter = {
    is?: LoaiNguoiDungWhereInput
    isNot?: LoaiNguoiDungWhereInput
  }

  export type NguoiDungOrderByRelevanceInput = {
    fields: NguoiDungOrderByRelevanceFieldEnum | NguoiDungOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NguoiDungCountOrderByAggregateInput = {
    tai_khoan?: SortOrder
    ho_ten?: SortOrder
    email?: SortOrder
    so_dt?: SortOrder
    mat_khau?: SortOrder
    ma_loai_nguoi_dung?: SortOrder
  }

  export type NguoiDungAvgOrderByAggregateInput = {
    tai_khoan?: SortOrder
    ma_loai_nguoi_dung?: SortOrder
  }

  export type NguoiDungMaxOrderByAggregateInput = {
    tai_khoan?: SortOrder
    ho_ten?: SortOrder
    email?: SortOrder
    so_dt?: SortOrder
    mat_khau?: SortOrder
    ma_loai_nguoi_dung?: SortOrder
  }

  export type NguoiDungMinOrderByAggregateInput = {
    tai_khoan?: SortOrder
    ho_ten?: SortOrder
    email?: SortOrder
    so_dt?: SortOrder
    mat_khau?: SortOrder
    ma_loai_nguoi_dung?: SortOrder
  }

  export type NguoiDungSumOrderByAggregateInput = {
    tai_khoan?: SortOrder
    ma_loai_nguoi_dung?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type BannerListRelationFilter = {
    every?: BannerWhereInput
    some?: BannerWhereInput
    none?: BannerWhereInput
  }

  export type LichChieuListRelationFilter = {
    every?: LichChieuWhereInput
    some?: LichChieuWhereInput
    none?: LichChieuWhereInput
  }

  export type BannerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LichChieuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhimOrderByRelevanceInput = {
    fields: PhimOrderByRelevanceFieldEnum | PhimOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhimCountOrderByAggregateInput = {
    ma_phim?: SortOrder
    ten_phim?: SortOrder
    trailer?: SortOrder
    hinh_anh?: SortOrder
    mo_ta?: SortOrder
    ngay_khoi_chieu?: SortOrder
    danh_gia?: SortOrder
    hot?: SortOrder
    dang_chieu?: SortOrder
    sap_chieu?: SortOrder
  }

  export type PhimAvgOrderByAggregateInput = {
    ma_phim?: SortOrder
    danh_gia?: SortOrder
  }

  export type PhimMaxOrderByAggregateInput = {
    ma_phim?: SortOrder
    ten_phim?: SortOrder
    trailer?: SortOrder
    hinh_anh?: SortOrder
    mo_ta?: SortOrder
    ngay_khoi_chieu?: SortOrder
    danh_gia?: SortOrder
    hot?: SortOrder
    dang_chieu?: SortOrder
    sap_chieu?: SortOrder
  }

  export type PhimMinOrderByAggregateInput = {
    ma_phim?: SortOrder
    ten_phim?: SortOrder
    trailer?: SortOrder
    hinh_anh?: SortOrder
    mo_ta?: SortOrder
    ngay_khoi_chieu?: SortOrder
    danh_gia?: SortOrder
    hot?: SortOrder
    dang_chieu?: SortOrder
    sap_chieu?: SortOrder
  }

  export type PhimSumOrderByAggregateInput = {
    ma_phim?: SortOrder
    danh_gia?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type GheListRelationFilter = {
    every?: GheWhereInput
    some?: GheWhereInput
    none?: GheWhereInput
  }

  export type CumRapNullableScalarRelationFilter = {
    is?: CumRapWhereInput | null
    isNot?: CumRapWhereInput | null
  }

  export type GheOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RapPhimOrderByRelevanceInput = {
    fields: RapPhimOrderByRelevanceFieldEnum | RapPhimOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RapPhimCountOrderByAggregateInput = {
    ma_rap?: SortOrder
    ten_rap?: SortOrder
    ma_cum_rap?: SortOrder
  }

  export type RapPhimAvgOrderByAggregateInput = {
    ma_rap?: SortOrder
    ma_cum_rap?: SortOrder
  }

  export type RapPhimMaxOrderByAggregateInput = {
    ma_rap?: SortOrder
    ten_rap?: SortOrder
    ma_cum_rap?: SortOrder
  }

  export type RapPhimMinOrderByAggregateInput = {
    ma_rap?: SortOrder
    ten_rap?: SortOrder
    ma_cum_rap?: SortOrder
  }

  export type RapPhimSumOrderByAggregateInput = {
    ma_rap?: SortOrder
    ma_cum_rap?: SortOrder
  }

  export type NguoiDungListRelationFilter = {
    every?: NguoiDungWhereInput
    some?: NguoiDungWhereInput
    none?: NguoiDungWhereInput
  }

  export type NguoiDungOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoaiNguoiDungOrderByRelevanceInput = {
    fields: LoaiNguoiDungOrderByRelevanceFieldEnum | LoaiNguoiDungOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LoaiNguoiDungCountOrderByAggregateInput = {
    ma_loai_nguoi_dung?: SortOrder
    loai_nguoi_dung?: SortOrder
  }

  export type LoaiNguoiDungAvgOrderByAggregateInput = {
    ma_loai_nguoi_dung?: SortOrder
  }

  export type LoaiNguoiDungMaxOrderByAggregateInput = {
    ma_loai_nguoi_dung?: SortOrder
    loai_nguoi_dung?: SortOrder
  }

  export type LoaiNguoiDungMinOrderByAggregateInput = {
    ma_loai_nguoi_dung?: SortOrder
    loai_nguoi_dung?: SortOrder
  }

  export type LoaiNguoiDungSumOrderByAggregateInput = {
    ma_loai_nguoi_dung?: SortOrder
  }

  export type PhimCreateNestedOneWithoutBannerInput = {
    create?: XOR<PhimCreateWithoutBannerInput, PhimUncheckedCreateWithoutBannerInput>
    connectOrCreate?: PhimCreateOrConnectWithoutBannerInput
    connect?: PhimWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PhimUpdateOneWithoutBannerNestedInput = {
    create?: XOR<PhimCreateWithoutBannerInput, PhimUncheckedCreateWithoutBannerInput>
    connectOrCreate?: PhimCreateOrConnectWithoutBannerInput
    upsert?: PhimUpsertWithoutBannerInput
    disconnect?: PhimWhereInput | boolean
    delete?: PhimWhereInput | boolean
    connect?: PhimWhereUniqueInput
    update?: XOR<XOR<PhimUpdateToOneWithWhereWithoutBannerInput, PhimUpdateWithoutBannerInput>, PhimUncheckedUpdateWithoutBannerInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HeThongRapCreateNestedOneWithoutCumRapInput = {
    create?: XOR<HeThongRapCreateWithoutCumRapInput, HeThongRapUncheckedCreateWithoutCumRapInput>
    connectOrCreate?: HeThongRapCreateOrConnectWithoutCumRapInput
    connect?: HeThongRapWhereUniqueInput
  }

  export type RapPhimCreateNestedManyWithoutCumRapInput = {
    create?: XOR<RapPhimCreateWithoutCumRapInput, RapPhimUncheckedCreateWithoutCumRapInput> | RapPhimCreateWithoutCumRapInput[] | RapPhimUncheckedCreateWithoutCumRapInput[]
    connectOrCreate?: RapPhimCreateOrConnectWithoutCumRapInput | RapPhimCreateOrConnectWithoutCumRapInput[]
    createMany?: RapPhimCreateManyCumRapInputEnvelope
    connect?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
  }

  export type RapPhimUncheckedCreateNestedManyWithoutCumRapInput = {
    create?: XOR<RapPhimCreateWithoutCumRapInput, RapPhimUncheckedCreateWithoutCumRapInput> | RapPhimCreateWithoutCumRapInput[] | RapPhimUncheckedCreateWithoutCumRapInput[]
    connectOrCreate?: RapPhimCreateOrConnectWithoutCumRapInput | RapPhimCreateOrConnectWithoutCumRapInput[]
    createMany?: RapPhimCreateManyCumRapInputEnvelope
    connect?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
  }

  export type HeThongRapUpdateOneWithoutCumRapNestedInput = {
    create?: XOR<HeThongRapCreateWithoutCumRapInput, HeThongRapUncheckedCreateWithoutCumRapInput>
    connectOrCreate?: HeThongRapCreateOrConnectWithoutCumRapInput
    upsert?: HeThongRapUpsertWithoutCumRapInput
    disconnect?: HeThongRapWhereInput | boolean
    delete?: HeThongRapWhereInput | boolean
    connect?: HeThongRapWhereUniqueInput
    update?: XOR<XOR<HeThongRapUpdateToOneWithWhereWithoutCumRapInput, HeThongRapUpdateWithoutCumRapInput>, HeThongRapUncheckedUpdateWithoutCumRapInput>
  }

  export type RapPhimUpdateManyWithoutCumRapNestedInput = {
    create?: XOR<RapPhimCreateWithoutCumRapInput, RapPhimUncheckedCreateWithoutCumRapInput> | RapPhimCreateWithoutCumRapInput[] | RapPhimUncheckedCreateWithoutCumRapInput[]
    connectOrCreate?: RapPhimCreateOrConnectWithoutCumRapInput | RapPhimCreateOrConnectWithoutCumRapInput[]
    upsert?: RapPhimUpsertWithWhereUniqueWithoutCumRapInput | RapPhimUpsertWithWhereUniqueWithoutCumRapInput[]
    createMany?: RapPhimCreateManyCumRapInputEnvelope
    set?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
    disconnect?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
    delete?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
    connect?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
    update?: RapPhimUpdateWithWhereUniqueWithoutCumRapInput | RapPhimUpdateWithWhereUniqueWithoutCumRapInput[]
    updateMany?: RapPhimUpdateManyWithWhereWithoutCumRapInput | RapPhimUpdateManyWithWhereWithoutCumRapInput[]
    deleteMany?: RapPhimScalarWhereInput | RapPhimScalarWhereInput[]
  }

  export type RapPhimUncheckedUpdateManyWithoutCumRapNestedInput = {
    create?: XOR<RapPhimCreateWithoutCumRapInput, RapPhimUncheckedCreateWithoutCumRapInput> | RapPhimCreateWithoutCumRapInput[] | RapPhimUncheckedCreateWithoutCumRapInput[]
    connectOrCreate?: RapPhimCreateOrConnectWithoutCumRapInput | RapPhimCreateOrConnectWithoutCumRapInput[]
    upsert?: RapPhimUpsertWithWhereUniqueWithoutCumRapInput | RapPhimUpsertWithWhereUniqueWithoutCumRapInput[]
    createMany?: RapPhimCreateManyCumRapInputEnvelope
    set?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
    disconnect?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
    delete?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
    connect?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
    update?: RapPhimUpdateWithWhereUniqueWithoutCumRapInput | RapPhimUpdateWithWhereUniqueWithoutCumRapInput[]
    updateMany?: RapPhimUpdateManyWithWhereWithoutCumRapInput | RapPhimUpdateManyWithWhereWithoutCumRapInput[]
    deleteMany?: RapPhimScalarWhereInput | RapPhimScalarWhereInput[]
  }

  export type NguoiDungCreateNestedOneWithoutDatVeInput = {
    create?: XOR<NguoiDungCreateWithoutDatVeInput, NguoiDungUncheckedCreateWithoutDatVeInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutDatVeInput
    connect?: NguoiDungWhereUniqueInput
  }

  export type LichChieuCreateNestedOneWithoutDatVeInput = {
    create?: XOR<LichChieuCreateWithoutDatVeInput, LichChieuUncheckedCreateWithoutDatVeInput>
    connectOrCreate?: LichChieuCreateOrConnectWithoutDatVeInput
    connect?: LichChieuWhereUniqueInput
  }

  export type GheCreateNestedOneWithoutDatVeInput = {
    create?: XOR<GheCreateWithoutDatVeInput, GheUncheckedCreateWithoutDatVeInput>
    connectOrCreate?: GheCreateOrConnectWithoutDatVeInput
    connect?: GheWhereUniqueInput
  }

  export type NguoiDungUpdateOneWithoutDatVeNestedInput = {
    create?: XOR<NguoiDungCreateWithoutDatVeInput, NguoiDungUncheckedCreateWithoutDatVeInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutDatVeInput
    upsert?: NguoiDungUpsertWithoutDatVeInput
    disconnect?: NguoiDungWhereInput | boolean
    delete?: NguoiDungWhereInput | boolean
    connect?: NguoiDungWhereUniqueInput
    update?: XOR<XOR<NguoiDungUpdateToOneWithWhereWithoutDatVeInput, NguoiDungUpdateWithoutDatVeInput>, NguoiDungUncheckedUpdateWithoutDatVeInput>
  }

  export type LichChieuUpdateOneWithoutDatVeNestedInput = {
    create?: XOR<LichChieuCreateWithoutDatVeInput, LichChieuUncheckedCreateWithoutDatVeInput>
    connectOrCreate?: LichChieuCreateOrConnectWithoutDatVeInput
    upsert?: LichChieuUpsertWithoutDatVeInput
    disconnect?: LichChieuWhereInput | boolean
    delete?: LichChieuWhereInput | boolean
    connect?: LichChieuWhereUniqueInput
    update?: XOR<XOR<LichChieuUpdateToOneWithWhereWithoutDatVeInput, LichChieuUpdateWithoutDatVeInput>, LichChieuUncheckedUpdateWithoutDatVeInput>
  }

  export type GheUpdateOneWithoutDatVeNestedInput = {
    create?: XOR<GheCreateWithoutDatVeInput, GheUncheckedCreateWithoutDatVeInput>
    connectOrCreate?: GheCreateOrConnectWithoutDatVeInput
    upsert?: GheUpsertWithoutDatVeInput
    disconnect?: GheWhereInput | boolean
    delete?: GheWhereInput | boolean
    connect?: GheWhereUniqueInput
    update?: XOR<XOR<GheUpdateToOneWithWhereWithoutDatVeInput, GheUpdateWithoutDatVeInput>, GheUncheckedUpdateWithoutDatVeInput>
  }

  export type DatVeCreateNestedManyWithoutGheInput = {
    create?: XOR<DatVeCreateWithoutGheInput, DatVeUncheckedCreateWithoutGheInput> | DatVeCreateWithoutGheInput[] | DatVeUncheckedCreateWithoutGheInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutGheInput | DatVeCreateOrConnectWithoutGheInput[]
    createMany?: DatVeCreateManyGheInputEnvelope
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
  }

  export type RapPhimCreateNestedOneWithoutGheInput = {
    create?: XOR<RapPhimCreateWithoutGheInput, RapPhimUncheckedCreateWithoutGheInput>
    connectOrCreate?: RapPhimCreateOrConnectWithoutGheInput
    connect?: RapPhimWhereUniqueInput
  }

  export type DatVeUncheckedCreateNestedManyWithoutGheInput = {
    create?: XOR<DatVeCreateWithoutGheInput, DatVeUncheckedCreateWithoutGheInput> | DatVeCreateWithoutGheInput[] | DatVeUncheckedCreateWithoutGheInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutGheInput | DatVeCreateOrConnectWithoutGheInput[]
    createMany?: DatVeCreateManyGheInputEnvelope
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
  }

  export type DatVeUpdateManyWithoutGheNestedInput = {
    create?: XOR<DatVeCreateWithoutGheInput, DatVeUncheckedCreateWithoutGheInput> | DatVeCreateWithoutGheInput[] | DatVeUncheckedCreateWithoutGheInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutGheInput | DatVeCreateOrConnectWithoutGheInput[]
    upsert?: DatVeUpsertWithWhereUniqueWithoutGheInput | DatVeUpsertWithWhereUniqueWithoutGheInput[]
    createMany?: DatVeCreateManyGheInputEnvelope
    set?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    disconnect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    delete?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    update?: DatVeUpdateWithWhereUniqueWithoutGheInput | DatVeUpdateWithWhereUniqueWithoutGheInput[]
    updateMany?: DatVeUpdateManyWithWhereWithoutGheInput | DatVeUpdateManyWithWhereWithoutGheInput[]
    deleteMany?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
  }

  export type RapPhimUpdateOneWithoutGheNestedInput = {
    create?: XOR<RapPhimCreateWithoutGheInput, RapPhimUncheckedCreateWithoutGheInput>
    connectOrCreate?: RapPhimCreateOrConnectWithoutGheInput
    upsert?: RapPhimUpsertWithoutGheInput
    disconnect?: RapPhimWhereInput | boolean
    delete?: RapPhimWhereInput | boolean
    connect?: RapPhimWhereUniqueInput
    update?: XOR<XOR<RapPhimUpdateToOneWithWhereWithoutGheInput, RapPhimUpdateWithoutGheInput>, RapPhimUncheckedUpdateWithoutGheInput>
  }

  export type DatVeUncheckedUpdateManyWithoutGheNestedInput = {
    create?: XOR<DatVeCreateWithoutGheInput, DatVeUncheckedCreateWithoutGheInput> | DatVeCreateWithoutGheInput[] | DatVeUncheckedCreateWithoutGheInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutGheInput | DatVeCreateOrConnectWithoutGheInput[]
    upsert?: DatVeUpsertWithWhereUniqueWithoutGheInput | DatVeUpsertWithWhereUniqueWithoutGheInput[]
    createMany?: DatVeCreateManyGheInputEnvelope
    set?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    disconnect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    delete?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    update?: DatVeUpdateWithWhereUniqueWithoutGheInput | DatVeUpdateWithWhereUniqueWithoutGheInput[]
    updateMany?: DatVeUpdateManyWithWhereWithoutGheInput | DatVeUpdateManyWithWhereWithoutGheInput[]
    deleteMany?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
  }

  export type CumRapCreateNestedManyWithoutHeThongRapInput = {
    create?: XOR<CumRapCreateWithoutHeThongRapInput, CumRapUncheckedCreateWithoutHeThongRapInput> | CumRapCreateWithoutHeThongRapInput[] | CumRapUncheckedCreateWithoutHeThongRapInput[]
    connectOrCreate?: CumRapCreateOrConnectWithoutHeThongRapInput | CumRapCreateOrConnectWithoutHeThongRapInput[]
    createMany?: CumRapCreateManyHeThongRapInputEnvelope
    connect?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
  }

  export type CumRapUncheckedCreateNestedManyWithoutHeThongRapInput = {
    create?: XOR<CumRapCreateWithoutHeThongRapInput, CumRapUncheckedCreateWithoutHeThongRapInput> | CumRapCreateWithoutHeThongRapInput[] | CumRapUncheckedCreateWithoutHeThongRapInput[]
    connectOrCreate?: CumRapCreateOrConnectWithoutHeThongRapInput | CumRapCreateOrConnectWithoutHeThongRapInput[]
    createMany?: CumRapCreateManyHeThongRapInputEnvelope
    connect?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
  }

  export type CumRapUpdateManyWithoutHeThongRapNestedInput = {
    create?: XOR<CumRapCreateWithoutHeThongRapInput, CumRapUncheckedCreateWithoutHeThongRapInput> | CumRapCreateWithoutHeThongRapInput[] | CumRapUncheckedCreateWithoutHeThongRapInput[]
    connectOrCreate?: CumRapCreateOrConnectWithoutHeThongRapInput | CumRapCreateOrConnectWithoutHeThongRapInput[]
    upsert?: CumRapUpsertWithWhereUniqueWithoutHeThongRapInput | CumRapUpsertWithWhereUniqueWithoutHeThongRapInput[]
    createMany?: CumRapCreateManyHeThongRapInputEnvelope
    set?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
    disconnect?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
    delete?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
    connect?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
    update?: CumRapUpdateWithWhereUniqueWithoutHeThongRapInput | CumRapUpdateWithWhereUniqueWithoutHeThongRapInput[]
    updateMany?: CumRapUpdateManyWithWhereWithoutHeThongRapInput | CumRapUpdateManyWithWhereWithoutHeThongRapInput[]
    deleteMany?: CumRapScalarWhereInput | CumRapScalarWhereInput[]
  }

  export type CumRapUncheckedUpdateManyWithoutHeThongRapNestedInput = {
    create?: XOR<CumRapCreateWithoutHeThongRapInput, CumRapUncheckedCreateWithoutHeThongRapInput> | CumRapCreateWithoutHeThongRapInput[] | CumRapUncheckedCreateWithoutHeThongRapInput[]
    connectOrCreate?: CumRapCreateOrConnectWithoutHeThongRapInput | CumRapCreateOrConnectWithoutHeThongRapInput[]
    upsert?: CumRapUpsertWithWhereUniqueWithoutHeThongRapInput | CumRapUpsertWithWhereUniqueWithoutHeThongRapInput[]
    createMany?: CumRapCreateManyHeThongRapInputEnvelope
    set?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
    disconnect?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
    delete?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
    connect?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
    update?: CumRapUpdateWithWhereUniqueWithoutHeThongRapInput | CumRapUpdateWithWhereUniqueWithoutHeThongRapInput[]
    updateMany?: CumRapUpdateManyWithWhereWithoutHeThongRapInput | CumRapUpdateManyWithWhereWithoutHeThongRapInput[]
    deleteMany?: CumRapScalarWhereInput | CumRapScalarWhereInput[]
  }

  export type DatVeCreateNestedManyWithoutLichChieuInput = {
    create?: XOR<DatVeCreateWithoutLichChieuInput, DatVeUncheckedCreateWithoutLichChieuInput> | DatVeCreateWithoutLichChieuInput[] | DatVeUncheckedCreateWithoutLichChieuInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutLichChieuInput | DatVeCreateOrConnectWithoutLichChieuInput[]
    createMany?: DatVeCreateManyLichChieuInputEnvelope
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
  }

  export type RapPhimCreateNestedOneWithoutLichChieuInput = {
    create?: XOR<RapPhimCreateWithoutLichChieuInput, RapPhimUncheckedCreateWithoutLichChieuInput>
    connectOrCreate?: RapPhimCreateOrConnectWithoutLichChieuInput
    connect?: RapPhimWhereUniqueInput
  }

  export type PhimCreateNestedOneWithoutLichChieuInput = {
    create?: XOR<PhimCreateWithoutLichChieuInput, PhimUncheckedCreateWithoutLichChieuInput>
    connectOrCreate?: PhimCreateOrConnectWithoutLichChieuInput
    connect?: PhimWhereUniqueInput
  }

  export type DatVeUncheckedCreateNestedManyWithoutLichChieuInput = {
    create?: XOR<DatVeCreateWithoutLichChieuInput, DatVeUncheckedCreateWithoutLichChieuInput> | DatVeCreateWithoutLichChieuInput[] | DatVeUncheckedCreateWithoutLichChieuInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutLichChieuInput | DatVeCreateOrConnectWithoutLichChieuInput[]
    createMany?: DatVeCreateManyLichChieuInputEnvelope
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DatVeUpdateManyWithoutLichChieuNestedInput = {
    create?: XOR<DatVeCreateWithoutLichChieuInput, DatVeUncheckedCreateWithoutLichChieuInput> | DatVeCreateWithoutLichChieuInput[] | DatVeUncheckedCreateWithoutLichChieuInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutLichChieuInput | DatVeCreateOrConnectWithoutLichChieuInput[]
    upsert?: DatVeUpsertWithWhereUniqueWithoutLichChieuInput | DatVeUpsertWithWhereUniqueWithoutLichChieuInput[]
    createMany?: DatVeCreateManyLichChieuInputEnvelope
    set?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    disconnect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    delete?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    update?: DatVeUpdateWithWhereUniqueWithoutLichChieuInput | DatVeUpdateWithWhereUniqueWithoutLichChieuInput[]
    updateMany?: DatVeUpdateManyWithWhereWithoutLichChieuInput | DatVeUpdateManyWithWhereWithoutLichChieuInput[]
    deleteMany?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
  }

  export type RapPhimUpdateOneWithoutLichChieuNestedInput = {
    create?: XOR<RapPhimCreateWithoutLichChieuInput, RapPhimUncheckedCreateWithoutLichChieuInput>
    connectOrCreate?: RapPhimCreateOrConnectWithoutLichChieuInput
    upsert?: RapPhimUpsertWithoutLichChieuInput
    disconnect?: RapPhimWhereInput | boolean
    delete?: RapPhimWhereInput | boolean
    connect?: RapPhimWhereUniqueInput
    update?: XOR<XOR<RapPhimUpdateToOneWithWhereWithoutLichChieuInput, RapPhimUpdateWithoutLichChieuInput>, RapPhimUncheckedUpdateWithoutLichChieuInput>
  }

  export type PhimUpdateOneWithoutLichChieuNestedInput = {
    create?: XOR<PhimCreateWithoutLichChieuInput, PhimUncheckedCreateWithoutLichChieuInput>
    connectOrCreate?: PhimCreateOrConnectWithoutLichChieuInput
    upsert?: PhimUpsertWithoutLichChieuInput
    disconnect?: PhimWhereInput | boolean
    delete?: PhimWhereInput | boolean
    connect?: PhimWhereUniqueInput
    update?: XOR<XOR<PhimUpdateToOneWithWhereWithoutLichChieuInput, PhimUpdateWithoutLichChieuInput>, PhimUncheckedUpdateWithoutLichChieuInput>
  }

  export type DatVeUncheckedUpdateManyWithoutLichChieuNestedInput = {
    create?: XOR<DatVeCreateWithoutLichChieuInput, DatVeUncheckedCreateWithoutLichChieuInput> | DatVeCreateWithoutLichChieuInput[] | DatVeUncheckedCreateWithoutLichChieuInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutLichChieuInput | DatVeCreateOrConnectWithoutLichChieuInput[]
    upsert?: DatVeUpsertWithWhereUniqueWithoutLichChieuInput | DatVeUpsertWithWhereUniqueWithoutLichChieuInput[]
    createMany?: DatVeCreateManyLichChieuInputEnvelope
    set?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    disconnect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    delete?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    update?: DatVeUpdateWithWhereUniqueWithoutLichChieuInput | DatVeUpdateWithWhereUniqueWithoutLichChieuInput[]
    updateMany?: DatVeUpdateManyWithWhereWithoutLichChieuInput | DatVeUpdateManyWithWhereWithoutLichChieuInput[]
    deleteMany?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
  }

  export type DatVeCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<DatVeCreateWithoutNguoiDungInput, DatVeUncheckedCreateWithoutNguoiDungInput> | DatVeCreateWithoutNguoiDungInput[] | DatVeUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutNguoiDungInput | DatVeCreateOrConnectWithoutNguoiDungInput[]
    createMany?: DatVeCreateManyNguoiDungInputEnvelope
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
  }

  export type LoaiNguoiDungCreateNestedOneWithoutNguoiDungInput = {
    create?: XOR<LoaiNguoiDungCreateWithoutNguoiDungInput, LoaiNguoiDungUncheckedCreateWithoutNguoiDungInput>
    connectOrCreate?: LoaiNguoiDungCreateOrConnectWithoutNguoiDungInput
    connect?: LoaiNguoiDungWhereUniqueInput
  }

  export type DatVeUncheckedCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<DatVeCreateWithoutNguoiDungInput, DatVeUncheckedCreateWithoutNguoiDungInput> | DatVeCreateWithoutNguoiDungInput[] | DatVeUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutNguoiDungInput | DatVeCreateOrConnectWithoutNguoiDungInput[]
    createMany?: DatVeCreateManyNguoiDungInputEnvelope
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
  }

  export type DatVeUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<DatVeCreateWithoutNguoiDungInput, DatVeUncheckedCreateWithoutNguoiDungInput> | DatVeCreateWithoutNguoiDungInput[] | DatVeUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutNguoiDungInput | DatVeCreateOrConnectWithoutNguoiDungInput[]
    upsert?: DatVeUpsertWithWhereUniqueWithoutNguoiDungInput | DatVeUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: DatVeCreateManyNguoiDungInputEnvelope
    set?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    disconnect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    delete?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    update?: DatVeUpdateWithWhereUniqueWithoutNguoiDungInput | DatVeUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: DatVeUpdateManyWithWhereWithoutNguoiDungInput | DatVeUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
  }

  export type LoaiNguoiDungUpdateOneRequiredWithoutNguoiDungNestedInput = {
    create?: XOR<LoaiNguoiDungCreateWithoutNguoiDungInput, LoaiNguoiDungUncheckedCreateWithoutNguoiDungInput>
    connectOrCreate?: LoaiNguoiDungCreateOrConnectWithoutNguoiDungInput
    upsert?: LoaiNguoiDungUpsertWithoutNguoiDungInput
    connect?: LoaiNguoiDungWhereUniqueInput
    update?: XOR<XOR<LoaiNguoiDungUpdateToOneWithWhereWithoutNguoiDungInput, LoaiNguoiDungUpdateWithoutNguoiDungInput>, LoaiNguoiDungUncheckedUpdateWithoutNguoiDungInput>
  }

  export type DatVeUncheckedUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<DatVeCreateWithoutNguoiDungInput, DatVeUncheckedCreateWithoutNguoiDungInput> | DatVeCreateWithoutNguoiDungInput[] | DatVeUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutNguoiDungInput | DatVeCreateOrConnectWithoutNguoiDungInput[]
    upsert?: DatVeUpsertWithWhereUniqueWithoutNguoiDungInput | DatVeUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: DatVeCreateManyNguoiDungInputEnvelope
    set?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    disconnect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    delete?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    update?: DatVeUpdateWithWhereUniqueWithoutNguoiDungInput | DatVeUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: DatVeUpdateManyWithWhereWithoutNguoiDungInput | DatVeUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
  }

  export type BannerCreateNestedManyWithoutPhimInput = {
    create?: XOR<BannerCreateWithoutPhimInput, BannerUncheckedCreateWithoutPhimInput> | BannerCreateWithoutPhimInput[] | BannerUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutPhimInput | BannerCreateOrConnectWithoutPhimInput[]
    createMany?: BannerCreateManyPhimInputEnvelope
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
  }

  export type LichChieuCreateNestedManyWithoutPhimInput = {
    create?: XOR<LichChieuCreateWithoutPhimInput, LichChieuUncheckedCreateWithoutPhimInput> | LichChieuCreateWithoutPhimInput[] | LichChieuUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: LichChieuCreateOrConnectWithoutPhimInput | LichChieuCreateOrConnectWithoutPhimInput[]
    createMany?: LichChieuCreateManyPhimInputEnvelope
    connect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
  }

  export type BannerUncheckedCreateNestedManyWithoutPhimInput = {
    create?: XOR<BannerCreateWithoutPhimInput, BannerUncheckedCreateWithoutPhimInput> | BannerCreateWithoutPhimInput[] | BannerUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutPhimInput | BannerCreateOrConnectWithoutPhimInput[]
    createMany?: BannerCreateManyPhimInputEnvelope
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
  }

  export type LichChieuUncheckedCreateNestedManyWithoutPhimInput = {
    create?: XOR<LichChieuCreateWithoutPhimInput, LichChieuUncheckedCreateWithoutPhimInput> | LichChieuCreateWithoutPhimInput[] | LichChieuUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: LichChieuCreateOrConnectWithoutPhimInput | LichChieuCreateOrConnectWithoutPhimInput[]
    createMany?: LichChieuCreateManyPhimInputEnvelope
    connect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type BannerUpdateManyWithoutPhimNestedInput = {
    create?: XOR<BannerCreateWithoutPhimInput, BannerUncheckedCreateWithoutPhimInput> | BannerCreateWithoutPhimInput[] | BannerUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutPhimInput | BannerCreateOrConnectWithoutPhimInput[]
    upsert?: BannerUpsertWithWhereUniqueWithoutPhimInput | BannerUpsertWithWhereUniqueWithoutPhimInput[]
    createMany?: BannerCreateManyPhimInputEnvelope
    set?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    disconnect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    delete?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    update?: BannerUpdateWithWhereUniqueWithoutPhimInput | BannerUpdateWithWhereUniqueWithoutPhimInput[]
    updateMany?: BannerUpdateManyWithWhereWithoutPhimInput | BannerUpdateManyWithWhereWithoutPhimInput[]
    deleteMany?: BannerScalarWhereInput | BannerScalarWhereInput[]
  }

  export type LichChieuUpdateManyWithoutPhimNestedInput = {
    create?: XOR<LichChieuCreateWithoutPhimInput, LichChieuUncheckedCreateWithoutPhimInput> | LichChieuCreateWithoutPhimInput[] | LichChieuUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: LichChieuCreateOrConnectWithoutPhimInput | LichChieuCreateOrConnectWithoutPhimInput[]
    upsert?: LichChieuUpsertWithWhereUniqueWithoutPhimInput | LichChieuUpsertWithWhereUniqueWithoutPhimInput[]
    createMany?: LichChieuCreateManyPhimInputEnvelope
    set?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    disconnect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    delete?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    connect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    update?: LichChieuUpdateWithWhereUniqueWithoutPhimInput | LichChieuUpdateWithWhereUniqueWithoutPhimInput[]
    updateMany?: LichChieuUpdateManyWithWhereWithoutPhimInput | LichChieuUpdateManyWithWhereWithoutPhimInput[]
    deleteMany?: LichChieuScalarWhereInput | LichChieuScalarWhereInput[]
  }

  export type BannerUncheckedUpdateManyWithoutPhimNestedInput = {
    create?: XOR<BannerCreateWithoutPhimInput, BannerUncheckedCreateWithoutPhimInput> | BannerCreateWithoutPhimInput[] | BannerUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutPhimInput | BannerCreateOrConnectWithoutPhimInput[]
    upsert?: BannerUpsertWithWhereUniqueWithoutPhimInput | BannerUpsertWithWhereUniqueWithoutPhimInput[]
    createMany?: BannerCreateManyPhimInputEnvelope
    set?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    disconnect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    delete?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    update?: BannerUpdateWithWhereUniqueWithoutPhimInput | BannerUpdateWithWhereUniqueWithoutPhimInput[]
    updateMany?: BannerUpdateManyWithWhereWithoutPhimInput | BannerUpdateManyWithWhereWithoutPhimInput[]
    deleteMany?: BannerScalarWhereInput | BannerScalarWhereInput[]
  }

  export type LichChieuUncheckedUpdateManyWithoutPhimNestedInput = {
    create?: XOR<LichChieuCreateWithoutPhimInput, LichChieuUncheckedCreateWithoutPhimInput> | LichChieuCreateWithoutPhimInput[] | LichChieuUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: LichChieuCreateOrConnectWithoutPhimInput | LichChieuCreateOrConnectWithoutPhimInput[]
    upsert?: LichChieuUpsertWithWhereUniqueWithoutPhimInput | LichChieuUpsertWithWhereUniqueWithoutPhimInput[]
    createMany?: LichChieuCreateManyPhimInputEnvelope
    set?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    disconnect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    delete?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    connect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    update?: LichChieuUpdateWithWhereUniqueWithoutPhimInput | LichChieuUpdateWithWhereUniqueWithoutPhimInput[]
    updateMany?: LichChieuUpdateManyWithWhereWithoutPhimInput | LichChieuUpdateManyWithWhereWithoutPhimInput[]
    deleteMany?: LichChieuScalarWhereInput | LichChieuScalarWhereInput[]
  }

  export type GheCreateNestedManyWithoutRapPhimInput = {
    create?: XOR<GheCreateWithoutRapPhimInput, GheUncheckedCreateWithoutRapPhimInput> | GheCreateWithoutRapPhimInput[] | GheUncheckedCreateWithoutRapPhimInput[]
    connectOrCreate?: GheCreateOrConnectWithoutRapPhimInput | GheCreateOrConnectWithoutRapPhimInput[]
    createMany?: GheCreateManyRapPhimInputEnvelope
    connect?: GheWhereUniqueInput | GheWhereUniqueInput[]
  }

  export type LichChieuCreateNestedManyWithoutRapPhimInput = {
    create?: XOR<LichChieuCreateWithoutRapPhimInput, LichChieuUncheckedCreateWithoutRapPhimInput> | LichChieuCreateWithoutRapPhimInput[] | LichChieuUncheckedCreateWithoutRapPhimInput[]
    connectOrCreate?: LichChieuCreateOrConnectWithoutRapPhimInput | LichChieuCreateOrConnectWithoutRapPhimInput[]
    createMany?: LichChieuCreateManyRapPhimInputEnvelope
    connect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
  }

  export type CumRapCreateNestedOneWithoutRapPhimInput = {
    create?: XOR<CumRapCreateWithoutRapPhimInput, CumRapUncheckedCreateWithoutRapPhimInput>
    connectOrCreate?: CumRapCreateOrConnectWithoutRapPhimInput
    connect?: CumRapWhereUniqueInput
  }

  export type GheUncheckedCreateNestedManyWithoutRapPhimInput = {
    create?: XOR<GheCreateWithoutRapPhimInput, GheUncheckedCreateWithoutRapPhimInput> | GheCreateWithoutRapPhimInput[] | GheUncheckedCreateWithoutRapPhimInput[]
    connectOrCreate?: GheCreateOrConnectWithoutRapPhimInput | GheCreateOrConnectWithoutRapPhimInput[]
    createMany?: GheCreateManyRapPhimInputEnvelope
    connect?: GheWhereUniqueInput | GheWhereUniqueInput[]
  }

  export type LichChieuUncheckedCreateNestedManyWithoutRapPhimInput = {
    create?: XOR<LichChieuCreateWithoutRapPhimInput, LichChieuUncheckedCreateWithoutRapPhimInput> | LichChieuCreateWithoutRapPhimInput[] | LichChieuUncheckedCreateWithoutRapPhimInput[]
    connectOrCreate?: LichChieuCreateOrConnectWithoutRapPhimInput | LichChieuCreateOrConnectWithoutRapPhimInput[]
    createMany?: LichChieuCreateManyRapPhimInputEnvelope
    connect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
  }

  export type GheUpdateManyWithoutRapPhimNestedInput = {
    create?: XOR<GheCreateWithoutRapPhimInput, GheUncheckedCreateWithoutRapPhimInput> | GheCreateWithoutRapPhimInput[] | GheUncheckedCreateWithoutRapPhimInput[]
    connectOrCreate?: GheCreateOrConnectWithoutRapPhimInput | GheCreateOrConnectWithoutRapPhimInput[]
    upsert?: GheUpsertWithWhereUniqueWithoutRapPhimInput | GheUpsertWithWhereUniqueWithoutRapPhimInput[]
    createMany?: GheCreateManyRapPhimInputEnvelope
    set?: GheWhereUniqueInput | GheWhereUniqueInput[]
    disconnect?: GheWhereUniqueInput | GheWhereUniqueInput[]
    delete?: GheWhereUniqueInput | GheWhereUniqueInput[]
    connect?: GheWhereUniqueInput | GheWhereUniqueInput[]
    update?: GheUpdateWithWhereUniqueWithoutRapPhimInput | GheUpdateWithWhereUniqueWithoutRapPhimInput[]
    updateMany?: GheUpdateManyWithWhereWithoutRapPhimInput | GheUpdateManyWithWhereWithoutRapPhimInput[]
    deleteMany?: GheScalarWhereInput | GheScalarWhereInput[]
  }

  export type LichChieuUpdateManyWithoutRapPhimNestedInput = {
    create?: XOR<LichChieuCreateWithoutRapPhimInput, LichChieuUncheckedCreateWithoutRapPhimInput> | LichChieuCreateWithoutRapPhimInput[] | LichChieuUncheckedCreateWithoutRapPhimInput[]
    connectOrCreate?: LichChieuCreateOrConnectWithoutRapPhimInput | LichChieuCreateOrConnectWithoutRapPhimInput[]
    upsert?: LichChieuUpsertWithWhereUniqueWithoutRapPhimInput | LichChieuUpsertWithWhereUniqueWithoutRapPhimInput[]
    createMany?: LichChieuCreateManyRapPhimInputEnvelope
    set?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    disconnect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    delete?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    connect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    update?: LichChieuUpdateWithWhereUniqueWithoutRapPhimInput | LichChieuUpdateWithWhereUniqueWithoutRapPhimInput[]
    updateMany?: LichChieuUpdateManyWithWhereWithoutRapPhimInput | LichChieuUpdateManyWithWhereWithoutRapPhimInput[]
    deleteMany?: LichChieuScalarWhereInput | LichChieuScalarWhereInput[]
  }

  export type CumRapUpdateOneWithoutRapPhimNestedInput = {
    create?: XOR<CumRapCreateWithoutRapPhimInput, CumRapUncheckedCreateWithoutRapPhimInput>
    connectOrCreate?: CumRapCreateOrConnectWithoutRapPhimInput
    upsert?: CumRapUpsertWithoutRapPhimInput
    disconnect?: CumRapWhereInput | boolean
    delete?: CumRapWhereInput | boolean
    connect?: CumRapWhereUniqueInput
    update?: XOR<XOR<CumRapUpdateToOneWithWhereWithoutRapPhimInput, CumRapUpdateWithoutRapPhimInput>, CumRapUncheckedUpdateWithoutRapPhimInput>
  }

  export type GheUncheckedUpdateManyWithoutRapPhimNestedInput = {
    create?: XOR<GheCreateWithoutRapPhimInput, GheUncheckedCreateWithoutRapPhimInput> | GheCreateWithoutRapPhimInput[] | GheUncheckedCreateWithoutRapPhimInput[]
    connectOrCreate?: GheCreateOrConnectWithoutRapPhimInput | GheCreateOrConnectWithoutRapPhimInput[]
    upsert?: GheUpsertWithWhereUniqueWithoutRapPhimInput | GheUpsertWithWhereUniqueWithoutRapPhimInput[]
    createMany?: GheCreateManyRapPhimInputEnvelope
    set?: GheWhereUniqueInput | GheWhereUniqueInput[]
    disconnect?: GheWhereUniqueInput | GheWhereUniqueInput[]
    delete?: GheWhereUniqueInput | GheWhereUniqueInput[]
    connect?: GheWhereUniqueInput | GheWhereUniqueInput[]
    update?: GheUpdateWithWhereUniqueWithoutRapPhimInput | GheUpdateWithWhereUniqueWithoutRapPhimInput[]
    updateMany?: GheUpdateManyWithWhereWithoutRapPhimInput | GheUpdateManyWithWhereWithoutRapPhimInput[]
    deleteMany?: GheScalarWhereInput | GheScalarWhereInput[]
  }

  export type LichChieuUncheckedUpdateManyWithoutRapPhimNestedInput = {
    create?: XOR<LichChieuCreateWithoutRapPhimInput, LichChieuUncheckedCreateWithoutRapPhimInput> | LichChieuCreateWithoutRapPhimInput[] | LichChieuUncheckedCreateWithoutRapPhimInput[]
    connectOrCreate?: LichChieuCreateOrConnectWithoutRapPhimInput | LichChieuCreateOrConnectWithoutRapPhimInput[]
    upsert?: LichChieuUpsertWithWhereUniqueWithoutRapPhimInput | LichChieuUpsertWithWhereUniqueWithoutRapPhimInput[]
    createMany?: LichChieuCreateManyRapPhimInputEnvelope
    set?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    disconnect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    delete?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    connect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    update?: LichChieuUpdateWithWhereUniqueWithoutRapPhimInput | LichChieuUpdateWithWhereUniqueWithoutRapPhimInput[]
    updateMany?: LichChieuUpdateManyWithWhereWithoutRapPhimInput | LichChieuUpdateManyWithWhereWithoutRapPhimInput[]
    deleteMany?: LichChieuScalarWhereInput | LichChieuScalarWhereInput[]
  }

  export type NguoiDungCreateNestedManyWithoutLoaiNguoiDungInput = {
    create?: XOR<NguoiDungCreateWithoutLoaiNguoiDungInput, NguoiDungUncheckedCreateWithoutLoaiNguoiDungInput> | NguoiDungCreateWithoutLoaiNguoiDungInput[] | NguoiDungUncheckedCreateWithoutLoaiNguoiDungInput[]
    connectOrCreate?: NguoiDungCreateOrConnectWithoutLoaiNguoiDungInput | NguoiDungCreateOrConnectWithoutLoaiNguoiDungInput[]
    createMany?: NguoiDungCreateManyLoaiNguoiDungInputEnvelope
    connect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
  }

  export type NguoiDungUncheckedCreateNestedManyWithoutLoaiNguoiDungInput = {
    create?: XOR<NguoiDungCreateWithoutLoaiNguoiDungInput, NguoiDungUncheckedCreateWithoutLoaiNguoiDungInput> | NguoiDungCreateWithoutLoaiNguoiDungInput[] | NguoiDungUncheckedCreateWithoutLoaiNguoiDungInput[]
    connectOrCreate?: NguoiDungCreateOrConnectWithoutLoaiNguoiDungInput | NguoiDungCreateOrConnectWithoutLoaiNguoiDungInput[]
    createMany?: NguoiDungCreateManyLoaiNguoiDungInputEnvelope
    connect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
  }

  export type NguoiDungUpdateManyWithoutLoaiNguoiDungNestedInput = {
    create?: XOR<NguoiDungCreateWithoutLoaiNguoiDungInput, NguoiDungUncheckedCreateWithoutLoaiNguoiDungInput> | NguoiDungCreateWithoutLoaiNguoiDungInput[] | NguoiDungUncheckedCreateWithoutLoaiNguoiDungInput[]
    connectOrCreate?: NguoiDungCreateOrConnectWithoutLoaiNguoiDungInput | NguoiDungCreateOrConnectWithoutLoaiNguoiDungInput[]
    upsert?: NguoiDungUpsertWithWhereUniqueWithoutLoaiNguoiDungInput | NguoiDungUpsertWithWhereUniqueWithoutLoaiNguoiDungInput[]
    createMany?: NguoiDungCreateManyLoaiNguoiDungInputEnvelope
    set?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    disconnect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    delete?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    connect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    update?: NguoiDungUpdateWithWhereUniqueWithoutLoaiNguoiDungInput | NguoiDungUpdateWithWhereUniqueWithoutLoaiNguoiDungInput[]
    updateMany?: NguoiDungUpdateManyWithWhereWithoutLoaiNguoiDungInput | NguoiDungUpdateManyWithWhereWithoutLoaiNguoiDungInput[]
    deleteMany?: NguoiDungScalarWhereInput | NguoiDungScalarWhereInput[]
  }

  export type NguoiDungUncheckedUpdateManyWithoutLoaiNguoiDungNestedInput = {
    create?: XOR<NguoiDungCreateWithoutLoaiNguoiDungInput, NguoiDungUncheckedCreateWithoutLoaiNguoiDungInput> | NguoiDungCreateWithoutLoaiNguoiDungInput[] | NguoiDungUncheckedCreateWithoutLoaiNguoiDungInput[]
    connectOrCreate?: NguoiDungCreateOrConnectWithoutLoaiNguoiDungInput | NguoiDungCreateOrConnectWithoutLoaiNguoiDungInput[]
    upsert?: NguoiDungUpsertWithWhereUniqueWithoutLoaiNguoiDungInput | NguoiDungUpsertWithWhereUniqueWithoutLoaiNguoiDungInput[]
    createMany?: NguoiDungCreateManyLoaiNguoiDungInputEnvelope
    set?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    disconnect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    delete?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    connect?: NguoiDungWhereUniqueInput | NguoiDungWhereUniqueInput[]
    update?: NguoiDungUpdateWithWhereUniqueWithoutLoaiNguoiDungInput | NguoiDungUpdateWithWhereUniqueWithoutLoaiNguoiDungInput[]
    updateMany?: NguoiDungUpdateManyWithWhereWithoutLoaiNguoiDungInput | NguoiDungUpdateManyWithWhereWithoutLoaiNguoiDungInput[]
    deleteMany?: NguoiDungScalarWhereInput | NguoiDungScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PhimCreateWithoutBannerInput = {
    ten_phim?: string | null
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number | null
    hot?: boolean | null
    dang_chieu?: boolean | null
    sap_chieu?: boolean | null
    LichChieu?: LichChieuCreateNestedManyWithoutPhimInput
  }

  export type PhimUncheckedCreateWithoutBannerInput = {
    ma_phim?: number
    ten_phim?: string | null
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number | null
    hot?: boolean | null
    dang_chieu?: boolean | null
    sap_chieu?: boolean | null
    LichChieu?: LichChieuUncheckedCreateNestedManyWithoutPhimInput
  }

  export type PhimCreateOrConnectWithoutBannerInput = {
    where: PhimWhereUniqueInput
    create: XOR<PhimCreateWithoutBannerInput, PhimUncheckedCreateWithoutBannerInput>
  }

  export type PhimUpsertWithoutBannerInput = {
    update: XOR<PhimUpdateWithoutBannerInput, PhimUncheckedUpdateWithoutBannerInput>
    create: XOR<PhimCreateWithoutBannerInput, PhimUncheckedCreateWithoutBannerInput>
    where?: PhimWhereInput
  }

  export type PhimUpdateToOneWithWhereWithoutBannerInput = {
    where?: PhimWhereInput
    data: XOR<PhimUpdateWithoutBannerInput, PhimUncheckedUpdateWithoutBannerInput>
  }

  export type PhimUpdateWithoutBannerInput = {
    ten_phim?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: NullableIntFieldUpdateOperationsInput | number | null
    hot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dang_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sap_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    LichChieu?: LichChieuUpdateManyWithoutPhimNestedInput
  }

  export type PhimUncheckedUpdateWithoutBannerInput = {
    ma_phim?: IntFieldUpdateOperationsInput | number
    ten_phim?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: NullableIntFieldUpdateOperationsInput | number | null
    hot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dang_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sap_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    LichChieu?: LichChieuUncheckedUpdateManyWithoutPhimNestedInput
  }

  export type HeThongRapCreateWithoutCumRapInput = {
    ten_he_thong_rap?: string | null
    logo?: string | null
  }

  export type HeThongRapUncheckedCreateWithoutCumRapInput = {
    ma_he_thong_rap?: number
    ten_he_thong_rap?: string | null
    logo?: string | null
  }

  export type HeThongRapCreateOrConnectWithoutCumRapInput = {
    where: HeThongRapWhereUniqueInput
    create: XOR<HeThongRapCreateWithoutCumRapInput, HeThongRapUncheckedCreateWithoutCumRapInput>
  }

  export type RapPhimCreateWithoutCumRapInput = {
    ten_rap?: string | null
    Ghe?: GheCreateNestedManyWithoutRapPhimInput
    LichChieu?: LichChieuCreateNestedManyWithoutRapPhimInput
  }

  export type RapPhimUncheckedCreateWithoutCumRapInput = {
    ma_rap?: number
    ten_rap?: string | null
    Ghe?: GheUncheckedCreateNestedManyWithoutRapPhimInput
    LichChieu?: LichChieuUncheckedCreateNestedManyWithoutRapPhimInput
  }

  export type RapPhimCreateOrConnectWithoutCumRapInput = {
    where: RapPhimWhereUniqueInput
    create: XOR<RapPhimCreateWithoutCumRapInput, RapPhimUncheckedCreateWithoutCumRapInput>
  }

  export type RapPhimCreateManyCumRapInputEnvelope = {
    data: RapPhimCreateManyCumRapInput | RapPhimCreateManyCumRapInput[]
    skipDuplicates?: boolean
  }

  export type HeThongRapUpsertWithoutCumRapInput = {
    update: XOR<HeThongRapUpdateWithoutCumRapInput, HeThongRapUncheckedUpdateWithoutCumRapInput>
    create: XOR<HeThongRapCreateWithoutCumRapInput, HeThongRapUncheckedCreateWithoutCumRapInput>
    where?: HeThongRapWhereInput
  }

  export type HeThongRapUpdateToOneWithWhereWithoutCumRapInput = {
    where?: HeThongRapWhereInput
    data: XOR<HeThongRapUpdateWithoutCumRapInput, HeThongRapUncheckedUpdateWithoutCumRapInput>
  }

  export type HeThongRapUpdateWithoutCumRapInput = {
    ten_he_thong_rap?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HeThongRapUncheckedUpdateWithoutCumRapInput = {
    ma_he_thong_rap?: IntFieldUpdateOperationsInput | number
    ten_he_thong_rap?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RapPhimUpsertWithWhereUniqueWithoutCumRapInput = {
    where: RapPhimWhereUniqueInput
    update: XOR<RapPhimUpdateWithoutCumRapInput, RapPhimUncheckedUpdateWithoutCumRapInput>
    create: XOR<RapPhimCreateWithoutCumRapInput, RapPhimUncheckedCreateWithoutCumRapInput>
  }

  export type RapPhimUpdateWithWhereUniqueWithoutCumRapInput = {
    where: RapPhimWhereUniqueInput
    data: XOR<RapPhimUpdateWithoutCumRapInput, RapPhimUncheckedUpdateWithoutCumRapInput>
  }

  export type RapPhimUpdateManyWithWhereWithoutCumRapInput = {
    where: RapPhimScalarWhereInput
    data: XOR<RapPhimUpdateManyMutationInput, RapPhimUncheckedUpdateManyWithoutCumRapInput>
  }

  export type RapPhimScalarWhereInput = {
    AND?: RapPhimScalarWhereInput | RapPhimScalarWhereInput[]
    OR?: RapPhimScalarWhereInput[]
    NOT?: RapPhimScalarWhereInput | RapPhimScalarWhereInput[]
    ma_rap?: IntFilter<"RapPhim"> | number
    ten_rap?: StringNullableFilter<"RapPhim"> | string | null
    ma_cum_rap?: IntNullableFilter<"RapPhim"> | number | null
  }

  export type NguoiDungCreateWithoutDatVeInput = {
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    LoaiNguoiDung?: LoaiNguoiDungCreateNestedOneWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateWithoutDatVeInput = {
    tai_khoan?: number
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    ma_loai_nguoi_dung?: number
  }

  export type NguoiDungCreateOrConnectWithoutDatVeInput = {
    where: NguoiDungWhereUniqueInput
    create: XOR<NguoiDungCreateWithoutDatVeInput, NguoiDungUncheckedCreateWithoutDatVeInput>
  }

  export type LichChieuCreateWithoutDatVeInput = {
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    RapPhim?: RapPhimCreateNestedOneWithoutLichChieuInput
    Phim?: PhimCreateNestedOneWithoutLichChieuInput
  }

  export type LichChieuUncheckedCreateWithoutDatVeInput = {
    ma_lich_chieu?: number
    ma_rap?: number | null
    ma_phim?: number | null
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
  }

  export type LichChieuCreateOrConnectWithoutDatVeInput = {
    where: LichChieuWhereUniqueInput
    create: XOR<LichChieuCreateWithoutDatVeInput, LichChieuUncheckedCreateWithoutDatVeInput>
  }

  export type GheCreateWithoutDatVeInput = {
    ten_ghe?: string | null
    loai_ghe?: string | null
    RapPhim?: RapPhimCreateNestedOneWithoutGheInput
  }

  export type GheUncheckedCreateWithoutDatVeInput = {
    ma_ghe?: number
    ten_ghe?: string | null
    loai_ghe?: string | null
    ma_rap?: number | null
  }

  export type GheCreateOrConnectWithoutDatVeInput = {
    where: GheWhereUniqueInput
    create: XOR<GheCreateWithoutDatVeInput, GheUncheckedCreateWithoutDatVeInput>
  }

  export type NguoiDungUpsertWithoutDatVeInput = {
    update: XOR<NguoiDungUpdateWithoutDatVeInput, NguoiDungUncheckedUpdateWithoutDatVeInput>
    create: XOR<NguoiDungCreateWithoutDatVeInput, NguoiDungUncheckedCreateWithoutDatVeInput>
    where?: NguoiDungWhereInput
  }

  export type NguoiDungUpdateToOneWithWhereWithoutDatVeInput = {
    where?: NguoiDungWhereInput
    data: XOR<NguoiDungUpdateWithoutDatVeInput, NguoiDungUncheckedUpdateWithoutDatVeInput>
  }

  export type NguoiDungUpdateWithoutDatVeInput = {
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    LoaiNguoiDung?: LoaiNguoiDungUpdateOneRequiredWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateWithoutDatVeInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    ma_loai_nguoi_dung?: IntFieldUpdateOperationsInput | number
  }

  export type LichChieuUpsertWithoutDatVeInput = {
    update: XOR<LichChieuUpdateWithoutDatVeInput, LichChieuUncheckedUpdateWithoutDatVeInput>
    create: XOR<LichChieuCreateWithoutDatVeInput, LichChieuUncheckedCreateWithoutDatVeInput>
    where?: LichChieuWhereInput
  }

  export type LichChieuUpdateToOneWithWhereWithoutDatVeInput = {
    where?: LichChieuWhereInput
    data: XOR<LichChieuUpdateWithoutDatVeInput, LichChieuUncheckedUpdateWithoutDatVeInput>
  }

  export type LichChieuUpdateWithoutDatVeInput = {
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableFloatFieldUpdateOperationsInput | number | null
    RapPhim?: RapPhimUpdateOneWithoutLichChieuNestedInput
    Phim?: PhimUpdateOneWithoutLichChieuNestedInput
  }

  export type LichChieuUncheckedUpdateWithoutDatVeInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
    ma_phim?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type GheUpsertWithoutDatVeInput = {
    update: XOR<GheUpdateWithoutDatVeInput, GheUncheckedUpdateWithoutDatVeInput>
    create: XOR<GheCreateWithoutDatVeInput, GheUncheckedCreateWithoutDatVeInput>
    where?: GheWhereInput
  }

  export type GheUpdateToOneWithWhereWithoutDatVeInput = {
    where?: GheWhereInput
    data: XOR<GheUpdateWithoutDatVeInput, GheUncheckedUpdateWithoutDatVeInput>
  }

  export type GheUpdateWithoutDatVeInput = {
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    RapPhim?: RapPhimUpdateOneWithoutGheNestedInput
  }

  export type GheUncheckedUpdateWithoutDatVeInput = {
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DatVeCreateWithoutGheInput = {
    NguoiDung?: NguoiDungCreateNestedOneWithoutDatVeInput
    LichChieu?: LichChieuCreateNestedOneWithoutDatVeInput
  }

  export type DatVeUncheckedCreateWithoutGheInput = {
    ma_ve?: number
    tai_khoan?: number | null
    ma_lich_chieu?: number | null
  }

  export type DatVeCreateOrConnectWithoutGheInput = {
    where: DatVeWhereUniqueInput
    create: XOR<DatVeCreateWithoutGheInput, DatVeUncheckedCreateWithoutGheInput>
  }

  export type DatVeCreateManyGheInputEnvelope = {
    data: DatVeCreateManyGheInput | DatVeCreateManyGheInput[]
    skipDuplicates?: boolean
  }

  export type RapPhimCreateWithoutGheInput = {
    ten_rap?: string | null
    LichChieu?: LichChieuCreateNestedManyWithoutRapPhimInput
    CumRap?: CumRapCreateNestedOneWithoutRapPhimInput
  }

  export type RapPhimUncheckedCreateWithoutGheInput = {
    ma_rap?: number
    ten_rap?: string | null
    ma_cum_rap?: number | null
    LichChieu?: LichChieuUncheckedCreateNestedManyWithoutRapPhimInput
  }

  export type RapPhimCreateOrConnectWithoutGheInput = {
    where: RapPhimWhereUniqueInput
    create: XOR<RapPhimCreateWithoutGheInput, RapPhimUncheckedCreateWithoutGheInput>
  }

  export type DatVeUpsertWithWhereUniqueWithoutGheInput = {
    where: DatVeWhereUniqueInput
    update: XOR<DatVeUpdateWithoutGheInput, DatVeUncheckedUpdateWithoutGheInput>
    create: XOR<DatVeCreateWithoutGheInput, DatVeUncheckedCreateWithoutGheInput>
  }

  export type DatVeUpdateWithWhereUniqueWithoutGheInput = {
    where: DatVeWhereUniqueInput
    data: XOR<DatVeUpdateWithoutGheInput, DatVeUncheckedUpdateWithoutGheInput>
  }

  export type DatVeUpdateManyWithWhereWithoutGheInput = {
    where: DatVeScalarWhereInput
    data: XOR<DatVeUpdateManyMutationInput, DatVeUncheckedUpdateManyWithoutGheInput>
  }

  export type DatVeScalarWhereInput = {
    AND?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
    OR?: DatVeScalarWhereInput[]
    NOT?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
    ma_ve?: IntFilter<"DatVe"> | number
    tai_khoan?: IntNullableFilter<"DatVe"> | number | null
    ma_lich_chieu?: IntNullableFilter<"DatVe"> | number | null
    ma_ghe?: IntNullableFilter<"DatVe"> | number | null
  }

  export type RapPhimUpsertWithoutGheInput = {
    update: XOR<RapPhimUpdateWithoutGheInput, RapPhimUncheckedUpdateWithoutGheInput>
    create: XOR<RapPhimCreateWithoutGheInput, RapPhimUncheckedCreateWithoutGheInput>
    where?: RapPhimWhereInput
  }

  export type RapPhimUpdateToOneWithWhereWithoutGheInput = {
    where?: RapPhimWhereInput
    data: XOR<RapPhimUpdateWithoutGheInput, RapPhimUncheckedUpdateWithoutGheInput>
  }

  export type RapPhimUpdateWithoutGheInput = {
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    LichChieu?: LichChieuUpdateManyWithoutRapPhimNestedInput
    CumRap?: CumRapUpdateOneWithoutRapPhimNestedInput
  }

  export type RapPhimUncheckedUpdateWithoutGheInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    ma_cum_rap?: NullableIntFieldUpdateOperationsInput | number | null
    LichChieu?: LichChieuUncheckedUpdateManyWithoutRapPhimNestedInput
  }

  export type CumRapCreateWithoutHeThongRapInput = {
    ten_cum_rap?: string | null
    dia_chi?: string | null
    RapPhim?: RapPhimCreateNestedManyWithoutCumRapInput
  }

  export type CumRapUncheckedCreateWithoutHeThongRapInput = {
    ma_cum_rap?: number
    ten_cum_rap?: string | null
    dia_chi?: string | null
    RapPhim?: RapPhimUncheckedCreateNestedManyWithoutCumRapInput
  }

  export type CumRapCreateOrConnectWithoutHeThongRapInput = {
    where: CumRapWhereUniqueInput
    create: XOR<CumRapCreateWithoutHeThongRapInput, CumRapUncheckedCreateWithoutHeThongRapInput>
  }

  export type CumRapCreateManyHeThongRapInputEnvelope = {
    data: CumRapCreateManyHeThongRapInput | CumRapCreateManyHeThongRapInput[]
    skipDuplicates?: boolean
  }

  export type CumRapUpsertWithWhereUniqueWithoutHeThongRapInput = {
    where: CumRapWhereUniqueInput
    update: XOR<CumRapUpdateWithoutHeThongRapInput, CumRapUncheckedUpdateWithoutHeThongRapInput>
    create: XOR<CumRapCreateWithoutHeThongRapInput, CumRapUncheckedCreateWithoutHeThongRapInput>
  }

  export type CumRapUpdateWithWhereUniqueWithoutHeThongRapInput = {
    where: CumRapWhereUniqueInput
    data: XOR<CumRapUpdateWithoutHeThongRapInput, CumRapUncheckedUpdateWithoutHeThongRapInput>
  }

  export type CumRapUpdateManyWithWhereWithoutHeThongRapInput = {
    where: CumRapScalarWhereInput
    data: XOR<CumRapUpdateManyMutationInput, CumRapUncheckedUpdateManyWithoutHeThongRapInput>
  }

  export type CumRapScalarWhereInput = {
    AND?: CumRapScalarWhereInput | CumRapScalarWhereInput[]
    OR?: CumRapScalarWhereInput[]
    NOT?: CumRapScalarWhereInput | CumRapScalarWhereInput[]
    ma_cum_rap?: IntFilter<"CumRap"> | number
    ten_cum_rap?: StringNullableFilter<"CumRap"> | string | null
    dia_chi?: StringNullableFilter<"CumRap"> | string | null
    ma_he_thong_rap?: IntNullableFilter<"CumRap"> | number | null
  }

  export type DatVeCreateWithoutLichChieuInput = {
    NguoiDung?: NguoiDungCreateNestedOneWithoutDatVeInput
    Ghe?: GheCreateNestedOneWithoutDatVeInput
  }

  export type DatVeUncheckedCreateWithoutLichChieuInput = {
    ma_ve?: number
    tai_khoan?: number | null
    ma_ghe?: number | null
  }

  export type DatVeCreateOrConnectWithoutLichChieuInput = {
    where: DatVeWhereUniqueInput
    create: XOR<DatVeCreateWithoutLichChieuInput, DatVeUncheckedCreateWithoutLichChieuInput>
  }

  export type DatVeCreateManyLichChieuInputEnvelope = {
    data: DatVeCreateManyLichChieuInput | DatVeCreateManyLichChieuInput[]
    skipDuplicates?: boolean
  }

  export type RapPhimCreateWithoutLichChieuInput = {
    ten_rap?: string | null
    Ghe?: GheCreateNestedManyWithoutRapPhimInput
    CumRap?: CumRapCreateNestedOneWithoutRapPhimInput
  }

  export type RapPhimUncheckedCreateWithoutLichChieuInput = {
    ma_rap?: number
    ten_rap?: string | null
    ma_cum_rap?: number | null
    Ghe?: GheUncheckedCreateNestedManyWithoutRapPhimInput
  }

  export type RapPhimCreateOrConnectWithoutLichChieuInput = {
    where: RapPhimWhereUniqueInput
    create: XOR<RapPhimCreateWithoutLichChieuInput, RapPhimUncheckedCreateWithoutLichChieuInput>
  }

  export type PhimCreateWithoutLichChieuInput = {
    ten_phim?: string | null
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number | null
    hot?: boolean | null
    dang_chieu?: boolean | null
    sap_chieu?: boolean | null
    Banner?: BannerCreateNestedManyWithoutPhimInput
  }

  export type PhimUncheckedCreateWithoutLichChieuInput = {
    ma_phim?: number
    ten_phim?: string | null
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number | null
    hot?: boolean | null
    dang_chieu?: boolean | null
    sap_chieu?: boolean | null
    Banner?: BannerUncheckedCreateNestedManyWithoutPhimInput
  }

  export type PhimCreateOrConnectWithoutLichChieuInput = {
    where: PhimWhereUniqueInput
    create: XOR<PhimCreateWithoutLichChieuInput, PhimUncheckedCreateWithoutLichChieuInput>
  }

  export type DatVeUpsertWithWhereUniqueWithoutLichChieuInput = {
    where: DatVeWhereUniqueInput
    update: XOR<DatVeUpdateWithoutLichChieuInput, DatVeUncheckedUpdateWithoutLichChieuInput>
    create: XOR<DatVeCreateWithoutLichChieuInput, DatVeUncheckedCreateWithoutLichChieuInput>
  }

  export type DatVeUpdateWithWhereUniqueWithoutLichChieuInput = {
    where: DatVeWhereUniqueInput
    data: XOR<DatVeUpdateWithoutLichChieuInput, DatVeUncheckedUpdateWithoutLichChieuInput>
  }

  export type DatVeUpdateManyWithWhereWithoutLichChieuInput = {
    where: DatVeScalarWhereInput
    data: XOR<DatVeUpdateManyMutationInput, DatVeUncheckedUpdateManyWithoutLichChieuInput>
  }

  export type RapPhimUpsertWithoutLichChieuInput = {
    update: XOR<RapPhimUpdateWithoutLichChieuInput, RapPhimUncheckedUpdateWithoutLichChieuInput>
    create: XOR<RapPhimCreateWithoutLichChieuInput, RapPhimUncheckedCreateWithoutLichChieuInput>
    where?: RapPhimWhereInput
  }

  export type RapPhimUpdateToOneWithWhereWithoutLichChieuInput = {
    where?: RapPhimWhereInput
    data: XOR<RapPhimUpdateWithoutLichChieuInput, RapPhimUncheckedUpdateWithoutLichChieuInput>
  }

  export type RapPhimUpdateWithoutLichChieuInput = {
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    Ghe?: GheUpdateManyWithoutRapPhimNestedInput
    CumRap?: CumRapUpdateOneWithoutRapPhimNestedInput
  }

  export type RapPhimUncheckedUpdateWithoutLichChieuInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    ma_cum_rap?: NullableIntFieldUpdateOperationsInput | number | null
    Ghe?: GheUncheckedUpdateManyWithoutRapPhimNestedInput
  }

  export type PhimUpsertWithoutLichChieuInput = {
    update: XOR<PhimUpdateWithoutLichChieuInput, PhimUncheckedUpdateWithoutLichChieuInput>
    create: XOR<PhimCreateWithoutLichChieuInput, PhimUncheckedCreateWithoutLichChieuInput>
    where?: PhimWhereInput
  }

  export type PhimUpdateToOneWithWhereWithoutLichChieuInput = {
    where?: PhimWhereInput
    data: XOR<PhimUpdateWithoutLichChieuInput, PhimUncheckedUpdateWithoutLichChieuInput>
  }

  export type PhimUpdateWithoutLichChieuInput = {
    ten_phim?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: NullableIntFieldUpdateOperationsInput | number | null
    hot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dang_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sap_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Banner?: BannerUpdateManyWithoutPhimNestedInput
  }

  export type PhimUncheckedUpdateWithoutLichChieuInput = {
    ma_phim?: IntFieldUpdateOperationsInput | number
    ten_phim?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: NullableIntFieldUpdateOperationsInput | number | null
    hot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dang_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sap_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Banner?: BannerUncheckedUpdateManyWithoutPhimNestedInput
  }

  export type DatVeCreateWithoutNguoiDungInput = {
    LichChieu?: LichChieuCreateNestedOneWithoutDatVeInput
    Ghe?: GheCreateNestedOneWithoutDatVeInput
  }

  export type DatVeUncheckedCreateWithoutNguoiDungInput = {
    ma_ve?: number
    ma_lich_chieu?: number | null
    ma_ghe?: number | null
  }

  export type DatVeCreateOrConnectWithoutNguoiDungInput = {
    where: DatVeWhereUniqueInput
    create: XOR<DatVeCreateWithoutNguoiDungInput, DatVeUncheckedCreateWithoutNguoiDungInput>
  }

  export type DatVeCreateManyNguoiDungInputEnvelope = {
    data: DatVeCreateManyNguoiDungInput | DatVeCreateManyNguoiDungInput[]
    skipDuplicates?: boolean
  }

  export type LoaiNguoiDungCreateWithoutNguoiDungInput = {
    loai_nguoi_dung?: string | null
  }

  export type LoaiNguoiDungUncheckedCreateWithoutNguoiDungInput = {
    ma_loai_nguoi_dung?: number
    loai_nguoi_dung?: string | null
  }

  export type LoaiNguoiDungCreateOrConnectWithoutNguoiDungInput = {
    where: LoaiNguoiDungWhereUniqueInput
    create: XOR<LoaiNguoiDungCreateWithoutNguoiDungInput, LoaiNguoiDungUncheckedCreateWithoutNguoiDungInput>
  }

  export type DatVeUpsertWithWhereUniqueWithoutNguoiDungInput = {
    where: DatVeWhereUniqueInput
    update: XOR<DatVeUpdateWithoutNguoiDungInput, DatVeUncheckedUpdateWithoutNguoiDungInput>
    create: XOR<DatVeCreateWithoutNguoiDungInput, DatVeUncheckedCreateWithoutNguoiDungInput>
  }

  export type DatVeUpdateWithWhereUniqueWithoutNguoiDungInput = {
    where: DatVeWhereUniqueInput
    data: XOR<DatVeUpdateWithoutNguoiDungInput, DatVeUncheckedUpdateWithoutNguoiDungInput>
  }

  export type DatVeUpdateManyWithWhereWithoutNguoiDungInput = {
    where: DatVeScalarWhereInput
    data: XOR<DatVeUpdateManyMutationInput, DatVeUncheckedUpdateManyWithoutNguoiDungInput>
  }

  export type LoaiNguoiDungUpsertWithoutNguoiDungInput = {
    update: XOR<LoaiNguoiDungUpdateWithoutNguoiDungInput, LoaiNguoiDungUncheckedUpdateWithoutNguoiDungInput>
    create: XOR<LoaiNguoiDungCreateWithoutNguoiDungInput, LoaiNguoiDungUncheckedCreateWithoutNguoiDungInput>
    where?: LoaiNguoiDungWhereInput
  }

  export type LoaiNguoiDungUpdateToOneWithWhereWithoutNguoiDungInput = {
    where?: LoaiNguoiDungWhereInput
    data: XOR<LoaiNguoiDungUpdateWithoutNguoiDungInput, LoaiNguoiDungUncheckedUpdateWithoutNguoiDungInput>
  }

  export type LoaiNguoiDungUpdateWithoutNguoiDungInput = {
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoaiNguoiDungUncheckedUpdateWithoutNguoiDungInput = {
    ma_loai_nguoi_dung?: IntFieldUpdateOperationsInput | number
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BannerCreateWithoutPhimInput = {
    hinh_anh?: string | null
  }

  export type BannerUncheckedCreateWithoutPhimInput = {
    ma_banner?: number
    hinh_anh?: string | null
  }

  export type BannerCreateOrConnectWithoutPhimInput = {
    where: BannerWhereUniqueInput
    create: XOR<BannerCreateWithoutPhimInput, BannerUncheckedCreateWithoutPhimInput>
  }

  export type BannerCreateManyPhimInputEnvelope = {
    data: BannerCreateManyPhimInput | BannerCreateManyPhimInput[]
    skipDuplicates?: boolean
  }

  export type LichChieuCreateWithoutPhimInput = {
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    DatVe?: DatVeCreateNestedManyWithoutLichChieuInput
    RapPhim?: RapPhimCreateNestedOneWithoutLichChieuInput
  }

  export type LichChieuUncheckedCreateWithoutPhimInput = {
    ma_lich_chieu?: number
    ma_rap?: number | null
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutLichChieuInput
  }

  export type LichChieuCreateOrConnectWithoutPhimInput = {
    where: LichChieuWhereUniqueInput
    create: XOR<LichChieuCreateWithoutPhimInput, LichChieuUncheckedCreateWithoutPhimInput>
  }

  export type LichChieuCreateManyPhimInputEnvelope = {
    data: LichChieuCreateManyPhimInput | LichChieuCreateManyPhimInput[]
    skipDuplicates?: boolean
  }

  export type BannerUpsertWithWhereUniqueWithoutPhimInput = {
    where: BannerWhereUniqueInput
    update: XOR<BannerUpdateWithoutPhimInput, BannerUncheckedUpdateWithoutPhimInput>
    create: XOR<BannerCreateWithoutPhimInput, BannerUncheckedCreateWithoutPhimInput>
  }

  export type BannerUpdateWithWhereUniqueWithoutPhimInput = {
    where: BannerWhereUniqueInput
    data: XOR<BannerUpdateWithoutPhimInput, BannerUncheckedUpdateWithoutPhimInput>
  }

  export type BannerUpdateManyWithWhereWithoutPhimInput = {
    where: BannerScalarWhereInput
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyWithoutPhimInput>
  }

  export type BannerScalarWhereInput = {
    AND?: BannerScalarWhereInput | BannerScalarWhereInput[]
    OR?: BannerScalarWhereInput[]
    NOT?: BannerScalarWhereInput | BannerScalarWhereInput[]
    ma_banner?: IntFilter<"Banner"> | number
    ma_phim?: IntNullableFilter<"Banner"> | number | null
    hinh_anh?: StringNullableFilter<"Banner"> | string | null
  }

  export type LichChieuUpsertWithWhereUniqueWithoutPhimInput = {
    where: LichChieuWhereUniqueInput
    update: XOR<LichChieuUpdateWithoutPhimInput, LichChieuUncheckedUpdateWithoutPhimInput>
    create: XOR<LichChieuCreateWithoutPhimInput, LichChieuUncheckedCreateWithoutPhimInput>
  }

  export type LichChieuUpdateWithWhereUniqueWithoutPhimInput = {
    where: LichChieuWhereUniqueInput
    data: XOR<LichChieuUpdateWithoutPhimInput, LichChieuUncheckedUpdateWithoutPhimInput>
  }

  export type LichChieuUpdateManyWithWhereWithoutPhimInput = {
    where: LichChieuScalarWhereInput
    data: XOR<LichChieuUpdateManyMutationInput, LichChieuUncheckedUpdateManyWithoutPhimInput>
  }

  export type LichChieuScalarWhereInput = {
    AND?: LichChieuScalarWhereInput | LichChieuScalarWhereInput[]
    OR?: LichChieuScalarWhereInput[]
    NOT?: LichChieuScalarWhereInput | LichChieuScalarWhereInput[]
    ma_lich_chieu?: IntFilter<"LichChieu"> | number
    ma_rap?: IntNullableFilter<"LichChieu"> | number | null
    ma_phim?: IntNullableFilter<"LichChieu"> | number | null
    ngay_gio_chieu?: DateTimeNullableFilter<"LichChieu"> | Date | string | null
    gia_ve?: FloatNullableFilter<"LichChieu"> | number | null
  }

  export type GheCreateWithoutRapPhimInput = {
    ten_ghe?: string | null
    loai_ghe?: string | null
    DatVe?: DatVeCreateNestedManyWithoutGheInput
  }

  export type GheUncheckedCreateWithoutRapPhimInput = {
    ma_ghe?: number
    ten_ghe?: string | null
    loai_ghe?: string | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutGheInput
  }

  export type GheCreateOrConnectWithoutRapPhimInput = {
    where: GheWhereUniqueInput
    create: XOR<GheCreateWithoutRapPhimInput, GheUncheckedCreateWithoutRapPhimInput>
  }

  export type GheCreateManyRapPhimInputEnvelope = {
    data: GheCreateManyRapPhimInput | GheCreateManyRapPhimInput[]
    skipDuplicates?: boolean
  }

  export type LichChieuCreateWithoutRapPhimInput = {
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    DatVe?: DatVeCreateNestedManyWithoutLichChieuInput
    Phim?: PhimCreateNestedOneWithoutLichChieuInput
  }

  export type LichChieuUncheckedCreateWithoutRapPhimInput = {
    ma_lich_chieu?: number
    ma_phim?: number | null
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutLichChieuInput
  }

  export type LichChieuCreateOrConnectWithoutRapPhimInput = {
    where: LichChieuWhereUniqueInput
    create: XOR<LichChieuCreateWithoutRapPhimInput, LichChieuUncheckedCreateWithoutRapPhimInput>
  }

  export type LichChieuCreateManyRapPhimInputEnvelope = {
    data: LichChieuCreateManyRapPhimInput | LichChieuCreateManyRapPhimInput[]
    skipDuplicates?: boolean
  }

  export type CumRapCreateWithoutRapPhimInput = {
    ten_cum_rap?: string | null
    dia_chi?: string | null
    HeThongRap?: HeThongRapCreateNestedOneWithoutCumRapInput
  }

  export type CumRapUncheckedCreateWithoutRapPhimInput = {
    ma_cum_rap?: number
    ten_cum_rap?: string | null
    dia_chi?: string | null
    ma_he_thong_rap?: number | null
  }

  export type CumRapCreateOrConnectWithoutRapPhimInput = {
    where: CumRapWhereUniqueInput
    create: XOR<CumRapCreateWithoutRapPhimInput, CumRapUncheckedCreateWithoutRapPhimInput>
  }

  export type GheUpsertWithWhereUniqueWithoutRapPhimInput = {
    where: GheWhereUniqueInput
    update: XOR<GheUpdateWithoutRapPhimInput, GheUncheckedUpdateWithoutRapPhimInput>
    create: XOR<GheCreateWithoutRapPhimInput, GheUncheckedCreateWithoutRapPhimInput>
  }

  export type GheUpdateWithWhereUniqueWithoutRapPhimInput = {
    where: GheWhereUniqueInput
    data: XOR<GheUpdateWithoutRapPhimInput, GheUncheckedUpdateWithoutRapPhimInput>
  }

  export type GheUpdateManyWithWhereWithoutRapPhimInput = {
    where: GheScalarWhereInput
    data: XOR<GheUpdateManyMutationInput, GheUncheckedUpdateManyWithoutRapPhimInput>
  }

  export type GheScalarWhereInput = {
    AND?: GheScalarWhereInput | GheScalarWhereInput[]
    OR?: GheScalarWhereInput[]
    NOT?: GheScalarWhereInput | GheScalarWhereInput[]
    ma_ghe?: IntFilter<"Ghe"> | number
    ten_ghe?: StringNullableFilter<"Ghe"> | string | null
    loai_ghe?: StringNullableFilter<"Ghe"> | string | null
    ma_rap?: IntNullableFilter<"Ghe"> | number | null
  }

  export type LichChieuUpsertWithWhereUniqueWithoutRapPhimInput = {
    where: LichChieuWhereUniqueInput
    update: XOR<LichChieuUpdateWithoutRapPhimInput, LichChieuUncheckedUpdateWithoutRapPhimInput>
    create: XOR<LichChieuCreateWithoutRapPhimInput, LichChieuUncheckedCreateWithoutRapPhimInput>
  }

  export type LichChieuUpdateWithWhereUniqueWithoutRapPhimInput = {
    where: LichChieuWhereUniqueInput
    data: XOR<LichChieuUpdateWithoutRapPhimInput, LichChieuUncheckedUpdateWithoutRapPhimInput>
  }

  export type LichChieuUpdateManyWithWhereWithoutRapPhimInput = {
    where: LichChieuScalarWhereInput
    data: XOR<LichChieuUpdateManyMutationInput, LichChieuUncheckedUpdateManyWithoutRapPhimInput>
  }

  export type CumRapUpsertWithoutRapPhimInput = {
    update: XOR<CumRapUpdateWithoutRapPhimInput, CumRapUncheckedUpdateWithoutRapPhimInput>
    create: XOR<CumRapCreateWithoutRapPhimInput, CumRapUncheckedCreateWithoutRapPhimInput>
    where?: CumRapWhereInput
  }

  export type CumRapUpdateToOneWithWhereWithoutRapPhimInput = {
    where?: CumRapWhereInput
    data: XOR<CumRapUpdateWithoutRapPhimInput, CumRapUncheckedUpdateWithoutRapPhimInput>
  }

  export type CumRapUpdateWithoutRapPhimInput = {
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    HeThongRap?: HeThongRapUpdateOneWithoutCumRapNestedInput
  }

  export type CumRapUncheckedUpdateWithoutRapPhimInput = {
    ma_cum_rap?: IntFieldUpdateOperationsInput | number
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    ma_he_thong_rap?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NguoiDungCreateWithoutLoaiNguoiDungInput = {
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    DatVe?: DatVeCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateWithoutLoaiNguoiDungInput = {
    tai_khoan?: number
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungCreateOrConnectWithoutLoaiNguoiDungInput = {
    where: NguoiDungWhereUniqueInput
    create: XOR<NguoiDungCreateWithoutLoaiNguoiDungInput, NguoiDungUncheckedCreateWithoutLoaiNguoiDungInput>
  }

  export type NguoiDungCreateManyLoaiNguoiDungInputEnvelope = {
    data: NguoiDungCreateManyLoaiNguoiDungInput | NguoiDungCreateManyLoaiNguoiDungInput[]
    skipDuplicates?: boolean
  }

  export type NguoiDungUpsertWithWhereUniqueWithoutLoaiNguoiDungInput = {
    where: NguoiDungWhereUniqueInput
    update: XOR<NguoiDungUpdateWithoutLoaiNguoiDungInput, NguoiDungUncheckedUpdateWithoutLoaiNguoiDungInput>
    create: XOR<NguoiDungCreateWithoutLoaiNguoiDungInput, NguoiDungUncheckedCreateWithoutLoaiNguoiDungInput>
  }

  export type NguoiDungUpdateWithWhereUniqueWithoutLoaiNguoiDungInput = {
    where: NguoiDungWhereUniqueInput
    data: XOR<NguoiDungUpdateWithoutLoaiNguoiDungInput, NguoiDungUncheckedUpdateWithoutLoaiNguoiDungInput>
  }

  export type NguoiDungUpdateManyWithWhereWithoutLoaiNguoiDungInput = {
    where: NguoiDungScalarWhereInput
    data: XOR<NguoiDungUpdateManyMutationInput, NguoiDungUncheckedUpdateManyWithoutLoaiNguoiDungInput>
  }

  export type NguoiDungScalarWhereInput = {
    AND?: NguoiDungScalarWhereInput | NguoiDungScalarWhereInput[]
    OR?: NguoiDungScalarWhereInput[]
    NOT?: NguoiDungScalarWhereInput | NguoiDungScalarWhereInput[]
    tai_khoan?: IntFilter<"NguoiDung"> | number
    ho_ten?: StringNullableFilter<"NguoiDung"> | string | null
    email?: StringNullableFilter<"NguoiDung"> | string | null
    so_dt?: StringNullableFilter<"NguoiDung"> | string | null
    mat_khau?: StringNullableFilter<"NguoiDung"> | string | null
    ma_loai_nguoi_dung?: IntFilter<"NguoiDung"> | number
  }

  export type RapPhimCreateManyCumRapInput = {
    ma_rap?: number
    ten_rap?: string | null
  }

  export type RapPhimUpdateWithoutCumRapInput = {
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    Ghe?: GheUpdateManyWithoutRapPhimNestedInput
    LichChieu?: LichChieuUpdateManyWithoutRapPhimNestedInput
  }

  export type RapPhimUncheckedUpdateWithoutCumRapInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    Ghe?: GheUncheckedUpdateManyWithoutRapPhimNestedInput
    LichChieu?: LichChieuUncheckedUpdateManyWithoutRapPhimNestedInput
  }

  export type RapPhimUncheckedUpdateManyWithoutCumRapInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DatVeCreateManyGheInput = {
    ma_ve?: number
    tai_khoan?: number | null
    ma_lich_chieu?: number | null
  }

  export type DatVeUpdateWithoutGheInput = {
    NguoiDung?: NguoiDungUpdateOneWithoutDatVeNestedInput
    LichChieu?: LichChieuUpdateOneWithoutDatVeNestedInput
  }

  export type DatVeUncheckedUpdateWithoutGheInput = {
    ma_ve?: IntFieldUpdateOperationsInput | number
    tai_khoan?: NullableIntFieldUpdateOperationsInput | number | null
    ma_lich_chieu?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DatVeUncheckedUpdateManyWithoutGheInput = {
    ma_ve?: IntFieldUpdateOperationsInput | number
    tai_khoan?: NullableIntFieldUpdateOperationsInput | number | null
    ma_lich_chieu?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CumRapCreateManyHeThongRapInput = {
    ma_cum_rap?: number
    ten_cum_rap?: string | null
    dia_chi?: string | null
  }

  export type CumRapUpdateWithoutHeThongRapInput = {
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    RapPhim?: RapPhimUpdateManyWithoutCumRapNestedInput
  }

  export type CumRapUncheckedUpdateWithoutHeThongRapInput = {
    ma_cum_rap?: IntFieldUpdateOperationsInput | number
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    RapPhim?: RapPhimUncheckedUpdateManyWithoutCumRapNestedInput
  }

  export type CumRapUncheckedUpdateManyWithoutHeThongRapInput = {
    ma_cum_rap?: IntFieldUpdateOperationsInput | number
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DatVeCreateManyLichChieuInput = {
    ma_ve?: number
    tai_khoan?: number | null
    ma_ghe?: number | null
  }

  export type DatVeUpdateWithoutLichChieuInput = {
    NguoiDung?: NguoiDungUpdateOneWithoutDatVeNestedInput
    Ghe?: GheUpdateOneWithoutDatVeNestedInput
  }

  export type DatVeUncheckedUpdateWithoutLichChieuInput = {
    ma_ve?: IntFieldUpdateOperationsInput | number
    tai_khoan?: NullableIntFieldUpdateOperationsInput | number | null
    ma_ghe?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DatVeUncheckedUpdateManyWithoutLichChieuInput = {
    ma_ve?: IntFieldUpdateOperationsInput | number
    tai_khoan?: NullableIntFieldUpdateOperationsInput | number | null
    ma_ghe?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DatVeCreateManyNguoiDungInput = {
    ma_ve?: number
    ma_lich_chieu?: number | null
    ma_ghe?: number | null
  }

  export type DatVeUpdateWithoutNguoiDungInput = {
    LichChieu?: LichChieuUpdateOneWithoutDatVeNestedInput
    Ghe?: GheUpdateOneWithoutDatVeNestedInput
  }

  export type DatVeUncheckedUpdateWithoutNguoiDungInput = {
    ma_ve?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: NullableIntFieldUpdateOperationsInput | number | null
    ma_ghe?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DatVeUncheckedUpdateManyWithoutNguoiDungInput = {
    ma_ve?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: NullableIntFieldUpdateOperationsInput | number | null
    ma_ghe?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BannerCreateManyPhimInput = {
    ma_banner?: number
    hinh_anh?: string | null
  }

  export type LichChieuCreateManyPhimInput = {
    ma_lich_chieu?: number
    ma_rap?: number | null
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
  }

  export type BannerUpdateWithoutPhimInput = {
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BannerUncheckedUpdateWithoutPhimInput = {
    ma_banner?: IntFieldUpdateOperationsInput | number
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BannerUncheckedUpdateManyWithoutPhimInput = {
    ma_banner?: IntFieldUpdateOperationsInput | number
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LichChieuUpdateWithoutPhimInput = {
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableFloatFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUpdateManyWithoutLichChieuNestedInput
    RapPhim?: RapPhimUpdateOneWithoutLichChieuNestedInput
  }

  export type LichChieuUncheckedUpdateWithoutPhimInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableFloatFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUncheckedUpdateManyWithoutLichChieuNestedInput
  }

  export type LichChieuUncheckedUpdateManyWithoutPhimInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type GheCreateManyRapPhimInput = {
    ma_ghe?: number
    ten_ghe?: string | null
    loai_ghe?: string | null
  }

  export type LichChieuCreateManyRapPhimInput = {
    ma_lich_chieu?: number
    ma_phim?: number | null
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
  }

  export type GheUpdateWithoutRapPhimInput = {
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    DatVe?: DatVeUpdateManyWithoutGheNestedInput
  }

  export type GheUncheckedUpdateWithoutRapPhimInput = {
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    DatVe?: DatVeUncheckedUpdateManyWithoutGheNestedInput
  }

  export type GheUncheckedUpdateManyWithoutRapPhimInput = {
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LichChieuUpdateWithoutRapPhimInput = {
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableFloatFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUpdateManyWithoutLichChieuNestedInput
    Phim?: PhimUpdateOneWithoutLichChieuNestedInput
  }

  export type LichChieuUncheckedUpdateWithoutRapPhimInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_phim?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableFloatFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUncheckedUpdateManyWithoutLichChieuNestedInput
  }

  export type LichChieuUncheckedUpdateManyWithoutRapPhimInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_phim?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type NguoiDungCreateManyLoaiNguoiDungInput = {
    tai_khoan?: number
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
  }

  export type NguoiDungUpdateWithoutLoaiNguoiDungInput = {
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    DatVe?: DatVeUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateWithoutLoaiNguoiDungInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    DatVe?: DatVeUncheckedUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateManyWithoutLoaiNguoiDungInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}