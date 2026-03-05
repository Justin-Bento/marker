export default function Footer() {
  return (
    <footer className="dark:*:text-white">
      <div className="wrapper p-6 text-white flex items-center text-sm">
        <p>
          Built by{" "}
          <a href="" className="underline hover:text-gray-300">
            Justin Bento
          </a>
          . Source code on{" "}
          <a
            href="https://github.com/Justin-Bento/marker"
            className="underline hover:text-gray-300"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
