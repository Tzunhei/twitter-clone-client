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

export type ApiSignUp = {
  email: string;
  password: string;
  username: string;
  first_name: string;
  last_name: string;
  biography: string;
};

export interface SignInResponse {
  /** The reason for why the login process has stopped */
  error: string | null;
  /** @see https://developer.mozilla.org/en-US/docs/Web/API/Response/status */
  status: number;
  /** @see https://developer.mozilla.org/en-US/docs/Web/API/Response/ok */
  ok: boolean;
}
