import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type AddTodoResult = {
   __typename?: 'AddTodoResult';
  success: Scalars['Boolean'];
  todo?: Maybe<Todo>;
  error?: Maybe<TodoValidationError>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type ClearCompletedTodosResult = {
   __typename?: 'ClearCompletedTodosResult';
  success: Scalars['Boolean'];
  todos: Array<Maybe<Todo>>;
};

export type CompleteAllTodosResult = {
   __typename?: 'CompleteAllTodosResult';
  success: Scalars['Boolean'];
  todos: Array<Maybe<Todo>>;
};

export type CompleteTodoError = TodoNotFoundError | TodoAlreadyCompletedError;

export type CompleteTodoResult = {
   __typename?: 'CompleteTodoResult';
  success: Scalars['Boolean'];
  todo?: Maybe<Todo>;
  error?: Maybe<CompleteTodoError>;
};

export type Mutation = {
   __typename?: 'Mutation';
  addTodo: AddTodoResult;
  clearCompletedTodos: ClearCompletedTodosResult;
  completeTodo: CompleteTodoResult;
  completeAllTodos: CompleteAllTodosResult;
};


export type MutationAddTodoArgs = {
  text: Scalars['String'];
};


export type MutationCompleteTodoArgs = {
  id: Scalars['Int'];
};

export type PageInfo = {
   __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  todos: TodosConnection;
  todo: TodoResult;
};


export type QueryTodosArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTodoArgs = {
  id: Scalars['Int'];
};

export type Todo = {
   __typename?: 'Todo';
  id: Scalars['Int'];
  text: Scalars['String'];
  completed: Scalars['Boolean'];
};

export type TodoAlreadyCompletedError = {
   __typename?: 'TodoAlreadyCompletedError';
  message: Scalars['String'];
};

export type TodoNotFoundError = {
   __typename?: 'TodoNotFoundError';
  message: Scalars['String'];
};

export type TodoResult = Todo | TodoNotFoundError;

export type TodosConnection = {
   __typename?: 'TodosConnection';
  edges: Array<Maybe<TodosEdge>>;
  pageInfo: PageInfo;
};

export type TodosEdge = {
   __typename?: 'TodosEdge';
  node: Todo;
  cursor: Scalars['String'];
};

export type TodoValidationError = {
   __typename?: 'TodoValidationError';
  message: Scalars['String'];
};




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  TodosConnection: ResolverTypeWrapper<TodosConnection>,
  TodosEdge: ResolverTypeWrapper<TodosEdge>,
  Todo: ResolverTypeWrapper<Todo>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  TodoResult: ResolversTypes['Todo'] | ResolversTypes['TodoNotFoundError'],
  TodoNotFoundError: ResolverTypeWrapper<TodoNotFoundError>,
  Mutation: ResolverTypeWrapper<{}>,
  AddTodoResult: ResolverTypeWrapper<AddTodoResult>,
  TodoValidationError: ResolverTypeWrapper<TodoValidationError>,
  ClearCompletedTodosResult: ResolverTypeWrapper<ClearCompletedTodosResult>,
  CompleteTodoResult: ResolverTypeWrapper<Omit<CompleteTodoResult, 'error'> & { error?: Maybe<ResolversTypes['CompleteTodoError']> }>,
  CompleteTodoError: ResolversTypes['TodoNotFoundError'] | ResolversTypes['TodoAlreadyCompletedError'],
  TodoAlreadyCompletedError: ResolverTypeWrapper<TodoAlreadyCompletedError>,
  CompleteAllTodosResult: ResolverTypeWrapper<CompleteAllTodosResult>,
  CacheControlScope: CacheControlScope,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Int: Scalars['Int'],
  TodosConnection: TodosConnection,
  TodosEdge: TodosEdge,
  Todo: Todo,
  Boolean: Scalars['Boolean'],
  PageInfo: PageInfo,
  TodoResult: ResolversParentTypes['Todo'] | ResolversParentTypes['TodoNotFoundError'],
  TodoNotFoundError: TodoNotFoundError,
  Mutation: {},
  AddTodoResult: AddTodoResult,
  TodoValidationError: TodoValidationError,
  ClearCompletedTodosResult: ClearCompletedTodosResult,
  CompleteTodoResult: Omit<CompleteTodoResult, 'error'> & { error?: Maybe<ResolversParentTypes['CompleteTodoError']> },
  CompleteTodoError: ResolversParentTypes['TodoNotFoundError'] | ResolversParentTypes['TodoAlreadyCompletedError'],
  TodoAlreadyCompletedError: TodoAlreadyCompletedError,
  CompleteAllTodosResult: CompleteAllTodosResult,
  CacheControlScope: CacheControlScope,
  Upload: Scalars['Upload'],
};

export type AddTodoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddTodoResult'] = ResolversParentTypes['AddTodoResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['TodoValidationError']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ClearCompletedTodosResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClearCompletedTodosResult'] = ResolversParentTypes['ClearCompletedTodosResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  todos?: Resolver<Array<Maybe<ResolversTypes['Todo']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CompleteAllTodosResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompleteAllTodosResult'] = ResolversParentTypes['CompleteAllTodosResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  todos?: Resolver<Array<Maybe<ResolversTypes['Todo']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CompleteTodoErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompleteTodoError'] = ResolversParentTypes['CompleteTodoError']> = {
  __resolveType: TypeResolveFn<'TodoNotFoundError' | 'TodoAlreadyCompletedError', ParentType, ContextType>
};

export type CompleteTodoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompleteTodoResult'] = ResolversParentTypes['CompleteTodoResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['CompleteTodoError']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addTodo?: Resolver<ResolversTypes['AddTodoResult'], ParentType, ContextType, RequireFields<MutationAddTodoArgs, 'text'>>,
  clearCompletedTodos?: Resolver<ResolversTypes['ClearCompletedTodosResult'], ParentType, ContextType>,
  completeTodo?: Resolver<ResolversTypes['CompleteTodoResult'], ParentType, ContextType, RequireFields<MutationCompleteTodoArgs, 'id'>>,
  completeAllTodos?: Resolver<ResolversTypes['CompleteAllTodosResult'], ParentType, ContextType>,
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  startCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  endCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  todos?: Resolver<ResolversTypes['TodosConnection'], ParentType, ContextType, RequireFields<QueryTodosArgs, never>>,
  todo?: Resolver<ResolversTypes['TodoResult'], ParentType, ContextType, RequireFields<QueryTodoArgs, 'id'>>,
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  completed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TodoAlreadyCompletedErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoAlreadyCompletedError'] = ResolversParentTypes['TodoAlreadyCompletedError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TodoNotFoundErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoNotFoundError'] = ResolversParentTypes['TodoNotFoundError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TodoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoResult'] = ResolversParentTypes['TodoResult']> = {
  __resolveType: TypeResolveFn<'Todo' | 'TodoNotFoundError', ParentType, ContextType>
};

export type TodosConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodosConnection'] = ResolversParentTypes['TodosConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['TodosEdge']>>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TodosEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodosEdge'] = ResolversParentTypes['TodosEdge']> = {
  node?: Resolver<ResolversTypes['Todo'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TodoValidationErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoValidationError'] = ResolversParentTypes['TodoValidationError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type Resolvers<ContextType = any> = {
  AddTodoResult?: AddTodoResultResolvers<ContextType>,
  ClearCompletedTodosResult?: ClearCompletedTodosResultResolvers<ContextType>,
  CompleteAllTodosResult?: CompleteAllTodosResultResolvers<ContextType>,
  CompleteTodoError?: CompleteTodoErrorResolvers,
  CompleteTodoResult?: CompleteTodoResultResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  PageInfo?: PageInfoResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Todo?: TodoResolvers<ContextType>,
  TodoAlreadyCompletedError?: TodoAlreadyCompletedErrorResolvers<ContextType>,
  TodoNotFoundError?: TodoNotFoundErrorResolvers<ContextType>,
  TodoResult?: TodoResultResolvers,
  TodosConnection?: TodosConnectionResolvers<ContextType>,
  TodosEdge?: TodosEdgeResolvers<ContextType>,
  TodoValidationError?: TodoValidationErrorResolvers<ContextType>,
  Upload?: GraphQLScalarType,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
