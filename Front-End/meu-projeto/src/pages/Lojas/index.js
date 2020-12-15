import './index.css';

export default function Lojas(props) {
    return (
        <div className="container-fluid px-auto"id="align">
           <div className="card" id="card">
               <img className="card-img-top" src='https://www.melhoresdestinos.com.br/wp-content/uploads/2020/07/avenida-paulista-turismo.jpg'id="lojas" ></img>
               <div className="card-body">
                   <h3 className="card-title">Avenida Paulista, 975</h3>
                   <p className="card-text">Terceiro andar,  Jardins (99)9898-5858 </p>
               </div>
           </div>
           <div className="card" id="card">
               <img className="card-img-top" src='https://lh3.googleusercontent.com/gBSE3ILcMFV5nt6eQEWPVm_qiK-fyq2xxMAR1NPLgen0qrxE8K2Ch4hn3J0oHjG8mnkbXBrGl3SWpmwMD1uJyFJkaQ=w280-h280-n-k-no-nu-pa'id="lojas" ></img>
               <div className="card-body">
                   <h3 className="card-title">Avenida P. vargas, 5000</h3>
                   <p className="card-text">Décimo andar, Centro (66)9696-9696 </p>
               </div>
           </div>
           <div className="card" id="card">
               <img className="card-img-top" src='https://4.bp.blogspot.com/-YPQkirBzvqA/XLyu4UpI8AI/AAAAAAAA1rI/TNHSzYe1QUoiQ330Z0tV1JU_n72OXvhvACLcBGAs/s1600/20190412_123300.jpg'id="lojas" ></img>
               <div className="card-body">
                   <h3 className="card-title">Rua major joão, 242</h3>
                   <p className="card-text">Vila Mariana, (12)1234-5698</p>
               </div>
           </div>
           
        </div>
    )
}