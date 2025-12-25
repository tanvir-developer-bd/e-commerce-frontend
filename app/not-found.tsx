'use client';

import { Result, Button } from 'antd';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Result
        status="404"
        title="404"
        subTitle="Oops! The page you are looking for does not exist."
        extra={
          <Link href="/">
            <Button
              type="primary"
              style={{
                backgroundColor: '#3bb77e',
                borderColor: '#3bb77e',
                fontWeight: 600,
              }}
            >
              Go Home
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFound;
