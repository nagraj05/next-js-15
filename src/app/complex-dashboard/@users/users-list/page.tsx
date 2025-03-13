import { Card } from '@/app/components/card';
import Link from 'next/link';
import React from 'react';

const Users = () => {
  return (
    <Card>
        <div>List of users</div>
        <Link href={"/complex-dashboard"} style={{fontSize:"20px", textDecoration:"underline", marginLeft:"12px"}}>Back</Link>
    </Card>
  );
};

export default Users;