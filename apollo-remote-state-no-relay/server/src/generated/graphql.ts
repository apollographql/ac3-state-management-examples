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

export type DeleteTodoResult = {
   __typename?: 'DeleteTodoResult';
  success: Scalars['Boolean'];
  todo?: Maybe<Todo>;
  error?: Maybe<TodoNotFoundError>;
};

export type EditTodoError = TodoNotFoundError | TodoValidationError;

export type EditTodoResult = {
   __typename?: 'EditTodoResult';
  success: Scalars['Boolean'];
  todo?: Maybe<Todo>;
  error?: Maybe<EditTodoError>;
};

export type Mutation = {
   __typename?: 'Mutation';
  addTodo: AddTodoResult;
  clearCompletedTodos: ClearCompletedTodosResult;
  completeTodo: CompleteTodoResult;
  completeAllTodos: CompleteAllTodosResult;
  deleteTodo: DeleteTodoResult;
  editTodo: EditTodoResult;
};


export type MutationAddTodoArgs = {
  text: Scalars['String'];
};


export type MutationCompleteTodoArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['Int'];
};


export type MutationEditTodoArgs = {
  id: Scalars['Int'];
  text: Scalars['String'];
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
  todos: Array<Maybe<Todo>>;
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
  Todo: ResolverTypeWrapper<Todo>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
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
  DeleteTodoResult: ResolverTypeWrapper<DeleteTodoResult>,
  EditTodoResult: ResolverTypeWrapper<Omit<EditTodoResult, 'error'> & { error?: Maybe<ResolversTypes['EditTodoError']> }>,
  EditTodoError: ResolversTypes['TodoNotFoundError'] | ResolversTypes['TodoValidationError'],
  PageInfo: ResolverTypeWrapper<PageInfo>,
  CacheControlScope: CacheControlScope,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Int: Scalars['Int'],
  Todo: Todo,
  Boolean: Scalars['Boolean'],
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
  DeleteTodoResult: DeleteTodoResult,
  EditTodoResult: Omit<EditTodoResult, 'error'> & { error?: Maybe<ResolversParentTypes['EditTodoError']> },
  EditTodoError: ResolversParentTypes['TodoNotFoundError'] | ResolversParentTypes['TodoValidationError'],
  PageInfo: PageInfo,
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

export type DeleteTodoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTodoResult'] = ResolversParentTypes['DeleteTodoResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['TodoNotFoundError']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type EditTodoErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditTodoError'] = ResolversParentTypes['EditTodoError']> = {
  __resolveType: TypeResolveFn<'TodoNotFoundError' | 'TodoValidationError', ParentType, ContextType>
};

export type EditTodoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditTodoResult'] = ResolversParentTypes['EditTodoResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['EditTodoError']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addTodo?: Resolver<ResolversTypes['AddTodoResult'], ParentType, ContextType, RequireFields<MutationAddTodoArgs, 'text'>>,
  clearCompletedTodos?: Resolver<ResolversTypes['ClearCompletedTodosResult'], ParentType, ContextType>,
  completeTodo?: Resolver<ResolversTypes['CompleteTodoResult'], ParentType, ContextType, RequireFields<MutationCompleteTodoArgs, 'id'>>,
  completeAllTodos?: Resolver<ResolversTypes['CompleteAllTodosResult'], ParentType, ContextType>,
  deleteTodo?: Resolver<ResolversTypes['DeleteTodoResult'], ParentType, ContextType, RequireFields<MutationDeleteTodoArgs, 'id'>>,
  editTodo?: Resolver<ResolversTypes['EditTodoResult'], ParentType, ContextType, RequireFields<MutationEditTodoArgs, 'id' | 'text'>>,
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  startCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  endCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  todos?: Resolver<Array<Maybe<ResolversTypes['Todo']>>, ParentType, ContextType, RequireFields<QueryTodosArgs, never>>,
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
  DeleteTodoResult?: DeleteTodoResultResolvers<ContextType>,
  EditTodoError?: EditTodoErrorResolvers,
  EditTodoResult?: EditTodoResultResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  PageInfo?: PageInfoResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Todo?: TodoResolvers<ContextType>,
  TodoAlreadyCompletedError?: TodoAlreadyCompletedErrorResolvers<ContextType>,
  TodoNotFoundError?: TodoNotFoundErrorResolvers<ContextType>,
  TodoResult?: TodoResultResolvers,
  TodoValidationError?: TodoValidationErrorResolvers<ContextType>,
  Upload?: GraphQLScalarType,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
