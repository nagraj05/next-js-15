import { Card } from '@/app/components/card';
import Link from 'next/link';
import React from 'react';

const Users = () => {
  return (
    <Card>Users
        <Link href={"/complex-dashboard/users-list"} style={{fontSize:"20px", textDecoration:"underline", marginLeft:"12px"}}>list of users</Link>
    </Card>
  );
};

export default Users;