import PhotoList from "@/components/PhotoList";

export default async function Home() {
  console.log(676);
  const response = await fetch(`http://localhost:3000/api/photos/`);
  const photos = await response.json();
  return (
    <div className="img-grid">
      <PhotoList photos={photos} />
    </div>
  );
}
