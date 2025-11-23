import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import { useState } from "react";

interface DesireCardProps {
  desire: {
    id: string;
    text: string;
    author: string;
    avatar: string;
    likes: number;
    comments: number;
    color: string;
    textColor: string;
  };
}

export function DesireCard({ desire }: DesireCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(desire.likes);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <div className="relative">
      {/* Main content area */}
      <div className="px-4 py-6">
        {/* Desire text - takes up majority of space */}
        <div className="mb-4">
          <h2 
            className="leading-tight text-left"
            style={{ 
              fontSize: '4.5rem', 
              fontWeight: 900, 
              letterSpacing: '-0.03em',
              color: desire.textColor
            }}
          >
            {desire.text}
          </h2>
        </div>

        {/* Bottom section with author and actions */}
        <div className="flex items-center justify-between">
          <span className="text-sm" style={{ color: '#ffffff' }}>by {desire.author}</span>
          
          <div className="flex items-center gap-6">
            <button
              onClick={handleLike}
              className="flex items-center gap-2 transition-colors"
              style={{ color: liked ? '#ff006e' : 'rgba(255, 255, 255, 0.6)' }}
            >
              <Heart 
                size={20} 
                fill={liked ? '#ff006e' : "none"} 
                className="transition-all"
              />
              <span className="text-sm">{likeCount}</span>
            </button>
            <button 
              className="flex items-center gap-2 transition-colors"
              style={{ color: desire.textColor }}
            >
              <MessageCircle size={20} />
              <span className="text-sm">{desire.comments}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}