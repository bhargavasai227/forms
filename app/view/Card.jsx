export default function Card(p){
    const pro=p.pro;
return(
    <div key={pro._id.$oid} className="m-2 p-3 bg-gray-200 text-black rounded-md" >
        <h2>{pro.email}</h2>
        <h3>{pro.password}</h3>
        <p>{pro.discription}</p>
    </div>
)
}