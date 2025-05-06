
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
 * Model Song
 * 
 */
export type Song = $Result.DefaultSelection<Prisma.$SongPayload>
/**
 * Model SongLyrics
 * 
 */
export type SongLyrics = $Result.DefaultSelection<Prisma.$SongLyricsPayload>
/**
 * Model SongMidi
 * 
 */
export type SongMidi = $Result.DefaultSelection<Prisma.$SongMidiPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Songs
 * const songs = await prisma.song.findMany()
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
   * // Fetch zero or more Songs
   * const songs = await prisma.song.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.song`: Exposes CRUD operations for the **Song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.song.findMany()
    * ```
    */
  get song(): Prisma.SongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.songLyrics`: Exposes CRUD operations for the **SongLyrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SongLyrics
    * const songLyrics = await prisma.songLyrics.findMany()
    * ```
    */
  get songLyrics(): Prisma.SongLyricsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.songMidi`: Exposes CRUD operations for the **SongMidi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SongMidis
    * const songMidis = await prisma.songMidi.findMany()
    * ```
    */
  get songMidi(): Prisma.SongMidiDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Song: 'Song',
    SongLyrics: 'SongLyrics',
    SongMidi: 'SongMidi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "song" | "songLyrics" | "songMidi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Song: {
        payload: Prisma.$SongPayload<ExtArgs>
        fields: Prisma.SongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findFirst: {
            args: Prisma.SongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findMany: {
            args: Prisma.SongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          create: {
            args: Prisma.SongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          createMany: {
            args: Prisma.SongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          delete: {
            args: Prisma.SongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          update: {
            args: Prisma.SongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          deleteMany: {
            args: Prisma.SongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          upsert: {
            args: Prisma.SongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          aggregate: {
            args: Prisma.SongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSong>
          }
          groupBy: {
            args: Prisma.SongGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongCountArgs<ExtArgs>
            result: $Utils.Optional<SongCountAggregateOutputType> | number
          }
        }
      }
      SongLyrics: {
        payload: Prisma.$SongLyricsPayload<ExtArgs>
        fields: Prisma.SongLyricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongLyricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongLyricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongLyricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongLyricsPayload>
          }
          findFirst: {
            args: Prisma.SongLyricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongLyricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongLyricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongLyricsPayload>
          }
          findMany: {
            args: Prisma.SongLyricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongLyricsPayload>[]
          }
          create: {
            args: Prisma.SongLyricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongLyricsPayload>
          }
          createMany: {
            args: Prisma.SongLyricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SongLyricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongLyricsPayload>[]
          }
          delete: {
            args: Prisma.SongLyricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongLyricsPayload>
          }
          update: {
            args: Prisma.SongLyricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongLyricsPayload>
          }
          deleteMany: {
            args: Prisma.SongLyricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SongLyricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SongLyricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongLyricsPayload>[]
          }
          upsert: {
            args: Prisma.SongLyricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongLyricsPayload>
          }
          aggregate: {
            args: Prisma.SongLyricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSongLyrics>
          }
          groupBy: {
            args: Prisma.SongLyricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongLyricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongLyricsCountArgs<ExtArgs>
            result: $Utils.Optional<SongLyricsCountAggregateOutputType> | number
          }
        }
      }
      SongMidi: {
        payload: Prisma.$SongMidiPayload<ExtArgs>
        fields: Prisma.SongMidiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongMidiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongMidiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongMidiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongMidiPayload>
          }
          findFirst: {
            args: Prisma.SongMidiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongMidiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongMidiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongMidiPayload>
          }
          findMany: {
            args: Prisma.SongMidiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongMidiPayload>[]
          }
          create: {
            args: Prisma.SongMidiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongMidiPayload>
          }
          createMany: {
            args: Prisma.SongMidiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SongMidiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongMidiPayload>[]
          }
          delete: {
            args: Prisma.SongMidiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongMidiPayload>
          }
          update: {
            args: Prisma.SongMidiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongMidiPayload>
          }
          deleteMany: {
            args: Prisma.SongMidiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SongMidiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SongMidiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongMidiPayload>[]
          }
          upsert: {
            args: Prisma.SongMidiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongMidiPayload>
          }
          aggregate: {
            args: Prisma.SongMidiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSongMidi>
          }
          groupBy: {
            args: Prisma.SongMidiGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongMidiGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongMidiCountArgs<ExtArgs>
            result: $Utils.Optional<SongMidiCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    song?: SongOmit
    songLyrics?: SongLyricsOmit
    songMidi?: SongMidiOmit
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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model Song
   */

  export type AggregateSong = {
    _count: SongCountAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  export type SongMinAggregateOutputType = {
    id: string | null
    title: string | null
    team: string | null
    audioFilePath: string | null
    midiFilePath: string | null
    lyrics: string | null
  }

  export type SongMaxAggregateOutputType = {
    id: string | null
    title: string | null
    team: string | null
    audioFilePath: string | null
    midiFilePath: string | null
    lyrics: string | null
  }

  export type SongCountAggregateOutputType = {
    id: number
    title: number
    team: number
    audioFilePath: number
    midiFilePath: number
    lyrics: number
    _all: number
  }


  export type SongMinAggregateInputType = {
    id?: true
    title?: true
    team?: true
    audioFilePath?: true
    midiFilePath?: true
    lyrics?: true
  }

  export type SongMaxAggregateInputType = {
    id?: true
    title?: true
    team?: true
    audioFilePath?: true
    midiFilePath?: true
    lyrics?: true
  }

  export type SongCountAggregateInputType = {
    id?: true
    title?: true
    team?: true
    audioFilePath?: true
    midiFilePath?: true
    lyrics?: true
    _all?: true
  }

  export type SongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Song to aggregate.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Songs
    **/
    _count?: true | SongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType
  }

  export type GetSongAggregateType<T extends SongAggregateArgs> = {
        [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong[P]>
      : GetScalarType<T[P], AggregateSong[P]>
  }




  export type SongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
    orderBy?: SongOrderByWithAggregationInput | SongOrderByWithAggregationInput[]
    by: SongScalarFieldEnum[] | SongScalarFieldEnum
    having?: SongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCountAggregateInputType | true
    _min?: SongMinAggregateInputType
    _max?: SongMaxAggregateInputType
  }

  export type SongGroupByOutputType = {
    id: string
    title: string
    team: string
    audioFilePath: string | null
    midiFilePath: string
    lyrics: string
    _count: SongCountAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGroupByOutputType[P]>
            : GetScalarType<T[P], SongGroupByOutputType[P]>
        }
      >
    >


  export type SongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    team?: boolean
    audioFilePath?: boolean
    midiFilePath?: boolean
    lyrics?: boolean
    SongLyrics?: boolean | Song$SongLyricsArgs<ExtArgs>
    SongMidi?: boolean | Song$SongMidiArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    team?: boolean
    audioFilePath?: boolean
    midiFilePath?: boolean
    lyrics?: boolean
  }, ExtArgs["result"]["song"]>

  export type SongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    team?: boolean
    audioFilePath?: boolean
    midiFilePath?: boolean
    lyrics?: boolean
  }, ExtArgs["result"]["song"]>

  export type SongSelectScalar = {
    id?: boolean
    title?: boolean
    team?: boolean
    audioFilePath?: boolean
    midiFilePath?: boolean
    lyrics?: boolean
  }

  export type SongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "team" | "audioFilePath" | "midiFilePath" | "lyrics", ExtArgs["result"]["song"]>
  export type SongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SongLyrics?: boolean | Song$SongLyricsArgs<ExtArgs>
    SongMidi?: boolean | Song$SongMidiArgs<ExtArgs>
  }
  export type SongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SongIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Song"
    objects: {
      SongLyrics: Prisma.$SongLyricsPayload<ExtArgs> | null
      SongMidi: Prisma.$SongMidiPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      team: string
      audioFilePath: string | null
      midiFilePath: string
      lyrics: string
    }, ExtArgs["result"]["song"]>
    composites: {}
  }

  type SongGetPayload<S extends boolean | null | undefined | SongDefaultArgs> = $Result.GetResult<Prisma.$SongPayload, S>

  type SongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SongCountAggregateInputType | true
    }

  export interface SongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Song'], meta: { name: 'Song' } }
    /**
     * Find zero or one Song that matches the filter.
     * @param {SongFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SongFindUniqueArgs>(args: SelectSubset<T, SongFindUniqueArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Song that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SongFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs>(args: SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SongFindFirstArgs>(args?: SelectSubset<T, SongFindFirstArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs>(args?: SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SongFindManyArgs>(args?: SelectSubset<T, SongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Song.
     * @param {SongCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     * 
     */
    create<T extends SongCreateArgs>(args: SelectSubset<T, SongCreateArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Songs.
     * @param {SongCreateManyArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SongCreateManyArgs>(args?: SelectSubset<T, SongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Songs and returns the data saved in the database.
     * @param {SongCreateManyAndReturnArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SongCreateManyAndReturnArgs>(args?: SelectSubset<T, SongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Song.
     * @param {SongDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     * 
     */
    delete<T extends SongDeleteArgs>(args: SelectSubset<T, SongDeleteArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Song.
     * @param {SongUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SongUpdateArgs>(args: SelectSubset<T, SongUpdateArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Songs.
     * @param {SongDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SongDeleteManyArgs>(args?: SelectSubset<T, SongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SongUpdateManyArgs>(args: SelectSubset<T, SongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs and returns the data updated in the database.
     * @param {SongUpdateManyAndReturnArgs} args - Arguments to update many Songs.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SongUpdateManyAndReturnArgs>(args: SelectSubset<T, SongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Song.
     * @param {SongUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
     */
    upsert<T extends SongUpsertArgs>(args: SelectSubset<T, SongUpsertArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends SongCountArgs>(
      args?: Subset<T, SongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SongAggregateArgs>(args: Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>

    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGroupByArgs} args - Group by arguments.
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
      T extends SongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongGroupByArgs['orderBy'] }
        : { orderBy?: SongGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Song model
   */
  readonly fields: SongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SongLyrics<T extends Song$SongLyricsArgs<ExtArgs> = {}>(args?: Subset<T, Song$SongLyricsArgs<ExtArgs>>): Prisma__SongLyricsClient<$Result.GetResult<Prisma.$SongLyricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    SongMidi<T extends Song$SongMidiArgs<ExtArgs> = {}>(args?: Subset<T, Song$SongMidiArgs<ExtArgs>>): Prisma__SongMidiClient<$Result.GetResult<Prisma.$SongMidiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Song model
   */
  interface SongFieldRefs {
    readonly id: FieldRef<"Song", 'String'>
    readonly title: FieldRef<"Song", 'String'>
    readonly team: FieldRef<"Song", 'String'>
    readonly audioFilePath: FieldRef<"Song", 'String'>
    readonly midiFilePath: FieldRef<"Song", 'String'>
    readonly lyrics: FieldRef<"Song", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Song findUnique
   */
  export type SongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findUniqueOrThrow
   */
  export type SongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findFirst
   */
  export type SongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song findFirstOrThrow
   */
  export type SongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song findMany
   */
  export type SongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song create
   */
  export type SongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to create a Song.
     */
    data: XOR<SongCreateInput, SongUncheckedCreateInput>
  }

  /**
   * Song createMany
   */
  export type SongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Song createManyAndReturn
   */
  export type SongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Song update
   */
  export type SongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to update a Song.
     */
    data: XOR<SongUpdateInput, SongUncheckedUpdateInput>
    /**
     * Choose, which Song to update.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song updateMany
   */
  export type SongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to update.
     */
    limit?: number
  }

  /**
   * Song updateManyAndReturn
   */
  export type SongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to update.
     */
    limit?: number
  }

  /**
   * Song upsert
   */
  export type SongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The filter to search for the Song to update in case it exists.
     */
    where: SongWhereUniqueInput
    /**
     * In case the Song found by the `where` argument doesn't exist, create a new Song with this data.
     */
    create: XOR<SongCreateInput, SongUncheckedCreateInput>
    /**
     * In case the Song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongUpdateInput, SongUncheckedUpdateInput>
  }

  /**
   * Song delete
   */
  export type SongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter which Song to delete.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song deleteMany
   */
  export type SongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to delete
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to delete.
     */
    limit?: number
  }

  /**
   * Song.SongLyrics
   */
  export type Song$SongLyricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLyrics
     */
    select?: SongLyricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongLyrics
     */
    omit?: SongLyricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLyricsInclude<ExtArgs> | null
    where?: SongLyricsWhereInput
  }

  /**
   * Song.SongMidi
   */
  export type Song$SongMidiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongMidi
     */
    select?: SongMidiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongMidi
     */
    omit?: SongMidiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongMidiInclude<ExtArgs> | null
    where?: SongMidiWhereInput
  }

  /**
   * Song without action
   */
  export type SongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
  }


  /**
   * Model SongLyrics
   */

  export type AggregateSongLyrics = {
    _count: SongLyricsCountAggregateOutputType | null
    _avg: SongLyricsAvgAggregateOutputType | null
    _sum: SongLyricsSumAggregateOutputType | null
    _min: SongLyricsMinAggregateOutputType | null
    _max: SongLyricsMaxAggregateOutputType | null
  }

  export type SongLyricsAvgAggregateOutputType = {
    tempo: number | null
  }

  export type SongLyricsSumAggregateOutputType = {
    tempo: number | null
  }

  export type SongLyricsMinAggregateOutputType = {
    id: string | null
    songId: string | null
    tempo: number | null
  }

  export type SongLyricsMaxAggregateOutputType = {
    id: string | null
    songId: string | null
    tempo: number | null
  }

  export type SongLyricsCountAggregateOutputType = {
    id: number
    songId: number
    midinotes: number
    tempo: number
    _all: number
  }


  export type SongLyricsAvgAggregateInputType = {
    tempo?: true
  }

  export type SongLyricsSumAggregateInputType = {
    tempo?: true
  }

  export type SongLyricsMinAggregateInputType = {
    id?: true
    songId?: true
    tempo?: true
  }

  export type SongLyricsMaxAggregateInputType = {
    id?: true
    songId?: true
    tempo?: true
  }

  export type SongLyricsCountAggregateInputType = {
    id?: true
    songId?: true
    midinotes?: true
    tempo?: true
    _all?: true
  }

  export type SongLyricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongLyrics to aggregate.
     */
    where?: SongLyricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongLyrics to fetch.
     */
    orderBy?: SongLyricsOrderByWithRelationInput | SongLyricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongLyricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongLyrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongLyrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SongLyrics
    **/
    _count?: true | SongLyricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongLyricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongLyricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongLyricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongLyricsMaxAggregateInputType
  }

  export type GetSongLyricsAggregateType<T extends SongLyricsAggregateArgs> = {
        [P in keyof T & keyof AggregateSongLyrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSongLyrics[P]>
      : GetScalarType<T[P], AggregateSongLyrics[P]>
  }




  export type SongLyricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongLyricsWhereInput
    orderBy?: SongLyricsOrderByWithAggregationInput | SongLyricsOrderByWithAggregationInput[]
    by: SongLyricsScalarFieldEnum[] | SongLyricsScalarFieldEnum
    having?: SongLyricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongLyricsCountAggregateInputType | true
    _avg?: SongLyricsAvgAggregateInputType
    _sum?: SongLyricsSumAggregateInputType
    _min?: SongLyricsMinAggregateInputType
    _max?: SongLyricsMaxAggregateInputType
  }

  export type SongLyricsGroupByOutputType = {
    id: string
    songId: string
    midinotes: JsonValue
    tempo: number
    _count: SongLyricsCountAggregateOutputType | null
    _avg: SongLyricsAvgAggregateOutputType | null
    _sum: SongLyricsSumAggregateOutputType | null
    _min: SongLyricsMinAggregateOutputType | null
    _max: SongLyricsMaxAggregateOutputType | null
  }

  type GetSongLyricsGroupByPayload<T extends SongLyricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongLyricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongLyricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongLyricsGroupByOutputType[P]>
            : GetScalarType<T[P], SongLyricsGroupByOutputType[P]>
        }
      >
    >


  export type SongLyricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    midinotes?: boolean
    tempo?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songLyrics"]>

  export type SongLyricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    midinotes?: boolean
    tempo?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songLyrics"]>

  export type SongLyricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    midinotes?: boolean
    tempo?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songLyrics"]>

  export type SongLyricsSelectScalar = {
    id?: boolean
    songId?: boolean
    midinotes?: boolean
    tempo?: boolean
  }

  export type SongLyricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "songId" | "midinotes" | "tempo", ExtArgs["result"]["songLyrics"]>
  export type SongLyricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type SongLyricsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type SongLyricsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
  }

  export type $SongLyricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SongLyrics"
    objects: {
      song: Prisma.$SongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      songId: string
      midinotes: Prisma.JsonValue
      tempo: number
    }, ExtArgs["result"]["songLyrics"]>
    composites: {}
  }

  type SongLyricsGetPayload<S extends boolean | null | undefined | SongLyricsDefaultArgs> = $Result.GetResult<Prisma.$SongLyricsPayload, S>

  type SongLyricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SongLyricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SongLyricsCountAggregateInputType | true
    }

  export interface SongLyricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SongLyrics'], meta: { name: 'SongLyrics' } }
    /**
     * Find zero or one SongLyrics that matches the filter.
     * @param {SongLyricsFindUniqueArgs} args - Arguments to find a SongLyrics
     * @example
     * // Get one SongLyrics
     * const songLyrics = await prisma.songLyrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SongLyricsFindUniqueArgs>(args: SelectSubset<T, SongLyricsFindUniqueArgs<ExtArgs>>): Prisma__SongLyricsClient<$Result.GetResult<Prisma.$SongLyricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SongLyrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SongLyricsFindUniqueOrThrowArgs} args - Arguments to find a SongLyrics
     * @example
     * // Get one SongLyrics
     * const songLyrics = await prisma.songLyrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SongLyricsFindUniqueOrThrowArgs>(args: SelectSubset<T, SongLyricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SongLyricsClient<$Result.GetResult<Prisma.$SongLyricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SongLyrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongLyricsFindFirstArgs} args - Arguments to find a SongLyrics
     * @example
     * // Get one SongLyrics
     * const songLyrics = await prisma.songLyrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SongLyricsFindFirstArgs>(args?: SelectSubset<T, SongLyricsFindFirstArgs<ExtArgs>>): Prisma__SongLyricsClient<$Result.GetResult<Prisma.$SongLyricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SongLyrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongLyricsFindFirstOrThrowArgs} args - Arguments to find a SongLyrics
     * @example
     * // Get one SongLyrics
     * const songLyrics = await prisma.songLyrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SongLyricsFindFirstOrThrowArgs>(args?: SelectSubset<T, SongLyricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SongLyricsClient<$Result.GetResult<Prisma.$SongLyricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SongLyrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongLyricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SongLyrics
     * const songLyrics = await prisma.songLyrics.findMany()
     * 
     * // Get first 10 SongLyrics
     * const songLyrics = await prisma.songLyrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songLyricsWithIdOnly = await prisma.songLyrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SongLyricsFindManyArgs>(args?: SelectSubset<T, SongLyricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongLyricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SongLyrics.
     * @param {SongLyricsCreateArgs} args - Arguments to create a SongLyrics.
     * @example
     * // Create one SongLyrics
     * const SongLyrics = await prisma.songLyrics.create({
     *   data: {
     *     // ... data to create a SongLyrics
     *   }
     * })
     * 
     */
    create<T extends SongLyricsCreateArgs>(args: SelectSubset<T, SongLyricsCreateArgs<ExtArgs>>): Prisma__SongLyricsClient<$Result.GetResult<Prisma.$SongLyricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SongLyrics.
     * @param {SongLyricsCreateManyArgs} args - Arguments to create many SongLyrics.
     * @example
     * // Create many SongLyrics
     * const songLyrics = await prisma.songLyrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SongLyricsCreateManyArgs>(args?: SelectSubset<T, SongLyricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SongLyrics and returns the data saved in the database.
     * @param {SongLyricsCreateManyAndReturnArgs} args - Arguments to create many SongLyrics.
     * @example
     * // Create many SongLyrics
     * const songLyrics = await prisma.songLyrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SongLyrics and only return the `id`
     * const songLyricsWithIdOnly = await prisma.songLyrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SongLyricsCreateManyAndReturnArgs>(args?: SelectSubset<T, SongLyricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongLyricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SongLyrics.
     * @param {SongLyricsDeleteArgs} args - Arguments to delete one SongLyrics.
     * @example
     * // Delete one SongLyrics
     * const SongLyrics = await prisma.songLyrics.delete({
     *   where: {
     *     // ... filter to delete one SongLyrics
     *   }
     * })
     * 
     */
    delete<T extends SongLyricsDeleteArgs>(args: SelectSubset<T, SongLyricsDeleteArgs<ExtArgs>>): Prisma__SongLyricsClient<$Result.GetResult<Prisma.$SongLyricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SongLyrics.
     * @param {SongLyricsUpdateArgs} args - Arguments to update one SongLyrics.
     * @example
     * // Update one SongLyrics
     * const songLyrics = await prisma.songLyrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SongLyricsUpdateArgs>(args: SelectSubset<T, SongLyricsUpdateArgs<ExtArgs>>): Prisma__SongLyricsClient<$Result.GetResult<Prisma.$SongLyricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SongLyrics.
     * @param {SongLyricsDeleteManyArgs} args - Arguments to filter SongLyrics to delete.
     * @example
     * // Delete a few SongLyrics
     * const { count } = await prisma.songLyrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SongLyricsDeleteManyArgs>(args?: SelectSubset<T, SongLyricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongLyrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongLyricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SongLyrics
     * const songLyrics = await prisma.songLyrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SongLyricsUpdateManyArgs>(args: SelectSubset<T, SongLyricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongLyrics and returns the data updated in the database.
     * @param {SongLyricsUpdateManyAndReturnArgs} args - Arguments to update many SongLyrics.
     * @example
     * // Update many SongLyrics
     * const songLyrics = await prisma.songLyrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SongLyrics and only return the `id`
     * const songLyricsWithIdOnly = await prisma.songLyrics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SongLyricsUpdateManyAndReturnArgs>(args: SelectSubset<T, SongLyricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongLyricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SongLyrics.
     * @param {SongLyricsUpsertArgs} args - Arguments to update or create a SongLyrics.
     * @example
     * // Update or create a SongLyrics
     * const songLyrics = await prisma.songLyrics.upsert({
     *   create: {
     *     // ... data to create a SongLyrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SongLyrics we want to update
     *   }
     * })
     */
    upsert<T extends SongLyricsUpsertArgs>(args: SelectSubset<T, SongLyricsUpsertArgs<ExtArgs>>): Prisma__SongLyricsClient<$Result.GetResult<Prisma.$SongLyricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SongLyrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongLyricsCountArgs} args - Arguments to filter SongLyrics to count.
     * @example
     * // Count the number of SongLyrics
     * const count = await prisma.songLyrics.count({
     *   where: {
     *     // ... the filter for the SongLyrics we want to count
     *   }
     * })
    **/
    count<T extends SongLyricsCountArgs>(
      args?: Subset<T, SongLyricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongLyricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SongLyrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongLyricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SongLyricsAggregateArgs>(args: Subset<T, SongLyricsAggregateArgs>): Prisma.PrismaPromise<GetSongLyricsAggregateType<T>>

    /**
     * Group by SongLyrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongLyricsGroupByArgs} args - Group by arguments.
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
      T extends SongLyricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongLyricsGroupByArgs['orderBy'] }
        : { orderBy?: SongLyricsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SongLyricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongLyricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SongLyrics model
   */
  readonly fields: SongLyricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SongLyrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongLyricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SongLyrics model
   */
  interface SongLyricsFieldRefs {
    readonly id: FieldRef<"SongLyrics", 'String'>
    readonly songId: FieldRef<"SongLyrics", 'String'>
    readonly midinotes: FieldRef<"SongLyrics", 'Json'>
    readonly tempo: FieldRef<"SongLyrics", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SongLyrics findUnique
   */
  export type SongLyricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLyrics
     */
    select?: SongLyricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongLyrics
     */
    omit?: SongLyricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLyricsInclude<ExtArgs> | null
    /**
     * Filter, which SongLyrics to fetch.
     */
    where: SongLyricsWhereUniqueInput
  }

  /**
   * SongLyrics findUniqueOrThrow
   */
  export type SongLyricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLyrics
     */
    select?: SongLyricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongLyrics
     */
    omit?: SongLyricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLyricsInclude<ExtArgs> | null
    /**
     * Filter, which SongLyrics to fetch.
     */
    where: SongLyricsWhereUniqueInput
  }

  /**
   * SongLyrics findFirst
   */
  export type SongLyricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLyrics
     */
    select?: SongLyricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongLyrics
     */
    omit?: SongLyricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLyricsInclude<ExtArgs> | null
    /**
     * Filter, which SongLyrics to fetch.
     */
    where?: SongLyricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongLyrics to fetch.
     */
    orderBy?: SongLyricsOrderByWithRelationInput | SongLyricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongLyrics.
     */
    cursor?: SongLyricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongLyrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongLyrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongLyrics.
     */
    distinct?: SongLyricsScalarFieldEnum | SongLyricsScalarFieldEnum[]
  }

  /**
   * SongLyrics findFirstOrThrow
   */
  export type SongLyricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLyrics
     */
    select?: SongLyricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongLyrics
     */
    omit?: SongLyricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLyricsInclude<ExtArgs> | null
    /**
     * Filter, which SongLyrics to fetch.
     */
    where?: SongLyricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongLyrics to fetch.
     */
    orderBy?: SongLyricsOrderByWithRelationInput | SongLyricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongLyrics.
     */
    cursor?: SongLyricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongLyrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongLyrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongLyrics.
     */
    distinct?: SongLyricsScalarFieldEnum | SongLyricsScalarFieldEnum[]
  }

  /**
   * SongLyrics findMany
   */
  export type SongLyricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLyrics
     */
    select?: SongLyricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongLyrics
     */
    omit?: SongLyricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLyricsInclude<ExtArgs> | null
    /**
     * Filter, which SongLyrics to fetch.
     */
    where?: SongLyricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongLyrics to fetch.
     */
    orderBy?: SongLyricsOrderByWithRelationInput | SongLyricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SongLyrics.
     */
    cursor?: SongLyricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongLyrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongLyrics.
     */
    skip?: number
    distinct?: SongLyricsScalarFieldEnum | SongLyricsScalarFieldEnum[]
  }

  /**
   * SongLyrics create
   */
  export type SongLyricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLyrics
     */
    select?: SongLyricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongLyrics
     */
    omit?: SongLyricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLyricsInclude<ExtArgs> | null
    /**
     * The data needed to create a SongLyrics.
     */
    data: XOR<SongLyricsCreateInput, SongLyricsUncheckedCreateInput>
  }

  /**
   * SongLyrics createMany
   */
  export type SongLyricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SongLyrics.
     */
    data: SongLyricsCreateManyInput | SongLyricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SongLyrics createManyAndReturn
   */
  export type SongLyricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLyrics
     */
    select?: SongLyricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SongLyrics
     */
    omit?: SongLyricsOmit<ExtArgs> | null
    /**
     * The data used to create many SongLyrics.
     */
    data: SongLyricsCreateManyInput | SongLyricsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLyricsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SongLyrics update
   */
  export type SongLyricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLyrics
     */
    select?: SongLyricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongLyrics
     */
    omit?: SongLyricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLyricsInclude<ExtArgs> | null
    /**
     * The data needed to update a SongLyrics.
     */
    data: XOR<SongLyricsUpdateInput, SongLyricsUncheckedUpdateInput>
    /**
     * Choose, which SongLyrics to update.
     */
    where: SongLyricsWhereUniqueInput
  }

  /**
   * SongLyrics updateMany
   */
  export type SongLyricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SongLyrics.
     */
    data: XOR<SongLyricsUpdateManyMutationInput, SongLyricsUncheckedUpdateManyInput>
    /**
     * Filter which SongLyrics to update
     */
    where?: SongLyricsWhereInput
    /**
     * Limit how many SongLyrics to update.
     */
    limit?: number
  }

  /**
   * SongLyrics updateManyAndReturn
   */
  export type SongLyricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLyrics
     */
    select?: SongLyricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SongLyrics
     */
    omit?: SongLyricsOmit<ExtArgs> | null
    /**
     * The data used to update SongLyrics.
     */
    data: XOR<SongLyricsUpdateManyMutationInput, SongLyricsUncheckedUpdateManyInput>
    /**
     * Filter which SongLyrics to update
     */
    where?: SongLyricsWhereInput
    /**
     * Limit how many SongLyrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLyricsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SongLyrics upsert
   */
  export type SongLyricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLyrics
     */
    select?: SongLyricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongLyrics
     */
    omit?: SongLyricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLyricsInclude<ExtArgs> | null
    /**
     * The filter to search for the SongLyrics to update in case it exists.
     */
    where: SongLyricsWhereUniqueInput
    /**
     * In case the SongLyrics found by the `where` argument doesn't exist, create a new SongLyrics with this data.
     */
    create: XOR<SongLyricsCreateInput, SongLyricsUncheckedCreateInput>
    /**
     * In case the SongLyrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongLyricsUpdateInput, SongLyricsUncheckedUpdateInput>
  }

  /**
   * SongLyrics delete
   */
  export type SongLyricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLyrics
     */
    select?: SongLyricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongLyrics
     */
    omit?: SongLyricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLyricsInclude<ExtArgs> | null
    /**
     * Filter which SongLyrics to delete.
     */
    where: SongLyricsWhereUniqueInput
  }

  /**
   * SongLyrics deleteMany
   */
  export type SongLyricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongLyrics to delete
     */
    where?: SongLyricsWhereInput
    /**
     * Limit how many SongLyrics to delete.
     */
    limit?: number
  }

  /**
   * SongLyrics without action
   */
  export type SongLyricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLyrics
     */
    select?: SongLyricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongLyrics
     */
    omit?: SongLyricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLyricsInclude<ExtArgs> | null
  }


  /**
   * Model SongMidi
   */

  export type AggregateSongMidi = {
    _count: SongMidiCountAggregateOutputType | null
    _avg: SongMidiAvgAggregateOutputType | null
    _sum: SongMidiSumAggregateOutputType | null
    _min: SongMidiMinAggregateOutputType | null
    _max: SongMidiMaxAggregateOutputType | null
  }

  export type SongMidiAvgAggregateOutputType = {
    tempo: number | null
  }

  export type SongMidiSumAggregateOutputType = {
    tempo: number | null
  }

  export type SongMidiMinAggregateOutputType = {
    id: string | null
    songId: string | null
    tempo: number | null
  }

  export type SongMidiMaxAggregateOutputType = {
    id: string | null
    songId: string | null
    tempo: number | null
  }

  export type SongMidiCountAggregateOutputType = {
    id: number
    songId: number
    midinotes: number
    tempo: number
    _all: number
  }


  export type SongMidiAvgAggregateInputType = {
    tempo?: true
  }

  export type SongMidiSumAggregateInputType = {
    tempo?: true
  }

  export type SongMidiMinAggregateInputType = {
    id?: true
    songId?: true
    tempo?: true
  }

  export type SongMidiMaxAggregateInputType = {
    id?: true
    songId?: true
    tempo?: true
  }

  export type SongMidiCountAggregateInputType = {
    id?: true
    songId?: true
    midinotes?: true
    tempo?: true
    _all?: true
  }

  export type SongMidiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongMidi to aggregate.
     */
    where?: SongMidiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongMidis to fetch.
     */
    orderBy?: SongMidiOrderByWithRelationInput | SongMidiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongMidiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongMidis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongMidis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SongMidis
    **/
    _count?: true | SongMidiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongMidiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongMidiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMidiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMidiMaxAggregateInputType
  }

  export type GetSongMidiAggregateType<T extends SongMidiAggregateArgs> = {
        [P in keyof T & keyof AggregateSongMidi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSongMidi[P]>
      : GetScalarType<T[P], AggregateSongMidi[P]>
  }




  export type SongMidiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongMidiWhereInput
    orderBy?: SongMidiOrderByWithAggregationInput | SongMidiOrderByWithAggregationInput[]
    by: SongMidiScalarFieldEnum[] | SongMidiScalarFieldEnum
    having?: SongMidiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongMidiCountAggregateInputType | true
    _avg?: SongMidiAvgAggregateInputType
    _sum?: SongMidiSumAggregateInputType
    _min?: SongMidiMinAggregateInputType
    _max?: SongMidiMaxAggregateInputType
  }

  export type SongMidiGroupByOutputType = {
    id: string
    songId: string
    midinotes: JsonValue
    tempo: number
    _count: SongMidiCountAggregateOutputType | null
    _avg: SongMidiAvgAggregateOutputType | null
    _sum: SongMidiSumAggregateOutputType | null
    _min: SongMidiMinAggregateOutputType | null
    _max: SongMidiMaxAggregateOutputType | null
  }

  type GetSongMidiGroupByPayload<T extends SongMidiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongMidiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongMidiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongMidiGroupByOutputType[P]>
            : GetScalarType<T[P], SongMidiGroupByOutputType[P]>
        }
      >
    >


  export type SongMidiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    midinotes?: boolean
    tempo?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songMidi"]>

  export type SongMidiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    midinotes?: boolean
    tempo?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songMidi"]>

  export type SongMidiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    midinotes?: boolean
    tempo?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songMidi"]>

  export type SongMidiSelectScalar = {
    id?: boolean
    songId?: boolean
    midinotes?: boolean
    tempo?: boolean
  }

  export type SongMidiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "songId" | "midinotes" | "tempo", ExtArgs["result"]["songMidi"]>
  export type SongMidiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type SongMidiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type SongMidiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
  }

  export type $SongMidiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SongMidi"
    objects: {
      song: Prisma.$SongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      songId: string
      midinotes: Prisma.JsonValue
      tempo: number
    }, ExtArgs["result"]["songMidi"]>
    composites: {}
  }

  type SongMidiGetPayload<S extends boolean | null | undefined | SongMidiDefaultArgs> = $Result.GetResult<Prisma.$SongMidiPayload, S>

  type SongMidiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SongMidiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SongMidiCountAggregateInputType | true
    }

  export interface SongMidiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SongMidi'], meta: { name: 'SongMidi' } }
    /**
     * Find zero or one SongMidi that matches the filter.
     * @param {SongMidiFindUniqueArgs} args - Arguments to find a SongMidi
     * @example
     * // Get one SongMidi
     * const songMidi = await prisma.songMidi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SongMidiFindUniqueArgs>(args: SelectSubset<T, SongMidiFindUniqueArgs<ExtArgs>>): Prisma__SongMidiClient<$Result.GetResult<Prisma.$SongMidiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SongMidi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SongMidiFindUniqueOrThrowArgs} args - Arguments to find a SongMidi
     * @example
     * // Get one SongMidi
     * const songMidi = await prisma.songMidi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SongMidiFindUniqueOrThrowArgs>(args: SelectSubset<T, SongMidiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SongMidiClient<$Result.GetResult<Prisma.$SongMidiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SongMidi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongMidiFindFirstArgs} args - Arguments to find a SongMidi
     * @example
     * // Get one SongMidi
     * const songMidi = await prisma.songMidi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SongMidiFindFirstArgs>(args?: SelectSubset<T, SongMidiFindFirstArgs<ExtArgs>>): Prisma__SongMidiClient<$Result.GetResult<Prisma.$SongMidiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SongMidi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongMidiFindFirstOrThrowArgs} args - Arguments to find a SongMidi
     * @example
     * // Get one SongMidi
     * const songMidi = await prisma.songMidi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SongMidiFindFirstOrThrowArgs>(args?: SelectSubset<T, SongMidiFindFirstOrThrowArgs<ExtArgs>>): Prisma__SongMidiClient<$Result.GetResult<Prisma.$SongMidiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SongMidis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongMidiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SongMidis
     * const songMidis = await prisma.songMidi.findMany()
     * 
     * // Get first 10 SongMidis
     * const songMidis = await prisma.songMidi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songMidiWithIdOnly = await prisma.songMidi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SongMidiFindManyArgs>(args?: SelectSubset<T, SongMidiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongMidiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SongMidi.
     * @param {SongMidiCreateArgs} args - Arguments to create a SongMidi.
     * @example
     * // Create one SongMidi
     * const SongMidi = await prisma.songMidi.create({
     *   data: {
     *     // ... data to create a SongMidi
     *   }
     * })
     * 
     */
    create<T extends SongMidiCreateArgs>(args: SelectSubset<T, SongMidiCreateArgs<ExtArgs>>): Prisma__SongMidiClient<$Result.GetResult<Prisma.$SongMidiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SongMidis.
     * @param {SongMidiCreateManyArgs} args - Arguments to create many SongMidis.
     * @example
     * // Create many SongMidis
     * const songMidi = await prisma.songMidi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SongMidiCreateManyArgs>(args?: SelectSubset<T, SongMidiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SongMidis and returns the data saved in the database.
     * @param {SongMidiCreateManyAndReturnArgs} args - Arguments to create many SongMidis.
     * @example
     * // Create many SongMidis
     * const songMidi = await prisma.songMidi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SongMidis and only return the `id`
     * const songMidiWithIdOnly = await prisma.songMidi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SongMidiCreateManyAndReturnArgs>(args?: SelectSubset<T, SongMidiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongMidiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SongMidi.
     * @param {SongMidiDeleteArgs} args - Arguments to delete one SongMidi.
     * @example
     * // Delete one SongMidi
     * const SongMidi = await prisma.songMidi.delete({
     *   where: {
     *     // ... filter to delete one SongMidi
     *   }
     * })
     * 
     */
    delete<T extends SongMidiDeleteArgs>(args: SelectSubset<T, SongMidiDeleteArgs<ExtArgs>>): Prisma__SongMidiClient<$Result.GetResult<Prisma.$SongMidiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SongMidi.
     * @param {SongMidiUpdateArgs} args - Arguments to update one SongMidi.
     * @example
     * // Update one SongMidi
     * const songMidi = await prisma.songMidi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SongMidiUpdateArgs>(args: SelectSubset<T, SongMidiUpdateArgs<ExtArgs>>): Prisma__SongMidiClient<$Result.GetResult<Prisma.$SongMidiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SongMidis.
     * @param {SongMidiDeleteManyArgs} args - Arguments to filter SongMidis to delete.
     * @example
     * // Delete a few SongMidis
     * const { count } = await prisma.songMidi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SongMidiDeleteManyArgs>(args?: SelectSubset<T, SongMidiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongMidis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongMidiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SongMidis
     * const songMidi = await prisma.songMidi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SongMidiUpdateManyArgs>(args: SelectSubset<T, SongMidiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongMidis and returns the data updated in the database.
     * @param {SongMidiUpdateManyAndReturnArgs} args - Arguments to update many SongMidis.
     * @example
     * // Update many SongMidis
     * const songMidi = await prisma.songMidi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SongMidis and only return the `id`
     * const songMidiWithIdOnly = await prisma.songMidi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SongMidiUpdateManyAndReturnArgs>(args: SelectSubset<T, SongMidiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongMidiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SongMidi.
     * @param {SongMidiUpsertArgs} args - Arguments to update or create a SongMidi.
     * @example
     * // Update or create a SongMidi
     * const songMidi = await prisma.songMidi.upsert({
     *   create: {
     *     // ... data to create a SongMidi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SongMidi we want to update
     *   }
     * })
     */
    upsert<T extends SongMidiUpsertArgs>(args: SelectSubset<T, SongMidiUpsertArgs<ExtArgs>>): Prisma__SongMidiClient<$Result.GetResult<Prisma.$SongMidiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SongMidis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongMidiCountArgs} args - Arguments to filter SongMidis to count.
     * @example
     * // Count the number of SongMidis
     * const count = await prisma.songMidi.count({
     *   where: {
     *     // ... the filter for the SongMidis we want to count
     *   }
     * })
    **/
    count<T extends SongMidiCountArgs>(
      args?: Subset<T, SongMidiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongMidiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SongMidi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongMidiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SongMidiAggregateArgs>(args: Subset<T, SongMidiAggregateArgs>): Prisma.PrismaPromise<GetSongMidiAggregateType<T>>

    /**
     * Group by SongMidi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongMidiGroupByArgs} args - Group by arguments.
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
      T extends SongMidiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongMidiGroupByArgs['orderBy'] }
        : { orderBy?: SongMidiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SongMidiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongMidiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SongMidi model
   */
  readonly fields: SongMidiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SongMidi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongMidiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SongMidi model
   */
  interface SongMidiFieldRefs {
    readonly id: FieldRef<"SongMidi", 'String'>
    readonly songId: FieldRef<"SongMidi", 'String'>
    readonly midinotes: FieldRef<"SongMidi", 'Json'>
    readonly tempo: FieldRef<"SongMidi", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SongMidi findUnique
   */
  export type SongMidiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongMidi
     */
    select?: SongMidiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongMidi
     */
    omit?: SongMidiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongMidiInclude<ExtArgs> | null
    /**
     * Filter, which SongMidi to fetch.
     */
    where: SongMidiWhereUniqueInput
  }

  /**
   * SongMidi findUniqueOrThrow
   */
  export type SongMidiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongMidi
     */
    select?: SongMidiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongMidi
     */
    omit?: SongMidiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongMidiInclude<ExtArgs> | null
    /**
     * Filter, which SongMidi to fetch.
     */
    where: SongMidiWhereUniqueInput
  }

  /**
   * SongMidi findFirst
   */
  export type SongMidiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongMidi
     */
    select?: SongMidiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongMidi
     */
    omit?: SongMidiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongMidiInclude<ExtArgs> | null
    /**
     * Filter, which SongMidi to fetch.
     */
    where?: SongMidiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongMidis to fetch.
     */
    orderBy?: SongMidiOrderByWithRelationInput | SongMidiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongMidis.
     */
    cursor?: SongMidiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongMidis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongMidis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongMidis.
     */
    distinct?: SongMidiScalarFieldEnum | SongMidiScalarFieldEnum[]
  }

  /**
   * SongMidi findFirstOrThrow
   */
  export type SongMidiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongMidi
     */
    select?: SongMidiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongMidi
     */
    omit?: SongMidiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongMidiInclude<ExtArgs> | null
    /**
     * Filter, which SongMidi to fetch.
     */
    where?: SongMidiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongMidis to fetch.
     */
    orderBy?: SongMidiOrderByWithRelationInput | SongMidiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongMidis.
     */
    cursor?: SongMidiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongMidis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongMidis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongMidis.
     */
    distinct?: SongMidiScalarFieldEnum | SongMidiScalarFieldEnum[]
  }

  /**
   * SongMidi findMany
   */
  export type SongMidiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongMidi
     */
    select?: SongMidiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongMidi
     */
    omit?: SongMidiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongMidiInclude<ExtArgs> | null
    /**
     * Filter, which SongMidis to fetch.
     */
    where?: SongMidiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongMidis to fetch.
     */
    orderBy?: SongMidiOrderByWithRelationInput | SongMidiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SongMidis.
     */
    cursor?: SongMidiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongMidis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongMidis.
     */
    skip?: number
    distinct?: SongMidiScalarFieldEnum | SongMidiScalarFieldEnum[]
  }

  /**
   * SongMidi create
   */
  export type SongMidiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongMidi
     */
    select?: SongMidiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongMidi
     */
    omit?: SongMidiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongMidiInclude<ExtArgs> | null
    /**
     * The data needed to create a SongMidi.
     */
    data: XOR<SongMidiCreateInput, SongMidiUncheckedCreateInput>
  }

  /**
   * SongMidi createMany
   */
  export type SongMidiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SongMidis.
     */
    data: SongMidiCreateManyInput | SongMidiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SongMidi createManyAndReturn
   */
  export type SongMidiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongMidi
     */
    select?: SongMidiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SongMidi
     */
    omit?: SongMidiOmit<ExtArgs> | null
    /**
     * The data used to create many SongMidis.
     */
    data: SongMidiCreateManyInput | SongMidiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongMidiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SongMidi update
   */
  export type SongMidiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongMidi
     */
    select?: SongMidiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongMidi
     */
    omit?: SongMidiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongMidiInclude<ExtArgs> | null
    /**
     * The data needed to update a SongMidi.
     */
    data: XOR<SongMidiUpdateInput, SongMidiUncheckedUpdateInput>
    /**
     * Choose, which SongMidi to update.
     */
    where: SongMidiWhereUniqueInput
  }

  /**
   * SongMidi updateMany
   */
  export type SongMidiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SongMidis.
     */
    data: XOR<SongMidiUpdateManyMutationInput, SongMidiUncheckedUpdateManyInput>
    /**
     * Filter which SongMidis to update
     */
    where?: SongMidiWhereInput
    /**
     * Limit how many SongMidis to update.
     */
    limit?: number
  }

  /**
   * SongMidi updateManyAndReturn
   */
  export type SongMidiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongMidi
     */
    select?: SongMidiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SongMidi
     */
    omit?: SongMidiOmit<ExtArgs> | null
    /**
     * The data used to update SongMidis.
     */
    data: XOR<SongMidiUpdateManyMutationInput, SongMidiUncheckedUpdateManyInput>
    /**
     * Filter which SongMidis to update
     */
    where?: SongMidiWhereInput
    /**
     * Limit how many SongMidis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongMidiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SongMidi upsert
   */
  export type SongMidiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongMidi
     */
    select?: SongMidiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongMidi
     */
    omit?: SongMidiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongMidiInclude<ExtArgs> | null
    /**
     * The filter to search for the SongMidi to update in case it exists.
     */
    where: SongMidiWhereUniqueInput
    /**
     * In case the SongMidi found by the `where` argument doesn't exist, create a new SongMidi with this data.
     */
    create: XOR<SongMidiCreateInput, SongMidiUncheckedCreateInput>
    /**
     * In case the SongMidi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongMidiUpdateInput, SongMidiUncheckedUpdateInput>
  }

  /**
   * SongMidi delete
   */
  export type SongMidiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongMidi
     */
    select?: SongMidiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongMidi
     */
    omit?: SongMidiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongMidiInclude<ExtArgs> | null
    /**
     * Filter which SongMidi to delete.
     */
    where: SongMidiWhereUniqueInput
  }

  /**
   * SongMidi deleteMany
   */
  export type SongMidiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongMidis to delete
     */
    where?: SongMidiWhereInput
    /**
     * Limit how many SongMidis to delete.
     */
    limit?: number
  }

  /**
   * SongMidi without action
   */
  export type SongMidiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongMidi
     */
    select?: SongMidiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongMidi
     */
    omit?: SongMidiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongMidiInclude<ExtArgs> | null
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


  export const SongScalarFieldEnum: {
    id: 'id',
    title: 'title',
    team: 'team',
    audioFilePath: 'audioFilePath',
    midiFilePath: 'midiFilePath',
    lyrics: 'lyrics'
  };

  export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum]


  export const SongLyricsScalarFieldEnum: {
    id: 'id',
    songId: 'songId',
    midinotes: 'midinotes',
    tempo: 'tempo'
  };

  export type SongLyricsScalarFieldEnum = (typeof SongLyricsScalarFieldEnum)[keyof typeof SongLyricsScalarFieldEnum]


  export const SongMidiScalarFieldEnum: {
    id: 'id',
    songId: 'songId',
    midinotes: 'midinotes',
    tempo: 'tempo'
  };

  export type SongMidiScalarFieldEnum = (typeof SongMidiScalarFieldEnum)[keyof typeof SongMidiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SongWhereInput = {
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    id?: StringFilter<"Song"> | string
    title?: StringFilter<"Song"> | string
    team?: StringFilter<"Song"> | string
    audioFilePath?: StringNullableFilter<"Song"> | string | null
    midiFilePath?: StringFilter<"Song"> | string
    lyrics?: StringFilter<"Song"> | string
    SongLyrics?: XOR<SongLyricsNullableScalarRelationFilter, SongLyricsWhereInput> | null
    SongMidi?: XOR<SongMidiNullableScalarRelationFilter, SongMidiWhereInput> | null
  }

  export type SongOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    team?: SortOrder
    audioFilePath?: SortOrderInput | SortOrder
    midiFilePath?: SortOrder
    lyrics?: SortOrder
    SongLyrics?: SongLyricsOrderByWithRelationInput
    SongMidi?: SongMidiOrderByWithRelationInput
  }

  export type SongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    title?: StringFilter<"Song"> | string
    team?: StringFilter<"Song"> | string
    audioFilePath?: StringNullableFilter<"Song"> | string | null
    midiFilePath?: StringFilter<"Song"> | string
    lyrics?: StringFilter<"Song"> | string
    SongLyrics?: XOR<SongLyricsNullableScalarRelationFilter, SongLyricsWhereInput> | null
    SongMidi?: XOR<SongMidiNullableScalarRelationFilter, SongMidiWhereInput> | null
  }, "id">

  export type SongOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    team?: SortOrder
    audioFilePath?: SortOrderInput | SortOrder
    midiFilePath?: SortOrder
    lyrics?: SortOrder
    _count?: SongCountOrderByAggregateInput
    _max?: SongMaxOrderByAggregateInput
    _min?: SongMinOrderByAggregateInput
  }

  export type SongScalarWhereWithAggregatesInput = {
    AND?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    OR?: SongScalarWhereWithAggregatesInput[]
    NOT?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Song"> | string
    title?: StringWithAggregatesFilter<"Song"> | string
    team?: StringWithAggregatesFilter<"Song"> | string
    audioFilePath?: StringNullableWithAggregatesFilter<"Song"> | string | null
    midiFilePath?: StringWithAggregatesFilter<"Song"> | string
    lyrics?: StringWithAggregatesFilter<"Song"> | string
  }

  export type SongLyricsWhereInput = {
    AND?: SongLyricsWhereInput | SongLyricsWhereInput[]
    OR?: SongLyricsWhereInput[]
    NOT?: SongLyricsWhereInput | SongLyricsWhereInput[]
    id?: StringFilter<"SongLyrics"> | string
    songId?: StringFilter<"SongLyrics"> | string
    midinotes?: JsonFilter<"SongLyrics">
    tempo?: IntFilter<"SongLyrics"> | number
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }

  export type SongLyricsOrderByWithRelationInput = {
    id?: SortOrder
    songId?: SortOrder
    midinotes?: SortOrder
    tempo?: SortOrder
    song?: SongOrderByWithRelationInput
  }

  export type SongLyricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    songId?: string
    AND?: SongLyricsWhereInput | SongLyricsWhereInput[]
    OR?: SongLyricsWhereInput[]
    NOT?: SongLyricsWhereInput | SongLyricsWhereInput[]
    midinotes?: JsonFilter<"SongLyrics">
    tempo?: IntFilter<"SongLyrics"> | number
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }, "id" | "songId">

  export type SongLyricsOrderByWithAggregationInput = {
    id?: SortOrder
    songId?: SortOrder
    midinotes?: SortOrder
    tempo?: SortOrder
    _count?: SongLyricsCountOrderByAggregateInput
    _avg?: SongLyricsAvgOrderByAggregateInput
    _max?: SongLyricsMaxOrderByAggregateInput
    _min?: SongLyricsMinOrderByAggregateInput
    _sum?: SongLyricsSumOrderByAggregateInput
  }

  export type SongLyricsScalarWhereWithAggregatesInput = {
    AND?: SongLyricsScalarWhereWithAggregatesInput | SongLyricsScalarWhereWithAggregatesInput[]
    OR?: SongLyricsScalarWhereWithAggregatesInput[]
    NOT?: SongLyricsScalarWhereWithAggregatesInput | SongLyricsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SongLyrics"> | string
    songId?: StringWithAggregatesFilter<"SongLyrics"> | string
    midinotes?: JsonWithAggregatesFilter<"SongLyrics">
    tempo?: IntWithAggregatesFilter<"SongLyrics"> | number
  }

  export type SongMidiWhereInput = {
    AND?: SongMidiWhereInput | SongMidiWhereInput[]
    OR?: SongMidiWhereInput[]
    NOT?: SongMidiWhereInput | SongMidiWhereInput[]
    id?: StringFilter<"SongMidi"> | string
    songId?: StringFilter<"SongMidi"> | string
    midinotes?: JsonFilter<"SongMidi">
    tempo?: IntFilter<"SongMidi"> | number
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }

  export type SongMidiOrderByWithRelationInput = {
    id?: SortOrder
    songId?: SortOrder
    midinotes?: SortOrder
    tempo?: SortOrder
    song?: SongOrderByWithRelationInput
  }

  export type SongMidiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    songId?: string
    AND?: SongMidiWhereInput | SongMidiWhereInput[]
    OR?: SongMidiWhereInput[]
    NOT?: SongMidiWhereInput | SongMidiWhereInput[]
    midinotes?: JsonFilter<"SongMidi">
    tempo?: IntFilter<"SongMidi"> | number
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }, "id" | "songId">

  export type SongMidiOrderByWithAggregationInput = {
    id?: SortOrder
    songId?: SortOrder
    midinotes?: SortOrder
    tempo?: SortOrder
    _count?: SongMidiCountOrderByAggregateInput
    _avg?: SongMidiAvgOrderByAggregateInput
    _max?: SongMidiMaxOrderByAggregateInput
    _min?: SongMidiMinOrderByAggregateInput
    _sum?: SongMidiSumOrderByAggregateInput
  }

  export type SongMidiScalarWhereWithAggregatesInput = {
    AND?: SongMidiScalarWhereWithAggregatesInput | SongMidiScalarWhereWithAggregatesInput[]
    OR?: SongMidiScalarWhereWithAggregatesInput[]
    NOT?: SongMidiScalarWhereWithAggregatesInput | SongMidiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SongMidi"> | string
    songId?: StringWithAggregatesFilter<"SongMidi"> | string
    midinotes?: JsonWithAggregatesFilter<"SongMidi">
    tempo?: IntWithAggregatesFilter<"SongMidi"> | number
  }

  export type SongCreateInput = {
    id?: string
    title: string
    team: string
    audioFilePath?: string | null
    midiFilePath: string
    lyrics: string
    SongLyrics?: SongLyricsCreateNestedOneWithoutSongInput
    SongMidi?: SongMidiCreateNestedOneWithoutSongInput
  }

  export type SongUncheckedCreateInput = {
    id?: string
    title: string
    team: string
    audioFilePath?: string | null
    midiFilePath: string
    lyrics: string
    SongLyrics?: SongLyricsUncheckedCreateNestedOneWithoutSongInput
    SongMidi?: SongMidiUncheckedCreateNestedOneWithoutSongInput
  }

  export type SongUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    audioFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    midiFilePath?: StringFieldUpdateOperationsInput | string
    lyrics?: StringFieldUpdateOperationsInput | string
    SongLyrics?: SongLyricsUpdateOneWithoutSongNestedInput
    SongMidi?: SongMidiUpdateOneWithoutSongNestedInput
  }

  export type SongUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    audioFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    midiFilePath?: StringFieldUpdateOperationsInput | string
    lyrics?: StringFieldUpdateOperationsInput | string
    SongLyrics?: SongLyricsUncheckedUpdateOneWithoutSongNestedInput
    SongMidi?: SongMidiUncheckedUpdateOneWithoutSongNestedInput
  }

  export type SongCreateManyInput = {
    id?: string
    title: string
    team: string
    audioFilePath?: string | null
    midiFilePath: string
    lyrics: string
  }

  export type SongUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    audioFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    midiFilePath?: StringFieldUpdateOperationsInput | string
    lyrics?: StringFieldUpdateOperationsInput | string
  }

  export type SongUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    audioFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    midiFilePath?: StringFieldUpdateOperationsInput | string
    lyrics?: StringFieldUpdateOperationsInput | string
  }

  export type SongLyricsCreateInput = {
    id?: string
    midinotes: JsonNullValueInput | InputJsonValue
    tempo: number
    song: SongCreateNestedOneWithoutSongLyricsInput
  }

  export type SongLyricsUncheckedCreateInput = {
    id?: string
    songId: string
    midinotes: JsonNullValueInput | InputJsonValue
    tempo: number
  }

  export type SongLyricsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    midinotes?: JsonNullValueInput | InputJsonValue
    tempo?: IntFieldUpdateOperationsInput | number
    song?: SongUpdateOneRequiredWithoutSongLyricsNestedInput
  }

  export type SongLyricsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    midinotes?: JsonNullValueInput | InputJsonValue
    tempo?: IntFieldUpdateOperationsInput | number
  }

  export type SongLyricsCreateManyInput = {
    id?: string
    songId: string
    midinotes: JsonNullValueInput | InputJsonValue
    tempo: number
  }

  export type SongLyricsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    midinotes?: JsonNullValueInput | InputJsonValue
    tempo?: IntFieldUpdateOperationsInput | number
  }

  export type SongLyricsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    midinotes?: JsonNullValueInput | InputJsonValue
    tempo?: IntFieldUpdateOperationsInput | number
  }

  export type SongMidiCreateInput = {
    id?: string
    midinotes: JsonNullValueInput | InputJsonValue
    tempo: number
    song: SongCreateNestedOneWithoutSongMidiInput
  }

  export type SongMidiUncheckedCreateInput = {
    id?: string
    songId: string
    midinotes: JsonNullValueInput | InputJsonValue
    tempo: number
  }

  export type SongMidiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    midinotes?: JsonNullValueInput | InputJsonValue
    tempo?: IntFieldUpdateOperationsInput | number
    song?: SongUpdateOneRequiredWithoutSongMidiNestedInput
  }

  export type SongMidiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    midinotes?: JsonNullValueInput | InputJsonValue
    tempo?: IntFieldUpdateOperationsInput | number
  }

  export type SongMidiCreateManyInput = {
    id?: string
    songId: string
    midinotes: JsonNullValueInput | InputJsonValue
    tempo: number
  }

  export type SongMidiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    midinotes?: JsonNullValueInput | InputJsonValue
    tempo?: IntFieldUpdateOperationsInput | number
  }

  export type SongMidiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    midinotes?: JsonNullValueInput | InputJsonValue
    tempo?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SongLyricsNullableScalarRelationFilter = {
    is?: SongLyricsWhereInput | null
    isNot?: SongLyricsWhereInput | null
  }

  export type SongMidiNullableScalarRelationFilter = {
    is?: SongMidiWhereInput | null
    isNot?: SongMidiWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SongCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    team?: SortOrder
    audioFilePath?: SortOrder
    midiFilePath?: SortOrder
    lyrics?: SortOrder
  }

  export type SongMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    team?: SortOrder
    audioFilePath?: SortOrder
    midiFilePath?: SortOrder
    lyrics?: SortOrder
  }

  export type SongMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    team?: SortOrder
    audioFilePath?: SortOrder
    midiFilePath?: SortOrder
    lyrics?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SongScalarRelationFilter = {
    is?: SongWhereInput
    isNot?: SongWhereInput
  }

  export type SongLyricsCountOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    midinotes?: SortOrder
    tempo?: SortOrder
  }

  export type SongLyricsAvgOrderByAggregateInput = {
    tempo?: SortOrder
  }

  export type SongLyricsMaxOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    tempo?: SortOrder
  }

  export type SongLyricsMinOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    tempo?: SortOrder
  }

  export type SongLyricsSumOrderByAggregateInput = {
    tempo?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type SongMidiCountOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    midinotes?: SortOrder
    tempo?: SortOrder
  }

  export type SongMidiAvgOrderByAggregateInput = {
    tempo?: SortOrder
  }

  export type SongMidiMaxOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    tempo?: SortOrder
  }

  export type SongMidiMinOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    tempo?: SortOrder
  }

  export type SongMidiSumOrderByAggregateInput = {
    tempo?: SortOrder
  }

  export type SongLyricsCreateNestedOneWithoutSongInput = {
    create?: XOR<SongLyricsCreateWithoutSongInput, SongLyricsUncheckedCreateWithoutSongInput>
    connectOrCreate?: SongLyricsCreateOrConnectWithoutSongInput
    connect?: SongLyricsWhereUniqueInput
  }

  export type SongMidiCreateNestedOneWithoutSongInput = {
    create?: XOR<SongMidiCreateWithoutSongInput, SongMidiUncheckedCreateWithoutSongInput>
    connectOrCreate?: SongMidiCreateOrConnectWithoutSongInput
    connect?: SongMidiWhereUniqueInput
  }

  export type SongLyricsUncheckedCreateNestedOneWithoutSongInput = {
    create?: XOR<SongLyricsCreateWithoutSongInput, SongLyricsUncheckedCreateWithoutSongInput>
    connectOrCreate?: SongLyricsCreateOrConnectWithoutSongInput
    connect?: SongLyricsWhereUniqueInput
  }

  export type SongMidiUncheckedCreateNestedOneWithoutSongInput = {
    create?: XOR<SongMidiCreateWithoutSongInput, SongMidiUncheckedCreateWithoutSongInput>
    connectOrCreate?: SongMidiCreateOrConnectWithoutSongInput
    connect?: SongMidiWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SongLyricsUpdateOneWithoutSongNestedInput = {
    create?: XOR<SongLyricsCreateWithoutSongInput, SongLyricsUncheckedCreateWithoutSongInput>
    connectOrCreate?: SongLyricsCreateOrConnectWithoutSongInput
    upsert?: SongLyricsUpsertWithoutSongInput
    disconnect?: SongLyricsWhereInput | boolean
    delete?: SongLyricsWhereInput | boolean
    connect?: SongLyricsWhereUniqueInput
    update?: XOR<XOR<SongLyricsUpdateToOneWithWhereWithoutSongInput, SongLyricsUpdateWithoutSongInput>, SongLyricsUncheckedUpdateWithoutSongInput>
  }

  export type SongMidiUpdateOneWithoutSongNestedInput = {
    create?: XOR<SongMidiCreateWithoutSongInput, SongMidiUncheckedCreateWithoutSongInput>
    connectOrCreate?: SongMidiCreateOrConnectWithoutSongInput
    upsert?: SongMidiUpsertWithoutSongInput
    disconnect?: SongMidiWhereInput | boolean
    delete?: SongMidiWhereInput | boolean
    connect?: SongMidiWhereUniqueInput
    update?: XOR<XOR<SongMidiUpdateToOneWithWhereWithoutSongInput, SongMidiUpdateWithoutSongInput>, SongMidiUncheckedUpdateWithoutSongInput>
  }

  export type SongLyricsUncheckedUpdateOneWithoutSongNestedInput = {
    create?: XOR<SongLyricsCreateWithoutSongInput, SongLyricsUncheckedCreateWithoutSongInput>
    connectOrCreate?: SongLyricsCreateOrConnectWithoutSongInput
    upsert?: SongLyricsUpsertWithoutSongInput
    disconnect?: SongLyricsWhereInput | boolean
    delete?: SongLyricsWhereInput | boolean
    connect?: SongLyricsWhereUniqueInput
    update?: XOR<XOR<SongLyricsUpdateToOneWithWhereWithoutSongInput, SongLyricsUpdateWithoutSongInput>, SongLyricsUncheckedUpdateWithoutSongInput>
  }

  export type SongMidiUncheckedUpdateOneWithoutSongNestedInput = {
    create?: XOR<SongMidiCreateWithoutSongInput, SongMidiUncheckedCreateWithoutSongInput>
    connectOrCreate?: SongMidiCreateOrConnectWithoutSongInput
    upsert?: SongMidiUpsertWithoutSongInput
    disconnect?: SongMidiWhereInput | boolean
    delete?: SongMidiWhereInput | boolean
    connect?: SongMidiWhereUniqueInput
    update?: XOR<XOR<SongMidiUpdateToOneWithWhereWithoutSongInput, SongMidiUpdateWithoutSongInput>, SongMidiUncheckedUpdateWithoutSongInput>
  }

  export type SongCreateNestedOneWithoutSongLyricsInput = {
    create?: XOR<SongCreateWithoutSongLyricsInput, SongUncheckedCreateWithoutSongLyricsInput>
    connectOrCreate?: SongCreateOrConnectWithoutSongLyricsInput
    connect?: SongWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SongUpdateOneRequiredWithoutSongLyricsNestedInput = {
    create?: XOR<SongCreateWithoutSongLyricsInput, SongUncheckedCreateWithoutSongLyricsInput>
    connectOrCreate?: SongCreateOrConnectWithoutSongLyricsInput
    upsert?: SongUpsertWithoutSongLyricsInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutSongLyricsInput, SongUpdateWithoutSongLyricsInput>, SongUncheckedUpdateWithoutSongLyricsInput>
  }

  export type SongCreateNestedOneWithoutSongMidiInput = {
    create?: XOR<SongCreateWithoutSongMidiInput, SongUncheckedCreateWithoutSongMidiInput>
    connectOrCreate?: SongCreateOrConnectWithoutSongMidiInput
    connect?: SongWhereUniqueInput
  }

  export type SongUpdateOneRequiredWithoutSongMidiNestedInput = {
    create?: XOR<SongCreateWithoutSongMidiInput, SongUncheckedCreateWithoutSongMidiInput>
    connectOrCreate?: SongCreateOrConnectWithoutSongMidiInput
    upsert?: SongUpsertWithoutSongMidiInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutSongMidiInput, SongUpdateWithoutSongMidiInput>, SongUncheckedUpdateWithoutSongMidiInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SongLyricsCreateWithoutSongInput = {
    id?: string
    midinotes: JsonNullValueInput | InputJsonValue
    tempo: number
  }

  export type SongLyricsUncheckedCreateWithoutSongInput = {
    id?: string
    midinotes: JsonNullValueInput | InputJsonValue
    tempo: number
  }

  export type SongLyricsCreateOrConnectWithoutSongInput = {
    where: SongLyricsWhereUniqueInput
    create: XOR<SongLyricsCreateWithoutSongInput, SongLyricsUncheckedCreateWithoutSongInput>
  }

  export type SongMidiCreateWithoutSongInput = {
    id?: string
    midinotes: JsonNullValueInput | InputJsonValue
    tempo: number
  }

  export type SongMidiUncheckedCreateWithoutSongInput = {
    id?: string
    midinotes: JsonNullValueInput | InputJsonValue
    tempo: number
  }

  export type SongMidiCreateOrConnectWithoutSongInput = {
    where: SongMidiWhereUniqueInput
    create: XOR<SongMidiCreateWithoutSongInput, SongMidiUncheckedCreateWithoutSongInput>
  }

  export type SongLyricsUpsertWithoutSongInput = {
    update: XOR<SongLyricsUpdateWithoutSongInput, SongLyricsUncheckedUpdateWithoutSongInput>
    create: XOR<SongLyricsCreateWithoutSongInput, SongLyricsUncheckedCreateWithoutSongInput>
    where?: SongLyricsWhereInput
  }

  export type SongLyricsUpdateToOneWithWhereWithoutSongInput = {
    where?: SongLyricsWhereInput
    data: XOR<SongLyricsUpdateWithoutSongInput, SongLyricsUncheckedUpdateWithoutSongInput>
  }

  export type SongLyricsUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    midinotes?: JsonNullValueInput | InputJsonValue
    tempo?: IntFieldUpdateOperationsInput | number
  }

  export type SongLyricsUncheckedUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    midinotes?: JsonNullValueInput | InputJsonValue
    tempo?: IntFieldUpdateOperationsInput | number
  }

  export type SongMidiUpsertWithoutSongInput = {
    update: XOR<SongMidiUpdateWithoutSongInput, SongMidiUncheckedUpdateWithoutSongInput>
    create: XOR<SongMidiCreateWithoutSongInput, SongMidiUncheckedCreateWithoutSongInput>
    where?: SongMidiWhereInput
  }

  export type SongMidiUpdateToOneWithWhereWithoutSongInput = {
    where?: SongMidiWhereInput
    data: XOR<SongMidiUpdateWithoutSongInput, SongMidiUncheckedUpdateWithoutSongInput>
  }

  export type SongMidiUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    midinotes?: JsonNullValueInput | InputJsonValue
    tempo?: IntFieldUpdateOperationsInput | number
  }

  export type SongMidiUncheckedUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    midinotes?: JsonNullValueInput | InputJsonValue
    tempo?: IntFieldUpdateOperationsInput | number
  }

  export type SongCreateWithoutSongLyricsInput = {
    id?: string
    title: string
    team: string
    audioFilePath?: string | null
    midiFilePath: string
    lyrics: string
    SongMidi?: SongMidiCreateNestedOneWithoutSongInput
  }

  export type SongUncheckedCreateWithoutSongLyricsInput = {
    id?: string
    title: string
    team: string
    audioFilePath?: string | null
    midiFilePath: string
    lyrics: string
    SongMidi?: SongMidiUncheckedCreateNestedOneWithoutSongInput
  }

  export type SongCreateOrConnectWithoutSongLyricsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutSongLyricsInput, SongUncheckedCreateWithoutSongLyricsInput>
  }

  export type SongUpsertWithoutSongLyricsInput = {
    update: XOR<SongUpdateWithoutSongLyricsInput, SongUncheckedUpdateWithoutSongLyricsInput>
    create: XOR<SongCreateWithoutSongLyricsInput, SongUncheckedCreateWithoutSongLyricsInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutSongLyricsInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutSongLyricsInput, SongUncheckedUpdateWithoutSongLyricsInput>
  }

  export type SongUpdateWithoutSongLyricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    audioFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    midiFilePath?: StringFieldUpdateOperationsInput | string
    lyrics?: StringFieldUpdateOperationsInput | string
    SongMidi?: SongMidiUpdateOneWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutSongLyricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    audioFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    midiFilePath?: StringFieldUpdateOperationsInput | string
    lyrics?: StringFieldUpdateOperationsInput | string
    SongMidi?: SongMidiUncheckedUpdateOneWithoutSongNestedInput
  }

  export type SongCreateWithoutSongMidiInput = {
    id?: string
    title: string
    team: string
    audioFilePath?: string | null
    midiFilePath: string
    lyrics: string
    SongLyrics?: SongLyricsCreateNestedOneWithoutSongInput
  }

  export type SongUncheckedCreateWithoutSongMidiInput = {
    id?: string
    title: string
    team: string
    audioFilePath?: string | null
    midiFilePath: string
    lyrics: string
    SongLyrics?: SongLyricsUncheckedCreateNestedOneWithoutSongInput
  }

  export type SongCreateOrConnectWithoutSongMidiInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutSongMidiInput, SongUncheckedCreateWithoutSongMidiInput>
  }

  export type SongUpsertWithoutSongMidiInput = {
    update: XOR<SongUpdateWithoutSongMidiInput, SongUncheckedUpdateWithoutSongMidiInput>
    create: XOR<SongCreateWithoutSongMidiInput, SongUncheckedCreateWithoutSongMidiInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutSongMidiInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutSongMidiInput, SongUncheckedUpdateWithoutSongMidiInput>
  }

  export type SongUpdateWithoutSongMidiInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    audioFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    midiFilePath?: StringFieldUpdateOperationsInput | string
    lyrics?: StringFieldUpdateOperationsInput | string
    SongLyrics?: SongLyricsUpdateOneWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutSongMidiInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    audioFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    midiFilePath?: StringFieldUpdateOperationsInput | string
    lyrics?: StringFieldUpdateOperationsInput | string
    SongLyrics?: SongLyricsUncheckedUpdateOneWithoutSongNestedInput
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