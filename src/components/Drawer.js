import * as React from 'react';

export const Drawer = (props) => {
  return (
    <div className={props.open ? 'drawer' : 'drawer drawer-toggle'}>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  text-base-content ">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
