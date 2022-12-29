import React from 'react';
import { CountDown } from './Count';

const iconNew = (
  <span className="m-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  </span>
);
const iconDelete = (
  <span className="m-1 ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  </span>
);
const iconReset = (
  <span className="m-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </span>
);
const cardBodyAction = (
  <div className="card-body items-center text-center p-4">
    <div className=" justify-center py-4">
      <div className="stat-value text-primary py-2">Temp Mail</div>

      <input
        type="text"
        className="input input-bordered input-primary w-full max-w-xs"
      />
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary btn-">
        {iconNew}
        <span>Create </span>
      </button>

      <button className="btn btn-primary  btn-">
        {iconReset}
        <span>Reset </span>
      </button>
      <button className="btn btn-error">
        {iconDelete}
        <span>Delete </span>
      </button>
    </div>
    <div className="flex  justify-center  gap-4 text-center auto-cols-min my-3">
      <CountDown />
    </div>
  </div>
);

export const Card = (props) => {
  return (
    <div
      className={
        props.com === 'countdown'
          ? 'card w-120 bg-neutral  text-neutral-content p-3 m-3'
          : 'card w-120  bg-neutral text-dark-content p-3 m-3 '
      }
    >
      {cardBodyAction}
    </div>
  );
};
