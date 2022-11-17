

const Productos = () =>{
    return(
        <>
            <div className="card m-2 ">
                <div className="card-header text-bg-prymary mb-3">
                    Gestionar productos
                </div>
                <div className="card-body">

                    <div className="row">
                        <div className="col-8"><input text="search" className="form-control" placeholder="Search"/></div>
                        <div className="col-1"><button type="button" class="btn btn-outline-primary">Buscar</button></div>
                        <div className="col-3 text-end"><button type="button" class="btn btn-outline-primary">Nuevo</button></div>
                    </div>

                </div>
            </div>
        </>
    );
};


export default Productos;