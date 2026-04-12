export default function Spinner({className}:{className:string}) {
  return (
    <div className="flex justify-center items-center animate-spin">
      <div className={`${className} w-6 h-6 border-3 border-neutral-600 rounded-full`}></div>
    </div>
  );
}
