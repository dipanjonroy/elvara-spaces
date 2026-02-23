import Image from "next/image";

const CUSTOMERS_IMAGES = [
  {id:1, img:"/customers/Customers-1.jpg"},
  {id:2, img:"/customers/Customers-2.jpg"},
  {id:3, img:"/customers/Customers-3.jpg"},
  {id:4, img:"/customers/Customers-4.jpg"},
  {id:5, img:"/customers/Customers-5.jpg"},
]

export default function HappyCustomers() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex -space-x-3">
      {
        CUSTOMERS_IMAGES.map((item)=>(
          <div key={item.id} className="w-10 h-10 lg:w-12 lg:h-12 relative overflow-hidden rounded-full border border-(--white-border)">
            <Image
              src={item.img}
              alt="Happy customer image"
              fill
              sizes="(min-width:1024px) 48px, 40px"
              className="object-cover"
            />
          </div>
        ))
      }
    </div>
    <span className="text-sm lg:text-base text-(--background)">50+ Happy Customers</span>
    </div>
  );
}