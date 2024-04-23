



const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')



// resolvers
import { resolvers } from "./typeDefsAndResolvers/resolvers"

// typeDefs
import { typeDefs } from './typeDefsAndResolvers/typeDefs'







const server = new ApolloServer({
  typeDefs,
  resolvers,
}

)


if (process.env.NODE_ENV === "production") {
  // set static folder

}

// production or development
const PORT = process.env.PORT || 4000


startStandaloneServer(server, {
  listen: { port: PORT },
}).then(({ url }: {url: string}) => {
  console.log(`Server ready at ${url}`)
})