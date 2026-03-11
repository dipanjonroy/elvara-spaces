import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Review {
  id: number;
  clientName: string;
  address: string;
  review: string;
  rating: number;
  image: string;
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-full p-6 bg-gray-200 rounded-2xl my-3">
      <div className="w-full">
        <div className="flex gap-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <p className="my-6">{review.review}</p>

        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-full relative overflow-hidden">
            <Image
              src={review.image}
              alt="Reviewer Image"
              fill
              className="object-cover"
            />
          </div>

          <div className="">
            <h5 className="font-bold text-lg leading-tight">
              {review.clientName}
            </h5>
            <p className="text-sm opacity-70">{review.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
