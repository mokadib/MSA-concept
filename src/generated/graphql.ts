import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  UUID: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  body: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  law: Law;
  title: Scalars['String']['output'];
};

export type DeleteLawResponse = {
  __typename?: 'DeleteLawResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type Law = {
  __typename?: 'Law';
  articles: Array<Article>;
  id: Scalars['UUID']['output'];
  published: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: Article;
  createLaw: Law;
  deleteArticle: DeleteLawResponse;
  deleteLaw: DeleteLawResponse;
  updateArticle: UpdatedResponse;
  updateLaw: UpdatedResponse;
};


export type MutationCreateArticleArgs = {
  body: Scalars['String']['input'];
  lawId: Scalars['UUID']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateLawArgs = {
  published: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};


export type MutationDeleteArticleArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteLawArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationUpdateArticleArgs = {
  body: Scalars['String']['input'];
  id: Scalars['UUID']['input'];
  lawId: Scalars['UUID']['input'];
  title: Scalars['String']['input'];
};


export type MutationUpdateLawArgs = {
  id: Scalars['UUID']['input'];
  published: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  articleById: Article;
  articles: Array<Article>;
  lawById: Law;
  laws: Array<Law>;
};


export type QueryArticleByIdArgs = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryLawByIdArgs = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type UpdatedResponse = {
  __typename?: 'UpdatedResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type UpdatedResponse = {
  __typename?: 'updatedResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  Article: ResolverTypeWrapper<Article>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DeleteLawResponse: ResolverTypeWrapper<DeleteLawResponse>;
  Law: ResolverTypeWrapper<Law>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
  UpdatedResponse: ResolverTypeWrapper<UpdatedResponse>;
  updatedResponse: ResolverTypeWrapper<UpdatedResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Article: Article;
  Boolean: Scalars['Boolean']['output'];
  DeleteLawResponse: DeleteLawResponse;
  Law: Law;
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  UUID: Scalars['UUID']['output'];
  UpdatedResponse: UpdatedResponse;
  updatedResponse: UpdatedResponse;
};

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  law?: Resolver<ResolversTypes['Law'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteLawResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteLawResponse'] = ResolversParentTypes['DeleteLawResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LawResolvers<ContextType = any, ParentType extends ResolversParentTypes['Law'] = ResolversParentTypes['Law']> = {
  articles?: Resolver<Array<ResolversTypes['Article']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  published?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createArticle?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<MutationCreateArticleArgs, 'body' | 'lawId' | 'title'>>;
  createLaw?: Resolver<ResolversTypes['Law'], ParentType, ContextType, RequireFields<MutationCreateLawArgs, 'published' | 'title'>>;
  deleteArticle?: Resolver<ResolversTypes['DeleteLawResponse'], ParentType, ContextType, RequireFields<MutationDeleteArticleArgs, 'id'>>;
  deleteLaw?: Resolver<ResolversTypes['DeleteLawResponse'], ParentType, ContextType, RequireFields<MutationDeleteLawArgs, 'id'>>;
  updateArticle?: Resolver<ResolversTypes['UpdatedResponse'], ParentType, ContextType, RequireFields<MutationUpdateArticleArgs, 'body' | 'id' | 'lawId' | 'title'>>;
  updateLaw?: Resolver<ResolversTypes['updatedResponse'], ParentType, ContextType, RequireFields<MutationUpdateLawArgs, 'id' | 'published' | 'title'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  articleById?: Resolver<ResolversTypes['Article'], ParentType, ContextType, Partial<QueryArticleByIdArgs>>;
  articles?: Resolver<Array<ResolversTypes['Article']>, ParentType, ContextType>;
  lawById?: Resolver<ResolversTypes['Law'], ParentType, ContextType, Partial<QueryLawByIdArgs>>;
  laws?: Resolver<Array<ResolversTypes['Law']>, ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type UpdatedResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdatedResponse'] = ResolversParentTypes['UpdatedResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatedResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updatedResponse'] = ResolversParentTypes['updatedResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Article?: ArticleResolvers<ContextType>;
  DeleteLawResponse?: DeleteLawResponseResolvers<ContextType>;
  Law?: LawResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  UpdatedResponse?: UpdatedResponseResolvers<ContextType>;
  updatedResponse?: UpdatedResponseResolvers<ContextType>;
};

