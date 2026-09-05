import { SectionHeader } from "./SectionHeader";
import { PostCard } from "./PostCard";
import { ComingUpModule } from "./ComingUpModule";

export interface Post {
  imageUrl: string;
  category: string;
  title: string;
}

export interface ComingUpItem {
  imageUrl: string;
  date: string;
  guestName: string;
}

interface ContentSectionProps {
  title: string;
  featuredPost: Post;
  posts: Post[];
  comingUpItems: ComingUpItem[];
  adImageUrl?: string;
  onSeeMoreClick?: () => void;
}

export function ContentSection({ 
  title, 
  featuredPost, 
  posts, 
  comingUpItems,
  adImageUrl,
  onSeeMoreClick 
}: ContentSectionProps) {
  return (
    <div className="bg-white content-start flex flex-wrap gap-y-[68px] isolate items-start justify-center relative w-full py-[40px] sm:py-[60px] px-[16px] sm:px-[40px]">
      <div className="content-start flex flex-[1_0_0] flex-wrap gap-[44px] items-start justify-center min-h-px min-w-px relative z-[1] max-w-[1200px] mx-auto">
        {/* Main Content Area */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start max-w-[750px] min-h-px min-w-[364px] relative">
          {/* Section Header */}
          <SectionHeader 
            title={title} 
            showSeeMore={true}
            onSeeMoreClick={onSeeMoreClick}
          />
          
          {/* Featured Post */}
          <PostCard
            imageUrl={featuredPost.imageUrl}
            category={featuredPost.category}
            title={featuredPost.title}
            size="large"
          />
          
          {/* Grid of Posts */}
          <div className="content-start flex flex-wrap gap-y-[24px] items-start justify-between relative shrink-0 w-full">
            {posts.map((post, index) => (
              <PostCard
                key={index}
                imageUrl={post.imageUrl}
                category={post.category}
                title={post.title}
                size="regular"
              />
            ))}
          </div>
        </div>
        
        {/* Coming Up Sidebar */}
        <ComingUpModule 
          items={comingUpItems}
          adImageUrl={adImageUrl}
        />
      </div>
    </div>
  );
}
