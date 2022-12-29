import * as React from 'react';
import { Actions } from './Actions';

const NewMail=()=>{
  const options = {
    method: 'POST',
    url: 'https://temp-mail44.p.rapidapi.com/api/v3/email/new',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'abdb0c3473msh0903ecda1c147bep155ce2jsn352e3e918846',
      'X-RapidAPI-Host': 'temp-mail44.p.rapidapi.com'
    },
    data: '{"key1":"value","key2":"value"}'
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  
}


export const List = () => {
  return (
    <div className="flex justify-center   w-full py-8 px-8">
      <div className="flex-auto w-64">
        <table className=" table w-full">
          <thead className="tableheadrer">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Mail</th>
              <th>Title</th>
              <th>Message</th>
              <th style={{ textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.icons8.com/cotton/100/null/correspondence.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th style={{ textAlign: 'center' }}>
                <Actions />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
