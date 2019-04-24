import React from 'react'

const ScratchCardDesk = () => {
    return (
        <div className="container startTransaction">
            <h2>Scratch card desk</h2>
            <p className="text-info">Transaction form</p>
            <form action="">
                <div className="form-group">
                    <label for="opName">Operators Name</label>
                    <input type="text" className="form-control" placeholder="Operators Name" value="Operators Name (fetched)" id="opName"
                         readOnly />
                </div>
                <div className="form-group">
                    <label for="transactDate">Transaction date</label>
                    <input type="text" className="form-control" placeholder="Transaction date" value="Transaction date (fetched)"
                        id="transactDate"  readOnly/>
                </div>
                <div className="form-group">
                    <label for="licNum">License number</label>
                    <input type="text" className="form-control" placeholder="License number" id="licNum" />
                </div>
                <div className="form-group">
                    <label for="venName">Vender's name</label>
                    <input type="text" className="form-control" placeholder="Vender's name"
                        value="Vender's name (fetched from Vendor)" id="venName"  readOnly/>
                </div>
                <div className="venPicture-wrap">
                    <img src="assets/img/cUP5Fna0wJc.jpg" className="" alt="Vendor's picture (fetched from Vendor)" width="250px"/>
                    <span>Vendor's picture</span>
                </div>
                <div className="form-group">
                    <label for="foodGroup">Food group</label>
                    <input type="text" className="form-control" placeholder="Food group" value="Food group (fetched from Vendor)"
                        id="foodGroup"  readOnly/>
                </div>
                <div className="form-group">
                    <label for="cards_quantity">Quantity of cards</label>
                    <input type="text" className="form-control" placeholder="Quantity of cards" id="cards_quantity" />
                </div>
                <div className="form-group">
                    <label for="serial">First card's serial no.</label>
                    <input type="text" className="form-control" placeholder="First card's serial no." id="serial" />
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label for="1card_cost">Cost per card</label>
                            <input type="text" className="form-control"  placeholder="Cost per card" id="1card_cost"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label for="currency">Currency</label>
                            <select className="form-control"  id="currency">
                                <option value="">$</option>
                                <option value="">€</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="totalSum">Total cost</label>
                    <input type="text" className="form-control" placeholder="0$" id="totalSum" disabled />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ScratchCardDesk