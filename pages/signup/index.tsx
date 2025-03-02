import Link from "next/link";

export default function SignUp() {
  return (
    <div>
      <div className="ml-2 mt-1 fixed w-full">
      <Link href="/">
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          stroke="#ffffff">
          <g
            id="SVGRepo_bgCarrier"
            stroke-width="0">
          </g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round">
          </g>
          <g
            id="SVGRepo_iconCarrier">
            <path
              fill="#ffffff"
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            >
            </path>
            <path
              fill="#ffffff"
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            >
            </path>
          </g>
        </svg>
      </Link>
      </div>
      <div className="flex flex-col items-center justify-center mx-8 max-h-screen">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeo7bzBDpO3BJwXsTP3l0qJCrVt9LFZ_y-pn5GKJ8B6-1RxyA/viewform?embedded=true"
          className="h-screen w-screen overflow-hidden overflow-y-hidden mt-16"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}>
          Loading...
        </iframe>
      </div>
    </div>
  );
}