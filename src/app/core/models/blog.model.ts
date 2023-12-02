import { Comment } from "./comment.model";

export type Blog = {
  id: number;
  title: string;
  shortText: string;
  mainText: string;
  author: {
    userName: string;
    profileUrl: string;
  };
  comments: Comment[];
  imageUrl: string;
  creationDate: string;
};
