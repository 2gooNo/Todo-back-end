export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateTodoInput = {
  status?: InputMaybe<Scalars['Boolean']['input']>;
  team?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTeam?: Maybe<Array<Maybe<Team>>>;
  addTodo?: Maybe<Array<Maybe<Todo>>>;
  deleteTodo?: Maybe<Array<Maybe<Todo>>>;
  markAsDone?: Maybe<Array<Maybe<Todo>>>;
};


export type MutationAddTeamArgs = {
  input?: InputMaybe<AddTeamInput>;
};


export type MutationAddTodoArgs = {
  input?: InputMaybe<CreateTodoInput>;
};


export type MutationDeleteTodoArgs = {
  input?: InputMaybe<DeleteTodoInput>;
};


export type MutationMarkAsDoneArgs = {
  input?: InputMaybe<MarkAsDoneInput>;
};

export type Query = {
  __typename?: 'Query';
  getAllTeam?: Maybe<Array<Maybe<Team>>>;
  getAllTodo?: Maybe<Array<Maybe<Todo>>>;
};

export type Team = {
  __typename?: 'Team';
  teamName?: Maybe<Scalars['String']['output']>;
};

export type Todo = {
  __typename?: 'Todo';
  _id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  team?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type AddTeamInput = {
  teamName?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteTodoInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MarkAsDoneInput = {
  todoId?: InputMaybe<Scalars['String']['input']>;
};


