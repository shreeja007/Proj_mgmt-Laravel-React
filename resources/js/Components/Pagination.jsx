// import React from "react";

// export default function Pagination({ pagination }) {
//   console.log(pagination);
//   return (
//     <nav className="text-center mt-4 justify-center flex ">
//       <div style={{ display: "flex ", gap: 10 }}>
//         {pagination.map((paginationItem, index) => {
//           const { url, label, active } = paginationItem;
//           if (index === 0 || index === pagination.length - 1) {
//             return (
//               <a href={url} className={`${url ? "hover:text-cyan-300" : "text-gray-500 "}`}>
//                 <div dangerouslySetInnerHTML={{ __html: label }} />
//               </a>
//             );
//           }

//           return (
//             <a
//               key={index}
//               href={url}
//               className={`text-lg ${
//                 active && url
//                   ? "text-cyan-900 border px-2 border-cyan-900 hover:border-cyan-300 hover:text-cyan-300 rounded-md"
//                   : url
//                   ? "hover:border px-2 hover:border-cyan-300 hover:text-cyan-300 rounded-md"
//                   : "hover"
//               } `}
//             >
//               {label}
//             </a>
//           );
//         })}
//       </div>
//     </nav>
//   );
// }


import { Link } from '@inertiajs/react'

export default function Pagination({pagination}) {
  return (
    <nav className='text-center mt-4'>
      {
        pagination.map((pagination)=>(
          <Link
          preserveScroll
          href={pagination.url || ""}
          key={pagination.label}
          className={
            "inline-block py-2 px-3 rounded-lg text-gray-200 text-xs " +
            (pagination.active? "bg-gray-950 " : " ") +
            (!pagination.url ? "!text-gray-500 cursor-not-allowed " : "hover:bg-gray-950")
          }
          dangerouslySetInnerHTML={{__html: pagination.label}}></Link>
        ))
      }
    </nav>
  )
}
