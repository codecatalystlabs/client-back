
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
 * Model satisfaction
 * 
 */
export type satisfaction = $Result.DefaultSelection<Prisma.$satisfactionPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const users_role: {
  region: 'region',
  district: 'district',
  facility: 'facility',
  national: 'national'
};

export type users_role = (typeof users_role)[keyof typeof users_role]


export const users_national: {
  national: 'national'
};

export type users_national = (typeof users_national)[keyof typeof users_national]

}

export type users_role = $Enums.users_role

export const users_role: typeof $Enums.users_role

export type users_national = $Enums.users_national

export const users_national: typeof $Enums.users_national

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Satisfactions
 * const satisfactions = await prisma.satisfaction.findMany()
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
   * // Fetch zero or more Satisfactions
   * const satisfactions = await prisma.satisfaction.findMany()
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
   * `prisma.satisfaction`: Exposes CRUD operations for the **satisfaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Satisfactions
    * const satisfactions = await prisma.satisfaction.findMany()
    * ```
    */
  get satisfaction(): Prisma.satisfactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    satisfaction: 'satisfaction',
    users: 'users'
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
      modelProps: "satisfaction" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      satisfaction: {
        payload: Prisma.$satisfactionPayload<ExtArgs>
        fields: Prisma.satisfactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.satisfactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$satisfactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.satisfactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$satisfactionPayload>
          }
          findFirst: {
            args: Prisma.satisfactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$satisfactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.satisfactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$satisfactionPayload>
          }
          findMany: {
            args: Prisma.satisfactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$satisfactionPayload>[]
          }
          create: {
            args: Prisma.satisfactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$satisfactionPayload>
          }
          createMany: {
            args: Prisma.satisfactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.satisfactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$satisfactionPayload>
          }
          update: {
            args: Prisma.satisfactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$satisfactionPayload>
          }
          deleteMany: {
            args: Prisma.satisfactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.satisfactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.satisfactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$satisfactionPayload>
          }
          aggregate: {
            args: Prisma.SatisfactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSatisfaction>
          }
          groupBy: {
            args: Prisma.satisfactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SatisfactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.satisfactionCountArgs<ExtArgs>
            result: $Utils.Optional<SatisfactionCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
    satisfaction?: satisfactionOmit
    users?: usersOmit
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
   * Model satisfaction
   */

  export type AggregateSatisfaction = {
    _count: SatisfactionCountAggregateOutputType | null
    _avg: SatisfactionAvgAggregateOutputType | null
    _sum: SatisfactionSumAggregateOutputType | null
    _min: SatisfactionMinAggregateOutputType | null
    _max: SatisfactionMaxAggregateOutputType | null
  }

  export type SatisfactionAvgAggregateOutputType = {
    demo_age: number | null
  }

  export type SatisfactionSumAggregateOutputType = {
    demo_age: number | null
  }

  export type SatisfactionMinAggregateOutputType = {
    meta_instance_id: string | null
    system_submission_date: string | null
    region: string | null
    district: string | null
    facility: string | null
    hlevel: string | null
    ownership: string | null
    reporting_period: Date | null
    demo_age: number | null
    demo_gender: string | null
    servicepoint: string | null
    servicepoint_others: string | null
    cleanliness: string | null
    timeliness_of_services: string | null
    privacy: string | null
    respect: string | null
    availability_of_medicines: string | null
    availability_of_services: string | null
    g_access_to_services: string | null
    needed_time_given: string | null
    cost_of_services: string | null
    bribe: string | null
    service_against_will: string | null
    satifisaction: string | null
    comments: string | null
    system_submission_datession_date: Date | null
  }

  export type SatisfactionMaxAggregateOutputType = {
    meta_instance_id: string | null
    system_submission_date: string | null
    region: string | null
    district: string | null
    facility: string | null
    hlevel: string | null
    ownership: string | null
    reporting_period: Date | null
    demo_age: number | null
    demo_gender: string | null
    servicepoint: string | null
    servicepoint_others: string | null
    cleanliness: string | null
    timeliness_of_services: string | null
    privacy: string | null
    respect: string | null
    availability_of_medicines: string | null
    availability_of_services: string | null
    g_access_to_services: string | null
    needed_time_given: string | null
    cost_of_services: string | null
    bribe: string | null
    service_against_will: string | null
    satifisaction: string | null
    comments: string | null
    system_submission_datession_date: Date | null
  }

  export type SatisfactionCountAggregateOutputType = {
    meta_instance_id: number
    system_submission_date: number
    region: number
    district: number
    facility: number
    hlevel: number
    ownership: number
    reporting_period: number
    demo_age: number
    demo_gender: number
    servicepoint: number
    servicepoint_others: number
    cleanliness: number
    timeliness_of_services: number
    privacy: number
    respect: number
    availability_of_medicines: number
    availability_of_services: number
    g_access_to_services: number
    needed_time_given: number
    cost_of_services: number
    bribe: number
    service_against_will: number
    satifisaction: number
    comments: number
    system_submission_datession_date: number
    _all: number
  }


  export type SatisfactionAvgAggregateInputType = {
    demo_age?: true
  }

  export type SatisfactionSumAggregateInputType = {
    demo_age?: true
  }

  export type SatisfactionMinAggregateInputType = {
    meta_instance_id?: true
    system_submission_date?: true
    region?: true
    district?: true
    facility?: true
    hlevel?: true
    ownership?: true
    reporting_period?: true
    demo_age?: true
    demo_gender?: true
    servicepoint?: true
    servicepoint_others?: true
    cleanliness?: true
    timeliness_of_services?: true
    privacy?: true
    respect?: true
    availability_of_medicines?: true
    availability_of_services?: true
    g_access_to_services?: true
    needed_time_given?: true
    cost_of_services?: true
    bribe?: true
    service_against_will?: true
    satifisaction?: true
    comments?: true
    system_submission_datession_date?: true
  }

  export type SatisfactionMaxAggregateInputType = {
    meta_instance_id?: true
    system_submission_date?: true
    region?: true
    district?: true
    facility?: true
    hlevel?: true
    ownership?: true
    reporting_period?: true
    demo_age?: true
    demo_gender?: true
    servicepoint?: true
    servicepoint_others?: true
    cleanliness?: true
    timeliness_of_services?: true
    privacy?: true
    respect?: true
    availability_of_medicines?: true
    availability_of_services?: true
    g_access_to_services?: true
    needed_time_given?: true
    cost_of_services?: true
    bribe?: true
    service_against_will?: true
    satifisaction?: true
    comments?: true
    system_submission_datession_date?: true
  }

  export type SatisfactionCountAggregateInputType = {
    meta_instance_id?: true
    system_submission_date?: true
    region?: true
    district?: true
    facility?: true
    hlevel?: true
    ownership?: true
    reporting_period?: true
    demo_age?: true
    demo_gender?: true
    servicepoint?: true
    servicepoint_others?: true
    cleanliness?: true
    timeliness_of_services?: true
    privacy?: true
    respect?: true
    availability_of_medicines?: true
    availability_of_services?: true
    g_access_to_services?: true
    needed_time_given?: true
    cost_of_services?: true
    bribe?: true
    service_against_will?: true
    satifisaction?: true
    comments?: true
    system_submission_datession_date?: true
    _all?: true
  }

  export type SatisfactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which satisfaction to aggregate.
     */
    where?: satisfactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of satisfactions to fetch.
     */
    orderBy?: satisfactionOrderByWithRelationInput | satisfactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: satisfactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` satisfactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` satisfactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned satisfactions
    **/
    _count?: true | SatisfactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SatisfactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SatisfactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SatisfactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SatisfactionMaxAggregateInputType
  }

  export type GetSatisfactionAggregateType<T extends SatisfactionAggregateArgs> = {
        [P in keyof T & keyof AggregateSatisfaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSatisfaction[P]>
      : GetScalarType<T[P], AggregateSatisfaction[P]>
  }




  export type satisfactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: satisfactionWhereInput
    orderBy?: satisfactionOrderByWithAggregationInput | satisfactionOrderByWithAggregationInput[]
    by: SatisfactionScalarFieldEnum[] | SatisfactionScalarFieldEnum
    having?: satisfactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SatisfactionCountAggregateInputType | true
    _avg?: SatisfactionAvgAggregateInputType
    _sum?: SatisfactionSumAggregateInputType
    _min?: SatisfactionMinAggregateInputType
    _max?: SatisfactionMaxAggregateInputType
  }

  export type SatisfactionGroupByOutputType = {
    meta_instance_id: string
    system_submission_date: string | null
    region: string | null
    district: string | null
    facility: string | null
    hlevel: string | null
    ownership: string | null
    reporting_period: Date | null
    demo_age: number | null
    demo_gender: string | null
    servicepoint: string | null
    servicepoint_others: string | null
    cleanliness: string | null
    timeliness_of_services: string | null
    privacy: string | null
    respect: string | null
    availability_of_medicines: string | null
    availability_of_services: string | null
    g_access_to_services: string | null
    needed_time_given: string | null
    cost_of_services: string | null
    bribe: string | null
    service_against_will: string | null
    satifisaction: string | null
    comments: string | null
    system_submission_datession_date: Date | null
    _count: SatisfactionCountAggregateOutputType | null
    _avg: SatisfactionAvgAggregateOutputType | null
    _sum: SatisfactionSumAggregateOutputType | null
    _min: SatisfactionMinAggregateOutputType | null
    _max: SatisfactionMaxAggregateOutputType | null
  }

  type GetSatisfactionGroupByPayload<T extends satisfactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SatisfactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SatisfactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SatisfactionGroupByOutputType[P]>
            : GetScalarType<T[P], SatisfactionGroupByOutputType[P]>
        }
      >
    >


  export type satisfactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    meta_instance_id?: boolean
    system_submission_date?: boolean
    region?: boolean
    district?: boolean
    facility?: boolean
    hlevel?: boolean
    ownership?: boolean
    reporting_period?: boolean
    demo_age?: boolean
    demo_gender?: boolean
    servicepoint?: boolean
    servicepoint_others?: boolean
    cleanliness?: boolean
    timeliness_of_services?: boolean
    privacy?: boolean
    respect?: boolean
    availability_of_medicines?: boolean
    availability_of_services?: boolean
    g_access_to_services?: boolean
    needed_time_given?: boolean
    cost_of_services?: boolean
    bribe?: boolean
    service_against_will?: boolean
    satifisaction?: boolean
    comments?: boolean
    system_submission_datession_date?: boolean
  }, ExtArgs["result"]["satisfaction"]>



  export type satisfactionSelectScalar = {
    meta_instance_id?: boolean
    system_submission_date?: boolean
    region?: boolean
    district?: boolean
    facility?: boolean
    hlevel?: boolean
    ownership?: boolean
    reporting_period?: boolean
    demo_age?: boolean
    demo_gender?: boolean
    servicepoint?: boolean
    servicepoint_others?: boolean
    cleanliness?: boolean
    timeliness_of_services?: boolean
    privacy?: boolean
    respect?: boolean
    availability_of_medicines?: boolean
    availability_of_services?: boolean
    g_access_to_services?: boolean
    needed_time_given?: boolean
    cost_of_services?: boolean
    bribe?: boolean
    service_against_will?: boolean
    satifisaction?: boolean
    comments?: boolean
    system_submission_datession_date?: boolean
  }

  export type satisfactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"meta_instance_id" | "system_submission_date" | "region" | "district" | "facility" | "hlevel" | "ownership" | "reporting_period" | "demo_age" | "demo_gender" | "servicepoint" | "servicepoint_others" | "cleanliness" | "timeliness_of_services" | "privacy" | "respect" | "availability_of_medicines" | "availability_of_services" | "g_access_to_services" | "needed_time_given" | "cost_of_services" | "bribe" | "service_against_will" | "satifisaction" | "comments" | "system_submission_datession_date", ExtArgs["result"]["satisfaction"]>

  export type $satisfactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "satisfaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      meta_instance_id: string
      system_submission_date: string | null
      region: string | null
      district: string | null
      facility: string | null
      hlevel: string | null
      ownership: string | null
      reporting_period: Date | null
      demo_age: number | null
      demo_gender: string | null
      servicepoint: string | null
      servicepoint_others: string | null
      cleanliness: string | null
      timeliness_of_services: string | null
      privacy: string | null
      respect: string | null
      availability_of_medicines: string | null
      availability_of_services: string | null
      g_access_to_services: string | null
      needed_time_given: string | null
      cost_of_services: string | null
      bribe: string | null
      service_against_will: string | null
      satifisaction: string | null
      comments: string | null
      system_submission_datession_date: Date | null
    }, ExtArgs["result"]["satisfaction"]>
    composites: {}
  }

  type satisfactionGetPayload<S extends boolean | null | undefined | satisfactionDefaultArgs> = $Result.GetResult<Prisma.$satisfactionPayload, S>

  type satisfactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<satisfactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SatisfactionCountAggregateInputType | true
    }

  export interface satisfactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['satisfaction'], meta: { name: 'satisfaction' } }
    /**
     * Find zero or one Satisfaction that matches the filter.
     * @param {satisfactionFindUniqueArgs} args - Arguments to find a Satisfaction
     * @example
     * // Get one Satisfaction
     * const satisfaction = await prisma.satisfaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends satisfactionFindUniqueArgs>(args: SelectSubset<T, satisfactionFindUniqueArgs<ExtArgs>>): Prisma__satisfactionClient<$Result.GetResult<Prisma.$satisfactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Satisfaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {satisfactionFindUniqueOrThrowArgs} args - Arguments to find a Satisfaction
     * @example
     * // Get one Satisfaction
     * const satisfaction = await prisma.satisfaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends satisfactionFindUniqueOrThrowArgs>(args: SelectSubset<T, satisfactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__satisfactionClient<$Result.GetResult<Prisma.$satisfactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Satisfaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {satisfactionFindFirstArgs} args - Arguments to find a Satisfaction
     * @example
     * // Get one Satisfaction
     * const satisfaction = await prisma.satisfaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends satisfactionFindFirstArgs>(args?: SelectSubset<T, satisfactionFindFirstArgs<ExtArgs>>): Prisma__satisfactionClient<$Result.GetResult<Prisma.$satisfactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Satisfaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {satisfactionFindFirstOrThrowArgs} args - Arguments to find a Satisfaction
     * @example
     * // Get one Satisfaction
     * const satisfaction = await prisma.satisfaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends satisfactionFindFirstOrThrowArgs>(args?: SelectSubset<T, satisfactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__satisfactionClient<$Result.GetResult<Prisma.$satisfactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Satisfactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {satisfactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Satisfactions
     * const satisfactions = await prisma.satisfaction.findMany()
     * 
     * // Get first 10 Satisfactions
     * const satisfactions = await prisma.satisfaction.findMany({ take: 10 })
     * 
     * // Only select the `meta_instance_id`
     * const satisfactionWithMeta_instance_idOnly = await prisma.satisfaction.findMany({ select: { meta_instance_id: true } })
     * 
     */
    findMany<T extends satisfactionFindManyArgs>(args?: SelectSubset<T, satisfactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$satisfactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Satisfaction.
     * @param {satisfactionCreateArgs} args - Arguments to create a Satisfaction.
     * @example
     * // Create one Satisfaction
     * const Satisfaction = await prisma.satisfaction.create({
     *   data: {
     *     // ... data to create a Satisfaction
     *   }
     * })
     * 
     */
    create<T extends satisfactionCreateArgs>(args: SelectSubset<T, satisfactionCreateArgs<ExtArgs>>): Prisma__satisfactionClient<$Result.GetResult<Prisma.$satisfactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Satisfactions.
     * @param {satisfactionCreateManyArgs} args - Arguments to create many Satisfactions.
     * @example
     * // Create many Satisfactions
     * const satisfaction = await prisma.satisfaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends satisfactionCreateManyArgs>(args?: SelectSubset<T, satisfactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Satisfaction.
     * @param {satisfactionDeleteArgs} args - Arguments to delete one Satisfaction.
     * @example
     * // Delete one Satisfaction
     * const Satisfaction = await prisma.satisfaction.delete({
     *   where: {
     *     // ... filter to delete one Satisfaction
     *   }
     * })
     * 
     */
    delete<T extends satisfactionDeleteArgs>(args: SelectSubset<T, satisfactionDeleteArgs<ExtArgs>>): Prisma__satisfactionClient<$Result.GetResult<Prisma.$satisfactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Satisfaction.
     * @param {satisfactionUpdateArgs} args - Arguments to update one Satisfaction.
     * @example
     * // Update one Satisfaction
     * const satisfaction = await prisma.satisfaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends satisfactionUpdateArgs>(args: SelectSubset<T, satisfactionUpdateArgs<ExtArgs>>): Prisma__satisfactionClient<$Result.GetResult<Prisma.$satisfactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Satisfactions.
     * @param {satisfactionDeleteManyArgs} args - Arguments to filter Satisfactions to delete.
     * @example
     * // Delete a few Satisfactions
     * const { count } = await prisma.satisfaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends satisfactionDeleteManyArgs>(args?: SelectSubset<T, satisfactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Satisfactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {satisfactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Satisfactions
     * const satisfaction = await prisma.satisfaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends satisfactionUpdateManyArgs>(args: SelectSubset<T, satisfactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Satisfaction.
     * @param {satisfactionUpsertArgs} args - Arguments to update or create a Satisfaction.
     * @example
     * // Update or create a Satisfaction
     * const satisfaction = await prisma.satisfaction.upsert({
     *   create: {
     *     // ... data to create a Satisfaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Satisfaction we want to update
     *   }
     * })
     */
    upsert<T extends satisfactionUpsertArgs>(args: SelectSubset<T, satisfactionUpsertArgs<ExtArgs>>): Prisma__satisfactionClient<$Result.GetResult<Prisma.$satisfactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Satisfactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {satisfactionCountArgs} args - Arguments to filter Satisfactions to count.
     * @example
     * // Count the number of Satisfactions
     * const count = await prisma.satisfaction.count({
     *   where: {
     *     // ... the filter for the Satisfactions we want to count
     *   }
     * })
    **/
    count<T extends satisfactionCountArgs>(
      args?: Subset<T, satisfactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SatisfactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Satisfaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SatisfactionAggregateArgs>(args: Subset<T, SatisfactionAggregateArgs>): Prisma.PrismaPromise<GetSatisfactionAggregateType<T>>

    /**
     * Group by Satisfaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {satisfactionGroupByArgs} args - Group by arguments.
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
      T extends satisfactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: satisfactionGroupByArgs['orderBy'] }
        : { orderBy?: satisfactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, satisfactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSatisfactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the satisfaction model
   */
  readonly fields: satisfactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for satisfaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__satisfactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the satisfaction model
   */
  interface satisfactionFieldRefs {
    readonly meta_instance_id: FieldRef<"satisfaction", 'String'>
    readonly system_submission_date: FieldRef<"satisfaction", 'String'>
    readonly region: FieldRef<"satisfaction", 'String'>
    readonly district: FieldRef<"satisfaction", 'String'>
    readonly facility: FieldRef<"satisfaction", 'String'>
    readonly hlevel: FieldRef<"satisfaction", 'String'>
    readonly ownership: FieldRef<"satisfaction", 'String'>
    readonly reporting_period: FieldRef<"satisfaction", 'DateTime'>
    readonly demo_age: FieldRef<"satisfaction", 'Int'>
    readonly demo_gender: FieldRef<"satisfaction", 'String'>
    readonly servicepoint: FieldRef<"satisfaction", 'String'>
    readonly servicepoint_others: FieldRef<"satisfaction", 'String'>
    readonly cleanliness: FieldRef<"satisfaction", 'String'>
    readonly timeliness_of_services: FieldRef<"satisfaction", 'String'>
    readonly privacy: FieldRef<"satisfaction", 'String'>
    readonly respect: FieldRef<"satisfaction", 'String'>
    readonly availability_of_medicines: FieldRef<"satisfaction", 'String'>
    readonly availability_of_services: FieldRef<"satisfaction", 'String'>
    readonly g_access_to_services: FieldRef<"satisfaction", 'String'>
    readonly needed_time_given: FieldRef<"satisfaction", 'String'>
    readonly cost_of_services: FieldRef<"satisfaction", 'String'>
    readonly bribe: FieldRef<"satisfaction", 'String'>
    readonly service_against_will: FieldRef<"satisfaction", 'String'>
    readonly satifisaction: FieldRef<"satisfaction", 'String'>
    readonly comments: FieldRef<"satisfaction", 'String'>
    readonly system_submission_datession_date: FieldRef<"satisfaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * satisfaction findUnique
   */
  export type satisfactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the satisfaction
     */
    select?: satisfactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the satisfaction
     */
    omit?: satisfactionOmit<ExtArgs> | null
    /**
     * Filter, which satisfaction to fetch.
     */
    where: satisfactionWhereUniqueInput
  }

  /**
   * satisfaction findUniqueOrThrow
   */
  export type satisfactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the satisfaction
     */
    select?: satisfactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the satisfaction
     */
    omit?: satisfactionOmit<ExtArgs> | null
    /**
     * Filter, which satisfaction to fetch.
     */
    where: satisfactionWhereUniqueInput
  }

  /**
   * satisfaction findFirst
   */
  export type satisfactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the satisfaction
     */
    select?: satisfactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the satisfaction
     */
    omit?: satisfactionOmit<ExtArgs> | null
    /**
     * Filter, which satisfaction to fetch.
     */
    where?: satisfactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of satisfactions to fetch.
     */
    orderBy?: satisfactionOrderByWithRelationInput | satisfactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for satisfactions.
     */
    cursor?: satisfactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` satisfactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` satisfactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of satisfactions.
     */
    distinct?: SatisfactionScalarFieldEnum | SatisfactionScalarFieldEnum[]
  }

  /**
   * satisfaction findFirstOrThrow
   */
  export type satisfactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the satisfaction
     */
    select?: satisfactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the satisfaction
     */
    omit?: satisfactionOmit<ExtArgs> | null
    /**
     * Filter, which satisfaction to fetch.
     */
    where?: satisfactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of satisfactions to fetch.
     */
    orderBy?: satisfactionOrderByWithRelationInput | satisfactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for satisfactions.
     */
    cursor?: satisfactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` satisfactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` satisfactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of satisfactions.
     */
    distinct?: SatisfactionScalarFieldEnum | SatisfactionScalarFieldEnum[]
  }

  /**
   * satisfaction findMany
   */
  export type satisfactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the satisfaction
     */
    select?: satisfactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the satisfaction
     */
    omit?: satisfactionOmit<ExtArgs> | null
    /**
     * Filter, which satisfactions to fetch.
     */
    where?: satisfactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of satisfactions to fetch.
     */
    orderBy?: satisfactionOrderByWithRelationInput | satisfactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing satisfactions.
     */
    cursor?: satisfactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` satisfactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` satisfactions.
     */
    skip?: number
    distinct?: SatisfactionScalarFieldEnum | SatisfactionScalarFieldEnum[]
  }

  /**
   * satisfaction create
   */
  export type satisfactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the satisfaction
     */
    select?: satisfactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the satisfaction
     */
    omit?: satisfactionOmit<ExtArgs> | null
    /**
     * The data needed to create a satisfaction.
     */
    data: XOR<satisfactionCreateInput, satisfactionUncheckedCreateInput>
  }

  /**
   * satisfaction createMany
   */
  export type satisfactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many satisfactions.
     */
    data: satisfactionCreateManyInput | satisfactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * satisfaction update
   */
  export type satisfactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the satisfaction
     */
    select?: satisfactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the satisfaction
     */
    omit?: satisfactionOmit<ExtArgs> | null
    /**
     * The data needed to update a satisfaction.
     */
    data: XOR<satisfactionUpdateInput, satisfactionUncheckedUpdateInput>
    /**
     * Choose, which satisfaction to update.
     */
    where: satisfactionWhereUniqueInput
  }

  /**
   * satisfaction updateMany
   */
  export type satisfactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update satisfactions.
     */
    data: XOR<satisfactionUpdateManyMutationInput, satisfactionUncheckedUpdateManyInput>
    /**
     * Filter which satisfactions to update
     */
    where?: satisfactionWhereInput
    /**
     * Limit how many satisfactions to update.
     */
    limit?: number
  }

  /**
   * satisfaction upsert
   */
  export type satisfactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the satisfaction
     */
    select?: satisfactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the satisfaction
     */
    omit?: satisfactionOmit<ExtArgs> | null
    /**
     * The filter to search for the satisfaction to update in case it exists.
     */
    where: satisfactionWhereUniqueInput
    /**
     * In case the satisfaction found by the `where` argument doesn't exist, create a new satisfaction with this data.
     */
    create: XOR<satisfactionCreateInput, satisfactionUncheckedCreateInput>
    /**
     * In case the satisfaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<satisfactionUpdateInput, satisfactionUncheckedUpdateInput>
  }

  /**
   * satisfaction delete
   */
  export type satisfactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the satisfaction
     */
    select?: satisfactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the satisfaction
     */
    omit?: satisfactionOmit<ExtArgs> | null
    /**
     * Filter which satisfaction to delete.
     */
    where: satisfactionWhereUniqueInput
  }

  /**
   * satisfaction deleteMany
   */
  export type satisfactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which satisfactions to delete
     */
    where?: satisfactionWhereInput
    /**
     * Limit how many satisfactions to delete.
     */
    limit?: number
  }

  /**
   * satisfaction without action
   */
  export type satisfactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the satisfaction
     */
    select?: satisfactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the satisfaction
     */
    omit?: satisfactionOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    userID: number | null
  }

  export type UsersSumAggregateOutputType = {
    userID: number | null
  }

  export type UsersMinAggregateOutputType = {
    userID: number | null
    username: string | null
    password: string | null
    role: $Enums.users_role | null
    national: $Enums.users_national | null
    region: string | null
    district: string | null
    facility: string | null
    type: string | null
  }

  export type UsersMaxAggregateOutputType = {
    userID: number | null
    username: string | null
    password: string | null
    role: $Enums.users_role | null
    national: $Enums.users_national | null
    region: string | null
    district: string | null
    facility: string | null
    type: string | null
  }

  export type UsersCountAggregateOutputType = {
    userID: number
    username: number
    password: number
    role: number
    national: number
    region: number
    district: number
    facility: number
    type: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    userID?: true
  }

  export type UsersSumAggregateInputType = {
    userID?: true
  }

  export type UsersMinAggregateInputType = {
    userID?: true
    username?: true
    password?: true
    role?: true
    national?: true
    region?: true
    district?: true
    facility?: true
    type?: true
  }

  export type UsersMaxAggregateInputType = {
    userID?: true
    username?: true
    password?: true
    role?: true
    national?: true
    region?: true
    district?: true
    facility?: true
    type?: true
  }

  export type UsersCountAggregateInputType = {
    userID?: true
    username?: true
    password?: true
    role?: true
    national?: true
    region?: true
    district?: true
    facility?: true
    type?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userID: number
    username: string
    password: string
    role: $Enums.users_role
    national: $Enums.users_national | null
    region: string | null
    district: string | null
    facility: string | null
    type: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userID?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    national?: boolean
    region?: boolean
    district?: boolean
    facility?: boolean
    type?: boolean
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    userID?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    national?: boolean
    region?: boolean
    district?: boolean
    facility?: boolean
    type?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userID" | "username" | "password" | "role" | "national" | "region" | "district" | "facility" | "type", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userID: number
      username: string
      password: string
      role: $Enums.users_role
      national: $Enums.users_national | null
      region: string | null
      district: string | null
      facility: string | null
      type: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userID`
     * const usersWithUserIDOnly = await prisma.users.findMany({ select: { userID: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly userID: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'users_role'>
    readonly national: FieldRef<"users", 'users_national'>
    readonly region: FieldRef<"users", 'String'>
    readonly district: FieldRef<"users", 'String'>
    readonly facility: FieldRef<"users", 'String'>
    readonly type: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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


  export const SatisfactionScalarFieldEnum: {
    meta_instance_id: 'meta_instance_id',
    system_submission_date: 'system_submission_date',
    region: 'region',
    district: 'district',
    facility: 'facility',
    hlevel: 'hlevel',
    ownership: 'ownership',
    reporting_period: 'reporting_period',
    demo_age: 'demo_age',
    demo_gender: 'demo_gender',
    servicepoint: 'servicepoint',
    servicepoint_others: 'servicepoint_others',
    cleanliness: 'cleanliness',
    timeliness_of_services: 'timeliness_of_services',
    privacy: 'privacy',
    respect: 'respect',
    availability_of_medicines: 'availability_of_medicines',
    availability_of_services: 'availability_of_services',
    g_access_to_services: 'g_access_to_services',
    needed_time_given: 'needed_time_given',
    cost_of_services: 'cost_of_services',
    bribe: 'bribe',
    service_against_will: 'service_against_will',
    satifisaction: 'satifisaction',
    comments: 'comments',
    system_submission_datession_date: 'system_submission_datession_date'
  };

  export type SatisfactionScalarFieldEnum = (typeof SatisfactionScalarFieldEnum)[keyof typeof SatisfactionScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    userID: 'userID',
    username: 'username',
    password: 'password',
    role: 'role',
    national: 'national',
    region: 'region',
    district: 'district',
    facility: 'facility',
    type: 'type'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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


  export const satisfactionOrderByRelevanceFieldEnum: {
    meta_instance_id: 'meta_instance_id',
    system_submission_date: 'system_submission_date',
    region: 'region',
    district: 'district',
    facility: 'facility',
    hlevel: 'hlevel',
    ownership: 'ownership',
    demo_gender: 'demo_gender',
    servicepoint: 'servicepoint',
    servicepoint_others: 'servicepoint_others',
    cleanliness: 'cleanliness',
    timeliness_of_services: 'timeliness_of_services',
    privacy: 'privacy',
    respect: 'respect',
    availability_of_medicines: 'availability_of_medicines',
    availability_of_services: 'availability_of_services',
    g_access_to_services: 'g_access_to_services',
    needed_time_given: 'needed_time_given',
    cost_of_services: 'cost_of_services',
    bribe: 'bribe',
    service_against_will: 'service_against_will',
    satifisaction: 'satifisaction',
    comments: 'comments'
  };

  export type satisfactionOrderByRelevanceFieldEnum = (typeof satisfactionOrderByRelevanceFieldEnum)[keyof typeof satisfactionOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password',
    region: 'region',
    district: 'district',
    facility: 'facility',
    type: 'type'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'users_role'
   */
  export type Enumusers_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_role'>
    


  /**
   * Reference to a field of type 'users_national'
   */
  export type Enumusers_nationalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_national'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type satisfactionWhereInput = {
    AND?: satisfactionWhereInput | satisfactionWhereInput[]
    OR?: satisfactionWhereInput[]
    NOT?: satisfactionWhereInput | satisfactionWhereInput[]
    meta_instance_id?: StringFilter<"satisfaction"> | string
    system_submission_date?: StringNullableFilter<"satisfaction"> | string | null
    region?: StringNullableFilter<"satisfaction"> | string | null
    district?: StringNullableFilter<"satisfaction"> | string | null
    facility?: StringNullableFilter<"satisfaction"> | string | null
    hlevel?: StringNullableFilter<"satisfaction"> | string | null
    ownership?: StringNullableFilter<"satisfaction"> | string | null
    reporting_period?: DateTimeNullableFilter<"satisfaction"> | Date | string | null
    demo_age?: IntNullableFilter<"satisfaction"> | number | null
    demo_gender?: StringNullableFilter<"satisfaction"> | string | null
    servicepoint?: StringNullableFilter<"satisfaction"> | string | null
    servicepoint_others?: StringNullableFilter<"satisfaction"> | string | null
    cleanliness?: StringNullableFilter<"satisfaction"> | string | null
    timeliness_of_services?: StringNullableFilter<"satisfaction"> | string | null
    privacy?: StringNullableFilter<"satisfaction"> | string | null
    respect?: StringNullableFilter<"satisfaction"> | string | null
    availability_of_medicines?: StringNullableFilter<"satisfaction"> | string | null
    availability_of_services?: StringNullableFilter<"satisfaction"> | string | null
    g_access_to_services?: StringNullableFilter<"satisfaction"> | string | null
    needed_time_given?: StringNullableFilter<"satisfaction"> | string | null
    cost_of_services?: StringNullableFilter<"satisfaction"> | string | null
    bribe?: StringNullableFilter<"satisfaction"> | string | null
    service_against_will?: StringNullableFilter<"satisfaction"> | string | null
    satifisaction?: StringNullableFilter<"satisfaction"> | string | null
    comments?: StringNullableFilter<"satisfaction"> | string | null
    system_submission_datession_date?: DateTimeNullableFilter<"satisfaction"> | Date | string | null
  }

  export type satisfactionOrderByWithRelationInput = {
    meta_instance_id?: SortOrder
    system_submission_date?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    facility?: SortOrderInput | SortOrder
    hlevel?: SortOrderInput | SortOrder
    ownership?: SortOrderInput | SortOrder
    reporting_period?: SortOrderInput | SortOrder
    demo_age?: SortOrderInput | SortOrder
    demo_gender?: SortOrderInput | SortOrder
    servicepoint?: SortOrderInput | SortOrder
    servicepoint_others?: SortOrderInput | SortOrder
    cleanliness?: SortOrderInput | SortOrder
    timeliness_of_services?: SortOrderInput | SortOrder
    privacy?: SortOrderInput | SortOrder
    respect?: SortOrderInput | SortOrder
    availability_of_medicines?: SortOrderInput | SortOrder
    availability_of_services?: SortOrderInput | SortOrder
    g_access_to_services?: SortOrderInput | SortOrder
    needed_time_given?: SortOrderInput | SortOrder
    cost_of_services?: SortOrderInput | SortOrder
    bribe?: SortOrderInput | SortOrder
    service_against_will?: SortOrderInput | SortOrder
    satifisaction?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    system_submission_datession_date?: SortOrderInput | SortOrder
    _relevance?: satisfactionOrderByRelevanceInput
  }

  export type satisfactionWhereUniqueInput = Prisma.AtLeast<{
    meta_instance_id?: string
    AND?: satisfactionWhereInput | satisfactionWhereInput[]
    OR?: satisfactionWhereInput[]
    NOT?: satisfactionWhereInput | satisfactionWhereInput[]
    system_submission_date?: StringNullableFilter<"satisfaction"> | string | null
    region?: StringNullableFilter<"satisfaction"> | string | null
    district?: StringNullableFilter<"satisfaction"> | string | null
    facility?: StringNullableFilter<"satisfaction"> | string | null
    hlevel?: StringNullableFilter<"satisfaction"> | string | null
    ownership?: StringNullableFilter<"satisfaction"> | string | null
    reporting_period?: DateTimeNullableFilter<"satisfaction"> | Date | string | null
    demo_age?: IntNullableFilter<"satisfaction"> | number | null
    demo_gender?: StringNullableFilter<"satisfaction"> | string | null
    servicepoint?: StringNullableFilter<"satisfaction"> | string | null
    servicepoint_others?: StringNullableFilter<"satisfaction"> | string | null
    cleanliness?: StringNullableFilter<"satisfaction"> | string | null
    timeliness_of_services?: StringNullableFilter<"satisfaction"> | string | null
    privacy?: StringNullableFilter<"satisfaction"> | string | null
    respect?: StringNullableFilter<"satisfaction"> | string | null
    availability_of_medicines?: StringNullableFilter<"satisfaction"> | string | null
    availability_of_services?: StringNullableFilter<"satisfaction"> | string | null
    g_access_to_services?: StringNullableFilter<"satisfaction"> | string | null
    needed_time_given?: StringNullableFilter<"satisfaction"> | string | null
    cost_of_services?: StringNullableFilter<"satisfaction"> | string | null
    bribe?: StringNullableFilter<"satisfaction"> | string | null
    service_against_will?: StringNullableFilter<"satisfaction"> | string | null
    satifisaction?: StringNullableFilter<"satisfaction"> | string | null
    comments?: StringNullableFilter<"satisfaction"> | string | null
    system_submission_datession_date?: DateTimeNullableFilter<"satisfaction"> | Date | string | null
  }, "meta_instance_id" | "meta_instance_id">

  export type satisfactionOrderByWithAggregationInput = {
    meta_instance_id?: SortOrder
    system_submission_date?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    facility?: SortOrderInput | SortOrder
    hlevel?: SortOrderInput | SortOrder
    ownership?: SortOrderInput | SortOrder
    reporting_period?: SortOrderInput | SortOrder
    demo_age?: SortOrderInput | SortOrder
    demo_gender?: SortOrderInput | SortOrder
    servicepoint?: SortOrderInput | SortOrder
    servicepoint_others?: SortOrderInput | SortOrder
    cleanliness?: SortOrderInput | SortOrder
    timeliness_of_services?: SortOrderInput | SortOrder
    privacy?: SortOrderInput | SortOrder
    respect?: SortOrderInput | SortOrder
    availability_of_medicines?: SortOrderInput | SortOrder
    availability_of_services?: SortOrderInput | SortOrder
    g_access_to_services?: SortOrderInput | SortOrder
    needed_time_given?: SortOrderInput | SortOrder
    cost_of_services?: SortOrderInput | SortOrder
    bribe?: SortOrderInput | SortOrder
    service_against_will?: SortOrderInput | SortOrder
    satifisaction?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    system_submission_datession_date?: SortOrderInput | SortOrder
    _count?: satisfactionCountOrderByAggregateInput
    _avg?: satisfactionAvgOrderByAggregateInput
    _max?: satisfactionMaxOrderByAggregateInput
    _min?: satisfactionMinOrderByAggregateInput
    _sum?: satisfactionSumOrderByAggregateInput
  }

  export type satisfactionScalarWhereWithAggregatesInput = {
    AND?: satisfactionScalarWhereWithAggregatesInput | satisfactionScalarWhereWithAggregatesInput[]
    OR?: satisfactionScalarWhereWithAggregatesInput[]
    NOT?: satisfactionScalarWhereWithAggregatesInput | satisfactionScalarWhereWithAggregatesInput[]
    meta_instance_id?: StringWithAggregatesFilter<"satisfaction"> | string
    system_submission_date?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    region?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    district?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    facility?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    hlevel?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    ownership?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    reporting_period?: DateTimeNullableWithAggregatesFilter<"satisfaction"> | Date | string | null
    demo_age?: IntNullableWithAggregatesFilter<"satisfaction"> | number | null
    demo_gender?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    servicepoint?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    servicepoint_others?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    cleanliness?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    timeliness_of_services?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    privacy?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    respect?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    availability_of_medicines?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    availability_of_services?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    g_access_to_services?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    needed_time_given?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    cost_of_services?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    bribe?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    service_against_will?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    satifisaction?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    comments?: StringNullableWithAggregatesFilter<"satisfaction"> | string | null
    system_submission_datession_date?: DateTimeNullableWithAggregatesFilter<"satisfaction"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    userID?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: Enumusers_roleFilter<"users"> | $Enums.users_role
    national?: Enumusers_nationalNullableFilter<"users"> | $Enums.users_national | null
    region?: StringNullableFilter<"users"> | string | null
    district?: StringNullableFilter<"users"> | string | null
    facility?: StringNullableFilter<"users"> | string | null
    type?: StringNullableFilter<"users"> | string | null
  }

  export type usersOrderByWithRelationInput = {
    userID?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    national?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    facility?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    userID?: number
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    role?: Enumusers_roleFilter<"users"> | $Enums.users_role
    national?: Enumusers_nationalNullableFilter<"users"> | $Enums.users_national | null
    region?: StringNullableFilter<"users"> | string | null
    district?: StringNullableFilter<"users"> | string | null
    facility?: StringNullableFilter<"users"> | string | null
    type?: StringNullableFilter<"users"> | string | null
  }, "userID" | "username">

  export type usersOrderByWithAggregationInput = {
    userID?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    national?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    facility?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    userID?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: Enumusers_roleWithAggregatesFilter<"users"> | $Enums.users_role
    national?: Enumusers_nationalNullableWithAggregatesFilter<"users"> | $Enums.users_national | null
    region?: StringNullableWithAggregatesFilter<"users"> | string | null
    district?: StringNullableWithAggregatesFilter<"users"> | string | null
    facility?: StringNullableWithAggregatesFilter<"users"> | string | null
    type?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type satisfactionCreateInput = {
    meta_instance_id: string
    system_submission_date?: string | null
    region?: string | null
    district?: string | null
    facility?: string | null
    hlevel?: string | null
    ownership?: string | null
    reporting_period?: Date | string | null
    demo_age?: number | null
    demo_gender?: string | null
    servicepoint?: string | null
    servicepoint_others?: string | null
    cleanliness?: string | null
    timeliness_of_services?: string | null
    privacy?: string | null
    respect?: string | null
    availability_of_medicines?: string | null
    availability_of_services?: string | null
    g_access_to_services?: string | null
    needed_time_given?: string | null
    cost_of_services?: string | null
    bribe?: string | null
    service_against_will?: string | null
    satifisaction?: string | null
    comments?: string | null
    system_submission_datession_date?: Date | string | null
  }

  export type satisfactionUncheckedCreateInput = {
    meta_instance_id: string
    system_submission_date?: string | null
    region?: string | null
    district?: string | null
    facility?: string | null
    hlevel?: string | null
    ownership?: string | null
    reporting_period?: Date | string | null
    demo_age?: number | null
    demo_gender?: string | null
    servicepoint?: string | null
    servicepoint_others?: string | null
    cleanliness?: string | null
    timeliness_of_services?: string | null
    privacy?: string | null
    respect?: string | null
    availability_of_medicines?: string | null
    availability_of_services?: string | null
    g_access_to_services?: string | null
    needed_time_given?: string | null
    cost_of_services?: string | null
    bribe?: string | null
    service_against_will?: string | null
    satifisaction?: string | null
    comments?: string | null
    system_submission_datession_date?: Date | string | null
  }

  export type satisfactionUpdateInput = {
    meta_instance_id?: StringFieldUpdateOperationsInput | string
    system_submission_date?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    hlevel?: NullableStringFieldUpdateOperationsInput | string | null
    ownership?: NullableStringFieldUpdateOperationsInput | string | null
    reporting_period?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demo_age?: NullableIntFieldUpdateOperationsInput | number | null
    demo_gender?: NullableStringFieldUpdateOperationsInput | string | null
    servicepoint?: NullableStringFieldUpdateOperationsInput | string | null
    servicepoint_others?: NullableStringFieldUpdateOperationsInput | string | null
    cleanliness?: NullableStringFieldUpdateOperationsInput | string | null
    timeliness_of_services?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: NullableStringFieldUpdateOperationsInput | string | null
    respect?: NullableStringFieldUpdateOperationsInput | string | null
    availability_of_medicines?: NullableStringFieldUpdateOperationsInput | string | null
    availability_of_services?: NullableStringFieldUpdateOperationsInput | string | null
    g_access_to_services?: NullableStringFieldUpdateOperationsInput | string | null
    needed_time_given?: NullableStringFieldUpdateOperationsInput | string | null
    cost_of_services?: NullableStringFieldUpdateOperationsInput | string | null
    bribe?: NullableStringFieldUpdateOperationsInput | string | null
    service_against_will?: NullableStringFieldUpdateOperationsInput | string | null
    satifisaction?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    system_submission_datession_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type satisfactionUncheckedUpdateInput = {
    meta_instance_id?: StringFieldUpdateOperationsInput | string
    system_submission_date?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    hlevel?: NullableStringFieldUpdateOperationsInput | string | null
    ownership?: NullableStringFieldUpdateOperationsInput | string | null
    reporting_period?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demo_age?: NullableIntFieldUpdateOperationsInput | number | null
    demo_gender?: NullableStringFieldUpdateOperationsInput | string | null
    servicepoint?: NullableStringFieldUpdateOperationsInput | string | null
    servicepoint_others?: NullableStringFieldUpdateOperationsInput | string | null
    cleanliness?: NullableStringFieldUpdateOperationsInput | string | null
    timeliness_of_services?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: NullableStringFieldUpdateOperationsInput | string | null
    respect?: NullableStringFieldUpdateOperationsInput | string | null
    availability_of_medicines?: NullableStringFieldUpdateOperationsInput | string | null
    availability_of_services?: NullableStringFieldUpdateOperationsInput | string | null
    g_access_to_services?: NullableStringFieldUpdateOperationsInput | string | null
    needed_time_given?: NullableStringFieldUpdateOperationsInput | string | null
    cost_of_services?: NullableStringFieldUpdateOperationsInput | string | null
    bribe?: NullableStringFieldUpdateOperationsInput | string | null
    service_against_will?: NullableStringFieldUpdateOperationsInput | string | null
    satifisaction?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    system_submission_datession_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type satisfactionCreateManyInput = {
    meta_instance_id: string
    system_submission_date?: string | null
    region?: string | null
    district?: string | null
    facility?: string | null
    hlevel?: string | null
    ownership?: string | null
    reporting_period?: Date | string | null
    demo_age?: number | null
    demo_gender?: string | null
    servicepoint?: string | null
    servicepoint_others?: string | null
    cleanliness?: string | null
    timeliness_of_services?: string | null
    privacy?: string | null
    respect?: string | null
    availability_of_medicines?: string | null
    availability_of_services?: string | null
    g_access_to_services?: string | null
    needed_time_given?: string | null
    cost_of_services?: string | null
    bribe?: string | null
    service_against_will?: string | null
    satifisaction?: string | null
    comments?: string | null
    system_submission_datession_date?: Date | string | null
  }

  export type satisfactionUpdateManyMutationInput = {
    meta_instance_id?: StringFieldUpdateOperationsInput | string
    system_submission_date?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    hlevel?: NullableStringFieldUpdateOperationsInput | string | null
    ownership?: NullableStringFieldUpdateOperationsInput | string | null
    reporting_period?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demo_age?: NullableIntFieldUpdateOperationsInput | number | null
    demo_gender?: NullableStringFieldUpdateOperationsInput | string | null
    servicepoint?: NullableStringFieldUpdateOperationsInput | string | null
    servicepoint_others?: NullableStringFieldUpdateOperationsInput | string | null
    cleanliness?: NullableStringFieldUpdateOperationsInput | string | null
    timeliness_of_services?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: NullableStringFieldUpdateOperationsInput | string | null
    respect?: NullableStringFieldUpdateOperationsInput | string | null
    availability_of_medicines?: NullableStringFieldUpdateOperationsInput | string | null
    availability_of_services?: NullableStringFieldUpdateOperationsInput | string | null
    g_access_to_services?: NullableStringFieldUpdateOperationsInput | string | null
    needed_time_given?: NullableStringFieldUpdateOperationsInput | string | null
    cost_of_services?: NullableStringFieldUpdateOperationsInput | string | null
    bribe?: NullableStringFieldUpdateOperationsInput | string | null
    service_against_will?: NullableStringFieldUpdateOperationsInput | string | null
    satifisaction?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    system_submission_datession_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type satisfactionUncheckedUpdateManyInput = {
    meta_instance_id?: StringFieldUpdateOperationsInput | string
    system_submission_date?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    hlevel?: NullableStringFieldUpdateOperationsInput | string | null
    ownership?: NullableStringFieldUpdateOperationsInput | string | null
    reporting_period?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demo_age?: NullableIntFieldUpdateOperationsInput | number | null
    demo_gender?: NullableStringFieldUpdateOperationsInput | string | null
    servicepoint?: NullableStringFieldUpdateOperationsInput | string | null
    servicepoint_others?: NullableStringFieldUpdateOperationsInput | string | null
    cleanliness?: NullableStringFieldUpdateOperationsInput | string | null
    timeliness_of_services?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: NullableStringFieldUpdateOperationsInput | string | null
    respect?: NullableStringFieldUpdateOperationsInput | string | null
    availability_of_medicines?: NullableStringFieldUpdateOperationsInput | string | null
    availability_of_services?: NullableStringFieldUpdateOperationsInput | string | null
    g_access_to_services?: NullableStringFieldUpdateOperationsInput | string | null
    needed_time_given?: NullableStringFieldUpdateOperationsInput | string | null
    cost_of_services?: NullableStringFieldUpdateOperationsInput | string | null
    bribe?: NullableStringFieldUpdateOperationsInput | string | null
    service_against_will?: NullableStringFieldUpdateOperationsInput | string | null
    satifisaction?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    system_submission_datession_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    username: string
    password: string
    role: $Enums.users_role
    national?: $Enums.users_national | null
    region?: string | null
    district?: string | null
    facility?: string | null
    type?: string | null
  }

  export type usersUncheckedCreateInput = {
    userID?: number
    username: string
    password: string
    role: $Enums.users_role
    national?: $Enums.users_national | null
    region?: string | null
    district?: string | null
    facility?: string | null
    type?: string | null
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    national?: NullableEnumusers_nationalFieldUpdateOperationsInput | $Enums.users_national | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateInput = {
    userID?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    national?: NullableEnumusers_nationalFieldUpdateOperationsInput | $Enums.users_national | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateManyInput = {
    userID?: number
    username: string
    password: string
    role: $Enums.users_role
    national?: $Enums.users_national | null
    region?: string | null
    district?: string | null
    facility?: string | null
    type?: string | null
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    national?: NullableEnumusers_nationalFieldUpdateOperationsInput | $Enums.users_national | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    userID?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    national?: NullableEnumusers_nationalFieldUpdateOperationsInput | $Enums.users_national | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type satisfactionOrderByRelevanceInput = {
    fields: satisfactionOrderByRelevanceFieldEnum | satisfactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type satisfactionCountOrderByAggregateInput = {
    meta_instance_id?: SortOrder
    system_submission_date?: SortOrder
    region?: SortOrder
    district?: SortOrder
    facility?: SortOrder
    hlevel?: SortOrder
    ownership?: SortOrder
    reporting_period?: SortOrder
    demo_age?: SortOrder
    demo_gender?: SortOrder
    servicepoint?: SortOrder
    servicepoint_others?: SortOrder
    cleanliness?: SortOrder
    timeliness_of_services?: SortOrder
    privacy?: SortOrder
    respect?: SortOrder
    availability_of_medicines?: SortOrder
    availability_of_services?: SortOrder
    g_access_to_services?: SortOrder
    needed_time_given?: SortOrder
    cost_of_services?: SortOrder
    bribe?: SortOrder
    service_against_will?: SortOrder
    satifisaction?: SortOrder
    comments?: SortOrder
    system_submission_datession_date?: SortOrder
  }

  export type satisfactionAvgOrderByAggregateInput = {
    demo_age?: SortOrder
  }

  export type satisfactionMaxOrderByAggregateInput = {
    meta_instance_id?: SortOrder
    system_submission_date?: SortOrder
    region?: SortOrder
    district?: SortOrder
    facility?: SortOrder
    hlevel?: SortOrder
    ownership?: SortOrder
    reporting_period?: SortOrder
    demo_age?: SortOrder
    demo_gender?: SortOrder
    servicepoint?: SortOrder
    servicepoint_others?: SortOrder
    cleanliness?: SortOrder
    timeliness_of_services?: SortOrder
    privacy?: SortOrder
    respect?: SortOrder
    availability_of_medicines?: SortOrder
    availability_of_services?: SortOrder
    g_access_to_services?: SortOrder
    needed_time_given?: SortOrder
    cost_of_services?: SortOrder
    bribe?: SortOrder
    service_against_will?: SortOrder
    satifisaction?: SortOrder
    comments?: SortOrder
    system_submission_datession_date?: SortOrder
  }

  export type satisfactionMinOrderByAggregateInput = {
    meta_instance_id?: SortOrder
    system_submission_date?: SortOrder
    region?: SortOrder
    district?: SortOrder
    facility?: SortOrder
    hlevel?: SortOrder
    ownership?: SortOrder
    reporting_period?: SortOrder
    demo_age?: SortOrder
    demo_gender?: SortOrder
    servicepoint?: SortOrder
    servicepoint_others?: SortOrder
    cleanliness?: SortOrder
    timeliness_of_services?: SortOrder
    privacy?: SortOrder
    respect?: SortOrder
    availability_of_medicines?: SortOrder
    availability_of_services?: SortOrder
    g_access_to_services?: SortOrder
    needed_time_given?: SortOrder
    cost_of_services?: SortOrder
    bribe?: SortOrder
    service_against_will?: SortOrder
    satifisaction?: SortOrder
    comments?: SortOrder
    system_submission_datession_date?: SortOrder
  }

  export type satisfactionSumOrderByAggregateInput = {
    demo_age?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type Enumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role
  }

  export type Enumusers_nationalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_national | Enumusers_nationalFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_national[] | null
    notIn?: $Enums.users_national[] | null
    not?: NestedEnumusers_nationalNullableFilter<$PrismaModel> | $Enums.users_national | null
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    userID?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    national?: SortOrder
    region?: SortOrder
    district?: SortOrder
    facility?: SortOrder
    type?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    userID?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    userID?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    national?: SortOrder
    region?: SortOrder
    district?: SortOrder
    facility?: SortOrder
    type?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    userID?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    national?: SortOrder
    region?: SortOrder
    district?: SortOrder
    facility?: SortOrder
    type?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    userID?: SortOrder
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

  export type Enumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_roleFilter<$PrismaModel>
    _max?: NestedEnumusers_roleFilter<$PrismaModel>
  }

  export type Enumusers_nationalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_national | Enumusers_nationalFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_national[] | null
    notIn?: $Enums.users_national[] | null
    not?: NestedEnumusers_nationalNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_national | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_nationalNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_nationalNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumusers_roleFieldUpdateOperationsInput = {
    set?: $Enums.users_role
  }

  export type NullableEnumusers_nationalFieldUpdateOperationsInput = {
    set?: $Enums.users_national | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role
  }

  export type NestedEnumusers_nationalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_national | Enumusers_nationalFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_national[] | null
    notIn?: $Enums.users_national[] | null
    not?: NestedEnumusers_nationalNullableFilter<$PrismaModel> | $Enums.users_national | null
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

  export type NestedEnumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_roleFilter<$PrismaModel>
    _max?: NestedEnumusers_roleFilter<$PrismaModel>
  }

  export type NestedEnumusers_nationalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_national | Enumusers_nationalFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_national[] | null
    notIn?: $Enums.users_national[] | null
    not?: NestedEnumusers_nationalNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_national | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_nationalNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_nationalNullableFilter<$PrismaModel>
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