import { Card } from '@/app/components/card';
import Link from 'next/link';
import React from 'react';

const Notifications = () => {
  return (
    <Card>
        <div>Notifications</div>
        <Link href={"/complex-dashboard/archived"} style={{fontSize:"20px", textDecoration:"underline", marginLeft:"12px"}}>Archived</Link>
    </Card>
  );
};

export default Notifications;