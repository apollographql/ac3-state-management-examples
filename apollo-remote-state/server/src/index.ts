
import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'
import { resolvers } from './resolvers'
import { todosRepo } from './modules/todos/repos';
import { TodoRepo } from './modules/todos/repos/todoRepo';

export type Context = { todosRepo: TodoRepo }

const server = new ApolloServer({
  context: () => ({ todosRepo } as Context),
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});