export default function Footer() {
  return (
    <footer className="bg-gray-700 w-full px-4">
      <div className="flex items-center justify-between my-2 text-xs">
        <p className="text-green-500">&copy; {(new Date().getFullYear())} Built by Ty Crowther</p>
        <p className="inline-flex text-green-500 px-2"></p>
        <div className="flex items-center">
          <a href="mailto:tyler.crowther@byu.edu">
            <svg
              fill="none"
              className="h-5 w-5 text-green-500 mr-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/tyler-crowther/">
            <svg
              className="h-5 w-5 fill-current text-green-500 mr-6"
              viewBox="0 0 512 512"
            >
              <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
