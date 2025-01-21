"use client";

export default function ErrorPage({error}: {error: Error}) {
  console.error(error);

  return (
    <div>
      <h1 className="text-2xl text-red-500">Something went wrong, try again!</h1>
    </div>
  );
}
