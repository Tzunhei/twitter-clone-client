export type ApiHashtag = {
  tag: string;
};

export type ApiTweet = {
  hashtags: ApiHashtag[];

  post: string;

  likes: number;

  replies: number;

  retweets: number;
};

export type ApiUser = {
  tweets: ApiTweet[];

  email: string;

  password: string;

  username: string;

  first_name: string;

  last_name: string;

  biography: string;

  isActive: boolean;

  nb_followers: number;

  nb_following: number;
};
