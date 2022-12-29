import * as React from 'react';
import { Card } from './Card';
import { Stat } from './Stat';
export const TopBar = (props) => {
  return (
    <>
      <div className="flex justify-center p-2  "></div>
      <div
        className="flex justify-center py-8"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="flex justify-center w-full">
          <Card />
        </div>
      </div>
    </>
  );
};
