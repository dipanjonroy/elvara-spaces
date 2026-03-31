import Skeleton from "../shared/Skeleton";

export default function SingleProjectSkeleton() {
  return (
    <div>
      <Skeleton className="w-full h-svh" />

      <div className="pt-20 md:pt-25 lg:pt-30 bg-(--background) z-4 relative">
        <div className="container mx-auto">
          <div className="w-full space-y-4">
            <div className="space-y-3">
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-full h-4" />
            </div>

            <div className={`py-10 lg:py-20 space-y-10`}>
              <div className="space-y-3">
                <Skeleton className="w-40 h-8 rounded-full" />
                <Skeleton className="w-full max-w-160 h-8" />
                <Skeleton className="w-full h-20" />
              </div>

              <Skeleton className="w-full aspect-12/8 lg:aspect-12/6 xl:aspect-12/5 " />
            </div>

            <span className="block h-px w-full bg-(--foreground)" />

            <div className={`py-10 lg:py-20 space-y-10`}>
              <div className="space-y-3">
                <Skeleton className="w-40 h-8 rounded-full" />
                <Skeleton className="w-full max-w-160 h-8" />
                <Skeleton className="w-full h-20" />
              </div>

              <Skeleton className="w-full aspect-12/8 lg:aspect-12/6 xl:aspect-12/5 " />
            </div>

            <span className="block h-px w-full bg-(--foreground)" />

            <div className={`py-10 lg:py-20 space-y-10`}>
              <div className="space-y-3">
                <Skeleton className="w-40 h-8 rounded-full" />
                <Skeleton className="w-full max-w-160 h-8" />
                <Skeleton className="w-full h-20" />
              </div>

              <Skeleton className="w-full aspect-12/8 lg:aspect-12/6 xl:aspect-12/5 " />
            </div>

            <span className="block h-px w-full bg-(--foreground)" />

            <div className={`py-10 lg:py-20 space-y-10`}>
              <div className="space-y-3">
                <Skeleton className="w-40 h-8 rounded-full" />
                <Skeleton className="w-full max-w-160 h-8" />
                <Skeleton className="w-full h-20" />
              </div>

              <Skeleton className="w-full aspect-12/8 lg:aspect-12/6 xl:aspect-12/5 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
