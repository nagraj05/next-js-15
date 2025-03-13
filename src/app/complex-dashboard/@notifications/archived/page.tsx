import { Card } from '@/app/components/card';
import Link from 'next/link';
import React from 'react';

const Notifications = () => {
  return (
    <Card>
        {/* <div>Archived Notifications</div>  */}
        <p>Welcome to archived notifications</p>
        <Link href={"/complex-dashboard"} style={{fontSize:"20px", textDecoration:"underline", marginLeft:"12px"}}>Default</Link>
    </Card>
  );
};

export default Notifications;