import queryTwitterResolver from './resolvers/Query';
import Db, { DbTweet, DbUser } from './db';
import { Resolvers } from './resolvers-types.generated';
import tweetTwitterResolver from './resolvers/Tweet';
import userTwitterResolver from './resolvers/User';
import Mutation from './resolvers/Mutation';
import TwitterTrendResolver from './resolvers/Trend';
const resolvers: Resolvers<TwitterResolverContext> = {
  Query: queryTwitterResolver,
  Tweet: tweetTwitterResolver,
  User: userTwitterResolver,
  Mutation,
  Trend: TwitterTrendResolver,
};

export interface TwitterResolverContext {
  db: Db;
  dbTweetCache: Record<string, DbTweet>;
  dbUserCache: Record<string, DbUser>;
  dbTweetToFavoriteCountMap: Record<string, number>;
}

export default resolvers;
