import Link from 'next/link';
import React from 'react';

const F1 = () => {
  return (
    <div>
      <h1>F1</h1>
      <Link href={"/f1/f2"}>F2</Link>
      <Link href={"/f3"}>F3</Link>
    </div>
  );
};

export default F1;