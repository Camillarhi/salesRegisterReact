import React from 'react';

export default function Dashboard() {
    return (
        <>
            <div className="row">
                <div className="col-sm-4 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h5>Revenue</h5>
                            <div className="row">
                                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                                        <h2 className="mb-0">$32123</h2>
                                        <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                                    </div>
                                    <h6 className="text-muted font-weight-normal">11.38% Since last month</h6>
                                </div>
                                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                    <i className="icon-lg mdi mdi-codepen text-primary ml-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h5>Sales</h5>
                            <div className="row">
                                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                                        <h2 className="mb-0">$45850</h2>
                                        <p className="text-success ml-2 mb-0 font-weight-medium">+8.3%</p>
                                    </div>
                                    <h6 className="text-muted font-weight-normal"> 9.61% Since last month</h6>
                                </div>
                                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                    <i className="icon-lg mdi mdi-wallet-travel text-danger ml-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h5>Purchase</h5>
                            <div className="row">
                                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                                        <h2 className="mb-0">$2039</h2>
                                        <p className="text-danger ml-2 mb-0 font-weight-medium">-2.1% </p>
                                    </div>
                                    <h6 className="text-muted font-weight-normal">2.27% Since last month</h6>
                                </div>
                                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                    <i className="icon-lg mdi mdi-monitor text-success ml-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-12 col-xl-4 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">To do list</h4>
                            <div className="add-items d-flex">
                                <input type="text" className="form-control todo-list-input" placeholder="enter task.." />
                                <button className="add btn btn-primary todo-list-add-btn">Add</button>
                            </div>
                            <div className="list-wrapper">
                                <ul className="d-flex flex-column-reverse text-white todo-list todo-list-custom">
                                    <li>
                                        <div className="form-check form-check-primary">
                                            <label className="form-check-label">
                                                <input className="checkbox" type="checkbox" /> Create invoice <i className="input-helper" /></label>
                                        </div>
                                        <i className="remove mdi mdi-close-box" />
                                    </li>
                                    <li>
                                        <div className="form-check form-check-primary">
                                            <label className="form-check-label">
                                                <input className="checkbox" type="checkbox" /> Meeting with Alita <i className="input-helper" /></label>
                                        </div>
                                        <i className="remove mdi mdi-close-box" />
                                    </li>
                                    <li className="completed">
                                        <div className="form-check form-check-primary">
                                            <label className="form-check-label">
                                                <input className="checkbox" type="checkbox" defaultChecked /> Prepare for presentation <i className="input-helper" /></label>
                                        </div>
                                        <i className="remove mdi mdi-close-box" />
                                    </li>
                                    <li>
                                        <div className="form-check form-check-primary">
                                            <label className="form-check-label">
                                                <input className="checkbox" type="checkbox" /> Plan weekend outing <i className="input-helper" /></label>
                                        </div>
                                        <i className="remove mdi mdi-close-box" />
                                    </li>
                                    <li>
                                        <div className="form-check form-check-primary">
                                            <label className="form-check-label">
                                                <input className="checkbox" type="checkbox" /> Pick up kids from school <i className="input-helper" /></label>
                                        </div>
                                        <i className="remove mdi mdi-close-box" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Line chart</h4>
                            <canvas id="lineChart" style={{ height: 250 }} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Bar chart</h4>
                            <canvas id="barChart" style={{ height: 230 }} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
