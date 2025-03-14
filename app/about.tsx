import type { NextPage } from 'next';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">About Page</h1>
      <Link href="/">
        <a className="text-blue-600">Go back to home</a>
      </Link>
    </div>
  );
};

export default About;