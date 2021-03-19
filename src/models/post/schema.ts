import mongoose from 'mongoose';
import { PostDocument } from '../../types';

const PostSchema = new mongoose.Schema(
  {
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    staticUrl: String,
    type: String,
    review: String,
    rating: String,
    caption: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      default: 'Drama',
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<PostDocument>('Post', PostSchema);
