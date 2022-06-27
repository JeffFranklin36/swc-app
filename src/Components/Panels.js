export default function Panels({ panels }) {
 const display = panels.map((p, i) => {
     return <li key={i}>{p}</li>
 })
 return (
     <div>
         <div className="packages">
             <div className="packagesHeader">
                 <h1>Our Panels</h1>
                 <ul>
                     {display}
                 </ul>
             </div>
             
         </div>
     </div>
 )
}