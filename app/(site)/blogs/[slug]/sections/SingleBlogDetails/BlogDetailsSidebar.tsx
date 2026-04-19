
import SocialShareButtons from "./SocialShareButtons";

export default function BlogDetailsSidebar() {
  
  return (
    <div className=" w-full space-y-6">
      {/* Author name */}
      <div>
        <p className="text-base lg:text-lg opacity-70 ">Written by</p>
        <p className="text-base lg:text-lg font-semibold">Jenny Wilson</p>
      </div>
      
      {/* Published date */}
      <div>
        <p className="text-base lg:text-lg opacity-70 ">Posted on</p>
        <p className="text-base lg:text-lg font-semibold">December 13, 2025</p>
      </div>

      {/* Published date */}
      <div className="space-y-1.5">
        <p className="text-base lg:text-lg opacity-70 ">Share</p>
        <SocialShareButtons/>
      </div>
    </div>
  );
}